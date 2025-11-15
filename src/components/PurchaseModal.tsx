import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import SuccessErrorModal from "@/components/SuccessErrorModal";

export default function PurchaseModal({ isOpen, onClose, beat }) {
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  if (!isOpen) return null;

  const validateForm = () => {
    if (!buyerName.trim()) return "Name is required.";
    if (!buyerEmail.trim()) return "Email is required.";
    if (!buyerPhone.trim()) return "Phone number is required.";

    // Basic email check
    if (!/^\S+@\S+\.\S+$/.test(buyerEmail))
      return "Enter a valid email.";

    // Basic phone check (10 digits)
    if (!/^\d{10}$/.test(buyerPhone))
      return "Enter a valid 10-digit phone number.";

    return "";
  };

  const handlePurchase = async () => {
    const error = validateForm();
    if (error) {
      setErrorMsg(error);
      return;
    }
    setErrorMsg("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/beats/${beat.id}/purchase`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            buyerName,
            buyerEmail,
            buyerPhone
          })
        }
      );

      if (res.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 900);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md select-text">
          <DialogHeader>
            <DialogTitle>Buy {beat.title}</DialogTitle>
            <DialogDescription>
              Please fill in all details. Our team will contact you soon.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-4">
            {/* Error Message */}
            {errorMsg && (
              <p className="text-red-500 text-sm font-medium">{errorMsg}</p>
            )}

            {/* Name */}
            <div className="space-y-2">
              <Label>Your Name *</Label>
              <Input
                required
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                placeholder="e.g: John Doe"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label>Email *</Label>
              <Input
                type="email"
                required
                value={buyerEmail}
                onChange={(e) => setBuyerEmail(e.target.value)}
                placeholder="example@mail.com"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label>Phone Number *</Label>
              <Input
                required
                value={buyerPhone}
                onChange={(e) => setBuyerPhone(e.target.value)}
                placeholder="10-digit phone number"
              />
            </div>

            <Button className="w-full" onClick={handlePurchase}>
              Confirm Purchase — ₹{beat.price}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {status && (
        <SuccessErrorModal
          open={true}
          success={status === "success"}
          message={
            status === "success"
              ? "Form submitted successfully!"
              : "Submission failed!"
          }
          onClose={() => setStatus(null)}
        />
      )}
    </>
  );
}
