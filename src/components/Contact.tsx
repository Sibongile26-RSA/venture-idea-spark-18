
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Submit Your Pitch</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input placeholder="John" className="border-gray-300 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input placeholder="Doe" className="border-gray-300 focus:border-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input type="email" placeholder="john@startup.com" className="border-gray-300 focus:border-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <Input placeholder="Your Startup" className="border-gray-300 focus:border-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Stage
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200">
                    <option>Pre-Seed</option>
                    <option>Seed</option>
                    <option>Series A</option>
                    <option>Series B</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Funding Amount Sought
                  </label>
                  <Input placeholder="$500,000" className="border-gray-300 focus:border-blue-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pitch Summary
                  </label>
                  <Textarea 
                    placeholder="Describe your business idea, market opportunity, and what makes your startup unique..."
                    rows={5}
                    className="border-gray-300 focus:border-blue-500"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold">
                  Submit Pitch
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl mr-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">pitch@ventureflow.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl mr-4">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl mr-4">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visit Us</h4>
                    <p className="text-gray-600">123 Innovation Drive, San Francisco, CA 94105</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Why Choose VentureFlow?</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Fast decision-making process (30 days or less)
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Hands-on mentorship from industry experts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></div>
                  Access to our extensive network of partners
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
