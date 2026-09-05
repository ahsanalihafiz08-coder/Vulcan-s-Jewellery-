import { useState, type FormEvent } from 'react';
import { Send, Phone, MapPin, Mail, Sparkles, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/jewelleryData';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Please provide your phone number.';
    if (!formData.message.trim()) newErrors.message = 'Please provide your message or inquiry.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate local process
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: 'General Inquiry',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Vulcan's Jewellery"
      className="py-24 bg-[#E9DDCC]/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] font-['Poppins',sans-serif] text-[#1E4F8F] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Direct Inquiries</span>
            <Sparkles className="w-3.5 h-3.5 text-[#C9A45C]" />
          </div>

          <h2 className="font-['Cormorant_Garamond',serif] text-4xl sm:text-5xl md:text-6xl font-bold text-[#493B35]">
            Connect With Our Boutique
          </h2>

          <div className="w-16 h-0.5 bg-[#C9A45C] mx-auto rounded-full" />

          <p className="font-['Manrope',sans-serif] text-base sm:text-lg text-[#493B35]/80 leading-relaxed">
            Whether seeking assistance with a particular piece or preparing for a boutique visit, our team is at your service.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-[#FFFFFF] border border-[#C9A45C]/35 shadow-lg space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#8A4050] font-['Poppins',sans-serif] font-semibold">
                  Boutique Information
                </span>
                <div className="flex items-center space-x-3.5 mt-1.5">
                  <div className="w-11 h-11 rounded-full border border-[#C9A45C] overflow-hidden bg-white shadow-xs shrink-0 flex items-center justify-center">
                    <img
                      src="https://i.ibb.co/RpnZDfr7/Vulcan-s-Jewellery-luxury-logo-d-202609050402.jpg"
                      alt="Vulcan's Jewellery Brand Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#493B35]">
                    {BUSINESS_INFO.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-5 pt-2">
                {/* Telephone */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FBF8F1] border border-[#C9A45C]/50 flex items-center justify-center text-[#1E4F8F] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-['Poppins',sans-serif] uppercase tracking-wider text-[#493B35]/60 font-semibold">
                      Telephone
                    </p>
                    <a
                      href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`}
                      className="font-['Manrope',sans-serif] text-base font-bold text-[#1E4F8F] hover:text-[#143868] transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                    <p className="text-[11px] text-[#493B35]/70">Available during boutique hours</p>
                  </div>
                </div>

                {/* Official WhatsApp Integration with Real Number */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/15 border border-[#25D366]/50 flex items-center justify-center text-[#25D366] shrink-0">
                    <WhatsAppIcon className="w-5 h-5" fill="#25D366" />
                  </div>
                  <div>
                    <p className="text-xs font-['Poppins',sans-serif] uppercase tracking-wider text-[#493B35]/60 font-semibold">
                      Official WhatsApp
                    </p>
                    <a
                      href="https://wa.me/37745660298"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-['Manrope',sans-serif] text-base font-bold text-[#25D366] hover:text-[#1EBE5D] transition-colors inline-flex items-center gap-2"
                    >
                      <span>{BUSINESS_INFO.phone}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#25D366]/15 text-[#1EBE5D] font-['Poppins',sans-serif] font-bold">Chat Now</span>
                    </a>
                    <p className="text-[11px] text-[#493B35]/70">Direct concierge messaging & private viewing</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FBF8F1] border border-[#C9A45C]/50 flex items-center justify-center text-[#8A4050] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-['Poppins',sans-serif] uppercase tracking-wider text-[#493B35]/60 font-semibold">
                      Boutique Address
                    </p>
                    <p className="font-['Manrope',sans-serif] text-sm font-medium text-[#493B35] leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Hours / Visits */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FBF8F1] border border-[#C9A45C]/50 flex items-center justify-center text-[#C9A45C] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-['Poppins',sans-serif] uppercase tracking-wider text-[#493B35]/60 font-semibold">
                      Boutique Experience
                    </p>
                    <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/80">
                      Personal viewing & collection appointments warmly welcomed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E9DDCC] text-xs text-[#493B35]/70 italic">
                You are welcome to call our representatives directly for immediate scheduling or guidance.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#FFFFFF] border border-[#C9A45C]/35 shadow-xl">
              
              {isSubmitted ? (
                /* Polished Confirmation State */
                <div
                  id="contact-form-confirmation"
                  className="py-10 text-center space-y-6 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2 max-w-md">
                    <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#493B35]">
                      Inquiry Prepared
                    </h3>
                    <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/85 leading-relaxed">
                      Thank you, <span className="font-semibold text-[#1E4F8F]">{formData.name}</span>. Your inquiry regarding <span className="font-semibold">{formData.subject}</span> has been structured for our boutique team.
                    </p>
                  </div>

                  {/* Honest backend notification as required by instructions */}
                  <div className="p-4 rounded-xl bg-[#FBF8F1] border border-[#C9A45C]/40 text-xs text-[#493B35]/80 max-w-md text-left flex items-start space-x-3">
                    <AlertCircle className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#493B35]">Notice: </span>
                      As this is an online preview without a live mail relay connected, please call our boutique directly at{' '}
                      <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-[#1E4F8F] underline">
                        {BUSINESS_INFO.phone}
                      </a>{' '}
                      for immediate assistance.
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-[#1E4F8F] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold hover:bg-[#143868] transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                /* Active Form */
                <form id="contact-form" onSubmit={handleSubmit} noValidate className="space-y-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                        Your Name <span className="text-[#8A4050]">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Eleanor Vance"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#FBF8F1] text-sm text-[#493B35] placeholder:text-[#493B35]/40 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-400/40'
                            : 'border-[#E9DDCC] focus:border-[#C9A45C] focus:ring-[#C9A45C]/30'
                        }`}
                      />
                      {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-phone" className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                        Phone Number <span className="text-[#8A4050]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="contact-phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +377 45 660 298"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#FBF8F1] text-sm text-[#493B35] placeholder:text-[#493B35]/40 focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? 'border-red-400 focus:ring-red-400/40'
                            : 'border-[#E9DDCC] focus:border-[#C9A45C] focus:ring-[#C9A45C]/30'
                        }`}
                      />
                      {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                        Email Address <span className="text-[#8A4050]">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl border bg-[#FBF8F1] text-sm text-[#493B35] placeholder:text-[#493B35]/40 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-400/40'
                            : 'border-[#E9DDCC] focus:border-[#C9A45C] focus:ring-[#C9A45C]/30'
                        }`}
                      />
                      {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                    </div>

                    {/* Subject */}
                    <div className="space-y-1.5">
                      <label htmlFor="contact-subject" className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                        Subject
                      </label>
                      <select
                        id="contact-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E9DDCC] bg-[#FBF8F1] text-sm text-[#493B35] focus:outline-none focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/30 transition-all cursor-pointer"
                      >
                        <option value="General Inquiry">General Boutique Inquiry</option>
                        <option value="Ring Collection">Ring & Solitaire Inquiries</option>
                        <option value="Necklaces & Pendants">Necklaces & Pendants</option>
                        <option value="Earrings & Bracelets">Earrings & Bracelets</option>
                        <option value="Special Occasion">Special Occasion Consultation</option>
                        <option value="Boutique Visit Appointment">Boutique Visit Scheduling</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                      Your Message <span className="text-[#8A4050]">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please let us know how we can assist your jewellery selection..."
                      className={`w-full px-4 py-3 rounded-xl border bg-[#FBF8F1] text-sm text-[#493B35] placeholder:text-[#493B35]/40 focus:outline-none focus:ring-2 transition-all ${
                        errors.message
                          ? 'border-red-400 focus:ring-red-400/40'
                          : 'border-[#E9DDCC] focus:border-[#C9A45C] focus:ring-[#C9A45C]/30'
                      }`}
                    />
                    {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="btn-send-inquiry"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Inquiry</span>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
