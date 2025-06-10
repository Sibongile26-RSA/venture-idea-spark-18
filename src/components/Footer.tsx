
import { TrendingUp, Mail, MapPin, Linkedin, Twitter, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-vempower-dark text-white py-20 border-t border-vempower-primary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-vempower-primary to-vempower-secondary rounded-xl mr-4 shadow-lg">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-display font-bold bg-gradient-to-r from-white to-vempower-accent bg-clip-text text-transparent">
                VEmpower Ventures
              </h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              Empowering the next generation of innovative startups through strategic investment, 
              mentorship, and partnerships. We believe in transforming bold ideas into successful 
              businesses that shape the future.
            </p>
            <div className="flex space-x-4">
              <div className="p-3 bg-gradient-to-r from-vempower-primary to-vempower-secondary rounded-xl hover:opacity-80 transition-all cursor-pointer shadow-lg transform hover:scale-105">
                <Linkedin className="w-6 h-6 text-white" />
              </div>
              <div className="p-3 bg-gradient-to-r from-vempower-secondary to-vempower-accent rounded-xl hover:opacity-80 transition-all cursor-pointer shadow-lg transform hover:scale-105">
                <Twitter className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6 text-vempower-accent">Quick Links</h4>
            <ul className="space-y-4 text-gray-300">
              <li><a href="#" className="hover:text-vempower-accent transition-colors duration-300 text-lg">About Us</a></li>
              <li><a href="#" className="hover:text-vempower-accent transition-colors duration-300 text-lg">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-vempower-accent transition-colors duration-300 text-lg">Investment Process</a></li>
              <li><a href="#" className="hover:text-vempower-accent transition-colors duration-300 text-lg">Success Stories</a></li>
              <li><a href="#" className="hover:text-vempower-accent transition-colors duration-300 text-lg">Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-semibold mb-6 text-vempower-accent">Contact</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-4 text-vempower-accent" />
                <span className="text-lg">pitch@vempower.org</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-4 text-vempower-accent mt-1" />
                <span className="text-lg leading-relaxed">
                  The Meydan Grandstand 6th floor, #665<br />
                  Meydan Road, Dubai U.A.E.
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-vempower-primary/30 my-12" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-lg">
            © 2024 VEmpower Ventures. All rights reserved.
          </div>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-vempower-accent text-lg transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-vempower-accent text-lg transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-vempower-accent text-lg transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
