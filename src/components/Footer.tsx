
import { Sparkles, Mail, MapPin, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vempower-dark border-t border-vempower-border py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-8">
              <div className="w-14 h-14 gradient-primary rounded-2xl flex items-center justify-center mr-4 shadow-glow animate-pulse-glow">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gradient-primary">
                VEmpower Ventures
              </h3>
            </div>
            <p className="text-vempower-text-muted mb-8 leading-relaxed text-lg max-w-md">
              Empowering the next generation of innovative startups through strategic investment, 
              mentorship, and partnerships. We transform bold ideas into successful businesses.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mb-8">
              <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center hover:opacity-80 transition-all cursor-pointer shadow-glow transform hover:scale-105 interactive">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div className="w-12 h-12 gradient-accent rounded-xl flex items-center justify-center hover:opacity-80 transition-all cursor-pointer shadow-glow-accent transform hover:scale-105 interactive">
                <Twitter className="w-6 h-6 text-vempower-dark" />
              </div>
            </div>

            {/* Newsletter */}
            <div className="glass-strong rounded-2xl p-6 max-w-md">
              <h4 className="text-lg font-semibold text-vempower-text mb-3">Stay Updated</h4>
              <p className="text-vempower-text-muted text-sm mb-4">Get the latest investment opportunities and startup insights</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 glass border-vempower-border rounded-l-xl px-4 py-2 text-vempower-text placeholder:text-vempower-text-muted focus:border-vempower-accent focus:outline-none"
                />
                <button className="gradient-primary px-4 py-2 rounded-r-xl hover:opacity-90 transition-opacity">
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-gradient-accent">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Portfolio', 'Investment Process', 'Success Stories', 'Resources', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-vempower-text-muted hover:text-vempower-accent transition-colors duration-300 text-lg group flex items-center">
                    <span>{link}</span>
                    <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-8 text-gradient-accent">Contact</h4>
            <div className="space-y-6">
              <div className="glass rounded-xl p-4 hover:glass-strong transition-all duration-300 interactive">
                <div className="flex items-center">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center mr-3">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-vempower-text-muted text-sm">Email</div>
                    <div className="text-vempower-accent font-medium">pitch@vempower.org</div>
                  </div>
                </div>
              </div>
              
              <div className="glass rounded-xl p-4 hover:glass-strong transition-all duration-300 interactive">
                <div className="flex items-start">
                  <div className="w-10 h-10 gradient-accent rounded-xl flex items-center justify-center mr-3 mt-1">
                    <MapPin className="w-5 h-5 text-vempower-dark" />
                  </div>
                  <div>
                    <div className="text-vempower-text-muted text-sm mb-1">Office</div>
                    <div className="text-vempower-text leading-relaxed text-sm">
                      The Meydan Grandstand 6th floor, #665<br />
                      Meydan Road, Dubai U.A.E.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-vempower-border my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-vempower-text-muted text-lg">
            © 2024 VEmpower Ventures. All rights reserved.
          </div>
          <div className="flex space-x-8 mt-6 md:mt-0">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
              <a key={link} href="#" className="text-vempower-text-muted hover:text-vempower-accent text-lg transition-colors group">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
