
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, DollarSign, Rocket, Target, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Seed & Series A Funding",
      description: "Strategic capital investment from $100K to $5M to fuel your growth trajectory and scale your operations.",
      gradient: "from-bright-orange/20 to-vibrant-violet/20"
    },
    {
      icon: Users,
      title: "Mentorship & Advisory",
      description: "Access to our network of successful entrepreneurs, industry experts, and seasoned advisors.",
      gradient: "from-electric-teal/20 to-bright-orange/20"
    },
    {
      icon: Rocket,
      title: "Business Development",
      description: "Strategic partnerships, customer introductions, and go-to-market strategy development.",
      gradient: "from-vibrant-violet/20 to-electric-teal/20"
    },
    {
      icon: Target,
      title: "Market Validation",
      description: "Data-driven market research and validation to refine your product-market fit strategy.",
      gradient: "from-electric-teal/20 to-vibrant-violet/20"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Scalable growth frameworks and operational excellence to maximize your market potential.",
      gradient: "from-bright-orange/20 to-electric-teal/20"
    },
    {
      icon: Lightbulb,
      title: "Innovation Support",
      description: "Technical resources, R&D guidance, and innovation labs to accelerate product development.",
      gradient: "from-vibrant-violet/20 to-bright-orange/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-surface to-darker-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal-gray mb-6 bg-gradient-to-r from-electric-teal to-vibrant-violet bg-clip-text text-transparent">
            How We Accelerate Your Success
          </h2>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
            Our comprehensive support ecosystem is designed to transform promising startups into industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group glass-card hover:scale-105 transition-all duration-500 border-0 hover:shadow-2xl relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <CardContent className="p-8 relative z-10">
                <div className="flex items-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-electric-teal/20 to-vibrant-violet/20 rounded-2xl group-hover:from-electric-teal/30 group-hover:to-vibrant-violet/30 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <service.icon className="w-8 h-8 text-electric-teal group-hover:text-bright-orange transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray mb-4 group-hover:text-electric-teal transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-charcoal-gray/70 leading-relaxed group-hover:text-charcoal-gray/90 transition-colors duration-500">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
