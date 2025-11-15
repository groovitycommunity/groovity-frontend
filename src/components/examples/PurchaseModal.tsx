import { useState } from "react";
import PurchaseModal from "../PurchaseModal";
import { Button } from "@/components/ui/button";

export default function PurchaseModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Purchase Modal</Button>
      <PurchaseModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        trackTitle="Midnight Groove"
        artist="grooVITy Collective"
        price="₹499"
      />
    </div>
  );
}
