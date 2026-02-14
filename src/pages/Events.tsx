// client/src/pages/Events.tsx
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import EventCard from "@/components/EventCard";
import EventRegistrationModal from "@/components/EventRegistrationModal";
import AnimatedSection from "@/components/AnimatedSection";
import Footer from "@/components/Footer";

const formatted = data.map((d: any) => ({
  id: d.id,
  title: d.title,
  date: d.date,
  venue: d.venue,
  imageUrl: d.imageUrl ?? null,
  isPaid: d.isPaid ?? false,
  price: d.price ?? null,
  upi_id: d.upi_id ?? null,
  account_number: d.account_number ?? null,
  ifsc: d.ifsc ?? null,
  qr_url: d.qr_url ?? null,
  registrationCount: d.registrationCount ?? 0,

  registrationType: d.registrationType ?? "internal",
  externalFormUrl: d.externalFormUrl ?? null,
}));


export default function Events() {
  const [events, setEvents] = useState<EventType[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<{
    id: string;
    title: string;
    eventType: "free" | "paid";
    imageUrl?: string | null;
    price?: number | null;
    upi_id?: string | null;
    account_number?: string | null;
    ifsc?: string | null;
    qr_url?: string | null;
  } | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/events`);
        if (!res.ok) return;

        const data = await res.json();

        const formatted = data.map((d: any) => ({
          id: d.id,
          title: d.title,
          date: d.date,
          venue: d.venue,
          imageUrl: d.imageUrl ?? null,
          isPaid: d.isPaid ?? false,
          price: d.price ?? null,
          upi_id: d.upi_id ?? null,
          account_number: d.account_number ?? null,
          ifsc: d.ifsc ?? null,
          qr_url: d.qr_url ?? null,
          registrationCount: d.registrationCount ?? 0,
        }));

        setEvents(formatted);
      } catch (err) {
        console.error("Failed to load events:", err);
      }
    }
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-background">
      <Navigation />

      <AnimatedSection className="pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* PAGE TITLE */}
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-4">
            Events
          </h1>

          <p className="text-xl text-muted-foreground mb-10">
            Join our workshops, concerts, and seminars.
          </p>

          {/* EVENTS GRID */}
          {events.length === 0 ? (
            <p className="text-muted-foreground text-lg">No events available.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((ev, idx) => (
                <AnimatedSection key={ev.id} delay={idx * 120}>
                  <EventCard
                    id={ev.id}
                    title={ev.title}
                    date={ev.date}
                    location={ev.venue ?? ""}
                    category=""
                    status="upcoming"
                    eventType={ev.isPaid ? "paid" : "free"}
                    imageUrl={ev.imageUrl ?? undefined}
                    onRegister={() =>
                      setSelectedEvent({
                        id: ev.id,
                        title: ev.title,
                        eventType: ev.isPaid ? "paid" : "free",
                        imageUrl: ev.imageUrl,
                        price: ev.price ?? 0,
                        upi_id: ev.upi_id,
                        account_number: ev.account_number,
                        ifsc: ev.ifsc,
                        qr_url: ev.qr_url,
                      })
                    }
                  />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </AnimatedSection>

      <Footer />

      {/* MODAL */}
      {selectedEvent && (
        <EventRegistrationModal
          isOpen={true}
          onClose={() => setSelectedEvent(null)}
          eventId={selectedEvent.id}
          eventTitle={selectedEvent.title}
          eventType={selectedEvent.eventType}
          price={selectedEvent.price}
          upi_id={selectedEvent.upi_id}
          account_number={selectedEvent.account_number}
          ifsc={selectedEvent.ifsc}
          qr_url={selectedEvent.qr_url}
          imageUrl={selectedEvent.imageUrl ?? null}
        />
      )}
    </div>
  );
}
