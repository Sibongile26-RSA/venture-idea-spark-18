import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const companies = [
    {
      name: "4excelerate",
      sector: "EdTech",
      stage: "Series A",
      description: "Accelerating educational excellence through innovative learning platforms and student development programs.",
      image: "photo-1498050108023-c5249f4df085",
      funding: "$2.1M",
      website: "4excelerate.org"
    },
    {
      name: "Globally Recruit",
      sector: "HR Tech",
      stage: "Seed", 
      description: "Global recruitment platform connecting talented professionals with opportunities worldwide.",
      image: "photo-1486312338219-ce68d2c6f44d",
      funding: "$1.5M",
      website: "globallyrecruit.net"
    },
    {
      name: "Catalystia",
      sector: "Business Development",
      stage: "Seed",
      description: "Empowering businesses through strategic frameworks, innovation consulting, and growth acceleration programs.",
      image: "photo-1461749280684-dccba630e2f6",
      funding: "$1.2M",
      website: "catalystia.org"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-jetbrains font-bold text-gray-900 mb-4">
            Our Portfolio Success Stories
          </h2>
          <p className="text-xl font-jetbrains font-light text-gray-600 max-w-3xl mx-auto">
            Discover the innovative companies we've partnered with and helped scale to new heights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto">
          {companies.map((company, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${company.image}?w=400&h=300&fit=crop`}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-white/90 text-gray-900 hover:bg-white font-jetbrains font-medium">
                    {company.stage}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-jetbrains font-bold text-xl mb-1">{company.name}</h3>
                  <p className="text-gray-200 text-sm font-jetbrains font-light">{company.sector}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed font-jetbrains font-light">
                  {company.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2 font-jetbrains">Funding:</span>
                    <span className="font-semibold text-green-600 font-jetbrains">{company.funding}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 mr-2 font-jetbrains">{company.website}</span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer" />
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
