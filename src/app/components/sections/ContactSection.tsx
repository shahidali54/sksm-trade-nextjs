import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Animated Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 fade-in-up drop-shadow text-amber-50">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact Form */}
          <form
            action="https://formspree.io/f/mwkzqjzv"
            method="POST"
            className="bg-slate-800/80 rounded-lg shadow-lg p-8 flex flex-col space-y-5"
          >
            <h3 className="text-2xl font-bold mb-2 text-amber-50">Send us a message</h3>
            <div>
              <label className="block mb-1 font-medium">Name <span className="text-cyan-400">*</span></label>
              <input name="name" required className="w-full px-4 py-2 rounded bg-slate-900 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email <span className="text-cyan-400">*</span></label>
              <input name="email" type="email" required className="w-full px-4 py-2 rounded bg-slate-900 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Subject <span className="text-cyan-400">*</span></label>
              <input name="subject" required className="w-full px-4 py-2 rounded bg-slate-900 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message <span className="text-cyan-400">*</span></label>
              <textarea name="message" required rows={4} className="w-full px-4 py-2 rounded bg-slate-900 border border-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white" />
            </div>
            <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300">Send Message</button>
          </form>

          {/* Map & Contact Info */}
          <div className="flex flex-col space-y-6">
            {/* Map with Our Location Heading inside background */}
            <div className="bg-slate-800/80 rounded-lg p-6 shadow-lg flex flex-col">
              <h3 className="text-lg font-bold mb-4 text-amber-50">Our Location</h3>
              <div className="w-full h-56 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="Our Location"
                  src="https://www.google.com/maps?q=Karachi&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* Contact Info with Contact Information Heading inside background */}
            <div className="bg-slate-800/80 rounded-lg p-6 space-y-4 shadow-lg">
              <h3 className="text-lg font-bold mb-4 text-amber-50">Contact Information</h3>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-7 h-7 text-green-500" />
                <span className="text-gray-300">0301-3790005 Shahid Ali</span>
              </div>
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-7 h-7 text-green-500" />
                <span className="text-gray-300">0329-3086256 Subhan Kaladi</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="w-7 h-7 text-red-500" />
                <span className="text-gray-300">shahidbaloch.sm@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPinIcon className="w-7 h-7 text-blue-500" />
                <span className="text-gray-300">Near Zamzama, Opp. Marwat Hospital, Upper Gizri, Clifton, Karachi</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 