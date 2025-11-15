import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryArrowButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  className?: string;
}

export default function GalleryArrowButton({ direction, onClick, className = "" }: GalleryArrowButtonProps) {
  const Icon = direction === "left" ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      className={`gallery-arrow-button ${className}`}
      data-testid={`button-gallery-arrow-${direction}`}
      aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
}
