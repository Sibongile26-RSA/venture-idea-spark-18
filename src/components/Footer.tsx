
import { TrendingUp, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-jetbrains font-bold">VEmpower Ventures</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed font-jetbrains font-light">
              Empowering the next generation of innovative startups through strategic investment, 
              mentorship, and partnerships. We believe in transforming bold ideas into successful 
              businesses that shape the future.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="p-2 bg-blue-400 rounded-lg hover:bg-blue-500 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-jetbrains font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors font-jetbrains font-light">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-jetbrains font-light">Our Portfolio</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-jetbrains font-light">Investment Process</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-jetbrains font-light">Success Stories</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors font-jetbrains font-light">Resources</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-jetbrains font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm font-jetbrains font-light">pitch@vempowerventures.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm font-jetbrains font-light">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-blue-400 mt-1" />
                <span className="text-sm font-jetbrains font-light">123 Innovation Drive<br />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm font-jetbrains font-light">
            © 2024 VEmpower Ventures. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-jetbrains font-light">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-jetbrains font-light">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors font-jetbrains font-light">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
