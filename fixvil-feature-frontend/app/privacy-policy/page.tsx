import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

export const metadata = {
  title: "Privacy Policy | Fixvil",
  description: "Privacy Policy for Fixvil - WhatsApp automation platform.",
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#050b09] text-gray-300 font-sans selection:bg-[#16a34a] selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#16a34a]/20 blur-[100px] rounded-full pointer-events-none" />
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight relative z-10">
              Privacy <span className="text-[#16a34a]">Policy</span>
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
              
              <p className="text-lg leading-relaxed mb-8">
                At <strong>Fixvil</strong> , we respect your privacy and are committed to protecting the personal information of our users and the customers who interact with businesses using our Services.
              </p>
              <p className="text-lg leading-relaxed mb-12">
                This Privacy Policy explains how we collect, use, store, process, and protect information when you use our website, application, WhatsApp automation platform, APIs, and related services (collectively, the "Services"). By accessing or using our Services, you agree to the practices described in this Privacy Policy.
              </p>

              <Section title="1. About Our Services">
                <p>Fixvil is a WhatsApp automation platform that helps businesses communicate with their customers through automated conversations and workflows.</p>
                <p>Our Services may allow businesses to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 mb-6 list-none pl-0">
                  <ListItem>Automatically respond to customer messages</ListItem>
                  <ListItem>Handle customer enquiries</ListItem>
                  <ListItem>Manage bookings and appointments</ListItem>
                  <ListItem>Assist customers with purchases and orders</ListItem>
                  <ListItem>Send notifications and follow-ups</ListItem>
                  <ListItem>Manage leads and customer information</ListItem>
                  <ListItem>Create automated conversation workflows</ListItem>
                  <ListItem>Use CRM and pipeline features</ListItem>
                  <ListItem>Connect third-party applications and services</ListItem>
                  <ListItem>Manage multiple WhatsApp numbers</ListItem>
                  <ListItem>Use automated or AI-powered responses</ListItem>
                </ul>
                <p>Because businesses use our Platform to communicate with their own customers, we may process information provided by those businesses and information exchanged between businesses and their customers.</p>
              </Section>

              <Section title="2. Information We Collect">
                <p>We collect information that is necessary to provide, maintain, secure, and improve our Services.</p>

                <h3>2.1 Account Information</h3>
                <p>When you create or use an account, we may collect:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>Full name</ListItem>
                  <ListItem>Business or company name</ListItem>
                  <ListItem>Email address</ListItem>
                  <ListItem>Phone number</ListItem>
                  <ListItem>Login credentials</ListItem>
                  <ListItem>Business information</ListItem>
                  <ListItem>Account preferences</ListItem>
                  <ListItem>Information you voluntarily provide to us</ListItem>
                </ul>

                <h3>2.2 WhatsApp Information</h3>
                <p>When a business connects WhatsApp to our Platform, we may process information necessary to provide WhatsApp automation services, including:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>WhatsApp phone numbers</ListItem>
                  <ListItem>WhatsApp account information</ListItem>
                  <ListItem>Customer names</ListItem>
                  <ListItem>Customer messages</ListItem>
                  <ListItem>Conversation history</ListItem>
                  <ListItem>Message timestamps</ListItem>
                  <ListItem>Customer enquiries</ListItem>
                  <ListItem>Automated responses</ListItem>
                  <ListItem>Communication status</ListItem>
                  <ListItem>Information required for automated workflows</ListItem>
                </ul>
                <p>We process WhatsApp information only to provide and operate the features requested by the business.</p>

                <h3>2.3 Customer Information</h3>
                <p>Businesses using our Platform may provide or collect information about their customers through WhatsApp or other connected services. Depending on how the business uses our Services, this information may include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>Customer name</ListItem>
                  <ListItem>Phone number</ListItem>
                  <ListItem>Email address</ListItem>
                  <ListItem>Booking or appointment information</ListItem>
                  <ListItem>Product or service information</ListItem>
                  <ListItem>Customer enquiries</ListItem>
                  <ListItem>Order information</ListItem>
                  <ListItem>Preferences</ListItem>
                  <ListItem>Conversation history</ListItem>
                  <ListItem>Lead information</ListItem>
                  <ListItem>Notes or other information provided</ListItem>
                </ul>
                <p>Businesses are responsible for ensuring that they have the appropriate legal basis, permissions, and notices required to collect and process their customers' information.</p>

                <h3>2.4 Technical and Usage Information</h3>
                <p>We may automatically collect technical information when you access or use our Services, including:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>IP address</ListItem>
                  <ListItem>Browser type</ListItem>
                  <ListItem>Device type</ListItem>
                  <ListItem>Operating system</ListItem>
                  <ListItem>Login information</ListItem>
                  <ListItem>Date and time of access</ListItem>
                  <ListItem>Pages and features used</ListItem>
                  <ListItem>API activity</ListItem>
                  <ListItem>Error information</ListItem>
                  <ListItem>Performance information</ListItem>
                  <ListItem>Security logs</ListItem>
                </ul>
                <p>This information helps us maintain the security, reliability, and performance of our Services.</p>
              </Section>

              <Section title="3. How We Use Information">
                <p>We may use information to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>Create and manage accounts</ListItem>
                  <ListItem>Provide WhatsApp automation services</ListItem>
                  <ListItem>Process customer conversations</ListItem>
                  <ListItem>Deliver automated responses</ListItem>
                  <ListItem>Facilitate bookings and appointments</ListItem>
                  <ListItem>Support purchase and order workflows</ListItem>
                  <ListItem>Manage customer enquiries</ListItem>
                  <ListItem>Manage leads and CRM information</ListItem>
                  <ListItem>Send notifications and follow-ups</ListItem>
                  <ListItem>Provide customer support</ListItem>
                  <ListItem>Maintain and improve our Services</ListItem>
                  <ListItem>Develop new features</ListItem>
                  <ListItem>Monitor system performance</ListItem>
                  <ListItem>Detect and prevent fraud, abuse, and unauthorized access</ListItem>
                  <ListItem>Maintain platform security</ListItem>
                  <ListItem>Troubleshoot technical problems</ListItem>
                  <ListItem>Comply with applicable laws and legal requirements</ListItem>
                </ul>
                <p>We do not use personal information for purposes that are incompatible with this Privacy Policy unless permitted or required by applicable law.</p>
              </Section>

              <Section title="4. WhatsApp and Meta Services">
                <p>Our Platform may integrate with WhatsApp and services provided by Meta to deliver WhatsApp automation functionality. When a business connects its WhatsApp account to our Platform, information may be exchanged between:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>The business</ListItem>
                  <ListItem>Our Platform</ListItem>
                  <ListItem>WhatsApp</ListItem>
                  <ListItem>Meta</ListItem>
                  <ListItem>Authorized service providers</ListItem>
                  <ListItem>Third-party integrations selected by the business</ListItem>
                </ul>
                <p>We process WhatsApp-related information only as necessary to provide the requested Services. Businesses using our Platform are responsible for complying with applicable WhatsApp, Meta, privacy, marketing, messaging, and communication requirements.</p>
              </Section>

              <Section title="5. Customer Data Processed for Businesses">
                <p>Our Platform may process personal information on behalf of businesses using our Services. For example, a business may use our Platform to automatically communicate with customers about:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 list-none pl-0">
                  <ListItem>Bookings</ListItem>
                  <ListItem>Appointments</ListItem>
                  <ListItem>Products</ListItem>
                  <ListItem>Services</ListItem>
                  <ListItem>Orders</ListItem>
                  <ListItem>Enquiries</ListItem>
                  <ListItem>Customer support</ListItem>
                  <ListItem>Promotions</ListItem>
                  <ListItem>Follow-ups</ListItem>
                </ul>
                <p>In these situations, the business generally determines:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>What information is collected</li>
                  <li>Why the information is collected</li>
                  <li>How the information is used</li>
                  <li>How long the information should be retained</li>
                </ul>
                <p>Businesses are responsible for providing appropriate privacy notices to their customers and obtaining any consent or other lawful basis required by applicable law. We process such information primarily to provide the Services requested by the business.</p>
              </Section>

              <Section title="6. Automated and AI-Powered Responses">
                <p>Some features of our Platform may use automation technologies or artificial intelligence to help generate or provide responses. These systems may process information such as:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>Customer questions</ListItem>
                  <ListItem>Conversation context</ListItem>
                  <ListItem>Business information</ListItem>
                  <ListItem>Product information</ListItem>
                  <ListItem>Service information</ListItem>
                  <ListItem>Booking information</ListItem>
                  <ListItem>Other information necessary to provide an automated response</ListItem>
                </ul>
                <p>Automated or AI-generated responses may not always be accurate or appropriate in every situation. Businesses are responsible for configuring their automation systems appropriately and should provide human assistance when necessary.</p>
                <p>We do not intentionally use private customer conversations to train a publicly available AI model unless this is separately disclosed and permitted by applicable law or agreement.</p>
              </Section>

              <Section title="7. How We Share Information">
                <p>We may share information with service providers and third parties when necessary to operate and provide our Services. These may include:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>WhatsApp and Meta services</ListItem>
                  <ListItem>Cloud hosting providers</ListItem>
                  <ListItem>Database providers</ListItem>
                  <ListItem>Infrastructure providers</ListItem>
                  <ListItem>Email and notification providers</ListItem>
                  <ListItem>Analytics and monitoring services</ListItem>
                  <ListItem>Customer support services</ListItem>
                  <ListItem>CRM and integration providers</ListItem>
                  <ListItem>Security service providers</ListItem>
                  <ListItem>Professional advisers</ListItem>
                  <ListItem>Government authorities or law-enforcement agencies when legally required</ListItem>
                </ul>
                <p>We expect service providers that process information on our behalf to use appropriate security measures and process information only for legitimate purposes.</p>
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mt-6 font-medium">
                  We do not sell personal information as a standalone product.
                </div>
              </Section>

              <Section title="8. Third-Party Integrations">
                <p>Our Platform may allow businesses to connect third-party applications, APIs, CRMs, websites, communication services, and other software.</p>
                <p>When a business connects a third-party service, information may be exchanged between the Platform and that service according to the business's configuration.</p>
                <p>Third-party services operate independently from us and may have their own privacy policies and terms. We recommend reviewing the privacy practices of any third-party service before connecting it to our Platform.</p>
              </Section>

              <Section title="9. Data Retention">
                <p>We retain information only for as long as reasonably necessary to:</p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>Provide the Services</ListItem>
                  <ListItem>Maintain user accounts</ListItem>
                  <ListItem>Maintain business records</ListItem>
                  <ListItem>Provide customer support</ListItem>
                  <ListItem>Maintain security</ListItem>
                  <ListItem>Prevent fraud and abuse</ListItem>
                  <ListItem>Resolve disputes</ListItem>
                  <ListItem>Meet contractual obligations</ListItem>
                  <ListItem>Comply with applicable laws</ListItem>
                </ul>
                <p>When information is no longer required, we may delete, anonymize, or securely dispose of it, subject to applicable legal requirements and legitimate operational needs.</p>
              </Section>

              <Section title="10. Account and Data Deletion">
                <p>Users may request deletion of their account and personal information by contacting us at:</p>
                <a href="mailto:fixvilgrow@gmail.com" className="inline-block bg-[#16a34a]/10 text-[#16a34a] px-4 py-2 rounded-lg font-medium hover:bg-[#16a34a]/20 transition-colors my-2 no-underline">fixvilgrow@gmail.com</a>
                <p>Businesses using our Platform may also request deletion of customer information associated with their account, subject to applicable legal, contractual, security, and operational requirements.</p>
                <p>Certain information may need to be retained where required by law or where reasonably necessary to prevent fraud, maintain security, resolve disputes, or comply with legal obligations.</p>
              </Section>

              <Section title="11. Data Security">
                <p>We take reasonable technical and organizational measures to protect information against:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 list-none pl-0 mb-6">
                  <ListItem>Unauthorized access</ListItem>
                  <ListItem>Unauthorized disclosure</ListItem>
                  <ListItem>Loss</ListItem>
                  <ListItem>Misuse</ListItem>
                  <ListItem>Alteration</ListItem>
                  <ListItem>Destruction</ListItem>
                </ul>
                <p>Security measures may include:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>Authentication controls</ListItem>
                  <ListItem>Access controls</ListItem>
                  <ListItem>Encryption where appropriate</ListItem>
                  <ListItem>Monitoring</ListItem>
                  <ListItem>Security logging</ListItem>
                  <ListItem>Secure infrastructure</ListItem>
                  <ListItem>System protections</ListItem>
                </ul>
                <p>However, no online service can guarantee absolute security. Users acknowledge that no method of transmitting or storing information over the internet is completely secure.</p>
              </Section>

              <Section title="12. Cookies and Similar Technologies">
                <p>Our website and Services may use cookies and similar technologies to:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>Keep users signed in</ListItem>
                  <ListItem>Remember preferences</ListItem>
                  <ListItem>Improve website functionality</ListItem>
                  <ListItem>Understand how users interact with our Services</ListItem>
                  <ListItem>Analyze traffic and usage</ListItem>
                  <ListItem>Maintain security</ListItem>
                  <ListItem>Improve performance</ListItem>
                </ul>
                <p>Users may control cookies through their browser settings. Disabling certain cookies may affect some features of our Services.</p>
              </Section>

              <Section title="13. Marketing and Communications">
                <p>We may send communications related to the operation of our Services, including:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0">
                  <ListItem>Account notifications</ListItem>
                  <ListItem>Security alerts</ListItem>
                  <ListItem>Service updates</ListItem>
                  <ListItem>Product announcements</ListItem>
                  <ListItem>Important changes to our Services</ListItem>
                  <ListItem>Customer support communications</ListItem>
                </ul>
                <p>Where permitted by applicable law, we may also send promotional communications. Users may unsubscribe from promotional communications using the available unsubscribe option or by contacting us.</p>
                <p>Important service, security, and account-related communications may still be sent when necessary.</p>
              </Section>

              <Section title="14. Children's Privacy">
                <p>Our Services are intended for businesses and their authorized users. Our Services are not directed toward children.</p>
                <p>We do not knowingly collect personal information directly from children in violation of applicable law. If you believe that a child has provided personal information to us improperly, please contact us so that we can investigate and take appropriate action.</p>
              </Section>

              <Section title="15. International Data Processing">
                <p>Our Platform and service providers may process information in countries other than the country where you are located.</p>
                <p>Where required by applicable law, we will take reasonable measures to protect personal information when it is transferred or processed internationally.</p>
              </Section>

              <Section title="16. Your Privacy Rights">
                <p>Depending on your location and applicable law, you may have certain rights relating to your personal information, including:</p>
                <ul className="grid grid-cols-1 gap-2 list-none pl-0 mb-6">
                  <ListItem>The right to request access to your information</ListItem>
                  <ListItem>The right to request correction of inaccurate information</ListItem>
                  <ListItem>The right to request deletion of information</ListItem>
                  <ListItem>The right to request restriction of certain processing</ListItem>
                  <ListItem>The right to object to certain processing</ListItem>
                  <ListItem>The right to request data portability where applicable</ListItem>
                  <ListItem>The right to withdraw consent where applicable</ListItem>
                  <ListItem>The right to lodge a complaint with a relevant privacy authority</ListItem>
                </ul>
                <p>To exercise applicable rights, contact us at:</p>
                <p><strong>Email:</strong> <a href="mailto:fixvilgrow@gmail.com" className="no-underline text-[#16a34a] hover:text-[#15803d]">fixvilgrow@gmail.com</a></p>
                <p>We may need to verify your identity before processing certain requests.</p>
              </Section>

              <Section title="17. Third-Party Websites">
                <p>Our Services may contain links to third-party websites, applications, or services.</p>
                <p>We are not responsible for the privacy practices, security, or content of third-party websites or services. Users should review the privacy policies of third-party services before providing personal information to them.</p>
              </Section>

              <Section title="18. Changes to This Privacy Policy">
                <p>We may update this Privacy Policy from time to time due to:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none pl-0 mb-6">
                  <ListItem>Changes to our Services</ListItem>
                  <ListItem>New features</ListItem>
                  <ListItem>Changes in technology</ListItem>
                  <ListItem>Changes in applicable laws</ListItem>
                  <ListItem>Changes in our business practices</ListItem>
                  <ListItem>Security improvements</ListItem>
                </ul>
                <p>When material changes are made, we may notify users through our website, application, email, or other appropriate methods. The "Last Updated" date at the beginning of this Privacy Policy indicates when it was most recently updated.</p>
              </Section>

              <Section title="19. Contact Us">
                <p>If you have questions, concerns, complaints, or requests regarding this Privacy Policy or the way we handle personal information, please contact us.</p>
                
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
                    <div className="flex items-start gap-3">
                      <span className="text-[#16a34a] bg-[#16a34a]/10 p-2 rounded-lg">📍</span>
                      <span>India</span>
                    </div>
                  </div>
                </div>
              </Section>

              <div className="mt-16 pt-8 border-t border-gray-800/50 text-sm text-gray-500">
                <h4 className="text-gray-400 font-semibold mb-2">Important Notice</h4>
                <p>This Privacy Policy is a general privacy policy for our Services. Additional privacy requirements may apply depending on the country where our users or their customers are located, the type of information processed, the WhatsApp/Meta services used, and the third-party integrations connected to the Platform. We recommend having this Privacy Policy reviewed by a qualified legal professional before publishing it as the final legal policy for your business.</p>
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

export default PrivacyPolicy;
