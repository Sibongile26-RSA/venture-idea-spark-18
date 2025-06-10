
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import VEmpowerLogo from "./VEmpowerLogo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <VEmpowerLogo size="lg" className="mr-4 filter brightness-0 invert" />
              <div>
                <h3 className="text-2xl font-bold">VEmpower Ventures</h3>
                <p className="text-slate-400">Empowering Innovation</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              We partner with visionary entrepreneurs to transform groundbreaking ideas into 
              market-leading companies through strategic investment and expert guidance.
            </p>
            <div className="flex space-x-4">
              <div className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="p-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-slate-300 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#process" className="text-slate-300 hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">hello@vempower.ventures</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span className="text-slate-300">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400">
            © 2024 VEmpower Ventures. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
