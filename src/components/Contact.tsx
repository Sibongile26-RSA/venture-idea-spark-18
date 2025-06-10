
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Calculator, Sparkles } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [mathAnswer, setMathAnswer] = useState("");
  const mathProblem = "15 + 27 = ?";
  const correctAnswer = "42";

  return (
    <section className="py-24 bg-gradient-to-br from-vempower-dark via-vempower-dark to-vempower-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-bold text-white mb-6">
            Ready to Pitch Your Idea?
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your vision into a successful business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl bg-white/5 backdrop-blur-lg">
            <CardContent className="p-10">
              <h3 className="text-3xl font-display font-bold text-white mb-8">Submit Your Pitch</h3>
              
              {/* Math Problem */}
              <Card className="mb-8 bg-gradient-to-r from-vempower-primary/20 to-vempower-secondary/20 border border-vempower-accent/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calculator className="w-6 h-6 text-vempower-accent mr-3" />
                    <h4 className="font-display font-semibold text-white">Quick Math Check</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Please solve this simple math problem to proceed:</p>
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-lg text-vempower-accent font-bold">{mathProblem}</span>
                    <Input 
                      value={mathAnswer}
                      onChange={(e) => setMathAnswer(e.target.value)}
                      placeholder="Your answer"
                      className="w-28 text-center bg-white/10 border-vempower-accent/50 text-white placeholder:text-gray-400 focus:border-vempower-accent"
                    />
                    {mathAnswer === correctAnswer && (
                      <span className="text-vempower-accent font-semibold flex items-center">
                        <Sparkles className="w-4 h-4 mr-1" />
                        Correct!
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      First Name
                    </label>
                    <Input placeholder="John" className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-vempower-accent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-vempower-accent" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@startup.com" className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-vempower-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Company Name
                  </label>
                  <Input placeholder="Your Startup" className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-vempower-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Funding Stage
                  </label>
                  <select className="w-full p-4 border border-gray-600 rounded-lg bg-white/10 text-white focus:border-vempower-accent focus:outline-none focus:ring-2 focus:ring-vempower-accent/30">
                    <option className="bg-vempower-dark text-white">Pre-Seed</option>
                    <option className="bg-vempower-dark text-white">Seed</option>
                    <option className="bg-vempower-dark text-white">Series A</option>
                    <option className="bg-vempower-dark text-white">Series B</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Funding Amount Sought
                  </label>
                  <Input placeholder="$500,000" className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-vempower-accent" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Pitch Summary
                  </label>
                  <Textarea 
                    placeholder="Describe your business idea, market opportunity, and what makes your startup unique..."
                    rows={5}
                    className="bg-white/10 border-gray-600 text-white placeholder:text-gray-400 focus:border-vempower-accent"
                  />
                </div>

                <Button 
                  className="w-full gradient-vempower hover:opacity-90 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                  disabled={mathAnswer !== correctAnswer}
                >
                  Submit Pitch
                  <Send className="ml-3 w-5 h-5" />
                </Button>
                
                {mathAnswer !== correctAnswer && (
                  <p className="text-sm text-vempower-accent text-center">
                    Please solve the math problem above to enable submission
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center">
                  <div className="p-4 bg-gradient-to-br from-vempower-primary to-vempower-secondary rounded-2xl mr-6 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-xl mb-2">Email Us</h4>
                    <p className="text-vempower-accent text-lg">pitch@vempower.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="p-4 bg-gradient-to-br from-vempower-secondary to-vempower-accent rounded-2xl mr-6 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-white text-xl mb-2">Visit Us</h4>
                    <p className="text-gray-300 leading-relaxed">
                      The Meydan Grandstand 6th floor, #665<br />
                      Meydan Road, Dubai U.A.E.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-vempower-primary/20 to-vempower-secondary/20 rounded-3xl p-10 border border-vempower-accent/30 backdrop-blur-sm">
              <h4 className="text-2xl font-display font-bold text-white mb-6">Why Choose VEmpower?</h4>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-vempower-accent rounded-full mr-4"></div>
                  Fast decision-making process (30 days or less)
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-vempower-secondary rounded-full mr-4"></div>
                  Hands-on mentorship from industry experts
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-vempower-primary rounded-full mr-4"></div>
                  Access to our extensive network of partners
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-vempower-accent rounded-full mr-4"></div>
                  Ongoing support throughout your growth journey
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
