
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const companies = [
    {
      name: "4excelerate",
      country: "UAE, United States",
      sector: "EdTech",
      stage: "Series A",
      description: "Transforming education through immersive experiential learning and real-world skill development.",
      image: "photo-1498050108023-c5249f4df085",
      valuation: "$11.1M",
      website: "4excelerate.org",
      growth: "+340%"
    },
    {
      name: "Globally Recruit",
      country: "UAE, United States",
      sector: "EdTech",
      stage: "Seed", 
      description: "Reimagining student recruitment for a more connected and inclusive global education ecosystem.",
      image: "photo-1486312338219-ce68d2c6f44d",
      valuation: "$10.5M",
      website: "globallyrecruit.net",
      growth: "+280%"
    },
    {
      name: "Catalystia",
      country: "United States",
      sector: "Business Development",
      stage: "Seed",
      description: "Empowering changemakers with the tools and strategies to lead transformative growth.",
      image: "photo-1461749280684-dccba630e2f6",
      valuation: "$4.2M",
      website: "catalystia.org",
      growth: "+190%"
    },
    {
      name: "Pepagora",
      country: "India",
      sector: "E-commerce",
      stage: "Seed",
      description: "AI-first e-commerce that knows what your customers want—before they do.",
      image: "photo-1556742049-0cfed4f6a45d",
      valuation: "$20M",
      website: "pepagora.com",
      growth: "+450%"
    },
    {
      name: "GlobalShala Education",
      country: "India",
      sector: "EdTech",
      stage: "Pre-Seed",
      description: "Bringing world-class learning to underserved communities—one student at a time.",
      image: "photo-1509062522246-3755977927d7",
      valuation: "$3.5M",
      website: "globalshala.com",
      growth: "+120%"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-darker-surface to-dark-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal-gray mb-6 bg-gradient-to-r from-vibrant-violet to-bright-orange bg-clip-text text-transparent">
            Startups Powered by VEmpower
          </h2>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
            Meet the ventures powered by VEmpower across industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <Card key={index} className="group glass-card overflow-hidden hover:scale-105 transition-all duration-700 border-0 hover:shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-electric-teal/10 to-vibrant-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${company.image}?w=400&h=300&fit=crop`}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker-surface via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  <Badge className="glass-effect text-electric-teal border-electric-teal/30 hover:bg-electric-teal/20">
                    {company.stage}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full">
                    <TrendingUp className="w-4 h-4 text-bright-orange" />
                    <span className="text-bright-orange text-sm font-bold">{company.growth}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-charcoal-gray font-bold text-xl mb-1">{company.name}</h3>
                  <p className="text-charcoal-gray/80 text-sm">{company.country}</p>
                  <p className="text-electric-teal text-sm font-medium">{company.sector}</p>
                </div>
              </div>
              
              <CardContent className="p-6 relative z-10">
                <p className="text-charcoal-gray/80 mb-4 leading-relaxed text-sm">
                  {company.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-sm text-charcoal-gray/60 mr-2">Valuation (2023-24):</span>
                    <span className="font-semibold text-bright-orange text-lg">{company.valuation}</span>
                  </div>
                  <div className="flex items-center group-hover:text-electric-teal transition-colors duration-300 cursor-pointer">
                    <span className="text-sm text-charcoal-gray/60 mr-2">{company.website}</span>
                    <ExternalLink className="w-5 h-5 text-charcoal-gray/60 group-hover:text-electric-teal transition-colors duration-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
