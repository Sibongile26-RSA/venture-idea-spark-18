
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Send, Users, Zap, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Send,
      step: "Day 1",
      title: "Concept Submission",
      description: "Share your business idea, growth plan, and bold vision through our simple, founder-first application process."
    },
    {
      icon: Users,
      step: "Week 1-2",
      title: "Clarity Check",
      description: "Our team reviews your concept, market positioning, and value proposition — and gives you real feedback, fast."
    },
    {
      icon: CheckCircle,
      step: "Week 3-4",
      title: "Core Evaluation",
      description: "We dive deep into your business model, financials, and team dynamics to assess strength, scalability, and fit."
    },
    {
      icon: Zap,
      step: "Week 4-5",
      title: "Capital Commitment",
      description: "Present to our committee and receive a clear investment decision — typically within 30 days of submission."
    },
    {
      icon: TrendingUp,
      step: "Ongoing",
      title: "Collaborative Growth",
      description: "Access capital, coaching, and community — with long-term support to scale what matters most."
    }
  ];

  const reasons = [
    {
      icon: "⚡",
      title: "Fast-Track Decisions",
      description: "Get funding decisions within 30 days — no long waits, just momentum."
    },
    {
      icon: "🤝",
      title: "Hands-On Mentorship",
      description: "Work closely with industry leaders and experienced entrepreneurs from day one."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Tap into a powerful network spanning 190+ countries and diverse markets."
    },
    {
      icon: "📈",
      title: "Proven Growth",
      description: "Join a portfolio that's consistently delivered 250%+ growth."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-deep-indigo via-dark-surface to-vibrant-violet/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal-gray mb-6 bg-gradient-to-r from-electric-teal via-bright-orange to-vibrant-violet bg-clip-text text-transparent">
            Your Startup Journey: From Pitch to Partnership
          </h2>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
            A transparent, founder-first pathway from initial concept to strategic partnership
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
                      <div className="absolute -top-2 -right-2 w-12 h-6 bg-gradient-to-br from-bright-orange to-vibrant-violet rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-500">
                        <span className="text-pure-white text-xs font-bold">{step.step}</span>
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

        <div className="mt-20 text-center">
          <p className="text-3xl font-bold text-bright-orange mb-16">
            Take the First Step — Let's Build Your Future Together.
          </p>
        </div>

        {/* Investment Criteria */}
        <div className="glass-card rounded-3xl p-10 border border-electric-teal/20 hover:border-electric-teal/40 transition-all duration-500 mb-16">
          <h3 className="text-3xl font-bold text-charcoal-gray mb-8 text-center bg-gradient-to-r from-electric-teal to-vibrant-violet bg-clip-text text-transparent">Our Portfolio Picks</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <h4 className="text-xl font-semibold text-electric-teal mb-3 group-hover:scale-110 transition-transform duration-300">Funding Range</h4>
              <p className="text-charcoal-gray/80 text-lg font-bold">$10K - $3M</p>
              <p className="text-charcoal-gray/60 text-sm">Tailored investments aligned with your growth stage and potential.</p>
            </div>
            <div className="group">
              <h4 className="text-xl font-semibold text-bright-orange mb-3 group-hover:scale-110 transition-transform duration-300">Stage Focus</h4>
              <p className="text-charcoal-gray/80 text-lg font-bold">Pre-Seed to Series A</p>
              <p className="text-charcoal-gray/60 text-sm">Backing early-stage startups with high-growth ambitions.</p>
            </div>
            <div className="group">
              <h4 className="text-xl font-semibold text-vibrant-violet mb-3 group-hover:scale-110 transition-transform duration-300">Core Sectors</h4>
              <p className="text-charcoal-gray/80 text-lg font-bold">EdTech • HealthTech • Innovation</p>
              <p className="text-charcoal-gray/60 text-sm">Fueling technology-driven solutions that make an impact.</p>
            </div>
          </div>
        </div>

        {/* Why Choose VEmpower */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-charcoal-gray mb-8 text-center bg-gradient-to-r from-bright-orange to-electric-teal bg-clip-text text-transparent">
            Here's why startups choose VEmpower to fuel their future:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="glass-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <span className="text-3xl">{reason.icon}</span>
                  <div>
                    <h4 className="text-xl font-semibold text-electric-teal mb-2">{reason.title}</h4>
                    <p className="text-charcoal-gray/80">{reason.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
