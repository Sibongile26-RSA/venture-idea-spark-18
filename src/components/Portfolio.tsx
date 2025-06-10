
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const companies = [
    {
      name: "4excelerate",
      country: "United States",
      sector: "EdTech",
      stage: "Series A",
      description: "Accelerating educational excellence through innovative learning platforms and student development programs.",
      image: "photo-1498050108023-c5249f4df085",
      valuation: "$11.1M",
      website: "4excelerate.org",
      gradient: "from-vempower-primary to-vempower-secondary"
    },
    {
      name: "Globally Recruit",
      country: "Canada",
      sector: "HR Tech",
      stage: "Seed", 
      description: "Global recruitment platform connecting talented professionals with opportunities worldwide.",
      image: "photo-1486312338219-ce68d2c6f44d",
      valuation: "$10.5M",
      website: "globallyrecruit.net",
      gradient: "from-vempower-secondary to-vempower-accent"
    },
    {
      name: "Catalystia",
      country: "United States",
      sector: "Business Development",
      stage: "Seed",
      description: "Empowering businesses through strategic frameworks, innovation consulting, and growth acceleration programs.",
      image: "photo-1461749280684-dccba630e2f6",
      valuation: "$4.2M",
      website: "catalystia.org",
      gradient: "from-vempower-accent to-vempower-primary"
    },
    {
      name: "Pepagora",
      country: "India",
      sector: "E-commerce",
      stage: "Seed",
      description: "Revolutionary e-commerce platform transforming online shopping experiences with AI-driven personalization and seamless marketplace integration.",
      image: "photo-1556742049-0cfed4f6a45d",
      valuation: "$20M",
      website: "pepagora.com",
      gradient: "from-vempower-primary to-vempower-secondary"
    },
    {
      name: "Global Shala",
      country: "India",
      sector: "EdTech",
      stage: "Pre-Seed",
      description: "Democratizing quality education globally through innovative online learning solutions and accessible skill development programs.",
      image: "photo-1509062522246-3755977927d7",
      valuation: "$3.5M",
      website: "globalshala.com",
      gradient: "from-vempower-secondary to-vempower-accent"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-vempower-dark via-vempower-dark to-vempower-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-bold text-white mb-6">
            Our Portfolio Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover the innovative companies we've partnered with and helped scale to new heights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center max-w-7xl mx-auto">
          {companies.map((company, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border-0 bg-white/5 backdrop-blur-lg hover:bg-white/10">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${company.image}?w=500&h=350&fit=crop`}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${company.gradient} opacity-60`}></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-vempower-dark hover:bg-white font-semibold">
                    {company.stage}
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white font-display font-bold text-2xl mb-2">{company.name}</h3>
                  <p className="text-gray-200 text-sm font-medium">{company.country} • {company.sector}</p>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {company.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-vempower-accent mr-2" />
                    <span className="text-sm text-gray-400 mr-2">Valuation:</span>
                    <span className="font-bold text-vempower-accent text-lg">{company.valuation}</span>
                  </div>
                  <div className="flex items-center group/link cursor-pointer">
                    <span className="text-sm text-gray-400 mr-2 group-hover/link:text-vempower-accent transition-colors">{company.website}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover/link:text-vempower-accent transition-colors duration-300" />
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
