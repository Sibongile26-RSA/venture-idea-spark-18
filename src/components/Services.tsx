
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Users, DollarSign, Rocket, Target, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Seed & Series A Funding",
      description: "Strategic capital investment from $100K to $5M to fuel your growth trajectory and scale your operations."
    },
    {
      icon: Users,
      title: "Mentorship & Advisory",
      description: "Access to our network of successful entrepreneurs, industry experts, and seasoned advisors."
    },
    {
      icon: Rocket,
      title: "Business Development",
      description: "Strategic partnerships, customer introductions, and go-to-market strategy development."
    },
    {
      icon: Target,
      title: "Market Validation",
      description: "Data-driven market research and validation to refine your product-market fit strategy."
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description: "Scalable growth frameworks and operational excellence to maximize your market potential."
    },
    {
      icon: Lightbulb,
      title: "Innovation Support",
      description: "Technical resources, R&D guidance, and innovation labs to accelerate product development."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-pure-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal-gray mb-4">
            How We Accelerate Your Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive support ecosystem is designed to transform promising startups into industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-pure-white hover:bg-gradient-to-br hover:from-electric-teal/5 hover:to-vibrant-violet/5">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-electric-teal/10 to-vibrant-violet/10 rounded-xl group-hover:from-electric-teal/20 group-hover:to-vibrant-violet/20 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-deep-indigo group-hover:text-vibrant-violet transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-charcoal-gray mb-3 group-hover:text-deep-indigo transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
