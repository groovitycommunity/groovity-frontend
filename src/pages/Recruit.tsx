import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const roles = [
  "PR & Outreach Team",
  "Event Management Team",
  "Media & Design Team",
  "Technical Team",
  "Finance & Sponsorship Team",
  "Photography Team",
];

export default function Recruiting() {
  return (
    <div className="min-h-screen w-full relative overflow-hidden 
      bg-gradient-to-b from-black via-black to-[#0f0f00]">

      {/* NOISE OVERLAY */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04] pointer-events-none" />

      {/* PAGE CONTENT */}
      <div className="relative z-10">
        <Navigation />

        {/* HEADER */}
        <div className="pt-32 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white select-none leading-tight">
            Join the Groo
            <span className="text-white">VI</span>
            <span className="text-[#F9FF00]">T</span>
            <span className="text-white">y</span> Movement
          </h1>

          {/* LONG UNDERLINE */}
          <div className="flex justify-center mt-4">
            <div className="h-[4px] w-[340px] md:w-[460px] bg-[#F9FF00] rounded-full" />
          </div>

          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            We’re recruiting passionate students for the following categories.
          </p>
        </div>

        {/* ROLE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-8 mt-12 mb-20 max-w-6xl mx-auto">
          {roles.map((role) => (
            <div
              key={role}
              className="
                bg-black/40 border border-zinc-800 rounded-xl p-6 shadow-lg
                hover:border-[#F9FF00] transition-all duration-300 cursor-pointer
              "
            >
              <h2 className="text-xl font-semibold text-white">{role}</h2>
            </div>
          ))}
        </div>

        {/* APPLY BUTTON */}
        <div className="flex justify-center mb-24">
          <a
            href="https://forms.gle/your-form-link"
            target="_blank"
            className="
              px-8 py-3 text-lg font-semibold 
              bg-[#F9FF00] text-black rounded-xl 
              hover:bg-[#e4ea00] transition-all duration-300
            "
          >
            Apply Now
          </a>
        </div>

        <Footer />
      </div>
    </div>
  );
}
