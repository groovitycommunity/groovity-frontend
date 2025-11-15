import { Button } from "@/components/ui/button";
import { Calendar, Play } from "lucide-react";
import { Link } from "wouter";

export default function StaticHero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block">
          <span 
            className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase border-2 whitespace-nowrap"
            style={{ 
              backgroundColor: 'rgb(48, 46, 30)',
              borderColor: 'rgb(180, 160, 70)',
              color: 'rgb(180, 160, 70)'
            }}
            data-testid="badge-tagline"
          >
            MUSIC • CULTURE • INNOVATION
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tight" data-testid="text-title">
          <span className="text-white">Groo</span>
          <span style={{ color: '#F9FF01' }}>VIT</span>
          <span className="text-white">y</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" data-testid="text-description">
          Where hip-hop meets innovation. Join VIT Bhopal University's premier technoculture club for music production workshops, live concerts, and cutting-edge seminars.
        </p>

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
            <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider mt-2">EVENTS HOSTED</div>
          </div>
          <div data-testid="stat-members">
            <div className="text-5xl md:text-6xl font-bold" style={{ color: '#F9FF01' }}>30+</div>
            <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider mt-2">ACTIVE MEMBERS</div>
          </div>
          <div data-testid="stat-tracks">
            <div className="text-5xl md:text-6xl font-bold" style={{ color: '#F9FF01' }}>5+</div>
            <div className="text-sm md:text-base text-gray-400 uppercase tracking-wider mt-2">TRACKS RELEASED</div>
          </div>
        </div>
      </div>
    </section>
  );
}
