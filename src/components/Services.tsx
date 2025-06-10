
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, DollarSign, Rocket, Target, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Seed & Series A Funding",
      description: "Strategic capital investment from $100K to $5M to fuel your growth trajectory and scale your operations.",
      color: "from-vempower-primary to-vempower-secondary"
    },
    {
      icon: Users,
      title: "Mentorship & Advisory",
      description: "Access to our network of successful entrepreneurs, industry experts, and seasoned advisors.",
      color: "from-vempower-secondary to-vempower-accent"
    },
    {
      icon: Rocket,
      title: "Business Development",
      description: "Strategic partnerships, customer introductions, and go-to-market strategy development.",
      color: "from-vempower-accent to-vempower-primary"
    },
    {
      icon: Target,
      title: "Market Validation",
      description: "Data-driven market research and validation to refine your product-market fit strategy.",
      color: "from-vempower-primary to-vempower-secondary"
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Scalable growth frameworks and operational excellence to maximize your market potential.",
      color: "from-vempower-secondary to-vempower-accent"
    },
    {
      icon: Lightbulb,
      title: "Innovation Support",
      description: "Technical resources, R&D guidance, and innovation labs to accelerate product development.",
      color: "from-vempower-accent to-vempower-primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-vempower-light via-white to-vempower-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-bold text-vempower-dark mb-6">
            How We Accelerate Your Success
          </h2>
          <p className="text-xl text-vempower-gray max-w-4xl mx-auto leading-relaxed">
            Our comprehensive support ecosystem is designed to transform promising startups into industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white transform hover:-translate-y-3 overflow-hidden">
              <CardContent className="p-8 relative">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${service.color}`}></div>
                </div>
                
                <div className="flex items-center mb-6 relative z-10">
                  <div className={`p-4 bg-gradient-to-br ${service.color} rounded-2xl group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-display font-semibold text-vempower-dark mb-4 group-hover:text-vempower-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-vempower-gray leading-relaxed">
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
