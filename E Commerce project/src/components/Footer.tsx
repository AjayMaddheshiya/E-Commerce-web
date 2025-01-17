import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              ShopHub is your one-stop destination for premium electronics and accessories.
              We provide high-quality products with exceptional customer service.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Admin</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+91 9876543210</span>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>ajay.maddheshiya@example.com</span>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/ajaymaddheshiya" className="hover:text-white">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/ajaymaddheshiya" className="hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Developer</h3>
            <p className="text-lg font-medium text-white">Ajay Maddheshiya</p>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}