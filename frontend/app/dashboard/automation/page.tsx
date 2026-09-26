"use client";

import React, { useState } from 'react';
import { 
  Plus, 
  MoreHorizontal, 
  Edit,
  Trash2,
  Bot,
  X,
  Zap,
  MessageSquare,
  Wrench
} from 'lucide-react';

const RULES_DATA = [
  {
    id: 1,
    name: "Book",
    created: "9/25/2026",
    triggerType: "Button Clicked:",
    triggerValue: '"menu"',
    actionIcon: "🔘",
    actionType: "Buttons:",
    actionValue: "[Mandhi broast, biriyani]",
    status: "Paused"
  },
  {
    id: 2,
    name: "Book",
    created: "9/25/2026",
    triggerType: "Keyword (exact):",
    triggerValue: '"hi"',
    actionIcon: "💬",
    actionType: "Text Reply:",
    actionValue: '"Hello broooo"',
    status: "Paused"
  }
];

export default function AutomationPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-6 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-emerald-100/30 p-8 rounded-2xl border border-emerald-100">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Bot className="w-6 h-6 text-emerald-600" />
            Automation Engine
          </h1>
          <p className="text-slate-600 mt-2 max-w-xl">
            Build data-driven chatbot flows, keyword responders, and conditional routing.
          </p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium shadow-sm shadow-emerald-200 whitespace-nowrap"
        >
          <Plus className="w-4 h-4" /> Create Automation
        </button>
      </div>

      {/* Rules Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
                <th className="p-4 pl-6 whitespace-nowrap">Rule Name</th>
                <th className="p-4 whitespace-nowrap">Trigger Condition</th>
                <th className="p-4 whitespace-nowrap">Configured Actions</th>
                <th className="p-4 whitespace-nowrap">Status</th>
                <th className="p-4 pr-6 text-right whitespace-nowrap">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RULES_DATA.map((rule) => (
                <tr key={rule.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4 pl-6">
                    <div>
                      <p className="font-bold text-slate-900">{rule.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">Created {rule.created}</p>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm">
                      <span className="text-slate-500 font-medium">{rule.triggerType}</span>{" "}
                      <span className="font-semibold text-slate-800">{rule.triggerValue}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="text-sm bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 inline-flex items-center gap-2">
                      <span>{rule.actionIcon}</span>
                      <span className="text-slate-500 font-medium">{rule.actionType}</span>
                      <span className="font-semibold text-slate-800">{rule.actionValue}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mr-1.5"></span> {rule.status}
                    </span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {/* Status Toggle */}
                      <label className="relative inline-flex items-center cursor-pointer mr-2">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-8 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-emerald-500"></div>
                      </label>

                      <button className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {RULES_DATA.length === 0 && (
            <div className="p-8 text-center text-slate-500">
              No automations configured yet.
            </div>
          )}
        </div>
      </div>

      {/* Create Automation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <h2 className="text-lg font-bold text-slate-900">Create New Automation</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              
              {/* Flow Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-1.5">Flow Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Turf Booking, Customer Onboarding, Price Inquiry..." 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>

              {/* Trigger Section */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900">Trigger: When this happens</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Trigger Type</label>
                    <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer">
                      <option>Incoming Keyword</option>
                      <option>Button Clicked</option>
                      <option>New Customer Added</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Matching Mode</label>
                    <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer">
                      <option>Exact Match</option>
                      <option>Contains Keyword</option>
                      <option>Starts With</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Keyword to listen for</label>
                  <input 
                    type="text" 
                    placeholder="e.g. hi, book turf, price" 
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              {/* Action Section */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-slate-900">Action: Then do this</h3>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Action Type</label>
                  <select className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all appearance-none cursor-pointer">
                    <option>Send WhatsApp Text Message</option>
                    <option>Send Interactive Buttons</option>
                    <option>Assign to Agent</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Message Content</label>
                  <textarea 
                    rows={4}
                    placeholder="Type your message here... Supports {{name}} variables" 
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                  ></textarea>
                  <p className="text-[10px] text-slate-400 mt-1.5">You can use variables like {'{{name}}'} or {'{{phone}}'} to personalize the message.</p>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-100 bg-white flex items-center justify-end gap-3 shrink-0">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium text-sm"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors font-medium shadow-sm shadow-emerald-200 text-sm"
              >
                Save Automation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
