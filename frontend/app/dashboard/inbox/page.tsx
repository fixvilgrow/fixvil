"use client";

import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Paperclip, 
  Smile, 
  Send,
  Bot,
  User,
  Check,
  CheckCheck,
  Phone,
  Video,
  Info
} from 'lucide-react';

// Mock data for the inbox
const CONVERSATIONS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=FCE7F3&color=DB2777",
    lastMessage: "Thank you, that answers my question!",
    time: "10:24 AM",
    unread: 0,
    status: "auto-replied",
    messages: [
      { id: 1, sender: "user", text: "Hi, what are your business hours?", time: "10:20 AM" },
      { id: 2, sender: "bot", text: "Hello Sarah! Our business hours are Monday to Friday, 9:00 AM to 6:00 PM EST. How else can I help you today?", time: "10:20 AM" },
      { id: 3, sender: "user", text: "Thank you, that answers my question!", time: "10:24 AM" }
    ]
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://ui-avatars.com/api/?name=Michael+Chen&background=DBEAFE&color=2563EB",
    lastMessage: "Can I speak to a human please?",
    time: "09:15 AM",
    unread: 1,
    status: "requires-human",
    messages: [
      { id: 1, sender: "user", text: "I have an issue with my recent order #49281.", time: "09:10 AM" },
      { id: 2, sender: "bot", text: "I can help with that. Could you please specify the issue? You can reply with 'Damage', 'Missing Item', or 'Wrong Item'.", time: "09:10 AM" },
      { id: 3, sender: "user", text: "Can I speak to a human please?", time: "09:15 AM" }
    ]
  },
  {
    id: 3,
    name: "Emma Watson",
    avatar: "https://ui-avatars.com/api/?name=Emma+Watson&background=D1FAE5&color=059669",
    lastMessage: "The package arrived yesterday.",
    time: "Yesterday",
    unread: 0,
    status: "human-handled",
    messages: [
      { id: 1, sender: "user", text: "Has my order been shipped?", time: "2:00 PM" },
      { id: 2, sender: "bot", text: "Let me check that for you. Yes, your order #49200 was shipped on Tuesday.", time: "2:00 PM" },
      { id: 3, sender: "user", text: "The package arrived yesterday.", time: "4:30 PM" }
    ]
  },
  {
    id: 4,
    name: "David Smith",
    avatar: "https://ui-avatars.com/api/?name=David+Smith&background=FEF3C7&color=D97706",
    lastMessage: "Pricing for the pro plan?",
    time: "Yesterday",
    unread: 2,
    status: "new",
    messages: [
      { id: 1, sender: "user", text: "Hi there", time: "11:00 AM" },
      { id: 2, sender: "user", text: "Pricing for the pro plan?", time: "11:01 AM" }
    ]
  }
];

