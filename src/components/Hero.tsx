
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import VEmpowerLogo from "./VEmpowerLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-indigo via-vibrant-violet to-deep-indigo overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-electric-teal rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-bright-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-vibrant-violet rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-pure-white">
        <div className="flex items-center justify-center mb-6">
          <VEmpowerLogo size="lg" className="mr-4" />
          <h1 className="text-6xl font-bold bg-gradient-to-r from-electric-teal to-bright-orange bg-clip-text text-transparent">
            VEmpower Ventures
          </h1>
        </div>
        
        <p className="text-xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Empowering the next generation of innovative startups through strategic investment and partnership
        </p>
        
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          We provide capital, mentorship, and resources to transform bold ideas into successful businesses that shape the future
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-gradient-to-r from-bright-orange to-vibrant-violet hover:from-bright-orange/90 hover:to-vibrant-violet/90 text-pure-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Submit Your Pitch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-electric-teal text-electric-teal hover:bg-electric-teal hover:text-pure-white px-8 py-4 text-lg transition-all duration-300">
            Learn More
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-electric-teal mb-2">$50M+</h3>
            <p className="text-gray-300">Total Valuation</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-bright-orange mb-2">9+</h3>
            <p className="text-gray-300">Portfolio Companies</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h3 className="text-3xl font-bold text-vibrant-violet mb-2">190+</h3>
            <p className="text-gray-300">Nations Empowered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
