import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import GalleryArrowButton from "@/components/GalleryArrowButton";

const eventAlbums = [
  {
    id: "1",
    title: "Freshers Night 2025",
    date: "Nov 10, 2025",
    images: [
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    ],
    description: "An electrifying night of music and celebration",
  },
];

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAlbum, setSelectedAlbum] = useState<string | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const allImages = eventAlbums.flatMap(album =>
    album.images.map(img => ({ ...album, image: img }))
  );

  useEffect(() => {
    if (selectedAlbum) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedAlbum]);

  const selectedAlbumData = eventAlbums.find(a => a.id === selectedAlbum);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-background">
      <Navigation />

      {/* HERO */}
      <AnimatedSection className="pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-4">
            Event Gallery
          </h1>
          <p className="text-xl text-muted-foreground">
            Relive the magic of our past events through these moments
          </p>
        </div>
      </AnimatedSection>

      {/* ================= SLIDER (COMMENTED OUT) ================= */}
      {/*
      <AnimatedSection className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] rounded-md overflow-hidden bg-muted">
            <img
              key={currentSlide}
              src={allImages[currentSlide].image}
              alt={allImages[currentSlide].title}
              className={`w-full h-full object-cover absolute inset-0 ${
                direction === "right"
                  ? "animate-slide-in-right"
                  : "animate-slide-in-left"
              }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <Badge className="mb-2 text-xs">
                <Calendar className="h-3 w-3 mr-1" />
                {allImages[currentSlide].date}
              </Badge>
              <h3 className="text-2xl font-bold mb-2">
                {allImages[currentSlide].title}
              </h3>
              <p className="text-white/90 text-sm">
                {allImages[currentSlide].description}
              </p>
            </div>

            <GalleryArrowButton
              direction="left"
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2"
            />
            <GalleryArrowButton
              direction="right"
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % allImages.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>
      </AnimatedSection>
      */}

      {/* ================= ALBUM GRID (COMMENTED OUT) ================= */}
      {/*
      <AnimatedSection className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventAlbums.map(album => (
            <Card
              key={album.id}
              className="overflow-hidden cursor-pointer"
              onClick={() => setSelectedAlbum(album.id)}
            >
              <img
                src={album.images[0]}
                alt={album.title}
                className="w-full aspect-video object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold">{album.title}</h3>
                <p className="text-sm text-muted-foreground">{album.date}</p>
              </div>
            </Card>
          ))}
        </div>
      </AnimatedSection>
      */}

      {/* ================= COMING SOON SECTION ================= */}
      <AnimatedSection className="px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
            Gallery Coming Soon
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8">
<<<<<<< HEAD
            We’re cooking up something fire 🔥
=======
            We’re cooking up something fire 🔥  
>>>>>>> b5df101fa18d4fad0da64bc903a4a444e8b75972
            Event memories, photos, and moments will drop here very soon.
          </p>

          <div className="text-sm text-muted-foreground">
            Stay tuned.
          </div>
        </div>
      </AnimatedSection>

      {/* ================= MODAL (ALSO UNUSED NOW) ================= */}
      {/*
      {selectedAlbumData && (
        <div
          className="fixed inset-0 bg-black/90 z-50 overflow-y-auto p-6"
          onClick={() => setSelectedAlbum(null)}
        >
          <div
            className="max-w-5xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6 text-white">
              <h3 className="text-2xl font-bold">{selectedAlbumData.title}</h3>
              <Button
                variant="ghost"
                className="text-white"
                onClick={() => setSelectedAlbum(null)}
              >
                ✕
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {selectedAlbumData.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="rounded-md object-cover w-full aspect-video"
                />
              ))}
            </div>
          </div>
        </div>
      )}
      */}

      <Footer />
    </div>
  );
}