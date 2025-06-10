
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, DollarSign, Rocket, Target, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Seed & Series A Funding",
      description: "Strategic capital investment from $100K to $5M to fuel your growth trajectory and scale your operations.",
      accent: "accent"
    },
    {
      icon: Users,
      title: "Mentorship & Advisory",
      description: "Access to our network of successful entrepreneurs, industry experts, and seasoned advisors.",
      accent: "primary"
    },
    {
      icon: Rocket,
      title: "Business Development",
      description: "Strategic partnerships, customer introductions, and go-to-market strategy development.",
      accent: "secondary"
    },
    {
      icon: Target,
      title: "Market Validation",
      description: "Data-driven market research and validation to refine your product-market fit strategy.",
      accent: "accent"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Scalable growth frameworks and operational excellence to maximize your market potential.",
      accent: "primary"
    },
    {
      icon: Lightbulb,
      title: "Innovation Support",
      description: "Technical resources, R&D guidance, and innovation labs to accelerate product development.",
      accent: "secondary"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-vempower-dark via-vempower-surface to-vempower-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center glass-strong rounded-full px-6 py-3 mb-8">
            <span className="text-vempower-accent font-mono text-sm font-semibold tracking-wider uppercase">
              How We Work
            </span>
          </div>
          <h2 className="text-display text-gradient-primary mb-8">
            Accelerating Your Success
          </h2>
          <p className="text-body text-vempower-text-muted max-w-4xl mx-auto">
            Our comprehensive support ecosystem is designed to transform promising startups into industry leaders through strategic guidance and resources
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass group hover:glass-strong transition-all duration-500 border-vempower-border interactive rounded-2xl overflow-hidden">
              <CardContent className="p-8 relative">
                {/* Icon */}
                <div className="flex items-center mb-8">
                  <div className={`p-4 rounded-2xl shadow-glow transition-all duration-300 group-hover:scale-110 ${
                    service.accent === 'primary' ? 'gradient-primary' :
                    service.accent === 'secondary' ? 'bg-vempower-secondary' :
                    'gradient-accent'
                  }`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-title text-vempower-text mb-6 group-hover:text-gradient-primary transition-all duration-300 font-semibold">
                  {service.title}
                </h3>
                <p className="text-vempower-text-muted leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative Line */}
                <div className={`w-16 h-1 mt-6 rounded-full transition-all duration-300 group-hover:w-24 ${
                  service.accent === 'primary' ? 'gradient-primary' :
                  service.accent === 'secondary' ? 'bg-vempower-secondary' :
                  'gradient-accent'
                }`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-lg text-vempower-text-muted mb-8">
            Ready to transform your startup idea into reality?
          </p>
          <button className="glass-strong px-8 py-4 rounded-xl text-vempower-accent font-semibold hover:bg-vempower-accent hover:text-vempower-dark transition-all duration-300 interactive">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
