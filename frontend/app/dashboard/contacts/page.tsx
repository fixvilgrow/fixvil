"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  MoreHorizontal, 
  MessageSquare, 
  Mail, 
  Phone, 
  Tag,
  Download,
  Upload,
  X,
  User
} from 'lucide-react';

const CONTACTS_DATA = [
  {
    id: 1,
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=FCE7F3&color=DB2777",
    tags: ["VIP", "Customer"],
    status: "Active",
    lastActive: "2 hours ago"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@example.com",
    phone: "+1 (555) 987-6543",
    avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=DBEAFE&color=2563EB",
    tags: ["Lead"],
    status: "Active",
    lastActive: "1 day ago"
  },
  {
    id: 3,
    name: "Emma Watson",
    email: "emma.w@example.com",
    phone: "+44 7700 900077",
    avatar: "https://ui-avatars.com/api/?name=Emma+Watson&background=D1FAE5&color=059669",
    tags: ["Customer"],
    status: "Inactive",
    lastActive: "1 week ago"
  },
  {
    id: 4,
    name: "David Smith",
    email: "david.smith@example.com",
    phone: "+1 (555) 321-4321",
    avatar: "https://ui-avatars.com/api/?name=David+Smith&background=FEF3C7&color=D97706",
    tags: ["Lead", "Cold"],
    status: "Active",
    lastActive: "3 days ago"
  },
  {
    id: 5,
    name: "Olivia Martinez",
    email: "olivia.m@example.com",
    phone: "+1 (555) 654-0987",
    avatar: "https://ui-avatars.com/api/?name=Olivia+Martinez&background=E0E7FF&color=4338CA",
    tags: ["Partner"],
    status: "Active",
    lastActive: "Just now"
  }
];

export default function ContactsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto space-y-6 relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Contacts</h1>
          <p className="text-sm text-slate-500 mt-1">Manage your customers and leads.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm">
            <Upload className="w-4 h-4" /> Import
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm">
            <Download className="w-4 h-4" /> Export
          </button>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors text-sm font-medium shadow-sm shadow-emerald-200"
          >
            <Plus className="w-4 h-4" /> Add Contact
          </button>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name, email, or phone..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
              <Tag className="w-4 h-4" /> Labels
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-xs uppercase tracking-wider font-semibold text-slate-500">
                <th className="p-4 pl-6 font-medium">Contact</th>
                <th className="p-4 font-medium">Contact Info</th>
                <th className="p-4 font-medium">Tags</th>
                <th className="p-4 font-medium">Last Active</th>
                <th className="p-4 pr-6 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {CONTACTS_DATA.map((contact) => (
                <tr key={contact.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <img src={contact.avatar} alt={contact.name} className="w-10 h-10 rounded-full" />
                      <div>
                        <p className="font-semibold text-slate-900">{contact.name}</p>
                        <span className={`inline-flex items-center gap-1 mt-0.5 text-[10px] font-medium px-2 py-0.5 rounded-full ${
                          contact.status === 'Active' 
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' 
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}>
                          {contact.status}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1 text-sm">
                      <span className="flex items-center gap-2 text-slate-600">
                        <Mail className="w-3.5 h-3.5 text-slate-400" /> {contact.email}
                      </span>
                      <span className="flex items-center gap-2 text-slate-600">
                        <Phone className="w-3.5 h-3.5 text-slate-400" /> {contact.phone}
                      </span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {contact.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-lg border border-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-500">{contact.lastActive}</span>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors tooltip-trigger" title="Send Message">
                        <MessageSquare className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="More Options">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between text-sm text-slate-500 bg-slate-50/50">
          <p>Showing <span className="font-semibold text-slate-900">1</span> to <span className="font-semibold text-slate-900">5</span> of <span className="font-semibold text-slate-900">2,543</span> results</p>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-slate-200 rounded-lg hover:bg-white text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-3 py-1 border border-slate-200 rounded-lg bg-white hover:bg-slate-50 text-slate-700 font-medium shadow-sm transition-colors">Next</button>
          </div>
        </div>
      </div>

      {/* Add Contact Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <h2 className="text-lg font-bold text-slate-900">Add New Contact</h2>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-5">
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">First Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. John" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Doe" 
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Phone Number <span className="text-rose-500">*</span></label>
                <div className="flex relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium text-sm">+1</span>
                  <input 
                    type="tel" 
                    placeholder="(555) 000-0000" 
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-1">Required for WhatsApp automation.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  placeholder="e.g. john@example.com" 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wider">Tags / Labels</label>
                <input 
                  type="text" 
                  placeholder="e.g. VIP, New Lead, Customer" 
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded-lg cursor-pointer hover:bg-emerald-100 transition-colors">+ VIP</span>
                  <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded-lg cursor-pointer hover:bg-blue-100 transition-colors">+ Lead</span>
                  <span className="px-2 py-1 bg-purple-50 text-purple-600 text-[10px] font-bold rounded-lg cursor-pointer hover:bg-purple-100 transition-colors">+ Customer</span>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
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
                Add Contact
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
