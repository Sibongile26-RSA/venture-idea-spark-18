
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Send, Users, Zap, TrendingUp, Clock } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Send,
      step: "01",
      title: "Submit Your Pitch",
      description: "Share your business plan, market analysis, and vision through our streamlined application process.",
      timeline: "Day 1",
      color: "accent"
    },
    {
      icon: Users,
      step: "02", 
      title: "Initial Review",
      description: "Our investment team conducts a comprehensive evaluation of your proposal within 2-3 weeks.",
      timeline: "Week 1-2",
      color: "primary"
    },
    {
      icon: CheckCircle,
      step: "03",
      title: "Due Diligence",
      description: "Comprehensive analysis of your business model, financials, team, and market opportunity assessment.",
      timeline: "Week 3-4",
      color: "secondary"
    },
    {
      icon: Zap,
      step: "04",
      title: "Investment Decision",
      description: "Final presentation to our investment committee and funding decision within 30 days.",
      timeline: "Week 4-5",
      color: "accent"
    },
    {
      icon: TrendingUp,
      step: "05",
      title: "Partnership & Growth",
      description: "Ongoing support, mentorship, and resources to accelerate your company's success.",
      timeline: "Ongoing",
      color: "primary"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-vempower-dark via-vempower-surface to-vempower-dark relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center glass-strong rounded-full px-6 py-3 mb-8">
            <Clock className="w-4 h-4 text-vempower-accent mr-2" />
            <span className="text-vempower-accent font-mono text-sm font-semibold tracking-wider uppercase">
              Investment Process
            </span>
          </div>
          <h2 className="text-display text-gradient-primary mb-8">
            From Pitch to Partnership
          </h2>
          <p className="text-body text-vempower-text-muted max-w-4xl mx-auto">
            A transparent, efficient pathway from initial pitch to strategic partnership designed for speed and clarity
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 h-0.5 gradient-primary rounded-full"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="glass group hover:glass-strong transition-all duration-500 border-vempower-border interactive rounded-2xl">
                  <CardContent className="p-8 text-center">
                    {/* Step Number */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow transition-all duration-300 group-hover:scale-110 ${
                        step.color === 'primary' ? 'gradient-primary' :
                        step.color === 'secondary' ? 'bg-vempower-secondary' :
                        'gradient-accent'
                      }`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <div className={`absolute -top-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-vempower-dark ${
                        step.color === 'primary' ? 'gradient-primary' :
                        step.color === 'secondary' ? 'bg-vempower-secondary' :
                        'gradient-accent'
                      }`}>
                        <span className="text-white text-sm font-bold">{step.step}</span>
                      </div>
                    </div>
                    
                    {/* Timeline Badge */}
                    <div className="glass-strong rounded-full px-3 py-1 mb-4 inline-block">
                      <span className="text-vempower-accent text-sm font-semibold">{step.timeline}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-vempower-text mb-4 group-hover:text-gradient-primary transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-vempower-text-muted leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Investment Criteria */}
        <div className="glass-strong rounded-3xl p-12 shadow-glow">
          <h3 className="text-title text-gradient-accent mb-12 text-center">Investment Framework</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="glass rounded-2xl p-8 mb-4 group hover:glass-strong transition-all duration-300">
                <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-vempower-dark text-2xl font-bold">$</span>
                </div>
                <h4 className="text-xl font-semibold text-vempower-text mb-3">Investment Range</h4>
                <p className="text-vempower-accent text-2xl font-bold">$10K - $3M</p>
                <p className="text-vempower-text-muted text-sm mt-2">Flexible funding based on stage and potential</p>
              </div>
            </div>
            <div className="text-center">
              <div className="glass rounded-2xl p-8 mb-4 group hover:glass-strong transition-all duration-300">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-vempower-text mb-3">Stage Focus</h4>
                <p className="text-vempower-primary text-2xl font-bold">Pre-Seed to Series A</p>
                <p className="text-vempower-text-muted text-sm mt-2">Early-stage high-growth companies</p>
              </div>
            </div>
            <div className="text-center">
              <div className="glass rounded-2xl p-8 mb-4 group hover:glass-strong transition-all duration-300">
                <div className="w-16 h-16 gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-vempower-dark" />
                </div>
                <h4 className="text-xl font-semibold text-vempower-text mb-3">Key Sectors</h4>
                <p className="text-vempower-accent text-lg font-bold">EdTech • HealthTech • Innovation</p>
                <p className="text-vempower-text-muted text-sm mt-2">Technology-driven solutions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
