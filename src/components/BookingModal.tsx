import { useState, type FormEvent } from 'react';
import { X, Calendar, Clock, Phone, Mail, User, Sparkles, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { CatalogItem } from '../data/catalogImages';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface BookingModalProps {
  item: CatalogItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ item, isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '04:00 PM (Afternoon Appointment)',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const timeSlots = [
    '11:00 AM (Morning Discovery)',
    '01:30 PM (Midday Session)',
    '04:00 PM (Afternoon Appointment)',
    '06:30 PM (Sunset Viewing)',
    '08:00 PM (Evening Private Session)',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim()) errs.phone = 'Please provide your contact telephone number.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.date) errs.date = 'Please select a preferred viewing date.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const pieceName = item ? item.title : 'Bespoke Private Collection';
    const text = encodeURIComponent(
      `Hello Vulcan's Jewellery! I would like to book a private viewing for "${pieceName}" on ${formData.date} around ${formData.timeSlot}. My name is ${formData.name || 'a guest'}.`
    );
    window.open(`https://wa.me/37745660298?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book Viewing Modal"
      className="fixed inset-0 z-50 bg-[#241C18]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full bg-[#FBF8F1] rounded-3xl overflow-hidden border border-[#C9A45C] shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-[#1E4F8F] via-[#143868] to-[#1E4F8F] px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-[#C9A45C]/20 border border-[#C9A45C]/50 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#DFCA95]" />
            </div>
            <div>
              <span className="text-[10px] font-['Poppins',sans-serif] uppercase tracking-[0.2em] text-[#DFCA95] font-semibold">
                Private Appointment
              </span>
              <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold">
                Book a Boutique Viewing
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close booking modal"
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Selected Item Preview (if piece selected) */}
        {item && (
          <div className="px-6 py-3.5 bg-[#E9DDCC]/40 border-b border-[#C9A45C]/30 flex items-center space-x-4">
            <img
              src={item.url}
              alt={item.title}
              className="w-14 h-14 rounded-xl object-cover border border-[#C9A45C]/60 shrink-0 bg-white"
            />
            <div className="min-w-0">
              <span className="text-[10px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#8A4050] font-semibold">
                Selected Piece
              </span>
              <p className="font-['Cormorant_Garamond',serif] text-lg font-bold text-[#493B35] truncate">
                {item.title}
              </p>
              <p className="text-xs text-[#1E4F8F] font-medium">{item.material}</p>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-6 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-600 flex items-center justify-center text-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2 max-w-md">
                <h4 className="font-['Cormorant_Garamond',serif] text-3xl font-bold text-[#493B35]">
                  Viewing Reserved
                </h4>
                <p className="font-['Manrope',sans-serif] text-sm text-[#493B35]/85 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#1E4F8F]">{formData.name}</span>. Your private appointment for <span className="font-semibold">{item ? item.title : 'Vulcan’s Jewellery selection'}</span> has been requested for <span className="font-semibold">{formData.date}</span> at <span className="font-semibold">{formData.timeSlot}</span>.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#C9A45C]/40 text-xs text-[#493B35]/80 max-w-md text-left flex items-start space-x-3">
                <AlertCircle className="w-4 h-4 text-[#C9A45C] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#493B35]">Instant Confirmation on WhatsApp: </span>
                  Would you like our boutique concierge to instantly verify your time on WhatsApp?
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 py-3 px-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-md transition-all flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Confirm on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="py-3 px-6 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer whitespace-nowrap"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                    Full Name <span className="text-[#8A4050]">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3 text-[#493B35]/40" />
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Lady Sarah"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white text-sm text-[#493B35] placeholder:text-[#493B35]/40 focus:outline-none focus:ring-2 ${
                        errors.name ? 'border-red-400 focus:ring-red-400/30' : 'border-[#E9DDCC] focus:border-[#C9A45C] focus:ring-[#C9A45C]/30'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-[11px] text-red-600">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                    Telephone Number <span className="text-[#8A4050]">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3 text-[#493B35]/40" />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +377 45 660 298"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white text-sm text-[#493B35] placeholder:text-[#493B35]/40 focus:outline-none focus:ring-2 ${
                        errors.phone ? 'border-red-400 focus:ring-red-400/30' : 'border-[#E9DDCC] focus:border-[#C9A45C] focus:ring-[#C9A45C]/30'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600">{errors.phone}</p>}
                </div>
              </div>

              {/* Email & Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                    Email Address <span className="text-[#8A4050]">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-3 text-[#493B35]/40" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@example.com"
                      className={`w-full pl-10 pr-4 py-2.5 rounded-xl border bg-white text-sm text-[#493B35] placeholder:text-[#493B35]/40 focus:outline-none focus:ring-2 ${
                        errors.email ? 'border-red-400 focus:ring-red-400/30' : 'border-[#E9DDCC] focus:border-[#C9A45C] focus:ring-[#C9A45C]/30'
                      }`}
                    />
                  </div>
                  {errors.email && <p className="text-[11px] text-red-600">{errors.email}</p>}
                </div>

                <div className="space-y-1">
                  <label className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                    Preferred Date <span className="text-[#8A4050]">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3.5 top-3 text-[#493B35]/40" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E9DDCC] bg-white text-sm text-[#493B35] focus:outline-none focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/30"
                    />
                  </div>
                  {errors.date && <p className="text-[11px] text-red-600">{errors.date}</p>}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div className="space-y-1">
                <label className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                  Preferred Boutique Time Slot
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 absolute left-3.5 top-3 text-[#493B35]/40" />
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E9DDCC] bg-white text-sm text-[#493B35] focus:outline-none focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/30 cursor-pointer"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>
                        {ts}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests / Ring Size Notes */}
              <div className="space-y-1">
                <label className="block text-xs uppercase tracking-wider font-['Poppins',sans-serif] font-semibold text-[#493B35]">
                  Special Requests / Ring Sizing (Optional)
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g., Interested in bespoke engraving or trying matching wedding band..."
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E9DDCC] bg-white text-sm text-[#493B35] placeholder:text-[#493B35]/40 focus:outline-none focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/30"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3 px-6 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-75 whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4 shrink-0" />
                  <span>{isSubmitting ? 'Reserving...' : 'Submit Booking Request'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 cursor-pointer whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>Book via WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#493B35]/65 pt-1">
                Boutique visits are hosted at {BUSINESS_INFO.address}. Walk-ins are also warmly welcomed.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
