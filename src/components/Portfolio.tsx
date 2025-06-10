
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingUp, MapPin, Calendar } from "lucide-react";

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
      year: "2023",
      growth: "+340%"
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
      year: "2023",
      growth: "+280%"
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
      year: "2022",
      growth: "+190%"
    },
    {
      name: "Pepagora",
      country: "India",
      sector: "E-commerce",
      stage: "Seed",
      description: "Revolutionary e-commerce platform transforming online shopping experiences with AI-driven personalization.",
      image: "photo-1556742049-0cfed4f6a45d",
      valuation: "$20M",
      website: "pepagora.com",
      year: "2024",
      growth: "+450%"
    },
    {
      name: "Global Shala",
      country: "India",
      sector: "EdTech",
      stage: "Pre-Seed",
      description: "Democratizing quality education globally through innovative online learning solutions and accessible skill development.",
      image: "photo-1509062522246-3755977927d7",
      valuation: "$3.5M",
      website: "globalshala.com",
      year: "2024",
      growth: "+120%"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-vempower-surface via-vempower-dark to-vempower-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 gradient-primary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 gradient-accent rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center glass-strong rounded-full px-6 py-3 mb-8">
            <span className="text-vempower-accent font-mono text-sm font-semibold tracking-wider uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-display text-gradient-primary mb-8">
            Success Stories
          </h2>
          <p className="text-body text-vempower-text-muted max-w-4xl mx-auto">
            Discover the innovative companies we've partnered with and helped scale to new heights across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <Card key={index} className="glass group overflow-hidden hover:glass-strong transition-all duration-700 transform hover:-translate-y-2 border-vempower-border rounded-3xl shadow-glow">
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${company.image}?w=500&h=350&fit=crop`}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-vempower-dark/80 via-transparent to-transparent"></div>
                
                {/* Stage Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="glass-strong text-vempower-accent border-vempower-border font-semibold px-3 py-1">
                    {company.stage}
                  </Badge>
                </div>

                {/* Growth Indicator */}
                <div className="absolute top-4 left-4">
                  <div className="glass-strong rounded-full px-3 py-1 flex items-center">
                    <TrendingUp className="w-4 h-4 text-vempower-success mr-1" />
                    <span className="text-vempower-success text-sm font-semibold">{company.growth}</span>
                  </div>
                </div>

                {/* Company Name Overlay */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-white font-bold text-2xl mb-1">{company.name}</h3>
                  <div className="flex items-center text-gray-300 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{company.country} • {company.sector}</span>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <CardContent className="p-8">
                <p className="text-vempower-text-muted mb-6 leading-relaxed">
                  {company.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 text-vempower-accent mr-2" />
                    <span className="text-sm text-vempower-text-muted">{company.year}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-vempower-text-muted mr-2">Valuation:</span>
                    <span className="font-bold text-vempower-accent text-lg">{company.valuation}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-vempower-text-muted">{company.website}</span>
                  <ExternalLink className="w-4 h-4 text-vempower-accent hover:text-vempower-accent/80 transition-colors cursor-pointer" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Summary */}
        <div className="mt-20 glass-strong rounded-3xl p-10 text-center">
          <h3 className="text-title text-gradient-accent mb-6">Investment Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-vempower-accent mb-2">$50M+</div>
              <div className="text-vempower-text-muted">Total Portfolio Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-vempower-primary mb-2">250%</div>
              <div className="text-vempower-text-muted">Average Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-vempower-secondary mb-2">6 Months</div>
              <div className="text-vempower-text-muted">Average Time to Scale</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-vempower-success mb-2">100%</div>
              <div className="text-vempower-text-muted">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
