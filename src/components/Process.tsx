
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
    <section className="py-24 bg-gradient-to-br from-deep-indigo via-dark-surface to-vibrant-violet/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal-gray mb-6 bg-gradient-to-r from-electric-teal via-bright-orange to-vibrant-violet bg-clip-text text-transparent">
            Our Investment Process
          </h2>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
            A transparent, efficient pathway from initial pitch to strategic partnership
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-electric-teal via-bright-orange to-vibrant-violet rounded-full shadow-lg"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="glass-card hover:scale-105 transition-all duration-500 transform group">
                  <CardContent className="p-8 text-center relative">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-electric-teal to-bright-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-2xl">
                        <step.icon className="w-10 h-10 text-pure-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-bright-orange to-vibrant-violet rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500">
                        <span className="text-pure-white text-sm font-bold">{step.step}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-charcoal-gray mb-4 group-hover:text-electric-teal transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-charcoal-gray/70 leading-relaxed text-sm group-hover:text-charcoal-gray/90 transition-colors duration-300">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 glass-card rounded-3xl p-10 border border-electric-teal/20 hover:border-electric-teal/40 transition-all duration-500">
          <h3 className="text-3xl font-bold text-charcoal-gray mb-8 text-center bg-gradient-to-r from-electric-teal to-vibrant-violet bg-clip-text text-transparent">Investment Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <h4 className="text-xl font-semibold text-electric-teal mb-3 group-hover:scale-110 transition-transform duration-300">Investment Range</h4>
              <p className="text-charcoal-gray/80 text-lg">$10K - $3M</p>
            </div>
            <div className="group">
              <h4 className="text-xl font-semibold text-bright-orange mb-3 group-hover:scale-110 transition-transform duration-300">Stage Focus</h4>
              <p className="text-charcoal-gray/80 text-lg">Pre-Seed to Series A</p>
            </div>
            <div className="group">
              <h4 className="text-xl font-semibold text-vibrant-violet mb-3 group-hover:scale-110 transition-transform duration-300">Sectors</h4>
              <p className="text-charcoal-gray/80 text-lg">EdTech, Healthcare, Tech & Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
