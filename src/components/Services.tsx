
import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Users, TrendingUp, Target, Zap, Lightbulb } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: DollarSign,
      title: "Fueling Success",
      description: "Investments from $100K to $5M that power your growth and amplify your impact.",
      gradient: "from-bright-orange/20 to-vibrant-violet/20"
    },
    {
      icon: Users,
      title: "Guides Who Get You",
      description: "Mentors and experts who champion your vision and sharpen your competitive edge.",
      gradient: "from-electric-teal/20 to-bright-orange/20"
    },
    {
      icon: Target,
      title: "Partners That Propel",
      description: "Connections and collaborations that open doors and drive results.",
      gradient: "from-vibrant-violet/20 to-electric-teal/20"
    },
    {
      icon: Zap,
      title: "Proof That Matters",
      description: "Data and insights that validate your product-market fit with certainty.",
      gradient: "from-electric-teal/20 to-vibrant-violet/20"
    },
    {
      icon: TrendingUp,
      title: "Growth That Goes Far",
      description: "Scalable strategies to unlock your full market potential.",
      gradient: "from-bright-orange/20 to-electric-teal/20"
    },
    {
      icon: Lightbulb,
      title: "Innovation in Action",
      description: "Tech, R&D, and tools that bring your breakthrough ideas to life.",
      gradient: "from-vibrant-violet/20 to-bright-orange/20"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-dark-surface to-darker-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal-gray mb-6 bg-gradient-to-r from-electric-teal to-vibrant-violet bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed mb-8">
            At VEmpower Ventures, we don't just invest — we empower movements. By combining capital, mentorship, partnerships, and a thriving ecosystem, we help bold ideas scale fast and last long.
          </p>
          <h3 className="text-3xl font-bold text-bright-orange mb-4">Driving Impact Together</h3>
          <p className="text-lg text-charcoal-gray/70 max-w-2xl mx-auto">
            Scaling Vision into Impact by empowering startups with capital, connections, and guidance to become industry leaders.
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

        <div className="mt-16 text-center">
          <p className="text-2xl font-bold text-bright-orange">
            Let's turn your vision into the next big impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
