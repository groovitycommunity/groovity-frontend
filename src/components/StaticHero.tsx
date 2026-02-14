import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import { Link } from "wouter";
import mobileReveal from "@/assets/mobile-reveal.png";
import desktopReveal from "@/assets/desktop-reveal.png";



export default function StaticHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {/* Mobile Reveal */}
      <div
        className="h-[calc(100vh-5rem)] w-full bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${mobileReveal})` }}
      ></div>

      {/*Desktop Reveal*/}
      <div
        className="h-[calc(100vh-5rem)] w-full bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${desktopReveal})` }}
      ></div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block">
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Link href="/events">
            <Button
              size="lg"
              className="gap-2 text-black font-semibold"
              style={{ backgroundColor: '#F9FF01' }}
              data-testid="button-explore-events"
            >
              <Calendar className="h-5 w-5" />
              Explore Events
            </Button>
          </Link>
          <Link href="/beats">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-2 border-white/30 bg-transparent text-white hover:bg-white/10"
              data-testid="button-buy-beats"
            >
              <Play className="h-5 w-5" />
              Buy Beats
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-16">
          <div data-testid="stat-events">
            <div className="text-5xl md:text-6xl font-bold" style={{ color: '#F9FF01' }}>0+</div>
            <div className="text-sm md:text-base text-white uppercase tracking-wider mt-2">EVENTS HOSTED</div>
          </div>
          <div data-testid="stat-members">
            <div className="text-5xl md:text-6xl font-bold" style={{ color: '#F9FF01' }}>60+</div>
            <div className="text-sm md:text-base text-white uppercase tracking-wider mt-2">ACTIVE MEMBERS</div>
          </div>
          <div data-testid="stat-tracks">
            <div className="text-5xl md:text-6xl font-bold" style={{ color: '#F9FF01' }}>5+</div>
            <div className="text-sm md:text-base text-white uppercase tracking-wider mt-2">TRACKS RELEASED</div>
          </div>
        </div>
      </div>
    </section>
  );
}
