import React from 'react';
import { 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Bot,
  MessageCircle,
  Zap,
  Activity,
  Package,
  Clock
} from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Welcome Banner & Plan Status */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-emerald-100/50 rounded-2xl p-6 lg:p-8 flex flex-col justify-center border border-emerald-100">
          <h2 className="text-2xl font-bold text-slate-900">Welcome back, Admin!</h2>
          <p className="text-emerald-700/80 mt-1 font-medium">Here is your Fixvil workspace overview for today.</p>
        </div>
        
        {/* Current Package Card */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl"></div>
          <div className="flex justify-between items-start mb-4 relative z-10">
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">Current Package</p>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Package className="w-5 h-5 text-emerald-400" /> Professional
              </h3>
            </div>
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-2.5 py-1 rounded-full">Active</span>
          </div>
          
          <div className="space-y-3 relative z-10">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300">Daily Message Limit</span>
              <span className="font-semibold text-white">10,000</span>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1.5">
                <span className="text-emerald-400 font-medium">7,240 Sent</span>
                <span className="text-slate-300">2,760 Left</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="Total Customers" 
          value="4,821" 
          trend="+5.2%" 
          trendUp={true} 
          icon={<Users className="w-5 h-5 text-blue-600" />}
          iconBg="bg-blue-100"
        />
        <StatCard 
          title="Total Conversations" 
          value="12,543" 
          trend="+12%" 
          trendUp={true} 
          icon={<MessageCircle className="w-5 h-5 text-purple-600" />}
          iconBg="bg-purple-100"
        />
        <StatCard 
          title="Messages Today" 
          value="7,240" 
          subtitle="Resets at midnight"
          icon={<MessageSquare className="w-5 h-5 text-emerald-600" />}
          iconBg="bg-emerald-100"
        />
        <StatCard 
          title="Unread Messages" 
          value="48" 
          subtitle="Requires attention"
          icon={<Clock className="w-5 h-5 text-rose-600" />}
          iconBg="bg-rose-100"
        />
        <StatCard 
          title="Automation Executions" 
          value="892" 
          trend="+18%" 
          trendUp={true} 
          icon={<Bot className="w-5 h-5 text-amber-600" />}
          iconBg="bg-amber-100"
        />
        <StatCard 
          title="Response Rate" 
          value="94%" 
          subtitle="Avg. time: 5 mins"
          icon={<Zap className="w-5 h-5 text-indigo-600" />}
          iconBg="bg-indigo-100"
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Recent Activity placeholder based on user's new specs */}
        <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-slate-900">Recent Automations</h3>
            <a href="#" className="text-sm font-medium text-emerald-600 hover:text-emerald-700">View All</a>
          </div>
          <div className="space-y-5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-full bg-slate-50 flex-shrink-0 flex items-center justify-center border border-slate-100">
                    <Bot className="w-4 h-4 text-slate-500" />
                 </div>
                 <div>
                   <p className="text-sm font-medium text-slate-900">Welcome Sequence</p>
                   <p className="text-xs text-slate-500 mt-0.5">Triggered for new customer +1 (555) 0123</p>
                 </div>
                 <span className="text-xs text-slate-400 ml-auto whitespace-nowrap">2m ago</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Overview */}
         <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-slate-900">Weekly Performance</h3>
            <Activity className="w-5 h-5 text-slate-400" />
          </div>
          <div className="space-y-6 mt-2">
            <ProgressItem label="Automated Replies" percentage={75} color="bg-emerald-500" text="75%" />
            <ProgressItem label="Human Handoffs" percentage={15} color="bg-amber-500" text="15%" />
            <ProgressItem label="Failed Messages" percentage={2} color="bg-rose-500" text="2%" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, trendUp, icon, iconBg, subtitle }: any) {
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
      {subtitle ? (
        <p className="text-xs font-medium text-slate-400">{subtitle}</p>
      ) : (
        <p className={`text-xs font-medium flex items-center gap-1 ${trendUp ? 'text-emerald-600' : 'text-rose-600'}`}>
          <TrendingUp className={`w-3 h-3 ${!trendUp && 'rotate-180'}`} />
          {trend} <span className="text-slate-400 font-normal ml-1">vs last week</span>
        </p>
      )}
    </div>
  );
}

function ProgressItem({ label, percentage, color, text }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium text-slate-700">{label}</span>
        <span className="font-bold text-slate-900">{text}</span>
      </div>
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}
