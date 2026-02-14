import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { Fragment } from "react";
import { Quote, Linkedin, Instagram } from "lucide-react";

export default function About() {
  const founders = [
    {
      name: "Chandan Kumar Behera",
      role: "Faculty Coordinator",
      email: "facultycoordinator@groovityclub.com",
      image: "https://vitbhopal.ac.in/file/2023/06/Dr.-Chandan-Kumar-Behera.jpeg",
      quote: "Where technology meets culture, and creativity finds its rhythm.",
      bio: "Chandan Kumar Behera is a faculty member in the School of Computing Science and Engineering. He completed his M.Tech. from IIT Kharagpur and earned his Ph.D. from Andhra University College of Engineering (A), Visakhapatnam. With over 17 years of teaching and research experience, he has published 25 papers in international journals and conferences, specializing in Code Obfuscation and optimization techniques. His research interests include Software Security, Malware Analysis, and system software, and he has been honored with the Young Scientist Award.",
      linkedin: "https://www.linkedin.com/in/dr-chandan-kumar-behera-a46875278/",
      instagram: "#"
    },
    {
      name: "Harsh Chitransh",
      role: "President",
      email: "the.president@groovityclub.com",
      image: "https://d1ubxffynmcda2.cloudfront.net/members/harsh_chitransh.jpg",
      quote: "Hip-hop is not just music; it is a way of life that represents freedom, identity, unity, and confidence.",
      bio: "Harsh Chitransh Aka Humsafar is a rapper, vocalist, and performer currently pursuing a degree in Bioengineering at VIT Bhopal University. His journey with words began five years ago through poetry, which gradually evolved into rap — a powerful medium of self-expression that blends rhythm and emotion. He has made his mark on multiple stages, participating in prominent Rap Battles and Television Shows. Humsafar was a finalist in Beat Drop Season 1, India's Greatest Talent Show Season 6, and India's Talent Fight Mega Auditions, and was ranked among the Top 100 by the Battle Arena Rap Show (Pan India). He is also a semi-finalist in Let's Grow (Pan India) and performs actively in live shows and rap cyphers across Tier 1 cities. His Debut Album, featuring 20 tracks (2-parts) in collaboration with the underground DHH crew Paradise Mosiqi, is set to release this month — marking a significant milestone in his artistic journey.",
      linkedin: "#",
      instagram: "#"
    },
    {
      name: "Raaz",
      role: "Vice President",
      email: "vicepresident@groovityclub.com",
      image: "https://d1ubxffynmcda2.cloudfront.net/members/raaz.jpg",
      quote: "Innovation happens when creativity meets opportunity.",
      bio: "Raaz is a music artist, songwriter, music producer, and sound engineer with a deep commitment to making music speak genuinely and poignantly. Having collaborated with numerous artists, he brings creative vision together with technical detail to create a sound that is at once utterly modern and timeless. He has also helped many artists release their debut EP, single, and album through his creative guidance and technical expertise. His work represents emotion through sound: rich textures, storytelling, and experimentation combined into a form that really connects with its listeners. Guided by an unyielding passion for growth and innovation, Raaz continues to hone his craft, pushing the boundaries while being rooted in honesty and musical integrity. Any project he engages in is not just about production; it's an experience created with collaboration, intention, and respect for the art of sound.",
      linkedin: "https://www.linkedin.com/in/raazyadav/",
      instagram: "https://www.instagram.com/ydvraazz/"
    },
    {
      name: "Lavanya Tyagi",
      role: "General Secretary",
      image: "https://d1ubxffynmcda2.cloudfront.net/members/lavanya_tyagi.jpg",
      quote: "Every beat tells a story, every rhythm builds a community.",
      bio: "Hey, I'm Lavanya Tyagi and I'm currently pursuing a degree in Biotechnology at VIT Bhopal university. My voice is my canvas, and music is the art that keeps me alive. Every note, every verse, carries a heartbeat; sometimes loud, sometimes soft, but always real. As a VOCALIST, I chase connection, not perfection; music that hits different because it comes from somewhere true. I'm the kind of person who brings zeal, wit, and leadership to everything I do; whether it's leading a team, organizing events, or simply making sure the vibe is right. Music isn't just what I do—it's who I am.",
      linkedin: "#",
      instagram: "https://www.instagram.com/_lavanya.tyagi._/"
    },
    {
      name: "Priangsu Halder",
      role: "Treasurer",
      image: "https://d1ubxffynmcda2.cloudfront.net/members/priangsu_halder.jpg",
      quote: "Managing resources to amplify creativity and fuel our musical journey.",
      bio: "Priangsu Halder is a dynamic young leader whose journey blends finance, entrepreneurship, and strategic thinking with a grounded, dedicated approach. Currently pursuing Bioengineering at VIT Bhopal, he is actively involved in the stock market with a steadily growing investment portfolio. A self-made entrepreneur, Priangsu has successfully founded and run multiple independent ventures driven by curiosity and a sharp business mindset. With strong leadership and financial insight, he represents a new generation of thinkers building their own path one informed step at a time.",
      linkedin: "#",
      instagram: "https://www.instagram.com/rotop.h/"
    },
  ];



  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-background">
      <Navigation />

      <AnimatedSection className="pt-32 pb-12 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-extrabold text-foreground mb-6">
            About Groo<span className="text-primary">VIT</span>y
          </h1>
          <p className="text-xl text-white leading-relaxed">
            VIT Bhopal University's music and hip-hop technoculture club where passion meets innovation
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 lg:px-8 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <div className="text-lg text-white space-y-6 leading-relaxed">
              <p>
                GrooVITy has emerged as the beating heart of VIT Bhopal University's music scene. 
                We are more than just a club – we're a movement that celebrates the fusion of 
                hip-hop culture, cutting-edge technology, and creative expression.
              </p>
              <p>
                Our mission is to create a vibrant ecosystem where students can explore their 
                passion for music production, performance, and appreciation. Through workshops, 
                concerts, seminars, and collaborative projects, we empower aspiring artists to 
                develop their skills and showcase their talent.
              </p>
              <p>
                From beat-making sessions to live performances, from technical workshops to 
                industry seminars, GrooVITy offers a comprehensive platform for anyone interested 
                in the world of music and audio production. We believe in learning by doing, 
                creating by collaborating, and growing by sharing.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-foreground mb-12 text-center">
            Founders
          </h2>
          <div className="space-y-8 mb-20">
            {founders.map((founder, index) => (
              <AnimatedSection key={founder.name} delay={index * 100}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card 
                      className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 group hover-elevate cursor-pointer"
                      data-testid={`card-founder-${founder.role.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="flex flex-col md:flex-row items-center gap-6 p-6">
                        <div className="flex-shrink-0">
                          <div 
                            className="w-32 h-32 md:w-40 md:h-40 rounded-md overflow-hidden"
                          >
                            <img 
                              src={founder.image} 
                              alt={founder.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            />
                          </div>
                        </div>
                        
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {founder.name}
                          </h3>
                          <p className="text-lg text-primary font-semibold mb-2">{founder.role}</p>
                          {founder.email && (
                            <p className="text-sm text-muted-foreground mb-1">{founder.email}</p>
                          )}
                          <div className="flex items-start gap-3 mt-4">
                            <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                            <p className="text-muted-foreground italic leading-relaxed">{founder.quote}</p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-display font-bold">
                        {founder.name}
                      </DialogTitle>
                      <DialogDescription className="sr-only">
                        Detailed biography and contact information for {founder.name}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <img 
                          src={founder.image} 
                          alt={founder.name}
                          className="w-24 h-24 rounded-md object-cover"
                        />
                        <div>
                          <p className="text-lg font-semibold text-primary">{founder.role}</p>
                          {founder.email && (
                            <p className="text-sm text-muted-foreground">{founder.email}</p>
                          )}
                        </div>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">About</h4>
                        <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                      </div>
                      <div className="flex gap-4 pt-4 border-t border-border">
                        {founder.linkedin && (
                          <a 
                            href={founder.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            data-testid="link-linkedin"
                          >
                            <Linkedin className="h-5 w-5" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                        {founder.instagram && (
                          <a 
                            href={founder.instagram} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            data-testid="link-instagram"
                          >
                            <Instagram className="h-5 w-5" />
                            <span>Instagram</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </AnimatedSection>

      <AnimatedSection className="px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Join Our Journey
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Whether you're a seasoned producer, an aspiring artist, or simply someone who 
                loves music, GrooVITy welcomes you. Let's create something amazing together.
              </p>
              <div className="flex flex-wrap justify-center gap-8">
                <div>
                  <div className="text-5xl font-display font-bold text-primary mb-2">30+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Active Members</div>
                </div>
                <div>
                  <div className="text-5xl font-display font-bold text-primary mb-2">0+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Events Hosted</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
