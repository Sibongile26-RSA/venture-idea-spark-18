
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";
import VEmpowerLogo from "./VEmpowerLogo";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center mb-8">
          <VEmpowerLogo size="xl" className="mr-4" />
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              VEmpower
            </h1>
            <p className="text-lg text-slate-600 font-medium">Ventures</p>
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
          Empowering the
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent block">
            Next Generation
          </span>
          of Innovation
        </h2>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          We partner with visionary entrepreneurs to transform groundbreaking ideas into 
          market-leading companies through strategic investment and expert guidance.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Submit Your Pitch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
          >
            View Portfolio
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">$50M+</div>
            <div className="text-slate-600">Total Investment</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">25+</div>
            <div className="text-slate-600">Portfolio Companies</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl">
                <Target className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="text-3xl font-bold text-slate-900 mb-2">85%</div>
            <div className="text-slate-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
