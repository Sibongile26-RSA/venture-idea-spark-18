
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-vempower-dark overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-vempower-primary rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-vempower-secondary rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-vempower-accent rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <div className="flex items-center justify-center mb-8 animate-fade-in">
          <div className="p-4 bg-gradient-to-r from-vempower-primary to-vempower-secondary rounded-2xl mr-6 shadow-2xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-7xl font-display font-bold bg-gradient-to-r from-white via-vempower-accent to-vempower-secondary bg-clip-text text-transparent">
            VEmpower
          </h1>
        </div>
        
        <h2 className="text-3xl font-display font-semibold text-vempower-accent mb-6 animate-slide-up">
          Ventures
        </h2>
        
        <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed animate-slide-up">
          Empowering the next generation of innovative startups through strategic investment and partnership
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto animate-slide-up">
          We provide capital, mentorship, and resources to transform bold ideas into successful businesses that shape the future
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-scale-in">
          <Button size="lg" className="gradient-vempower hover:opacity-90 text-white px-12 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl border-0">
            Submit Your Pitch
            <ArrowRight className="ml-3 w-6 h-6" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-vempower-accent text-vempower-accent hover:bg-vempower-accent hover:text-vempower-dark px-12 py-6 text-lg transition-all duration-300 backdrop-blur-sm bg-white/5">
            Learn More
            <Zap className="ml-3 w-5 h-5" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl">
            <h3 className="text-4xl font-bold text-vempower-accent mb-3">$50M+</h3>
            <p className="text-gray-300 text-lg">Total Valuation</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl">
            <h3 className="text-4xl font-bold text-vempower-secondary mb-3">9+</h3>
            <p className="text-gray-300 text-lg">Portfolio Companies</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 shadow-2xl">
            <h3 className="text-4xl font-bold text-vempower-primary mb-3">190+</h3>
            <p className="text-gray-300 text-lg">Nations Empowered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
