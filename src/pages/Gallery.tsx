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
  {
    id: "2",
    title: "Sound Engineering Workshop",
    date: "Nov 5, 2025",
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    ],
    description: "Hands-on experience with professional audio equipment",
  },
  {
    id: "3",
    title: "Hip-Hop Battle Championship",
    date: "Oct 28, 2025",
    images: [
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?w=800&h=600&fit=crop",
    ],
    description: "Epic showdown of the best rappers on campus",
  },
  {
    id: "4",
    title: "Beat Making Masterclass",
    date: "Oct 15, 2025",
    images: [
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=800&h=600&fit=crop",
    ],
    description: "Learn production techniques from industry professionals",
  },
  {
    id: "5",
    title: "Indie Music Festival",
    date: "Oct 1, 2025",
    images: [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    ],
    description: "Celebrating independent artists and original compositions",
  },
  {
    id: "6",
    title: "DJ Night Extravaganza",
    date: "Sep 20, 2025",
    images: [
      "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    ],
    description: "Non-stop beats from our talented DJs",
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
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [selectedAlbum]);

  const nextSlide = () => {
    setDirection("right");
    setCurrentSlide((prev) => (prev + 1) % allImages.length);
  };

  const prevSlide = () => {
    setDirection("left");
    setCurrentSlide((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  useEffect(() => {
    if (selectedAlbum) return;
    
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentSlide((prev) => (prev + 1) % allImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [allImages.length, selectedAlbum, currentSlide]);

  const selectedAlbumData = eventAlbums.find(album => album.id === selectedAlbum);

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-background">
      { <Navigation />

      <AnimatedSection className="pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-4">
            Event Gallery
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Relive the magic of our past events through these moments
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-md overflow-hidden bg-muted group">
            <div className="relative w-full h-full">
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
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6 text-white z-10">
              <Badge className="mb-1 md:mb-2 text-xs" data-testid={`badge-album-${allImages[currentSlide].id}`}>
                <Calendar className="h-3 w-3 mr-1" />
                {allImages[currentSlide].date}
              </Badge>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-1 md:mb-2">
                {allImages[currentSlide].title}
              </h3>
              <p className="text-white/90 text-sm md:text-base line-clamp-2">{allImages[currentSlide].description}</p>
            </div>

            <GalleryArrowButton
              direction="left"
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2"
            />
            <GalleryArrowButton
              direction="right"
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2"
            />

            <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6 flex gap-1.5 md:gap-2 z-10">
              {allImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 md:h-2 rounded-full transition-all ${
                    index === currentSlide ? "w-6 md:w-8 bg-primary" : "w-1.5 md:w-2 bg-white/50"
                  }`}
                  data-testid={`button-slide-${index}`}
                />
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-foreground mb-8">Event Albums</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventAlbums.map((album, index) => (
              <AnimatedSection key={album.id} delay={index * 100}>
                <Card 
                  className="overflow-hidden hover-elevate cursor-pointer group"
                  onClick={() => setSelectedAlbum(album.id)}
                  data-testid={`card-album-${album.id}`}
                >
                  <div className="relative aspect-video">
                    <img
                      src={album.images[0]}
                      alt={album.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="secondary" className="backdrop-blur-sm">
                        {album.images.length} photos
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {album.date}
                    </div>
                    <h3 className="text-lg font-display font-bold text-foreground mb-2">
                      {album.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {album.description}
                    </p>
                  </div>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {selectedAlbumData && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 overflow-y-auto p-6"
          onClick={() => setSelectedAlbum(null)}
          data-testid="modal-album-view"
        >
          { <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-5xl w-full my-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                    {selectedAlbumData.title}
                  </h3>
                  <div className="flex items-center gap-2 text-white/80">
                    <Calendar className="h-4 w-4" />
                    {selectedAlbumData.date}
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                  onClick={() => setSelectedAlbum(null)}
                  data-testid="button-close-album"
                >
                  ✕
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {selectedAlbumData.images.map((image, index) => (
                  <div key={index} className="aspect-video rounded-md overflow-hidden">
                    <img
                      src={image}
                      alt={`${selectedAlbumData.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )} } }
      
      <Footer />
    </div>
  );
}
