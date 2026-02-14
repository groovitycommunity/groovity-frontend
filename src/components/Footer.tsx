import { Link } from "wouter";
import { Instagram, Youtube, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/2_main_logo-removebg-preview_1762872053864.png";


export default function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="GrooVITy" className="h-10 w-10" />
              <span className="text-2xl font-display font-extrabold text-foreground">
                GrooVITy
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              VIT Bhopal University's premier music and hip-hop culture club. Where beats meet innovation 
              and creativity knows no bounds.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" data-testid="button-instagram">
                <a href="https://www.instagram.com/groovityclub/#" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-youtube">
                <a href="https://www.youtube.com/@Groovityclub" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" data-testid="button-email">
                <a href="mailto:support@groovity.studio" target="_blank" rel="noopener noreferrer">
                <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" data-testid="link-footer-home">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/events" data-testid="link-footer-events">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Events
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/gallery" data-testid="link-footer-gallery">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Event Gallery
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/beats" data-testid="link-footer-beats">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Beats
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/team" data-testid="link-footer-team">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Team
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/merch" data-testid="link-footer-merch">
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Merch
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-foreground mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>VIT Bhopal University, Bhopal-Indore Highway, Kothrikalan, Sehore, Madhya Pradesh 466114</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>support@groovity.studio</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 GrooVITy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
