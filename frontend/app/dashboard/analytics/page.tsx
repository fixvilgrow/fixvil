"use client";

import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Target,
  ArrowRight,
  Filter,
  Download,
  Calendar,
  Activity
} from 'lucide-react';

export default function AnalyticsPage() {
  const [timeframe, setTimeframe] = useState('This Month');

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Analytics & Reports</h1>
          <p className="text-sm text-slate-500 mt-1">Track your lead generation and sales performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <select 
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="appearance-none pl-10 pr-8 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            >
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm">
            <Filter className="w-4 h-4" /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors text-sm font-medium shadow-sm shadow-emerald-200">
            <Download className="w-4 h-4" /> Export Report
          </button>
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Leads" 
          value="1,248" 
          trend="+14%" 
          trendUp={true} 
          icon={<Users className="w-5 h-5 text-blue-600" />}
          iconBg="bg-blue-100"
        />
        <StatCard 
          title="Sales Converted" 
          value="312" 
          trend="+8%" 
          trendUp={true} 
          icon={<Target className="w-5 h-5 text-emerald-600" />}
          iconBg="bg-emerald-100"
        />
        <StatCard 
          title="Conversion Rate" 
          value="25%" 
          trend="+2.4%" 
          trendUp={true} 
          icon={<Activity className="w-5 h-5 text-purple-600" />}
          iconBg="bg-purple-100"
        />
        <StatCard 
          title="Revenue Generated" 
          value="$15,400" 
          trend="-3%" 
          trendUp={false} 
          icon={<DollarSign className="w-5 h-5 text-rose-600" />}
          iconBg="bg-rose-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart Area - Lead to Sale Funnel */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-slate-900 text-lg">Lead Conversion Funnel</h3>
              <p className="text-sm text-slate-500">How leads move through your sales pipeline</p>
            </div>
          </div>

          <div className="space-y-6 max-w-xl mx-auto py-4">
            
            <FunnelStep 
              label="Total Traffic / Inquiries" 
              value="5,000" 
              percentage={100} 
              color="bg-slate-200" 
              textColor="text-slate-700"
            />
            
            <div className="w-full flex justify-center -my-2 relative z-10">
              <div className="bg-white p-1 rounded-full"><ArrowRight className="w-4 h-4 text-slate-300 rotate-90" /></div>
            </div>
            
            <FunnelStep 
              label="Captured Leads (Contacts)" 
              value="1,248" 
              percentage={65} 
              color="bg-blue-500" 
              textColor="text-white"
            />

            <div className="w-full flex justify-center -my-2 relative z-10">
              <div className="bg-white p-1 rounded-full"><ArrowRight className="w-4 h-4 text-slate-300 rotate-90" /></div>
            </div>
            
            <FunnelStep 
              label="Qualified Leads" 
              value="620" 
              percentage={45} 
              color="bg-indigo-500" 
              textColor="text-white"
            />

            <div className="w-full flex justify-center -my-2 relative z-10">
              <div className="bg-white p-1 rounded-full"><ArrowRight className="w-4 h-4 text-slate-300 rotate-90" /></div>
            </div>
            
            <FunnelStep 
              label="Sales Converted" 
              value="312" 
              percentage={25} 
              color="bg-emerald-500" 
              textColor="text-white"
              highlight={true}
            />

          </div>
        </div>

        {/* Side Metrics */}
        <div className="space-y-6">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-900 mb-4">Leads by Source</h3>
            <div className="space-y-4">
              <SourceItem name="WhatsApp Auto-Reply" count="450" percentage={36} color="bg-emerald-500" />
              <SourceItem name="Website Chatbot" count="320" percentage={26} color="bg-blue-500" />
              <SourceItem name="Instagram DM" count="280" percentage={22} color="bg-purple-500" />
              <SourceItem name="Facebook Messenger" count="198" percentage={16} color="bg-blue-600" />
            </div>
          </div>

          <div className="bg-emerald-600 rounded-2xl border border-emerald-500 shadow-lg p-6 text-white relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <h3 className="font-bold text-lg mb-2 relative z-10">Sales Goal</h3>
            <p className="text-emerald-100 text-sm mb-4 relative z-10">You are on track to beat last month's record!</p>
            
            <div className="flex items-end justify-between mb-2 relative z-10">
              <span className="text-3xl font-bold">312</span>
              <span className="text-emerald-200 text-sm font-medium">/ 400 target</span>
            </div>
            
            <div className="w-full h-2 bg-emerald-700/50 rounded-full overflow-hidden relative z-10">
              <div className="h-full bg-white rounded-full" style={{ width: '78%' }}></div>
            </div>
            <p className="text-xs font-semibold text-emerald-200 mt-2 text-right relative z-10">78% Achieved</p>
          </div>

        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, trendUp, icon, iconBg }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between h-full hover:border-slate-200 transition-colors cursor-default">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        </div>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg}`}>
          {icon}
        </div>
      </div>
      <p className={`text-xs font-medium flex items-center gap-1 ${trendUp ? 'text-emerald-600' : 'text-rose-600'}`}>
        <TrendingUp className={`w-3 h-3 ${!trendUp && 'rotate-180'}`} />
        {trend} <span className="text-slate-400 font-normal ml-1">vs last month</span>
      </p>
    </div>
  );
}

function FunnelStep({ label, value, percentage, color, textColor, highlight = false }: any) {
  return (
    <div className="flex flex-col items-center">
      <div 
        className={`w-full max-w-sm rounded-xl flex items-center justify-between px-6 py-4 transition-all ${color} ${highlight ? 'ring-4 ring-emerald-500/20 shadow-lg shadow-emerald-500/20 scale-105' : ''}`}
        style={{ width: `${Math.max(percentage, 40)}%` }} // keep it wide enough to read
      >
        <span className={`font-semibold text-sm ${textColor}`}>{label}</span>
        <span className={`font-bold text-lg ${textColor}`}>{value}</span>
      </div>
    </div>
  );
}

function SourceItem({ name, count, percentage, color }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-slate-700">{name}</span>
        <span className="font-bold text-slate-900">{count}</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden flex">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
