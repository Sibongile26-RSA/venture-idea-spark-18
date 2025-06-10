
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Calculator, Sparkles, Shield, Clock } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [mathAnswer, setMathAnswer] = useState("");
  const mathProblem = "15 + 27 = ?";
  const correctAnswer = "42";

  return (
    <section className="py-32 bg-gradient-to-br from-vempower-surface via-vempower-dark to-vempower-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 gradient-primary rounded-full opacity-10 blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 gradient-accent rounded-full opacity-10 blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="inline-flex items-center glass-strong rounded-full px-6 py-3 mb-8">
            <Send className="w-4 h-4 text-vempower-accent mr-2" />
            <span className="text-vempower-accent font-mono text-sm font-semibold tracking-wider uppercase">
              Get Started
            </span>
          </div>
          <h2 className="text-display text-gradient-primary mb-8">
            Ready to Pitch Your Idea?
          </h2>
          <p className="text-body text-vempower-text-muted max-w-4xl mx-auto">
            Transform your vision into reality with our strategic partnership and investment support
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="glass-strong border-vempower-border shadow-glow rounded-3xl overflow-hidden">
            <CardContent className="p-12">
              <h3 className="text-title text-gradient-accent mb-8">Submit Your Pitch</h3>
              
              {/* Security Verification */}
              <Card className="glass rounded-2xl mb-8 border-vempower-accent/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center mr-3">
                      <Shield className="w-5 h-5 text-vempower-dark" />
                    </div>
                    <h4 className="font-semibold text-vempower-text">Security Verification</h4>
                  </div>
                  <p className="text-vempower-text-muted mb-4 text-sm">Please solve this verification to proceed:</p>
                  <div className="flex items-center space-x-4">
                    <span className="font-mono text-lg text-vempower-accent font-bold bg-vempower-surface px-4 py-2 rounded-xl">
                      {mathProblem}
                    </span>
                    <Input 
                      value={mathAnswer}
                      onChange={(e) => setMathAnswer(e.target.value)}
                      placeholder="Answer"
                      className="w-24 text-center glass border-vempower-border text-vempower-text placeholder:text-vempower-text-muted focus:border-vempower-accent rounded-xl"
                    />
                    {mathAnswer === correctAnswer && (
                      <div className="flex items-center text-vempower-success">
                        <Sparkles className="w-4 h-4 mr-1" />
                        <span className="text-sm font-semibold">Verified!</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-vempower-text mb-3">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="glass border-vempower-border text-vempower-text placeholder:text-vempower-text-muted focus:border-vempower-accent rounded-xl h-12" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-vempower-text mb-3">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="glass border-vempower-border text-vempower-text placeholder:text-vempower-text-muted focus:border-vempower-accent rounded-xl h-12" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-vempower-text mb-3">
                    Email Address
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john@startup.com" 
                    className="glass border-vempower-border text-vempower-text placeholder:text-vempower-text-muted focus:border-vempower-accent rounded-xl h-12" 
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-vempower-text mb-3">
                    Company Name
                  </label>
                  <Input 
                    placeholder="Your Startup" 
                    className="glass border-vempower-border text-vempower-text placeholder:text-vempower-text-muted focus:border-vempower-accent rounded-xl h-12" 
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-vempower-text mb-3">
                      Funding Stage
                    </label>
                    <select className="w-full h-12 glass border border-vempower-border rounded-xl text-vempower-text focus:border-vempower-accent focus:outline-none focus:ring-2 focus:ring-vempower-accent/30 px-4">
                      <option className="bg-vempower-dark text-vempower-text">Pre-Seed</option>
                      <option className="bg-vempower-dark text-vempower-text">Seed</option>
                      <option className="bg-vempower-dark text-vempower-text">Series A</option>
                      <option className="bg-vempower-dark text-vempower-text">Series B</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-vempower-text mb-3">
                      Funding Amount
                    </label>
                    <Input 
                      placeholder="$500,000" 
                      className="glass border-vempower-border text-vempower-text placeholder:text-vempower-text-muted focus:border-vempower-accent rounded-xl h-12" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-vempower-text mb-3">
                    Pitch Summary
                  </label>
                  <Textarea 
                    placeholder="Describe your business idea, market opportunity, and what makes your startup unique..."
                    rows={5}
                    className="glass border-vempower-border text-vempower-text placeholder:text-vempower-text-muted focus:border-vempower-accent rounded-xl resize-none"
                  />
                </div>

                <Button 
                  className="w-full gradient-primary hover:opacity-90 text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-glow rounded-xl h-14"
                  disabled={mathAnswer !== correctAnswer}
                >
                  Submit Pitch
                  <Send className="ml-3 w-5 h-5" />
                </Button>
                
                {mathAnswer !== correctAnswer && (
                  <p className="text-sm text-vempower-accent text-center bg-vempower-accent/10 py-2 px-4 rounded-xl">
                    Please complete the security verification above to enable submission
                  </p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <Card className="glass border-vempower-border hover:glass-strong transition-all duration-300 interactive rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mr-6 shadow-glow">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vempower-text text-xl mb-2">Email Us</h4>
                    <p className="text-vempower-accent text-lg font-medium">pitch@vempower.org</p>
                    <p className="text-vempower-text-muted text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass border-vempower-border hover:glass-strong transition-all duration-300 interactive rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mr-6 shadow-glow-accent">
                    <MapPin className="w-8 h-8 text-vempower-dark" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-vempower-text text-xl mb-2">Visit Us</h4>
                    <p className="text-vempower-text-muted leading-relaxed">
                      The Meydan Grandstand 6th floor, #665<br />
                      Meydan Road, Dubai U.A.E.
                    </p>
                    <p className="text-vempower-accent text-sm mt-2 font-medium">Open for meetings by appointment</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose VEmpower */}
            <div className="glass-strong rounded-3xl p-10 border border-vempower-accent/30">
              <h4 className="text-title text-gradient-accent mb-8">Why Partner With Us?</h4>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 gradient-accent rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                    <Clock className="w-3 h-3 text-vempower-dark" />
                  </div>
                  <div>
                    <h5 className="text-vempower-text font-semibold mb-1">Rapid Decision Process</h5>
                    <p className="text-vempower-text-muted text-sm">Investment decisions within 30 days, not months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 gradient-primary rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <div>
                    <h5 className="text-vempower-text font-semibold mb-1">Hands-on Mentorship</h5>
                    <p className="text-vempower-text-muted text-sm">Direct access to industry experts and successful entrepreneurs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 gradient-accent rounded-full mr-4 mt-1 flex-shrink-0 flex items-center justify-center">
                    <Send className="w-3 h-3 text-vempower-dark" />
                  </div>
                  <div>
                    <h5 className="text-vempower-text font-semibold mb-1">Global Network Access</h5>
                    <p className="text-vempower-text-muted text-sm">Connections across 190+ countries and diverse industries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
