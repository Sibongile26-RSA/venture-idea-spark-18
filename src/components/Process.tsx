
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
    <section className="py-24 bg-gradient-to-br from-vempower-light via-white to-vempower-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-bold text-vempower-dark mb-6">
            Our Investment Process
          </h2>
          <p className="text-xl text-vempower-gray max-w-4xl mx-auto leading-relaxed">
            A transparent, efficient pathway from initial pitch to strategic partnership
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-4/5 h-1 bg-gradient-to-r from-vempower-primary via-vempower-secondary to-vempower-accent rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="bg-white/80 backdrop-blur-sm border-0 hover:bg-white hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  <CardContent className="p-8 text-center">
                    <div className="relative mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-vempower-primary to-vempower-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-vempower-accent to-vempower-secondary rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-vempower-dark text-sm font-bold">{step.step}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-display font-semibold text-vempower-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-vempower-gray leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-vempower-primary to-vempower-secondary rounded-3xl p-10 border-0 shadow-2xl">
          <h3 className="text-3xl font-display font-bold text-white mb-8 text-center">Investment Criteria</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-display font-semibold text-vempower-accent mb-3">Investment Range</h4>
              <p className="text-white text-lg">$10K - $3M</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-display font-semibold text-vempower-accent mb-3">Stage Focus</h4>
              <p className="text-white text-lg">Pre-Seed to Series A</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-display font-semibold text-vempower-accent mb-3">Sectors</h4>
              <p className="text-white text-lg">EdTech, Healthcare, Tech & Innovation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
