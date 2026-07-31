import React, { useState } from 'react';
import { Search, Sparkles, Check, ArrowRight, DollarSign, Clock, ShieldCheck, Tag } from 'lucide-react';
import { ServiceItem } from '../types';
import { servicesData } from '../data/servicesData';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [activeTab, setActiveTab] = useState<'All' | 'Digital' | 'Financial'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const filteredServices = servicesData.filter((service) => {
    const matchesTab =
      activeTab === 'All' ||
      (activeTab === 'Digital' && service.category === 'Digital') ||
      (activeTab === 'Financial' && service.category === 'Financial');

    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesTab && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-[#081B33] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>20+ SPECIALIZED GROWTH & FINANCE SOLUTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-[#0A66FF]">Digital & Financial</span> Architecture
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/70">
            From custom responsive website engineering & SEO rankings to ITR filing, GST compliance, MSME loans, and corporate insurance.
          </p>
        </div>

        {/* Filters & Search Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
          {/* Category Tabs */}
          <div className="flex items-center p-1 rounded-2xl bg-white/5 border border-white/10 w-full md:w-auto">
            {[
              { id: 'All', label: 'All Services (20)', count: servicesData.length },
              { id: 'Digital', label: '12 Digital & Web', count: 12 },
              { id: 'Financial', label: '8 Financial & Tax', count: 8 }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 md:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-[#0A66FF] to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search website, GST, loan, SEO..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder:text-white/40 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((srv) => {
            const isDigital = srv.category === 'Digital';
            return (
              <div
                key={srv.id}
                className="group relative rounded-3xl bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/50 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20"
              >
                <div>
                  {/* Badge & Price */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${
                        isDigital
                          ? 'bg-blue-500/10 text-cyan-300 border-cyan-400/30'
                          : 'bg-purple-500/10 text-purple-300 border-purple-400/30'
                      }`}
                    >
                      {srv.category === 'Digital' ? 'DIGITAL & TECH' : 'FINANCIAL & TAX'}
                    </span>
                    <div className="text-right">
                      <div className="text-sm font-black text-white group-hover:text-cyan-300 transition-colors">
                        {srv.startingPrice}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-white/70 line-clamp-3 mb-5 leading-relaxed">
                    {srv.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {srv.features.slice(0, 4).map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-white/80">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Timeline & CTA */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center space-x-1.5 text-[11px] text-white/60">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{srv.estimatedTimeline}</span>
                  </div>

                  <button
                    onClick={() => onSelectService(srv)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#0A66FF] to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xs font-bold flex items-center space-x-1.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-all"
                  >
                    <span>View & Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-cyan-900/40 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 backdrop-blur-xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0A66FF] to-cyan-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-blue-500/30">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need a Customized Multi-Service Combo?</h4>
              <p className="text-xs text-white/70 mt-0.5">
                Get a custom package bundling Website + SEO + GST Registration + MSME Loan assistance with a 15% bundled discount.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 rounded-2xl bg-white text-[#081B33] font-black text-xs hover:bg-cyan-300 transition-all shadow-xl shrink-0"
          >
            Request Custom Combo Package →
          </button>
        </div>
      </div>
    </section>
  );
};
