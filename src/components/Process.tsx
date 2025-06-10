import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Send, Users, Zap, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Send,
      step: "01",
      title: "Submit Your Pitch",
      description: "Share your business plan, market analysis, and vision through our streamlined application process."
    },
    {
      icon: Users,
      step: "02",
      title: "Initial Review",
      description: "Our investment team conducts a comprehensive evaluation of your proposal within 2-3 weeks."
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Due Diligence",
      description: "Comprehensive analysis of your business model, financials, team, and market opportunity assessment."
    },
    {
      icon: Zap,
      step: "04",
      title: "Investment Decision",
      description: "Final presentation to our investment committee and funding decision within 30 days."
    },
    {
      icon: TrendingUp,
      step: "05",
      title: "Partnership & Growth",
      description: "Ongoing support, mentorship, and resources to accelerate your company's success."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Investment Process
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A transparent, efficient pathway from initial pitch to strategic partnership
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="relative mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{step.step}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">Investment Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Investment Range</h4>
              <p className="text-gray-300">$10K - $3M</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-purple-400 mb-2">Stage Focus</h4>
              <p className="text-gray-300">Pre-Seed to Series A</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-indigo-400 mb-2">Sectors</h4>
              <p className="text-gray-300">EdTech, Healthcare, Tech & Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
