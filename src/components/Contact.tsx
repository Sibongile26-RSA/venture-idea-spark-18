
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Calculator } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [mathAnswer, setMathAnswer] = useState("");
  const mathProblem = "15 + 27 = ?";
  const correctAnswer = "42";

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-pure-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal-gray mb-4">
            Ready to Pitch Your Idea?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss how we can help transform your vision into a successful business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-charcoal-gray mb-6">Submit Your Pitch</h3>
              
              {/* Math Problem */}
              <Card className="mb-6 bg-gradient-to-r from-electric-teal/10 to-vibrant-violet/10 border border-electric-teal/30">
                <CardContent className="p-4">
                  <div className="flex items-center mb-3">
                    <Calculator className="w-5 h-5 text-deep-indigo mr-2" />
                    <h4 className="font-semibold text-charcoal-gray">Quick Math Check</h4>
                  </div>
                  <p className="text-gray-700 mb-3">Please solve this simple math problem to proceed:</p>
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-lg text-charcoal-gray">{mathProblem}</span>
                    <Input 
                      value={mathAnswer}
                      onChange={(e) => setMathAnswer(e.target.value)}
                      placeholder="Your answer"
                      className="w-24 text-center border-electric-teal/50 focus:border-electric-teal"
                    />
                    {mathAnswer === correctAnswer && (
                      <span className="text-bright-orange font-semibold">✓ Correct!</span>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-gray mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="border-gray-300 focus:border-electric-teal" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-gray mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="border-gray-300 focus:border-electric-teal" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@startup.com" className="border-gray-300 focus:border-electric-teal" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-2">
                    Company Name
                  </label>
                  <Input placeholder="Your Startup" className="border-gray-300 focus:border-electric-teal" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-2">
                    Funding Stage
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:border-electric-teal focus:outline-none focus:ring-2 focus:ring-electric-teal/20">
                    <option>Pre-Seed</option>
                    <option>Seed</option>
                    <option>Series A</option>
                    <option>Series B</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-2">
                    Funding Amount Sought
                  </label>
                  <Input placeholder="$500,000" className="border-gray-300 focus:border-electric-teal" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-charcoal-gray mb-2">
                    Pitch Summary
                  </label>
                  <Textarea 
                    placeholder="Describe your business idea, market opportunity, and what makes your startup unique..."
                    rows={5}
                    className="border-gray-300 focus:border-electric-teal"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-bright-orange to-vibrant-violet hover:from-bright-orange/90 hover:to-vibrant-violet/90 text-pure-white py-3 text-lg font-semibold"
                  disabled={mathAnswer !== correctAnswer}
                >
                  Submit Pitch
                  <Send className="ml-2 w-5 h-5" />
                </Button>
                
                {mathAnswer !== correctAnswer && (
                  <p className="text-sm text-bright-orange text-center">
                    Please solve the math problem above to enable submission
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-electric-teal/10 to-vibrant-violet/10 rounded-xl mr-4">
                    <Mail className="w-6 h-6 text-deep-indigo" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-gray">Email Us</h4>
                    <p className="text-gray-600">pitch@vempower.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-vibrant-violet/10 to-bright-orange/10 rounded-xl mr-4">
                    <MapPin className="w-6 h-6 text-vibrant-violet" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-gray">Visit Us</h4>
                    <p className="text-gray-600">The Meydan Grandstand 6th floor, #665<br />Meydan Road, Dubai U.A.E.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-electric-teal/5 to-vibrant-violet/5 rounded-2xl p-8 border border-electric-teal/20">
              <h4 className="text-xl font-bold text-charcoal-gray mb-4">Why Choose VEmpower?</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-electric-teal rounded-full mr-3"></div>
                  Fast decision-making process (30 days or less)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-vibrant-violet rounded-full mr-3"></div>
                  Hands-on mentorship from industry experts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-bright-orange rounded-full mr-3"></div>
                  Access to our extensive network of partners
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-deep-indigo rounded-full mr-3"></div>
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
