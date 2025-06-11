
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
    <section className="py-24 bg-gradient-to-b from-dark-surface to-darker-surface">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-charcoal-gray mb-6 bg-gradient-to-r from-bright-orange to-electric-teal bg-clip-text text-transparent">
            Ready to Pitch Your Idea?
          </h2>
          <p className="text-xl text-charcoal-gray/80 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your vision into a successful business
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Sparkles className="w-5 h-5 text-electric-teal animate-pulse" />
            <span className="text-electric-teal font-medium">Your innovation journey starts here</span>
            <Sparkles className="w-5 h-5 text-bright-orange animate-pulse delay-500" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <Card className="glass-card border-electric-teal/20 hover:border-electric-teal/40 transition-all duration-500">
            <CardContent className="p-10">
              <h3 className="text-3xl font-bold text-charcoal-gray mb-8 bg-gradient-to-r from-electric-teal to-vibrant-violet bg-clip-text text-transparent">Submit Your Pitch</h3>
              
              {/* Enhanced Math Problem */}
              <Card className="mb-8 glass-effect border border-electric-teal/30 hover:border-electric-teal/50 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Calculator className="w-6 h-6 text-electric-teal mr-3" />
                    <h4 className="font-semibold text-charcoal-gray text-lg">Quick Math Check</h4>
                  </div>
                  <p className="text-charcoal-gray/80 mb-4">Please solve this simple math problem to proceed:</p>
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-xl text-charcoal-gray bg-glass-bg px-4 py-2 rounded-lg">{mathProblem}</span>
                    <Input 
                      value={mathAnswer}
                      onChange={(e) => setMathAnswer(e.target.value)}
                      placeholder="Your answer"
                      className="w-32 text-center border-electric-teal/50 focus:border-electric-teal bg-glass-bg text-charcoal-gray"
                    />
                    {mathAnswer === correctAnswer && (
                      <span className="text-bright-orange font-semibold flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        Correct!
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-gray mb-3">
                      First Name
                    </label>
                    <Input placeholder="John" className="border-electric-teal/30 focus:border-electric-teal bg-glass-bg text-charcoal-gray" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-gray mb-3">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="border-electric-teal/30 focus:border-electric-teal bg-glass-bg text-charcoal-gray" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-3">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@startup.com" className="border-electric-teal/30 focus:border-electric-teal bg-glass-bg text-charcoal-gray" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-3">
                    Company Name
                  </label>
                  <Input placeholder="Your Startup" className="border-electric-teal/30 focus:border-electric-teal bg-glass-bg text-charcoal-gray" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-3">
                    Funding Stage
                  </label>
                  <select className="w-full p-4 border border-electric-teal/30 rounded-lg focus:border-electric-teal focus:outline-none focus:ring-2 focus:ring-electric-teal/20 bg-glass-bg text-charcoal-gray">
                    <option>Pre-Seed</option>
                    <option>Seed</option>
                    <option>Series A</option>
                    <option>Series B</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-3">
                    Funding Amount Sought
                  </label>
                  <Input placeholder="$500,000" className="border-electric-teal/30 focus:border-electric-teal bg-glass-bg text-charcoal-gray" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-3">
                    Pitch Summary
                  </label>
                  <Textarea 
                    placeholder="Describe your business idea, market opportunity, and what makes your startup unique..."
                    rows={5}
                    className="border-electric-teal/30 focus:border-electric-teal bg-glass-bg text-charcoal-gray"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-bright-orange to-vibrant-violet hover:from-bright-orange/90 hover:to-vibrant-violet/90 text-pure-white py-4 text-lg font-semibold shadow-2xl orange-glow hover:scale-105 transition-all duration-300"
                  disabled={mathAnswer !== correctAnswer}
                >
                  Submit Pitch
                  <Send className="ml-3 w-5 h-5" />
                </Button>
                
                {mathAnswer !== correctAnswer && (
                  <p className="text-sm text-bright-orange text-center flex items-center justify-center gap-2">
                    <Calculator className="w-4 h-4" />
                    Please solve the math problem above to enable submission
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Enhanced Contact Information */}
          <div className="space-y-8">
            <Card className="glass-card border-electric-teal/20 hover:border-electric-teal/40 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center">
                  <div className="p-4 bg-gradient-to-br from-electric-teal/20 to-vibrant-violet/20 rounded-2xl mr-6">
                    <Mail className="w-8 h-8 text-electric-teal" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-gray text-lg mb-2">Email Us</h4>
                    <p className="text-charcoal-gray/80 text-lg">pitch@vempower.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-bright-orange/20 hover:border-bright-orange/40 hover:scale-105 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-center">
                  <div className="p-4 bg-gradient-to-br from-bright-orange/20 to-vibrant-violet/20 rounded-2xl mr-6">
                    <MapPin className="w-8 h-8 text-bright-orange" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-gray text-lg mb-2">Visit Us</h4>
                    <p className="text-charcoal-gray/80">The Meydan Grandstand 6th floor, #665<br />Meydan Road, Dubai U.A.E.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="glass-card rounded-3xl p-8 border border-vibrant-violet/20 hover:border-vibrant-violet/40 transition-all duration-500">
              <h4 className="text-2xl font-bold text-charcoal-gray mb-6 bg-gradient-to-r from-vibrant-violet to-electric-teal bg-clip-text text-transparent">Why Choose VEmpower?</h4>
              <ul className="space-y-4 text-charcoal-gray/80">
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-electric-teal rounded-full mr-4 animate-pulse"></div>
                  Fast decision-making process (30 days or less)
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-vibrant-violet rounded-full mr-4 animate-pulse delay-200"></div>
                  Hands-on mentorship from industry experts
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-bright-orange rounded-full mr-4 animate-pulse delay-400"></div>
                  Access to our extensive network of partners
                </li>
                <li className="flex items-center">
                  <div className="w-3 h-3 bg-electric-teal rounded-full mr-4 animate-pulse delay-600"></div>
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
