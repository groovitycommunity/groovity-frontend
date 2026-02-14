// src/components/EventCard.tsx
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  location: string;
  category: string;
  status: "upcoming" | "live" | "past";
  eventType?: "free" | "paid";
  imageUrl?: string | null;

  // 🔥 NEW
  registrationType?: "internal" | "external";
  externalFormUrl?: string;

  onRegister?: () => void;
}

export default function EventCard({
  title,
  date,
  location,
  category,
  status,
  imageUrl,
  registrationType = "internal",
  externalFormUrl,
  onRegister,
}: EventCardProps) {
  const statusConfig = {
    upcoming: { label: "Upcoming", color: "bg-primary text-primary-foreground" },
    live: { label: "Live Now", color: "bg-green-500 text-white animate-pulse" },
    past: { label: "Past", color: "bg-muted text-muted-foreground" },
  };

  const handleClick = () => {
    if (registrationType === "external" && externalFormUrl) {
      window.open(externalFormUrl, "_blank");
      return;
    }

    if (onRegister) onRegister();
  };

  return (
    <Card className="overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 border-border">
      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary/20 via-accent/10 to-background flex items-center justify-center">
            <div className="text-7xl font-display font-bold text-primary/40">
              {title.charAt(0)}
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90"></div>

        <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
          <Badge className={`${statusConfig[status].color} shadow-lg`}>
            {statusConfig[status].label}
          </Badge>
          <Badge
            variant="outline"
            className="bg-background/30 backdrop-blur-sm border-primary/30 text-foreground"
          >
            {category}
          </Badge>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors duration-500">
            {title}
          </h3>
        </div>
      </div>

      <div className="p-6 space-y-5 bg-card">
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-foreground/80">
            <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">{date}</span>
          </div>

          <div className="flex items-center gap-3 text-sm text-foreground/80">
            <div className="h-9 w-9 rounded-md bg-primary/10 flex items-center justify-center">
              <MapPin className="h-4 w-4 text-primary" />
            </div>
            <span className="font-medium">{location}</span>
          </div>
        </div>

        {status !== "past" && (
          <Button
            className="w-full gap-2"
            onClick={handleClick}
          >
            {registrationType === "external"
              ? "Register Now"
              : status === "live"
                ? "Join Now"
                : "Register Now"}
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </Card>
  );
}