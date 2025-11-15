import { Dialog, DialogContent } from "@/components/ui/dialog";
import { CheckCircle, XCircle } from "lucide-react";

export default function SuccessErrorModal({
  open,
  success,
  message,
  onClose,
}: {
  open: boolean;
  success: boolean;
  message: string;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-sm text-center py-8">
        {success ? (
          <CheckCircle className="w-16 h-16 mx-auto text-green-500" />
        ) : (
          <XCircle className="w-16 h-16 mx-auto text-red-500" />
        )}

        <p className="mt-4 text-lg font-semibold">
          {success ? "Success" : "Failed"}
        </p>

        <p className="text-muted-foreground mt-1">{message}</p>
      </DialogContent>
    </Dialog>
  );
}
