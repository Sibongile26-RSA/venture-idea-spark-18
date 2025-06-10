
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-vempower-dark overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 gradient-accent rounded-full opacity-15 blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-vempower-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="glass-strong p-4 rounded-2xl mr-6 shadow-glow animate-pulse-glow">
            <img 
              src="https://vempower.org/wp-content/uploads/2024/10/VEmpower-logo-white.png" 
              alt="VEmpower Logo" 
              className="w-12 h-12 object-contain"
            />
          </div>
          <h1 className="text-hero text-gradient-primary font-black">
            VEmpower
          </h1>
        </div>
        
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-vempower-accent mb-4 animate-slide-up tracking-wide">
            Ventures
          </h2>
          <div className="w-24 h-1 gradient-accent mx-auto rounded-full"></div>
        </div>
        
        <p className="text-body text-vempower-text mb-6 max-w-4xl mx-auto animate-slide-up font-medium">
          Empowering the next generation of <span className="text-gradient-accent font-semibold">innovative startups</span> through strategic investment and partnership
        </p>
        
        <p className="text-lg text-vempower-text-muted mb-16 max-w-3xl mx-auto animate-slide-up leading-relaxed">
          We provide capital, mentorship, and resources to transform bold ideas into successful businesses that shape the future
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-scale-in">
          <Button 
            size="lg" 
            className="gradient-primary hover:opacity-90 text-white px-12 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-glow border-0 rounded-xl group"
          >
            Submit Your Pitch
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-strong border-vempower-border text-vempower-text hover:bg-vempower-surface px-12 py-6 text-lg transition-all duration-300 backdrop-blur-xl rounded-xl interactive"
          >
            Explore Portfolio
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="glass rounded-3xl p-8 interactive shadow-glow">
            <h3 className="text-5xl font-black text-gradient-accent mb-3">$50M+</h3>
            <p className="text-vempower-text-muted text-lg font-medium">Total Portfolio Value</p>
            <div className="w-16 h-1 gradient-accent mt-4 rounded-full"></div>
          </div>
          <div className="glass rounded-3xl p-8 interactive shadow-glow">
            <h3 className="text-5xl font-black text-gradient-primary mb-3">9+</h3>
            <p className="text-vempower-text-muted text-lg font-medium">Portfolio Companies</p>
            <div className="w-16 h-1 gradient-primary mt-4 rounded-full"></div>
          </div>
          <div className="glass rounded-3xl p-8 interactive shadow-glow">
            <h3 className="text-5xl font-black text-gradient-accent mb-3">190+</h3>
            <p className="text-vempower-text-muted text-lg font-medium">Nations Empowered</p>
            <div className="w-16 h-1 gradient-accent mt-4 rounded-full"></div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-vempower-text-muted" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
