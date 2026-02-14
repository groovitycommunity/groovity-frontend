import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";




export default function Merches() {

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-background">
            <Navigation />

            {/* HERO */}
            <AnimatedSection className="pt-32 pb-12 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-display font-extrabold mb-4">
                        Merches
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Get the exclusive Groovity Merch here
                    </p>
                </div>
            </AnimatedSection>

            {/* ================= COMING SOON SECTION ================= */}
            <AnimatedSection className="px-6 lg:px-8 py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
                        Merches Coming Soon
                    </h2>

                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                        We’re cooking up something fire 🔥
                        Merches will drop here very soon.
                    </p>

                    <div className="text-sm text-muted-foreground">
                        Stay tuned.
                    </div>
                </div>
            </AnimatedSection>


            <Footer />
        </div>
    );
}