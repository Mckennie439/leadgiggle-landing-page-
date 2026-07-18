import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Avalanche Creations</title>
        <meta
          name="description"
          content="Privacy Policy for Avalanche Creations. Learn how we collect, use, and protect your personal information in compliance with Kenyan law."
        />
        <link rel="canonical" href="https://www.avalanchecreations.co.ke/privacy-policy" />
        <link rel="alternate" hreflang="en" href="https://www.avalanchecreations.co.ke/privacy-policy" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacy Policy | Avalanche Creations" />
        <meta property="og:description" content="Privacy Policy for Avalanche Creations. Learn how we collect, use, and protect your personal information in compliance with Kenyan law." />
        <meta property="og:url" content="https://www.avalanchecreations.co.ke/privacy-policy" />
        <meta property="og:site_name" content="Avalanche Creations" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Avalanche Creations" />
        <meta name="twitter:description" content="Privacy Policy for Avalanche Creations. Learn how we collect, use, and protect your personal information in compliance with Kenyan law." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-grain-texture min-h-screen"
      >
        <div className="absolute inset-0 bg-offWhite/90"></div>
        
        <div className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 shine-border"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brown-900 mb-6">
                  Privacy Policy
                </h1>
                
                <div className="prose prose-lg max-w-none text-brown-700">
                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4">Your Privacy</h2>
                  <p className="mb-6">
                    At <strong>Avalanche Creation</strong> ("we", "us", "our"), we respect your right to privacy as guaranteed under <strong>Article 31 of the Constitution of Kenya (2010)</strong> and the <strong>Data Protection Act, 2019</strong>.
                  </p>
                  <p className="mb-6">
                    You may browse our website freely without providing personal data. We collect personal information only where it is voluntarily provided by you, such as when you request a quote, submit an inquiry, subscribe to updates, or otherwise contact us.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">1. Information We Collect & Why</h2>

                  <h3 className="text-xl font-serif text-brown-800 mb-3 mt-8">a) Personal Information You Provide</h3>
                  <p className="mb-4">We may collect the following information when you interact with us:</p>
                  <ul className="mb-6 space-y-2">
                    <li><strong>Contact details</strong>: name, phone number, email address, and general location</li>
                    <li><strong>Project or service details</strong>: preferences, timelines, budgets, or requirements you choose to share</li>
                  </ul>

                  <p className="mb-4">This information is collected solely to:</p>
                  <ul className="mb-6 space-y-2">
                    <li>Respond to your inquiries or requests</li>
                    <li>Provide quotations or consultations</li>
                    <li>Deliver requested services</li>
                    <li>Communicate with you effectively</li>
                  </ul>

                  <p className="mb-6">
                    Providing this information is voluntary, and it is used only for the purpose for which it was provided.
                  </p>

                  <h3 className="text-xl font-serif text-brown-800 mb-3 mt-8">b) Optional & Contextual Information</h3>
                  <p className="mb-4">You may optionally provide:</p>
                  <ul className="mb-6 space-y-2">
                    <li>Referral source (how you found us)</li>
                    <li>Preferences or feedback</li>
                  </ul>
                  <p className="mb-6">
                    This information helps us improve our services and customer experience.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">2. Website Usage, Cookies & Tracking Technologies</h2>

                  <h3 className="text-xl font-serif text-brown-800 mb-3 mt-8">Cookies</h3>
                  <p className="mb-4">
                    Our website uses cookies and similar technologies to support essential functionality and to understand how visitors interact with our website.
                  </p>

                  <p className="mb-4">Cookies help us:</p>
                  <ul className="mb-6 space-y-2">
                    <li>Maintain website performance</li>
                    <li>Understand page usage and navigation flow</li>
                    <li>Improve user experience and content structure</li>
                  </ul>

                  <p className="mb-6">
                    Most browsers accept cookies by default. You can modify your browser settings to reject or delete cookies. Please note that disabling cookies may affect certain features or functionality of the website.
                  </p>

                  <p className="mb-6">
                    <strong>Cookies used on this website do not collect personal information such as names, email addresses, or phone numbers.</strong>
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">3. Advertising, Analytics & Website Monitoring</h2>
                  <p className="mb-4">
                    We use analytics and website monitoring tools to better understand visitor behavior and improve website performance, usability, and content relevance.
                  </p>

                  <p className="mb-4">These tools may collect <strong>non-personal, aggregated information</strong>, including:</p>
                  <ul className="mb-6 space-y-2">
                    <li>Pages visited and time spent on pages</li>
                    <li>Actions taken on the website (such as clicks or form interactions)</li>
                    <li>Approximate geographic location (derived from IP address)</li>
                    <li>Device type, browser, and operating system</li>
                  </ul>

                  <p className="mb-4">This data:</p>
                  <ul className="mb-6 space-y-2">
                    <li>Does <strong>not</strong> identify you personally</li>
                    <li>Is analyzed in aggregate form only</li>
                    <li>Is used strictly for website optimization, performance measurement, and service improvement</li>
                  </ul>

                  <h3 className="text-xl font-serif text-brown-800 mb-3 mt-8">Third-Party Tools</h3>
                  <p className="mb-4">
                    We may use reputable third-party platforms such as analytics, tag management, session monitoring, or advertising measurement tools. These platforms process data in accordance with their own privacy policies and applicable data protection laws.
                  </p>

                  <p className="mb-4">We do <strong>not</strong>:</p>
                  <ul className="mb-6 space-y-2">
                    <li>Sell personal data</li>
                    <li>Collect sensitive personal information through analytics tools</li>
                    <li>Engage in automated decision-making that produces legal or significant effects on users</li>
                  </ul>

                  <p className="mb-6">
                    Where advertising tools are used, they are limited to <strong>performance measurement and general audience insights</strong>, not individual profiling.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">4. WhatsApp & Communication Tools</h2>
                  <p className="mb-6">
                    If you contact us through a WhatsApp chat widget or similar communication tool, the information you voluntarily share is used solely to respond to your inquiry and provide assistance.
                  </p>
                  <p className="mb-6">
                    Communications conducted through third-party platforms are subject to those platforms' own privacy policies.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">5. Communications & Marketing</h2>
                  <p className="mb-6">
                    With your consent, we may send you updates about our services, insights, or offers.
                  </p>

                  <p className="mb-4">You may opt out of promotional communications at any time by:</p>
                  <ul className="mb-6 space-y-2">
                    <li>Using the unsubscribe link provided in our emails</li>
                    <li>Contacting us directly using the details below</li>
                  </ul>

                  <p className="mb-6">
                    Even if you opt out of promotional communications, we may still send you non-promotional messages, such as responses to inquiries, service-related messages, or important updates related to ongoing business interactions.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">6. Contests & Promotions</h2>
                  <p className="mb-6">
                    From time to time, we may run promotions or contests. Participation is voluntary, and we collect only the information necessary to administer the promotion and notify participants.
                  </p>
                  <p className="mb-6">
                    Specific terms and conditions will apply to each promotion.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">7. Data Security</h2>
                  <p className="mb-6">
                    We apply appropriate technical and organizational safeguards to protect personal data, including secure systems, controlled access, and SSL encryption where applicable.
                  </p>
                  <p className="mb-6">
                    While no system can be guaranteed to be completely secure, we take reasonable steps to protect your information from unauthorized access, loss, misuse, or disclosure.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">8. Sharing of Information & Third Parties</h2>
                  <p className="mb-4">
                    We do <strong>not</strong> sell, rent, or trade personal data.
                  </p>

                  <p className="mb-4">We may share:</p>
                  <ul className="mb-6 space-y-2">
                    <li><strong>Anonymized or aggregated data</strong> for analytical purposes</li>
                    <li>Personal data with trusted service providers only where necessary to deliver services, under appropriate safeguards</li>
                  </ul>

                  <p className="mb-6">
                    Third-party websites or platforms linked from our website operate under their own privacy policies, and we encourage you to review them separately.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">9. Children's Data</h2>
                  <p className="mb-6">
                    In compliance with <strong>Section 33 of the Data Protection Act, 2019</strong>, we do not knowingly collect personal data from children under the age of 18 without verified parental or guardian consent.
                  </p>
                  <p className="mb-6">
                    If you believe that we have unintentionally collected such data, please contact us immediately so that we can delete it.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">10. Your Rights Under Kenyan Law</h2>
                  <p className="mb-6">
                    Under <strong>Article 31(c) & (d) of the Constitution of Kenya</strong> and <strong>Sections 19–24 of the Data Protection Act, 2019</strong>, you have the right to:
                  </p>

                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse border border-brown-300 bg-offWhite">
                      <thead>
                        <tr style={{ backgroundColor: '#F5F0EA' }}>
                          <th className="border border-brown-300 px-4 py-3 text-left font-serif text-brown-900">Right</th>
                          <th className="border border-brown-300 px-4 py-3 text-left font-serif text-brown-900">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-brown-300 px-4 py-3 font-medium text-brown-800">Access</td>
                          <td className="border border-brown-300 px-4 py-3 text-brown-700">Request a copy of your personal data</td>
                        </tr>
                        <tr style={{ backgroundColor: '#FAF8F5' }}>
                          <td className="border border-brown-300 px-4 py-3 font-medium text-brown-800">Correction</td>
                          <td className="border border-brown-300 px-4 py-3 text-brown-700">Update or correct inaccurate information</td>
                        </tr>
                        <tr>
                          <td className="border border-brown-300 px-4 py-3 font-medium text-brown-800">Deletion</td>
                          <td className="border border-brown-300 px-4 py-3 text-brown-700">Request deletion where data is no longer required</td>
                        </tr>
                        <tr style={{ backgroundColor: '#FAF8F5' }}>
                          <td className="border border-brown-300 px-4 py-3 font-medium text-brown-800">Restriction</td>
                          <td className="border border-brown-300 px-4 py-3 text-brown-700">Limit processing where accuracy or legality is disputed</td>
                        </tr>
                        <tr>
                          <td className="border border-brown-300 px-4 py-3 font-medium text-brown-800">Consent Withdrawal</td>
                          <td className="border border-brown-300 px-4 py-3 text-brown-700">Withdraw consent at any time</td>
                        </tr>
                        <tr style={{ backgroundColor: '#FAF8F5' }}>
                          <td className="border border-brown-300 px-4 py-3 font-medium text-brown-800">Objection</td>
                          <td className="border border-brown-300 px-4 py-3 text-brown-700">Object to direct marketing or profiling</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="mb-6">
                    We aim to respond to all requests within the legally prescribed timelines.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">11. Data Retention & Transfers</h2>
                  <p className="mb-6">
                    We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, or until consent is withdrawn.
                  </p>
                  <p className="mb-6">
                    Where data is stored or processed using cloud or third-party services, appropriate safeguards are applied in line with Kenyan data protection requirements.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">12. Legal Basis & Responsibilities</h2>
                  <p className="mb-4">We process personal data based on:</p>
                  <ul className="mb-6 space-y-2">
                    <li>Your consent</li>
                    <li>Legitimate business interests that do not override your rights</li>
                    <li>Contractual necessity</li>
                    <li>Legal obligations</li>
                  </ul>

                  <p className="mb-6">
                    Avalanche Creation acts as a <strong>data controller</strong> and is responsible for ensuring lawful, fair, and transparent processing of personal data in accordance with Section 25 of the Data Protection Act, 2019.
                  </p>
                  <p className="mb-6">
                    We demonstrate accountability through documented practices, periodic reviews, and policy updates.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">13. Policy Updates</h2>
                  <p className="mb-6">
                    We may update this Privacy Policy from time to time to reflect legal, technical, or operational changes. Updates will be posted on this page, and continued use of the website constitutes acceptance of the revised policy.
                  </p>

                  <h2 className="text-2xl md:text-3xl font-serif text-brown-900 mb-4 mt-12">14. Contact Us</h2>
                  <p className="mb-4">
                    To exercise your rights, ask questions, or raise concerns about this Privacy Policy, contact us at:
                  </p>
                  <ul className="mb-6 space-y-2">
                    <li><strong>Email:</strong> <a href="mailto:avalanchecreationlimited@gmail.com" className="text-brown-600 hover:text-brown-800 underline">avalanchecreationlimited@gmail.com</a></li>
                    <li><strong>Phone:</strong> +254-700-097-896</li>
                    <li><strong>Address:</strong> Avalanche Creation, Garden Estate Cedar Court, Nairobi, Kenya</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default PrivacyPolicyPage;