export default function InboxPage() {
  const [activeChat, setActiveChat] = useState(CONVERSATIONS[0]);
  const [filter, setFilter] = useState('all'); // all, unread, auto

  return (
    <div className="h-[calc(100vh-8rem)] flex bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
      
      {/* Left Sidebar - Conversation List */}
      <div className="w-80 md:w-96 flex-shrink-0 border-r border-slate-200 flex flex-col bg-slate-50/50">
        <div className="p-4 border-b border-slate-200">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900">Inbox</h2>
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
              <Filter className="w-5 h-5" />
            </button>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search messages..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
            />
          </div>
          
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
            <FilterBadge active={filter === 'all'} onClick={() => setFilter('all')}>All</FilterBadge>
            <FilterBadge active={filter === 'unread'} onClick={() => setFilter('unread')}>Unread</FilterBadge>
            <FilterBadge active={filter === 'auto'} onClick={() => setFilter('auto')}>Auto-replied</FilterBadge>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {CONVERSATIONS.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`p-4 border-b border-slate-100 cursor-pointer transition-colors ${
                activeChat.id === chat.id ? 'bg-emerald-50' : 'hover:bg-slate-50 bg-white'
              }`}
            >
              <div className="flex gap-3">
                <div className="relative">
                  <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full" />
                  {chat.unread > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white">
                      {chat.unread}
                    </span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className={`text-sm truncate pr-2 ${chat.unread > 0 ? 'font-bold text-slate-900' : 'font-semibold text-slate-700'}`}>
                      {chat.name}
                    </h4>
                    <span className="text-xs text-slate-400 whitespace-nowrap">{chat.time}</span>
                  </div>
                  <p className={`text-sm truncate ${chat.unread > 0 ? 'font-medium text-slate-800' : 'text-slate-500'}`}>
                    {chat.lastMessage}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    {chat.status === 'auto-replied' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-700">
                        <Bot className="w-3 h-3" /> Auto-replied
                      </span>
                    )}
                    {chat.status === 'requires-human' && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-100 text-amber-700">
                        <User className="w-3 h-3" /> Needs Human
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Main Area - Active Chat */}
      <div className="flex-1 flex flex-col bg-[#f8fafc]">
        {/* Chat Header */}
        <div className="h-16 px-6 border-b border-slate-200 bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <img src={activeChat.avatar} alt={activeChat.name} className="w-10 h-10 rounded-full" />
            <div>
              <h3 className="font-bold text-slate-900 leading-tight">{activeChat.name}</h3>
              <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton icon={<Phone className="w-4 h-4" />} />
            <IconButton icon={<Video className="w-4 h-4" />} />
            <IconButton icon={<Info className="w-4 h-4" />} />
            <div className="w-px h-6 bg-slate-200 mx-1"></div>
            <IconButton icon={<MoreVertical className="w-4 h-4" />} />
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          <div className="flex justify-center">
            <span className="bg-slate-200/50 text-slate-500 text-xs font-medium px-3 py-1 rounded-full">
              Today
            </span>
          </div>

          {activeChat.messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.sender === 'user' ? 'items-start' : 'items-end'}`}>
              <div className={`flex items-end gap-2 max-w-[75%] ${msg.sender === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
                
                {/* Avatar for sender */}
                {msg.sender === 'user' ? (
                   <img src={activeChat.avatar} className="w-6 h-6 rounded-full mb-1 flex-shrink-0" alt="User" />
                ) : (
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mb-1 flex-shrink-0 ${msg.sender === 'bot' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'}`}>
                    {msg.sender === 'bot' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                )}
                
                <div className={`px-4 py-2.5 rounded-2xl ${
                  msg.sender === 'user' 
                    ? 'bg-white border border-slate-200 text-slate-800 rounded-bl-sm' 
                    : 'bg-emerald-600 text-white rounded-br-sm shadow-sm shadow-emerald-200'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
              
              <div className={`flex items-center gap-1 mt-1 text-[10px] text-slate-400 ${msg.sender === 'user' ? 'ml-9' : 'mr-9'}`}>
                {msg.sender === 'bot' && (
                  <span className="text-emerald-500 font-medium flex items-center gap-0.5">
                    <Bot className="w-3 h-3" /> Auto-reply
                  </span>
                )}
                <span>{msg.time}</span>
                {msg.sender !== 'user' && <CheckCheck className="w-3 h-3 text-emerald-500 ml-1" />}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white border-t border-slate-200">
          <div className="flex items-end gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors shrink-0">
              <Paperclip className="w-5 h-5" />
            </button>
            <textarea 
              rows={1}
              placeholder="Type your message..."
              className="flex-1 bg-transparent border-none text-sm focus:ring-0 resize-none py-2 px-1 max-h-32 text-slate-800"
            />
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors shrink-0">
              <Smile className="w-5 h-5" />
            </button>
            <button className="p-2 bg-emerald-600 text-white hover:bg-emerald-700 rounded-lg transition-colors shrink-0 shadow-sm">
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="flex justify-between items-center mt-2 px-2">
            <p className="text-[10px] text-slate-400">Press Enter to send, Shift + Enter for new line</p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Takeover chat</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-amber-500"></div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterBadge({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-colors border ${
        active 
          ? 'bg-emerald-100 text-emerald-700 border-emerald-200' 
          : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
      }`}
    >
      {children}
    </button>
  );
}

function IconButton({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
      {icon}
    </button>
  );
}
