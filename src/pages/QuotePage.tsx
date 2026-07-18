import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOOptimizer from '../components/common/SEOOptimizer';
import StructuredData from '../components/common/StructuredData';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  phone: string;
  location: string;
  serviceType: string;
  consultationReason: string;
  spaceDescription: string;
  consultationType: string;
  consultationWindow: string;
  timeline: string;
  budgetRange: string;
  hearAbout: string;
  acknowledged: boolean;
}

const HERO_IMAGE = 'https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/contact-avalanche-creations-interior-design.jpg';
const WEBHOOK_URL = 'https://hook.eu2.make.com/7mf3jarqa5750tmmupzwj2potzm4ouei';

const inputStyle: React.CSSProperties = {
  backgroundColor: '#FFFFFF',
  color: '#3D1E0B',
  border: '1px solid #E1CCBB',
};

const labelClass = 'block text-xs font-semibold uppercase tracking-widest mb-2';
const inputClass = 'w-full px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-brown-600 transition-all';
const selectClass = 'w-full px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-brown-600 transition-all appearance-none cursor-pointer';

const SelectWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative">
    {children}
    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center" style={{ color: '#562A0E' }}>
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
);

const mapBudgetToNumber = (range: string): number => {
  switch (range) {
    case 'Below KES 500,000': return 250000;
    case 'KES 500,000 to KES 1,500,000': return 1000000;
    case 'KES 1,500,000 to KES 3,000,000': return 2250000;
    case 'Above KES 3,000,000': return 3500000;
    default: return 0;
  }
};

const QuotePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    serviceType: '',
    consultationReason: '',
    spaceDescription: '',
    consultationType: '',
    consultationWindow: '',
    timeline: '',
    budgetRange: '',
    hearAbout: '',
    acknowledged: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const target = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: target.type === 'checkbox' ? target.checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acknowledged) {
      setSubmitError('Please confirm that you understand the consultation fee before submitting.');
      return;
    }
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const combinedDescription = [
        formData.spaceDescription,
        `Consultation type: ${formData.consultationType}`,
        `Preferred window: ${formData.consultationWindow}`,
        `Timeline: ${formData.timeline}`,
      ].filter(Boolean).join(' | ');

      const { error: supabaseError } = await supabase
        .from('quote_requests')
        .insert([{
          name: formData.name,
          email: '',
          phone: formData.phone,
          location: formData.location,
          services: [formData.serviceType],
          description: combinedDescription,
          budget: mapBudgetToNumber(formData.budgetRange),
          inspiration_source: formData.hearAbout,
          inspiration_detail: formData.consultationReason,
          start_date: null,
          expected_completion_date: null,
          created_at: new Date().toISOString(),
        }]);

      if (supabaseError) {
        console.error('Supabase error:', supabaseError);
        throw supabaseError;
      }

      const webhookPayload = {
        name: formData.name,
        email: '',
        phone: formData.phone,
        location: formData.location,
        services: [formData.serviceType],
        budget: formData.budgetRange,
        inspirationSource: formData.hearAbout,
        inspirationDetail: formData.consultationReason,
        startDate: '',
        expectedCompletionDate: '',
        submittedAt: new Date().toISOString(),
        serviceType: formData.serviceType,
        consultationReason: formData.consultationReason,
        spaceDescription: formData.spaceDescription,
        consultationType: formData.consultationType,
        consultationWindow: formData.consultationWindow,
        timeline: formData.timeline,
        budgetRange: formData.budgetRange,
        hearAbout: formData.hearAbout,
      };

      const webhookResponse = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(webhookPayload),
      });

      if (!webhookResponse.ok) {
        console.warn('Webhook submission failed, but Supabase data was saved');
      }

      setFormData({
        name: '', phone: '', location: '', serviceType: '',
        consultationReason: '', spaceDescription: '', consultationType: '',
        consultationWindow: '', timeline: '', budgetRange: '', hearAbout: '',
        acknowledged: false,
      });
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error submitting your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOOptimizer
        title="Book a Design Consultation in Nairobi | Avalanche Creations"
        description="Book an interior design consultation in Nairobi, Kenya. KES 5,000 — on-site or virtual. Get clear direction, realistic expectations, and a defined path forward."
        keywords="book interior design consultation Nairobi, interior design quote Kenya, consultation fee KES 5000, hire interior designer Kenya"
        type="website"
        image="https://ykndyjgvochvehwimhhq.supabase.co/storage/v1/object/public/Website%20Assests/banner-images/contact-avalanche-creations-interior-design.jpg"
      />
      <StructuredData
        type="breadcrumb"
        data={[
          { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
          { name: 'Book a Consultation', url: 'https://www.avalanchecreations.co.ke/quote' },
        ]}
      />
      <StructuredData
        type="webpage"
        data={{
          name: 'Book a Design Consultation in Nairobi | Avalanche Creations',
          description: 'Book an interior design consultation in Nairobi, Kenya. KES 5,000 — on-site or virtual.',
          url: 'https://www.avalanchecreations.co.ke/quote',
          breadcrumb: [
            { name: 'Home', url: 'https://www.avalanchecreations.co.ke/' },
            { name: 'Book a Consultation', url: 'https://www.avalanchecreations.co.ke/quote' },
          ],
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-grain-texture min-h-screen"
      >
        <div className="absolute inset-0 bg-offWhite/90" />

        {/* Hero Image — matches service page treatment */}
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden z-10">
          <img
            src={HERO_IMAGE}
            alt="Interior Design Consultation — Avalanche Creations Nairobi"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-900/10 to-brown-900/05" />
        </div>

        <div className="py-20 relative z-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">

              {/* ── Page Copy ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brown-900 mb-6 leading-tight">
                  Book an Interior Design Consultation in Nairobi, Kenya
                </h1>

                <h2 className="text-xl md:text-2xl font-serif text-brown-800 mb-8">
                  Every Well-Designed Home Starts With a Conversation
                </h2>

                <div className="space-y-5 mb-12">
                  <p className="text-lg text-brown-700 leading-relaxed">
                    Before we recommend anything, we listen. The consultation is where we understand your space, how you live in it, and what you're trying to achieve.
                  </p>
                  <p className="text-lg text-brown-700 leading-relaxed">
                    It's a focused session, not a sales call. Whether you're planning a home renovation in Nairobi, furnishing a new home, or exploring full interior design services, you'll leave with clear direction, realistic expectations, and a defined path forward.
                  </p>
                  <p className="text-lg text-brown-800 font-semibold">
                    Consultation Fee: KES 5,000
                  </p>
                  <p className="text-lg text-brown-700 leading-relaxed">
                    Available on-site within Nairobi or virtually anywhere in Kenya.
                  </p>
                </div>

                <div className="mb-10">
                  <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-5">
                    What Happens During the Consultation
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'We review your space and discuss how your household lives and moves within it',
                      'We cover layout opportunities, style direction, materials, and finishes',
                      'We identify the most suitable service and explain the next steps in plain language',
                      'You leave with clarity on what your home needs and confidence in how to move forward',
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-brown-700">
                        <span className="text-brown-400 mr-3 mt-1 flex-shrink-0 text-sm">—</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-5">
                    A Note on the Fee
                  </h3>
                  <div className="space-y-4">
                    <p className="text-brown-700 leading-relaxed">
                      The KES 5,000 interior design consultation fee ensures the session is focused, prepared, and genuinely useful. It covers dedicated time, professional insight, and tailored guidance specific to your space — not general advice.
                    </p>
                    <p className="text-brown-700 leading-relaxed">
                      For on-site consultations outside Nairobi, travel costs are discussed based on distance and confirmed before anything is scheduled. Virtual consultations are available anywhere in Kenya at the standard fee.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Divider */}
              <div className="w-full h-px bg-brown-200 mb-16" />

              {/* ── Form ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="space-y-8">

                  {/* Name */}
                  <div>
                    <label htmlFor="name" className={labelClass} style={{ color: '#562A0E' }}>
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className={labelClass} style={{ color: '#562A0E' }}>
                      Phone Number{' '}
                      <span className="normal-case font-normal tracking-normal text-brown-500">(WhatsApp Preferred)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className={labelClass} style={{ color: '#562A0E' }}>
                      Location
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder="City or area within Kenya"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  {/* Service Type */}
                  <div>
                    <label htmlFor="serviceType" className={labelClass} style={{ color: '#562A0E' }}>
                      Type of Interior Design Service
                    </label>
                    <SelectWrapper>
                      <select
                        id="serviceType"
                        name="serviceType"
                        value={formData.serviceType}
                        onChange={handleInputChange}
                        required
                        className={selectClass}
                        style={inputStyle}
                      >
                        <option value="" disabled>Select...</option>
                        <option>Home Renovation</option>
                        <option>Full Interior Design Services</option>
                        <option>Home Furnishing</option>
                        <option>Custom Furniture Design</option>
                        <option>Virtual Interior Design</option>
                        <option>Not Sure Yet</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* Consultation Reason */}
                  <div>
                    <label htmlFor="consultationReason" className={labelClass} style={{ color: '#562A0E' }}>
                      Biggest Reason for the Consultation
                    </label>
                    <input
                      type="text"
                      id="consultationReason"
                      name="consultationReason"
                      value={formData.consultationReason}
                      onChange={handleInputChange}
                      required
                      placeholder="What prompted you to reach out about your home?"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>

                  {/* Space Description */}
                  <div>
                    <label htmlFor="spaceDescription" className={labelClass} style={{ color: '#562A0E' }}>
                      Tell Us Briefly About Your Space
                    </label>
                    <textarea
                      id="spaceDescription"
                      name="spaceDescription"
                      value={formData.spaceDescription}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="2 to 3 sentences: what it is, where it is, and what feels unresolved"
                      className={`${inputClass} resize-none`}
                      style={inputStyle}
                    />
                  </div>

                  {/* Consultation Type */}
                  <div>
                    <label htmlFor="consultationType" className={labelClass} style={{ color: '#562A0E' }}>
                      Preferred Consultation Type
                    </label>
                    <SelectWrapper>
                      <select
                        id="consultationType"
                        name="consultationType"
                        value={formData.consultationType}
                        onChange={handleInputChange}
                        required
                        className={selectClass}
                        style={inputStyle}
                      >
                        <option value="" disabled>Select...</option>
                        <option>On-site Interior Design Consultation (Nairobi)</option>
                        <option>Virtual Interior Design Consultation (Anywhere in Kenya)</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* Consultation Window */}
                  <div>
                    <label htmlFor="consultationWindow" className={labelClass} style={{ color: '#562A0E' }}>
                      Preferred Consultation Window
                    </label>
                    <SelectWrapper>
                      <select
                        id="consultationWindow"
                        name="consultationWindow"
                        value={formData.consultationWindow}
                        onChange={handleInputChange}
                        required
                        className={selectClass}
                        style={inputStyle}
                      >
                        <option value="" disabled>Select...</option>
                        <option>Morning (8am to 12pm)</option>
                        <option>Afternoon (12pm to 5pm)</option>
                        <option>Evening (5pm to 7pm)</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className={labelClass} style={{ color: '#562A0E' }}>
                      How Soon Are You Looking to Get Started?
                    </label>
                    <SelectWrapper>
                      <select
                        id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        required
                        className={selectClass}
                        style={inputStyle}
                      >
                        <option value="" disabled>Select...</option>
                        <option>Ready to start within 1 month</option>
                        <option>Planning for 2 to 3 months from now</option>
                        <option>Exploring options, no fixed timeline</option>
                        <option>Just researching for now</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* Budget Range (Optional) */}
                  <div>
                    <label htmlFor="budgetRange" className={labelClass} style={{ color: '#562A0E' }}>
                      Approximate Budget Range for Your Project{' '}
                      <span className="normal-case font-normal tracking-normal text-brown-500">(Optional)</span>
                    </label>
                    <SelectWrapper>
                      <select
                        id="budgetRange"
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleInputChange}
                        className={selectClass}
                        style={inputStyle}
                      >
                        <option value="">Select...</option>
                        <option>Below KES 500,000</option>
                        <option>KES 500,000 to KES 1,500,000</option>
                        <option>KES 1,500,000 to KES 3,000,000</option>
                        <option>Above KES 3,000,000</option>
                        <option>Not sure yet</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* How Did You Hear */}
                  <div>
                    <label htmlFor="hearAbout" className={labelClass} style={{ color: '#562A0E' }}>
                      How Did You Hear About Avalanche Creations?
                    </label>
                    <SelectWrapper>
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleInputChange}
                        required
                        className={selectClass}
                        style={inputStyle}
                      >
                        <option value="" disabled>Select...</option>
                        <option>Instagram</option>
                        <option>Google Search</option>
                        <option>Referral</option>
                        <option>WhatsApp</option>
                        <option>Other</option>
                      </select>
                    </SelectWrapper>
                  </div>

                  {/* Acknowledgment Checkbox */}
                  <div>
                    <label htmlFor="acknowledged" className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        id="acknowledged"
                        name="acknowledged"
                        checked={formData.acknowledged}
                        onChange={handleInputChange}
                        className="mt-1 h-4 w-4 flex-shrink-0 cursor-pointer rounded-sm"
                        style={{ accentColor: '#8B4513' }}
                      />
                      <span className="text-brown-700 leading-relaxed">
                        I understand the interior design consultation fee is KES 5,000, confirmed upon booking.
                      </span>
                    </label>
                  </div>

                  {/* Error */}
                  {submitError && (
                    <div className="p-4 rounded-sm" style={{ backgroundColor: '#FEF2F2', color: '#7F1D1D' }}>
                      {submitError}
                    </div>
                  )}

                  {/* Success */}
                  {submitSuccess && (
                    <div className="p-5 rounded-sm" style={{ backgroundColor: '#F0FDF4', color: '#166534' }}>
                      <p className="font-medium mb-1">Thank you, your consultation request has been received.</p>
                      <p>We'll be in touch within 24 hours to confirm your details via WhatsApp.</p>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn flex items-center justify-center text-base py-4 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                      style={{ backgroundColor: '#8B4513', color: '#FAF9F6' }}
                      onMouseEnter={e => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#703811'; }}
                      onMouseLeave={e => { if (!isSubmitting) e.currentTarget.style.backgroundColor = '#8B4513'; }}
                    >
                      {isSubmitting ? 'Submitting...' : 'Book My Interior Design Consultation'}
                    </button>
                  </div>
                </form>

                {/* After Submit */}
                <div className="mt-12 pt-12 border-t border-brown-200">
                  <h3 className="text-lg md:text-xl font-serif text-brown-900 mb-5">
                    What Happens After You Submit
                  </h3>
                  <p className="text-brown-700 leading-relaxed">
                    We typically respond within 24 hours to confirm your consultation details via WhatsApp. Once confirmed, we'll share a brief pre-consultation guide so your session is as focused and useful as possible.
                  </p>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default QuotePage;
