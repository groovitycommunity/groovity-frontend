import { useState, useEffect, useRef } from "react";
import Navigation from "@/components/Navigation";
import StaticHero from "@/components/StaticHero";
import EventRegistrationModal from "@/components/EventRegistrationModal";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import GroovityButton from "@/components/GroovityButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Music } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Card } from "@/components/ui/card";

function CounterStat({ end, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const countRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = end / steps;
          let current = 0;

          timerRef.current = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timerRef.current);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [end, hasAnimated]);

  return (
    <div ref={countRef} className="text-center">
      <div className="text-5xl md:text-6xl font-display font-extrabold text-primary mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-wide">{label}</div>
    </div>
  );
}

function ScrollMarquee() {
  const words = [
    "BEATS", "RAP", "GROOVE", "RHYTHM", "FREESTYLE",
    "CYPHER", "BASS", "FLOW", "BARS", "TURNTABLES",
    "BREAKBEAT", "CULTURE", "VIBES", "HYPE"
  ];

  const repeated = [...words, "•"].flatMap((w) => [w, "•"]);
  const display = [...repeated, ...repeated, ...repeated];

  return (
    <div className="w-full overflow-hidden bg-primary py-6 border-y-4 border-primary/40">
      <div className="flex whitespace-nowrap animate-marquee-scroll">
        {display.map((item, i) => (
          <span
            key={i}
            className="text-4xl md:text-6xl font-display font-extrabold text-background px-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [, setLocation] = useLocation();

useEffect(() => {
  async function load() {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/events`);
      if (!res.ok) return;

      const data = await res.json();

      const upcoming = data
        .filter((e) => new Date(e.date) > new Date())
        .slice(0, 3);

      setEvents(upcoming);
    } catch (err) {
      console.error("Homepage events load failed:", err);
    }
  }
  load();
}, []);


  return (
    <div className="min-h-screen">
      <BackgroundCanvas />

      <div className="relative z-10">
        {/* NAV WITHOUT VIT LOGO NOW */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navigation showVITLogo={false} />
        </div>

        <StaticHero />
        <ScrollMarquee />

        {/* ⭐ EVENTS SECTION */}
        <AnimatedSection className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-card/95 backdrop-blur-md border border-border shadow-lg rounded-md p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-display font-bold text-foreground">
                Event Registrations
              </h2>
              <Link href="/events">
                <Button variant="outline" size="sm" className="gap-2">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* No events */}
            {events.length === 0 ? (
              <p className="text-center text-muted-foreground py-6 text-lg">
                No Events for Registration
              </p>
            ) : (
              <div className="space-y-3">
                {events.map((event) => (
                  <Card
                    key={event.id}
                    className="p-4 bg-background/90 backdrop-blur-sm hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        <div className="w-12 h-12 rounded-md bg-primary/10 flex justify-center items-center">
                          <Music className="h-6 w-6 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-base truncate">
                            {event.title}
                          </h3>
                          <p className="text-sm text-muted-foreground truncate">
                            {new Date(event.date).toDateString()} • {event.venue}
                          </p>
                        </div>
                      </div>

                      <Button
                        size="sm"
                        onClick={() =>
                          setSelectedEvent({
                            title: event.title,
                            eventType: event.isPaid ? "paid" : "free",
                            ...event,
                          })
                        }
                      >
                        Register Now
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </AnimatedSection>

        {/* GALLERY STATIC */}
        <AnimatedSection className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto bg-card/95 backdrop-blur-md border border-border shadow-lg rounded-md p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-foreground">
                  Event Gallery
                </h2>
                <p className="text-muted-foreground">Relive the magic of our past events</p>
              </div>

              <Link href="/gallery">
                <Button variant="outline" size="sm" className="gap-2">
                  View All
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* small static preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop",
                "https://images.unsplash.com/photo-1598387181032-a3103a2db5b0?w=400&h=400&fit=crop",
              ].map((img, i) => (
                <AnimatedSection key={i} delay={i * 100}>
                  <Card
                    onClick={() => setLocation("/gallery")}
                    className="overflow-hidden cursor-pointer bg-background/90 backdrop-blur-sm group"
                  >
                    <div className="aspect-square relative">
                      <img
                        src={img}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* FOOTER WITH VIT LOGO MOVED HERE */}
        <Footer showVITLogo={true} />

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
          />
        )}
      </div>

      <GroovityButton />
    </div>
  );
}
