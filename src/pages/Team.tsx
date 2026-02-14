import { Fragment } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";

export default function Team() {
    const studentCoordinators = [
        {
            name: "Kimaya Holkar",
            role: "Student Coordinator",
            image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/kimaya_holkar.jpg",
        },
        {
            name: "Kartik Shrivastava",
            role: "Student Coordinator",
            image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/kartik_shrivastava.jpg",
        },
    ];
    const teamMembers = [
        {
            lead: {
                name: "Khushal",
                role: "PR and Outreach Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/khushal_hingwe.webp",
            },
            coLead: {
                name: "Bhavya Vijay",
                role: "PR and Outreach Co-Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/bhavya_vijay.webp",
            }
        },
        {
            lead: {
                name: "Deeptanshu Sinha",
                role: "Event Management Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/deeptanshu_sinha.webp",
            },
            coLead: {
                name: "Abhishek Dangwal",
                role: "Event Management Co-Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/abhishek_dangwal.webp",
            }
        },
        {
            lead: {
                name: "Aryan",
                role: "Visuals and Design Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/aryan_thombare.webp",
            },
            coLead: {
                name: "Navya Gupta",
                role: "Visuals and Design Co-Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/navya_gupta.webp",
            }
        },
        {
            lead: {
                name: "Raj Sachan",
                role: "Technical Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/raj_sachan.webp",
            },
            coLead: {
                name: "Vishwesh Singh",
                role: "Technical Co-Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/vishwesh_singh.webp",
            }
        },
        {
            lead: {
                name: "Priangsu Halder",
                role: "Finance Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/priangsu_halder.webp",
            },
            coLead: {
                name: "Rohit Dubey",
                role: "Finance Co-Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/rohit_dubey.webp",
            }
        },
        {
            lead: {
                name: "Archit Kolte",
                role: "Photography Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/archit_kolte.webp",
            },
            coLead: {
                name: "Aditya Kohli",
                role: "Photography Co-Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/aditya_kohli.webp",
            }
        },
        {
            lead: {
                name: "Taufiq Ahamed",
                role: "Social Media Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/taufiq_ahamed.webp",
            },
            coLead: {
                name: "Aryan Chilakwad",
                role: "Social Media Co-Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/aryan_chilakwad.webp",
            }
        },
        {
            lead: {
                name: "Arnav Sharma",
                role: "Music Production Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/arnav_sharma.webp",
            },
            coLead: {
                name: "Anuj Parashar",
                role: "Music Production Co-Lead",
                image: "https://groovity-s3.s3.ap-south-1.amazonaws.com/members/aditya_kohli.webp",
            }
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-primary/3 via-background to-background">

            <div className="relative z-10">
                <Navigation />

                <AnimatedSection className="pt-32 pb-16 px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-display font-bold text-foreground mb-12 text-center">
                            Student Coordinators
                        </h2>
                        <div className="flex justify-center mb-16">
                            <div className="grid grid-cols-2 gap-4 max-w-2xl">
                                {studentCoordinators.map((member, index) => (
                                    <AnimatedSection key={member.name} delay={index * 100}>
                                        <Card
                                            className="overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover-elevate"
                                            data-testid={`card-coordinator-${index}`}
                                        >
                                            <div className="relative aspect-[3/4] overflow-hidden">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-lg font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                    {member.name}
                                                </h3>
                                                <p className="text-xs text-muted-foreground mb-1">{member.role}</p>
                                            </div>
                                        </Card>
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
                            Team Leads & Co-Leads
                        </h3>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                            {teamMembers.map((team, teamIndex) => (
                                <Fragment key={`team-${teamIndex}`}>
                                    <AnimatedSection delay={teamIndex * 100}>
                                        <Card className="overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover-elevate">
                                            <div className="relative aspect-[3/4] overflow-hidden">
                                                <img
                                                    src={team.lead.image}
                                                    alt={team.lead.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-lg font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                    {team.lead.name}
                                                </h3>
                                                <p className="text-xs text-muted-foreground mb-1">
                                                    {team.lead.role}
                                                </p>
                                            </div>
                                        </Card>
                                    </AnimatedSection>

                                    <AnimatedSection delay={teamIndex * 100 + 50}>
                                        <Card className="overflow-hidden hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 group hover-elevate">
                                            <div className="relative aspect-[3/4] overflow-hidden">
                                                <img
                                                    src={team.coLead.image}
                                                    alt={team.coLead.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                                            </div>
                                            <div className="p-4">
                                                <h3 className="text-lg font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                    {team.coLead.name}
                                                </h3>
                                                <p className="text-xs text-muted-foreground mb-1">
                                                    {team.coLead.role}
                                                </p>
                                            </div>
                                        </Card>
                                    </AnimatedSection>
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="px-6 lg:px-8 pb-20">
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
                                        <div className="text-sm text-muted-foreground uppercase tracking-wide">
                                            Active Members
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-5xl font-display font-bold text-primary mb-2">0+</div>
                                        <div className="text-sm text-muted-foreground uppercase tracking-wide">
                                            Events Hosted
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </AnimatedSection>

                <Footer />
            </div>
        </div>
    );
}
