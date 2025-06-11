
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import VEmpowerLogo from "./VEmpowerLogo";

const Footer = () => {
  return (
    <footer className="bg-deep-indigo text-pure-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <VEmpowerLogo size="md" className="mr-3" />
              <h3 className="text-2xl font-bold">VEmpower Ventures</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering the next generation of innovative startups through strategic investment, 
              mentorship, and partnerships. We believe in transforming bold ideas into successful 
              businesses that shape the future.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-electric-teal rounded-lg hover:bg-electric-teal/80 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="p-2 bg-bright-orange rounded-lg hover:bg-bright-orange/80 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-electric-teal transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors">Investment Process</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-electric-teal transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-electric-teal" />
                <span className="text-sm">pitch@vempower.org</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-electric-teal mt-1" />
                <span className="text-sm">The Meydan Grandstand 6th floor, #665<br />Meydan Road, Dubai U.A.E.</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 VEmpower Ventures. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-electric-teal text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-electric-teal text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-electric-teal text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
