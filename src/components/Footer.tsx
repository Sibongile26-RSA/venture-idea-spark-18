
import { Mail, MapPin, Linkedin, Twitter, Sparkles } from "lucide-react";
import VEmpowerLogo from "./VEmpowerLogo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-darker-surface to-deep-indigo text-charcoal-gray py-20 border-t border-electric-teal/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Enhanced Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <VEmpowerLogo size="md" className="mr-4" />
              <h3 className="text-3xl font-bold bg-gradient-to-r from-electric-teal to-vibrant-violet bg-clip-text text-transparent">VEmpower Ventures</h3>
            </div>
            <p className="text-charcoal-gray/80 mb-8 leading-relaxed text-lg">
              Empowering the next generation of innovative startups through strategic investment, 
              mentorship, and partnerships. We believe in transforming bold ideas into successful 
              businesses that shape the future.
            </p>
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-electric-teal animate-pulse" />
              <span className="text-electric-teal font-medium">Catalyst for your Vision</span>
              <Sparkles className="w-5 h-5 text-bright-orange animate-pulse delay-500" />
            </div>
            <div className="flex space-x-4">
              <div className="p-3 glass-effect rounded-xl hover:bg-electric-teal/20 transition-all duration-300 cursor-pointer group hover:scale-110">
                <Linkedin className="w-6 h-6 text-electric-teal group-hover:text-bright-orange transition-colors duration-300" />
              </div>
              <div className="p-3 glass-effect rounded-xl hover:bg-bright-orange/20 transition-all duration-300 cursor-pointer group hover:scale-110">
                <Twitter className="w-6 h-6 text-bright-orange group-hover:text-electric-teal transition-colors duration-300" />
              </div>
            </div>
          </div>

          {/* Enhanced Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-electric-teal">Quick Links</h4>
            <ul className="space-y-4 text-charcoal-gray/80">
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300 text-lg hover:translate-x-2 inline-block transition-transform">About Us</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300 text-lg hover:translate-x-2 inline-block transition-transform">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300 text-lg hover:translate-x-2 inline-block transition-transform">Investment Process</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300 text-lg hover:translate-x-2 inline-block transition-transform">Success Stories</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors duration-300 text-lg hover:translate-x-2 inline-block transition-transform">Resources</a></li>
            </ul>
          </div>

          {/* Enhanced Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-bright-orange">Contact</h4>
            <div className="space-y-4 text-charcoal-gray/80">
              <div className="flex items-center group">
                <Mail className="w-5 h-5 mr-4 text-electric-teal group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">pitch@vempower.org</span>
              </div>
              <div className="flex items-start group">
                <MapPin className="w-5 h-5 mr-4 text-electric-teal mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-lg">The Meydan Grandstand 6th floor, #665<br />Meydan Road, Dubai U.A.E.</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-electric-teal/30 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-charcoal-gray/60 text-lg">
            © 2024 VEmpower Ventures. All rights reserved.
          </div>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-charcoal-gray/60 hover:text-electric-teal text-lg transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-charcoal-gray/60 hover:text-electric-teal text-lg transition-colors duration-300">Terms of Service</a>
            <a href="#" className="text-charcoal-gray/60 hover:text-electric-teal text-lg transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
