
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
            How We Accelerate Your Success
          </h2>
          <p className="text-xl font-inter font-light text-gray-600 max-w-3xl mx-auto">
            Our comprehensive support ecosystem is designed to transform promising startups into industry leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-inter font-light">
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
