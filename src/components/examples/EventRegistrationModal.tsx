import { useState } from "react";
import EventRegistrationModal from "../EventRegistrationModal";
import { Button } from "@/components/ui/button";

export default function EventRegistrationModalExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8">
      <Button onClick={() => setIsOpen(true)}>Open Registration Modal</Button>
      <EventRegistrationModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        eventTitle="Beat Making Workshop"
      />
    </div>
  );
}
