import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export const metadata = {
  title: "Terms and Conditions | Fixvil",
  description: "Terms and Conditions for Fixvil - WhatsApp automation platform.",
};

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#050b09] text-gray-300 font-sans selection:bg-[#16a34a] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#16a34a]/20 blur-[100px] rounded-full pointer-events-none" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight relative z-10">
              Terms and <span className="text-[#16a34a]">Conditions</span>
            </h1>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a1512] border border-gray-800 text-sm font-medium text-gray-400 relative z-10 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-[#16a34a] animate-pulse" />
              Last Updated: August 15, 2026
            </div>
          </div>

          {/* Content Card */}
          <div className="bg-[#0a1512] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative z-10 overflow-hidden">
            {/* Top decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#16a34a] to-transparent opacity-50" />
            
            <div className="prose prose-invert prose-green max-w-none prose-headings:text-white prose-p:text-gray-400 prose-li:text-gray-400 prose-strong:text-white prose-a:text-[#16a34a] hover:prose-a:text-[#15803d] prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:flex prose-h2:items-center prose-h2:gap-3 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4">
              
              <p className="text-lg leading-relaxed mb-4">
                Welcome to <strong>Fixvil</strong>.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                These Terms and Conditions ("Terms") explain the rules and guidelines for using Fixvil, our WhatsApp automation platform that helps businesses communicate with customers, manage conversations, automate workflows, handle bookings, support purchases, manage leads, and improve customer engagement.
              </p>
              <p className="text-lg leading-relaxed mb-12">
                By creating an account or using Fixvil, you agree to these Terms and our Privacy Policy.
              </p>

              <Section title="1. About Fixvil">
                <p>Fixvil is a WhatsApp automation platform built to help businesses make customer communication simpler, faster, and more efficient.</p>
                <p>Our platform helps businesses automate everyday customer interactions and business workflows through WhatsApp.</p>
                <p>Depending on the plan and features you use, Fixvil may help you:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Automatically respond to customer enquiries</ListItem>
                  <ListItem>Create WhatsApp conversation workflows</ListItem>
                  <ListItem>Manage bookings and appointments</ListItem>
                  <ListItem>Support product and service enquiries</ListItem>
                  <ListItem>Assist customers during purchase and order processes</ListItem>
                  <ListItem>Send customer notifications</ListItem>
                  <ListItem>Send follow-up messages</ListItem>
                  <ListItem>Manage leads and customer conversations</ListItem>
                  <ListItem>Organize customers through CRM and pipeline features</ListItem>
                  <ListItem>Connect multiple WhatsApp numbers</ListItem>
                  <ListItem>Create customized automation</ListItem>
                  <ListItem>Connect third-party applications and services</ListItem>
                  <ListItem>Use AI-powered and automated responses</ListItem>
                  <ListItem>Improve customer engagement and response times</ListItem>
                </ul>
                <p>Our goal is to help businesses spend less time on repetitive communication and more time focusing on their customers and business growth.</p>
              </Section>

              <Section title="2. Using Fixvil">
                <p>To use Fixvil, you agree to provide accurate and up-to-date information when creating and managing your account.</p>
                <p>You may use Fixvil for your business, organization, or professional activities when you have the appropriate authority to do so.</p>
                <p>By using our Services, you agree to:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Provide accurate account information</ListItem>
                  <ListItem>Keep your account information updated</ListItem>
                  <ListItem>Protect your account credentials</ListItem>
                  <ListItem>Use Fixvil responsibly</ListItem>
                  <ListItem>Follow applicable laws and regulations</ListItem>
                  <ListItem>Follow applicable WhatsApp and Meta requirements</ListItem>
                  <ListItem>Respect the privacy and preferences of your customers</ListItem>
                </ul>
                <p>You are responsible for the activity carried out through your account.</p>
              </Section>

              <Section title="3. WhatsApp Integration">
                <p>Fixvil allows businesses to connect WhatsApp and supported WhatsApp Business services to our platform.</p>
                <p>By connecting your WhatsApp account or number, you confirm that you have the appropriate authorization to use and manage that account.</p>
                <p>Our WhatsApp automation features can help you:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Respond to customers</ListItem>
                  <ListItem>Manage conversations</ListItem>
                  <ListItem>Create automated workflows</ListItem>
                  <ListItem>Send notifications</ListItem>
                  <ListItem>Manage enquiries</ListItem>
                  <ListItem>Handle booking conversations</ListItem>
                  <ListItem>Support customer journeys</ListItem>
                  <ListItem>Follow up with customers</ListItem>
                </ul>
                <p>Your use of WhatsApp through Fixvil should follow the applicable WhatsApp and Meta policies and requirements.</p>
                <p>WhatsApp and Meta may update their services, features, APIs, and requirements from time to time. Fixvil will continue working to support available integrations and provide the best possible experience for our users.</p>
              </Section>

              <Section title="4. Automated Communication">
                <p>One of the main purposes of Fixvil is to make customer communication easier through automation.</p>
                <p>You can create workflows that automatically respond to customers based on their messages, selections, actions, or other conditions configured within Fixvil.</p>
                <div className="bg-[#0b1110] p-6 rounded-xl border border-gray-800 my-6">
                  <p className="text-gray-400 text-sm mb-2 font-medium">For example:</p>
                  <div className="flex flex-col gap-4">
                    <div className="bg-gray-800/50 p-4 rounded-lg rounded-tl-none w-fit max-w-[80%] border border-gray-700">
                      <span className="text-xs text-gray-500 block mb-1 font-semibold">Customer</span>
                      <p className="m-0 text-white">"Hi, I want to book an appointment."</p>
                    </div>
                    <div className="bg-[#16a34a]/10 p-4 rounded-lg rounded-tr-none w-fit max-w-[80%] self-end border border-[#16a34a]/20">
                      <span className="text-xs text-[#16a34a] block mb-1 font-semibold">Fixvil Automation</span>
                      <p className="m-0 text-[#16a34a]">"Sure! Please select your preferred date."</p>
                    </div>
                  </div>
                </div>
                <p>The customer can continue the conversation while Fixvil handles the configured workflow.</p>
                <p>You are responsible for creating and managing your business's automation rules, messages, workflows, and customer communication settings.</p>
              </Section>

              <Section title="5. Customer Communication and Consent">
                <p>Businesses using Fixvil are responsible for maintaining appropriate communication practices with their customers.</p>
                <p>You should ensure that your customers receive relevant and useful communications and that your messaging practices comply with applicable laws and requirements.</p>
                <p>Fixvil provides the technology to automate communication; your business determines:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Who receives messages</ListItem>
                  <ListItem>What messages are sent</ListItem>
                  <ListItem>When messages are sent</ListItem>
                  <ListItem>What automation is triggered</ListItem>
                  <ListItem>How customer information is used</ListItem>
                </ul>
                <p>You should respect customer preferences, including requests to stop receiving communications.</p>
              </Section>

              <Section title="6. Bookings, Orders, and Purchases">
                <p>Fixvil can help businesses create automated customer journeys for bookings, appointments, products, services, and orders.</p>
                <p>For example, businesses can use Fixvil to:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Display available services</ListItem>
                  <ListItem>Collect booking information</ListItem>
                  <ListItem>Guide customers through appointment requests</ListItem>
                  <ListItem>Share product information</ListItem>
                  <ListItem>Collect order details</ListItem>
                  <ListItem>Send order updates</ListItem>
                  <ListItem>Follow up with customers</ListItem>
                </ul>
                <p>The business using Fixvil remains responsible for its own products, services, bookings, availability, orders, delivery, customer support, and business operations.</p>
                <p>Fixvil provides the technology that helps businesses manage and automate these customer interactions.</p>
              </Section>

              <Section title="7. CRM and Customer Management">
                <p>Depending on your selected Fixvil plan, our platform may provide CRM and pipeline features.</p>
                <p>These features may help you organize:</p>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Customers</ListItem>
                  <ListItem>Leads</ListItem>
                  <ListItem>Conversations</ListItem>
                  <ListItem>Enquiries</ListItem>
                  <ListItem>Bookings</ListItem>
                  <ListItem>Follow-ups</ListItem>
                  <ListItem>Customer activity</ListItem>
                  <ListItem>Sales pipelines</ListItem>
                </ul>
                <p>You are responsible for the information you add to your CRM and for using customer information appropriately.</p>
              </Section>

              <Section title="8. AI and Smart Automation">
                <p>Fixvil may provide AI-powered features to make automated conversations more natural and useful.</p>
                <p>Our AI and automation features can help businesses:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Understand customer questions</ListItem>
                  <ListItem>Provide relevant information</ListItem>
                  <ListItem>Guide customers through workflows</ListItem>
                  <ListItem>Answer frequently asked questions</ListItem>
                  <ListItem>Assist with bookings</ListItem>
                  <ListItem>Support product and service enquiries</ListItem>
                  <ListItem>Continue conversations based on previous context</ListItem>
                </ul>
                <p>Businesses can configure and manage these features according to their specific requirements.</p>
                <p>For important business processes, we recommend configuring appropriate workflows, information, and human support where needed.</p>
              </Section>

              <Section title="9. Your Business Content">
                <p>You may add business information and content to Fixvil, including:</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Business name</ListItem>
                  <ListItem>Products</ListItem>
                  <ListItem>Services</ListItem>
                  <ListItem>Prices</ListItem>
                  <ListItem>Business information</ListItem>
                  <ListItem>FAQs</ListItem>
                  <ListItem>Images</ListItem>
                  <ListItem>Messages</ListItem>
                  <ListItem>Automation workflows</ListItem>
                  <ListItem>Customer information</ListItem>
                  <ListItem>Booking information</ListItem>
                  <ListItem>CRM information</ListItem>
                </ul>
                <p>You retain ownership of the content and information that you provide to Fixvil.</p>
                <p>You give Fixvil permission to securely store and process this information as necessary to provide and operate our Services.</p>
              </Section>

              <Section title="10. Customer Data">
                <p>Businesses may use Fixvil to process information belonging to their customers. This may include:</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Names</ListItem>
                  <ListItem>Phone numbers</ListItem>
                  <ListItem>WhatsApp information</ListItem>
                  <ListItem>Messages</ListItem>
                  <ListItem>Booking information</ListItem>
                  <ListItem>Order information</ListItem>
                  <ListItem>Customer preferences</ListItem>
                  <ListItem>Lead information</ListItem>
                  <ListItem>Conversation history</ListItem>
                </ul>
                <p>Businesses are responsible for using customer information appropriately and complying with applicable privacy and data protection requirements.</p>
                <p>Our approach to personal information is explained in our Privacy Policy.</p>
              </Section>

              <Section title="11. Third-Party Integrations">
                <p>Fixvil may support integrations with third-party applications, APIs, communication platforms, CRM systems, websites, and other business tools.</p>
                <p>These integrations are designed to help businesses connect Fixvil with their existing workflows.</p>
                <p>When you connect a third-party service, you authorize the necessary information exchange required for that integration to operate.</p>
                <p>Your use of third-party services may also be subject to the terms and policies of those services.</p>
              </Section>

              <Section title="12. Account Security">
                <p>We take account security seriously and use reasonable technical and organizational measures to help protect our platform and user accounts.</p>
                <p>You should:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Keep your login information private</ListItem>
                  <ListItem>Use secure passwords</ListItem>
                  <ListItem>Protect access to your devices</ListItem>
                  <ListItem>Notify us if you notice suspicious account activity</ListItem>
                </ul>
                <p>Working together helps us maintain a safe and reliable platform for all Fixvil users.</p>
              </Section>

              <Section title="13. Fair and Responsible Use">
                <p>Fixvil is designed to help businesses communicate with their customers in a useful, professional, and responsible way.</p>
                <p>Users should not use Fixvil for activities that are unlawful, deceptive, abusive, fraudulent, or harmful. Examples include:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Fraudulent activities</ListItem>
                  <ListItem>Impersonation</ListItem>
                  <ListItem>Unlawful communication</ListItem>
                  <ListItem>Harassment</ListItem>
                  <ListItem>Malicious activities</ListItem>
                  <ListItem>Unauthorized access</ListItem>
                  <ListItem>Distribution of harmful software</ListItem>
                  <ListItem>Activities that violate applicable laws</ListItem>
                  <ListItem>Activities that violate WhatsApp or Meta requirements</ListItem>
                  <ListItem>Activities that infringe the rights of others</ListItem>
                </ul>
                <p>We may take appropriate action when necessary to protect our users, customers, platform, and services.</p>
              </Section>

              <Section title="14. Service Availability and Improvements">
                <p>We continuously work to improve Fixvil and provide a reliable experience for our users.</p>
                <p>From time to time, we may perform:</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Maintenance</ListItem>
                  <ListItem>Security updates</ListItem>
                  <ListItem>Performance improvements</ListItem>
                  <ListItem>Feature updates</ListItem>
                  <ListItem>Infrastructure improvements</ListItem>
                  <ListItem>Integration updates</ListItem>
                </ul>
                <p>These improvements help us provide better functionality, security, and performance.</p>
                <p>Third-party services such as WhatsApp, Meta, APIs, and external integrations may also introduce changes that affect connected functionality. We will make reasonable efforts to keep our integrations compatible with supported services.</p>
              </Section>

              <Section title="15. Intellectual Property">
                <p>Fixvil's platform, software, design, branding, user interface, logos, documentation, and original technology are owned by or licensed to Fixvil.</p>
                <p>You may use our Services according to these Terms, but this does not transfer ownership of Fixvil's intellectual property to you.</p>
                <p>You may not copy, reproduce, modify, distribute, reverse engineer, or commercially exploit our proprietary platform or technology without our written permission.</p>
                <p>Your business content remains yours.</p>
              </Section>

              <Section title="16. Account Management">
                <p>You may manage your Fixvil account according to the features and options available within our platform.</p>
                <p>We may take appropriate action on accounts that significantly violate these Terms, applicable laws, or platform requirements.</p>
                <p>Where appropriate, we aim to communicate with users and provide reasonable information regarding important account-related actions.</p>
              </Section>

              <Section title="17. Service Features">
                <p>Fixvil continuously evolves to meet the needs of modern businesses.</p>
                <p>Features may be improved, expanded, updated, or introduced over time. This may include improvements to:</p>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Automation</ListItem>
                  <ListItem>WhatsApp integrations</ListItem>
                  <ListItem>CRM</ListItem>
                  <ListItem>AI features</ListItem>
                  <ListItem>Analytics</ListItem>
                  <ListItem>Customer management</ListItem>
                  <ListItem>Business workflows</ListItem>
                  <ListItem>Integrations</ListItem>
                  <ListItem>User experience</ListItem>
                </ul>
                <p>Our goal is to continuously make Fixvil more useful for businesses.</p>
              </Section>

              <Section title="18. Business Responsibility">
                <p>Fixvil provides the technology and tools that businesses use to automate customer communication.</p>
                <p>Each business remains responsible for its own:</p>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Products</ListItem>
                  <ListItem>Services</ListItem>
                  <ListItem>Pricing</ListItem>
                  <ListItem>Bookings</ListItem>
                  <ListItem>Orders</ListItem>
                  <ListItem>Customer relationships</ListItem>
                  <ListItem>Business policies</ListItem>
                  <ListItem>Customer support</ListItem>
                  <ListItem>Marketing activities</ListItem>
                  <ListItem>Business decisions</ListItem>
                </ul>
                <p>Fixvil helps businesses manage and automate these processes but does not operate the underlying business on the user's behalf.</p>
              </Section>

              <Section title="19. Privacy">
                <p>Your use of Fixvil is also governed by our <a href="/privacy-policy" className="text-[#16a34a] hover:text-[#15803d]">Privacy Policy</a>.</p>
                <p>Our Privacy Policy explains how we collect, use, store, process, and protect information when you use our Services.</p>
                <p>By using Fixvil, you acknowledge that you have reviewed our Privacy Policy.</p>
              </Section>

              <Section title="20. Updates to These Terms">
                <p>As Fixvil grows and our Services develop, we may update these Terms to reflect:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>New features</ListItem>
                  <ListItem>Service improvements</ListItem>
                  <ListItem>Changes in technology</ListItem>
                  <ListItem>Changes in applicable laws</ListItem>
                  <ListItem>Changes in integrations</ListItem>
                  <ListItem>Improvements to our business practices</ListItem>
                </ul>
                <p>When important changes are made, we may provide notice through our website, application, email, or another appropriate communication method.</p>
                <p>The updated version will include a new "Last Updated" date.</p>
              </Section>

              <Section title="21. Governing Law">
                <p>These Terms are governed by the applicable laws of India.</p>
                <p>Any matters relating to these Terms or the use of Fixvil will be handled according to applicable Indian law and the appropriate jurisdiction of the courts in [City, Kerala, India], unless otherwise required by applicable law.</p>
              </Section>

              <Section title="22. Contact Us">
                <p>If you have questions about these Terms and Conditions, our Services, or your Fixvil account, we are happy to help.</p>
                
                <div className="bg-[#0b1110] p-6 rounded-2xl border border-gray-800 mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="text-white font-semibold mb-1">Fixvil</h4>
                    <p className="text-sm">Automation Solutions</p>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-[#16a34a] bg-[#16a34a]/10 p-2 rounded-lg">📧</span>
                      <a href="mailto:fixvilgrow@gmail.com" className="no-underline hover:text-white transition-colors">fixvilgrow@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#16a34a] bg-[#16a34a]/10 p-2 rounded-lg">🌐</span>
                      <a href="https://fixvil.com" target="_blank" rel="noopener noreferrer" className="no-underline hover:text-white transition-colors">fixvil.com</a>
                    </div>
                  </div>
                </div>
              </Section>

              <div className="mt-16 pt-8 border-t border-gray-800/50 text-sm text-gray-500 text-center">
                <p>By creating an account or using Fixvil, you confirm that you have read and understood these Terms and agree to use our Services responsibly and in accordance with these Terms.</p>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="mb-12 scroll-mt-32">
    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
      <span className="w-1.5 h-6 bg-[#16a34a] rounded-full inline-block" />
      {title}
    </h2>
    <div className="space-y-4">
      {children}
    </div>
  </section>
);

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-3 text-gray-400 m-0 !p-0">
    <svg className="w-5 h-5 text-[#16a34a] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
    <span className="leading-relaxed">{children}</span>
  </li>
);

export default TermsAndConditions;
