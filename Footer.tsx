import React from 'react';
import { Sparkles, Shield, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';

interface FooterProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const digitalServices = servicesData.filter(s => s.category === 'Digital').slice(0, 5);
  const financialServices = servicesData.filter(s => s.category === 'Financial').slice(0, 5);

  return (
    <footer className="bg-[#040D1A] border-t border-white/10 pt-16 pb-12 text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0A66FF] to-cyan-500 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-blue-500/30">
                A
              </div>
              <span className="text-xl font-black tracking-wider text-white">
                AVRX <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0A66FF]">SOLUTIONS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-white/70 max-w-sm leading-relaxed">
              India's premier hybrid digital and financial architecture firm. We empower startups, MSMEs, and established enterprises with custom web engineering, #1 SEO rankings, and CA-backed tax & loan solutions.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Waterpark, NH43, Ambikapur, Surguja C.G. INDIA 497001</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+91-9630661536 (Direct CA & Tech Helpdesk)</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="w-4 h-4 text-purple-400 shrink-0" />
                <span>contact@avrx.in</span>
              </div>
            </div>
          </div>

          {/* Col 2: Digital & Tech */}
          <div>
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4">Digital & Web Services</h4>
            <ul className="space-y-2.5 text-xs">
              {digitalServices.map(srv => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectService(srv)}
                    className="hover:text-cyan-300 transition-colors text-left flex items-center space-x-1"
                  >
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <a href="#services" className="text-cyan-400 font-bold hover:underline">
                  View All 12 Digital Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Financial & CA */}
          <div>
            <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-4">Financial & Tax Services</h4>
            <ul className="space-y-2.5 text-xs">
              {financialServices.map(srv => (
                <li key={srv.id}>
                  <button
                    onClick={() => onSelectService(srv)}
                    className="hover:text-purple-300 transition-colors text-left flex items-center space-x-1"
                  >
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <a href="#services" className="text-purple-400 font-bold hover:underline">
                  View All 8 Financial Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick AI Tools */}
          <div>
            <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-4">Free AI Simulators</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#ai-tools" className="hover:text-emerald-300 transition-colors">
                  AI Business Consultant
                </a>
              </li>
              <li>
                <a href="#ai-tools" className="hover:text-emerald-300 transition-colors">
                  Website Package Recommender
                </a>
              </li>
              <li>
                <a href="#ai-tools" className="hover:text-emerald-300 transition-colors">
                  Loan Sanction Calculator
                </a>
              </li>
              <li>
                <a href="#ai-tools" className="hover:text-emerald-300 transition-colors">
                  GST & ITR Tax Saving Simulator
                </a>
              </li>
              <li>
                <a href="#ai-tools" className="hover:text-emerald-300 transition-colors">
                  SEO & Core Web Vitals Auditor
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={onOpenConsultation}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white font-bold text-xs"
                >
                  Book Free Strategy Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} AVRX Solutions India Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex flex-wrap gap-4">
            <span>MSME / Udyam Registered</span>
            <span>•</span>
            <span>ISO 9001:2015 Certified Architecture</span>
            <span>•</span>
            <span>100% Secure SSL & Encrypted</span>
          </div>
        </div>

        <div className="mt-4 text-[10px] text-white/40 text-center max-w-4xl mx-auto leading-relaxed">
          Disclaimer: AVRX Solutions provides technical web development, SEO consulting, and financial advisory in compliance with the guidelines of the Institute of Chartered Accountants of India (ICAI) and RBI norms. Loan sanctions are subject to individual credit assessment by our partner public and private sector banks (SBI, HDFC, ICICI, etc.).
        </div>
      </div>
    </footer>
  );
};
