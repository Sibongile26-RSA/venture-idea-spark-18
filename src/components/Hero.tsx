
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import VEmpowerLogo from "./VEmpowerLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-darker-surface via-dark-surface to-deep-indigo overflow-hidden">
      {/* Enhanced Background Pattern with Floating Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-teal rounded-full mix-blend-screen filter blur-xl animate-float neon-glow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-bright-orange rounded-full mix-blend-screen filter blur-xl animate-float delay-1000 orange-glow"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-vibrant-violet rounded-full mix-blend-screen filter blur-xl animate-float delay-500 violet-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-electric-teal rounded-full mix-blend-screen filter blur-lg animate-pulse-glow"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, hsl(var(--electric-teal)) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-charcoal-gray">
        <div className="flex items-center justify-center mb-8">
          <VEmpowerLogo size="lg" className="mr-4 drop-shadow-2xl" />
          <h1 className="text-7xl font-bold bg-gradient-to-r from-electric-teal via-bright-orange to-vibrant-violet bg-clip-text text-transparent animate-pulse-glow">
            VEmpower Ventures
          </h1>
        </div>
        
        <div className="glass-card rounded-3xl p-8 mb-8 max-w-4xl mx-auto">
          <p className="text-2xl text-charcoal-gray mb-4 leading-relaxed font-light">
            Empowering the next generation of innovative startups through strategic investment and partnership
          </p>
          
          <p className="text-lg text-charcoal-gray/80 mb-6">
            We provide capital, mentorship, and resources to transform bold ideas into successful businesses that shape the future
          </p>

          <div className="flex items-center justify-center gap-2 text-electric-teal">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="text-sm font-medium">Catalyst for your Vision</span>
            <Sparkles className="w-5 h-5 animate-pulse delay-500" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button size="lg" className="bg-gradient-to-r from-bright-orange to-vibrant-violet hover:from-bright-orange/90 hover:to-vibrant-violet/90 text-pure-white px-10 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl orange-glow">
            Submit Your Pitch
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          <Button variant="outline" size="lg" className="glass-effect border-electric-teal/50 text-electric-teal hover:bg-electric-teal/10 hover:text-electric-teal px-10 py-6 text-xl transition-all duration-300 shadow-xl neon-glow">
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass-card rounded-2xl p-8 border border-electric-teal/20 hover:border-electric-teal/40 transition-all duration-300 group">
            <h3 className="text-4xl font-bold text-electric-teal mb-3 group-hover:scale-110 transition-transform duration-300">$50M+</h3>
            <p className="text-charcoal-gray/80 font-medium">Total Valuation</p>
          </div>
          <div className="glass-card rounded-2xl p-8 border border-bright-orange/20 hover:border-bright-orange/40 transition-all duration-300 group">
            <h3 className="text-4xl font-bold text-bright-orange mb-3 group-hover:scale-110 transition-transform duration-300">9+</h3>
            <p className="text-charcoal-gray/80 font-medium">Portfolio Companies</p>
          </div>
          <div className="glass-card rounded-2xl p-8 border border-vibrant-violet/20 hover:border-vibrant-violet/40 transition-all duration-300 group">
            <h3 className="text-4xl font-bold text-vibrant-violet mb-3 group-hover:scale-110 transition-transform duration-300">190+</h3>
            <p className="text-charcoal-gray/80 font-medium">Nations Empowered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
