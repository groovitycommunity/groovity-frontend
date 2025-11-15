import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import SuccessErrorModal from "./SuccessErrorModal";

export default function EventRegistrationModal({
  isOpen,
  onClose,
  eventId,
  eventTitle,
  eventType,
  price,
  upi_id,
  account_number,
  ifsc,
  qr_url,
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reg_number: "",
    utr: "",
    ss: null as File | null,
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({
    open: false,
    success: false,
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Required validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.reg_number ||
      (eventType === "paid" && !formData.utr) ||
      (eventType === "paid" && !formData.ss)
    ) {
      setResult({
        open: true,
        success: false,
        message: "Please fill all required fields.",
      });
      return;
    }

    try {
      setLoading(true);

      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("phone", formData.phone);
      body.append("reg_number", formData.reg_number);
      body.append("utr", formData.utr);
      body.append("event_id", eventId);

      if (formData.ss) body.append("payment_ss", formData.ss);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/registrations`, {
        method: "POST",
        body,
      });

      const json = await res.json();

      if (!res.ok) {
        setResult({ open: true, success: false, message: json.message });
      } else {
        setResult({
          open: true,
          success: true,
          message: "Registration Successful!",
        });

        setTimeout(() => onClose(), 900);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent
          className={`${
            eventType === "paid" ? "max-w-3xl" : "sm:max-w-md"
          } p-0`}
        >
          {/* WRAPPER THAT MAKES MODAL SCROLLABLE */}
          <div className="max-h-[85vh] overflow-y-auto p-6 space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Register for {eventTitle}
              </DialogTitle>
              <DialogDescription>
                {eventType === "free"
                  ? "This is a free event."
                  : "Complete the payment and upload the payment screenshot."}
              </DialogDescription>
            </DialogHeader>

            <div
              className={`grid gap-8 ${
                eventType === "paid" ? "grid-cols-1 md:grid-cols-2" : ""
              }`}
            >
              {/* LEFT : PAYMENT DETAILS */}
              {eventType === "paid" && (
                <div className="space-y-4 bg-card/40 p-5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-lg">Payment Details</h3>

                  <div className="text-sm text-muted-foreground space-y-1">
                    <p><b>Amount:</b> ₹{price ?? "—"}</p>
                    <p><b>Account No:</b> {account_number ?? "—"}</p>
                    <p><b>IFSC:</b> {ifsc ?? "—"}</p>
                    <p><b>UPI ID:</b> {upi_id ?? "—"}</p>
                  </div>

                  {qr_url ? (
                    <img
                      src={qr_url}
                      className="w-48 h-48 rounded-lg border mx-auto shadow-md"
                      alt="QR Code"
                    />
                  ) : (
                    <div className="w-48 h-48 rounded-lg border mx-auto flex items-center justify-center text-sm text-muted-foreground">
                      QR not available
                    </div>
                  )}
                </div>
              )}

              {/* RIGHT : FORM */}
              <form onSubmit={handleSubmit} className="space-y-4 pb-4">
                <div className="space-y-2">
                  <Label>Name *</Label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Phone *</Label>
                  <Input
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <Label>Reg Number *</Label>
                  <Input
                    required
                    value={formData.reg_number}
                    onChange={(e) =>
                      setFormData({ ...formData, reg_number: e.target.value })
                    }
                  />
                </div>

                {eventType === "paid" && (
                  <>
                    <div className="space-y-2">
                      <Label>UTR / Transaction ID *</Label>
                      <Input
                        required
                        value={formData.utr}
                        onChange={(e) =>
                          setFormData({ ...formData, utr: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Upload Payment Screenshot *</Label>
                      <Input
                        required
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            ss: e.target.files?.[0] ?? null,
                          })
                        }
                      />
                    </div>
                  </>
                )}

                <Button className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Register"}
                </Button>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <SuccessErrorModal
        open={result.open}
        success={result.success}
        message={result.message}
        onClose={() => setResult({ ...result, open: false })}
      />
    </>
  );
}
