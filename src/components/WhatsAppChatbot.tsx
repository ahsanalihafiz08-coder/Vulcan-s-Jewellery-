import { useState, useRef, useEffect, type FormEvent } from 'react';
import { X, Send, Sparkles, Calendar, Phone, MapPin, CheckCircle2, ChevronRight, Clock, Heart } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { BUSINESS_INFO } from '../data/jewelleryData';

interface WhatsAppChatbotProps {
  onOpenBookingModal: () => void;
  onOpenSaved?: () => void;
  savedCount?: number;
}

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

function generateConciergeReply(query: string): string {
  const q = query.toLowerCase().trim();

  // 1. Appointments & Private Viewings
  if (q.includes('book') || q.includes('appointment') || q.includes('viewing') || q.includes('visit') || q.includes('reserve') || q.includes('consult')) {
    return `We would be honored to host you for an exclusive private viewing at our Souq Al Watiya boutique showroom. Each appointment includes a personalized gemologist consultation, private try-on session, custom sizing analysis, and refreshments. You can use the "Book Viewing" option or connect directly on WhatsApp at ${BUSINESS_INFO.phone}.`;
  }

  // 2. Ring Sizing, Fit & Measurement
  if (q.includes('size') || q.includes('sizing') || q.includes('fit') || q.includes('resiz') || q.includes('finger') || q.includes('measurement')) {
    return `Vulcan's provides complimentary precision ring sizing for all purchases. Standard international sizes US 4 to 12 (European 46 to 68) are accommodated with laser precision. Most in-stock rings can be custom sized in our Kuwait atelier within 24 to 48 hours. We also offer complimentary ring sizing consultations in our showroom.`;
  }

  // 3. Location, Address, Parking & Directions
  if (q.includes('where') || q.includes('location') || q.includes('address') || q.includes('map') || q.includes('direction') || q.includes('souq') || q.includes('maliya') || q.includes('parking')) {
    return `Our flagship boutique is located at ${BUSINESS_INFO.address} (Ground Floor, Souq Al Watiya, Maliya, Kuwait City). Convenient parking and valet assistance are available for boutique visitors. You can also click "Get Directions" in the Location section for direct GPS navigation.`;
  }

  // 4. Hours & Opening Times
  if (q.includes('hour') || q.includes('time') || q.includes('timing') || q.includes('open') || q.includes('close') || q.includes('when') || q.includes('weekend') || q.includes('friday')) {
    return `Vulcan's Jewellery Boutique welcomes guests daily from 10:00 AM to 10:00 PM. We accommodate both walk-in visitors and reserved private salon consultations. For personalized evening appointments, booking in advance is recommended.`;
  }

  // 5. Diamonds, Certification & Cut
  if (q.includes('diamond') || q.includes('carat') || q.includes('clarity') || q.includes('cut') || q.includes('gia') || q.includes('igi') || q.includes('gemstone') || q.includes('stone') || q.includes('solitaire')) {
    return `Every diamond at Vulcan's Jewellery is 100% natural, ethically sourced, and conflict-free, accompanied by an official GIA or IGI grading report. We curate exceptional color grades (D–F) and clarity (FL to VVS2) across round brilliant, emerald, cushion, oval, and pear cuts.`;
  }

  // 6. Gold, Materials & Hallmarks
  if (q.includes('gold') || q.includes('material') || q.includes('18k') || q.includes('platinum') || q.includes('hallmark') || q.includes('karat') || q.includes('metal')) {
    return `All our jewellery is handcrafted exclusively in certified 18K solid gold (Yellow, White, and Rose Gold) or 950 Platinum. We never use gold-plating or hollow alloys. Every creation carries official Kuwait Ministry of Commerce precious metal hallmarks.`;
  }

  // 7. Catalog, Necklaces, Earrings, Bracelets & Highlights
  if (q.includes('necklace') || q.includes('earring') || q.includes('bracelet') || q.includes('bangle') || q.includes('choker') || q.includes('catalog') || q.includes('collection') || q.includes('masterpiece')) {
    return `Our boutique collections feature four curated suites: The Solitaire & Eternity Suite (24 master rings), Curated Masterpieces Highlights (including the 38.5ct Royal Cascade Necklace and 5.2ct Imperial Emerald Ring), the Extended Catalog (Bridal, Necklaces, Earrings, Bangles), and the 44-piece Moving Masterpiece Showcase. You can explore and book any piece directly on this website.`;
  }

  // 8. Custom & Bespoke Design
  if (q.includes('bespoke') || q.includes('custom') || q.includes('design') || q.includes('engrav') || q.includes('order') || q.includes('heirloom') || q.includes('made to order')) {
    return `Our master goldsmiths offer bespoke jewellery services, from custom engagement rings and tailored eternity bands to personalized hand-engravings and heirloom redesigns. We invite you to schedule a design consultation with our head jeweller.`;
  }

  // 9. Pricing, Currency & Payment
  if (q.includes('price') || q.includes('cost') || q.includes('how much') || q.includes('kwd') || q.includes('dinar') || q.includes('payment') || q.includes('installment') || q.includes('dollar') || q.includes('euro')) {
    return `We maintain transparent Kuwait boutique pricing in KWD (Kuwaiti Dinar), with multi-currency conversion for international guests. We accept KNET, Visa, MasterCard, American Express, and bank wire transfers. Detailed pricing for specific pieces can be provided via private viewing or WhatsApp.`;
  }

  // 10. Care, Cleaning, Warranty & Packaging
  if (q.includes('care') || q.includes('clean') || q.includes('warranty') || q.includes('polish') || q.includes('box') || q.includes('package') || q.includes('certificate')) {
    return `Every creation arrives in our signature velvet presentation case with a certificate of authenticity and diamond dossier. We provide lifetime complimentary ultrasonic cleaning, stone security inspection, and polishing at our Souq Al Watiya boutique.`;
  }

  // 11. Phone, WhatsApp & Direct Human Contact
  if (q.includes('phone') || q.includes('whatsapp') || q.includes('call') || q.includes('contact') || q.includes('speak') || q.includes('human') || q.includes('number') || q.includes('agent')) {
    return `Our boutique concierge team is available directly on WhatsApp and telephone at ${BUSINESS_INFO.phone}. Click the green WhatsApp button to begin an immediate conversation with our representative.`;
  }

  // 12. Greetings
  if (q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('good morning') || q.includes('good afternoon') || q.includes('good evening') || q.includes('marhaba') || q.includes('salam')) {
    return `Greetings! Welcome to ${BUSINESS_INFO.name}. How may I guide your jewellery discovery today? You can inquire about our collections, private viewings, ring sizing, boutique hours, or bespoke commissions.`;
  }

  // Default Fallback
  return `Thank you for your inquiry with ${BUSINESS_INFO.name}. Our boutique team is delighted to assist with any questions regarding our 18K solid gold and certified diamond collections, private showroom viewings, ring sizing, or bespoke commissions. You may also contact us directly on WhatsApp at ${BUSINESS_INFO.phone}.`;
}

export function WhatsAppChatbot({ onOpenBookingModal, onOpenSaved, savedCount = 0 }: WhatsAppChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      sender: 'bot',
      text: `Greetings from ${BUSINESS_INFO.name}. I am your Boutique AI Concierge. How may I assist your jewellery discovery today?`,
      timestamp: 'Just now',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const quickPrompts = [
    { label: 'Book Viewing', action: 'booking' },
    { label: 'Store Location & Hours', action: 'location' },
    { label: 'Ring Sizing & Custom Fit', action: 'sizing' },
    { label: 'Diamonds & 18K Gold', action: 'materials' },
    { label: 'WhatsApp Direct Chat', action: 'whatsapp' },
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: 'Now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    // Generate intelligent luxury concierge response
    setTimeout(() => {
      const botResponse = generateConciergeReply(text);

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: botResponse,
          timestamp: 'Just now',
        },
      ]);
    }, 400);
  };

  const handleQuickAction = (action: string) => {
    if (action === 'booking') {
      setIsOpen(false);
      onOpenBookingModal();
    } else if (action === 'location') {
      handleSend('Where is the boutique located and what are the opening hours?');
    } else if (action === 'sizing') {
      handleSend('Can you tell me about your precision ring sizing and custom resizing?');
    } else if (action === 'materials') {
      handleSend('What materials and diamond certifications do you use in your jewellery?');
    } else if (action === 'whatsapp') {
      window.open('https://wa.me/37745660298', '_blank', 'noopener,noreferrer');
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ${BUSINESS_INFO.name}! I would like to inquire about your jewellery collections and private boutique viewing.`
    );
    window.open(`https://wa.me/37745660298?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-2.5 sm:gap-3">
      
      {/* Interactive Concierge Window - Centered on Mobile with equal margins, docked on Desktop */}
      {isOpen && (
        <div className="fixed inset-x-4 bottom-24 sm:absolute sm:bottom-20 sm:right-0 sm:inset-auto w-auto sm:w-[380px] max-w-sm mx-auto sm:mx-0 max-h-[540px] bg-[#FBF8F1] rounded-3xl overflow-hidden border border-[#C9A45C] shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-5 duration-300 z-50">
          
          {/* Header with Distinct AI Concierge Luxury Palette */}
          <div className="bg-gradient-to-r from-[#143868] via-[#1E4F8F] to-[#143868] px-5 py-4 text-white flex items-center justify-between border-b border-[#C9A45C]/35">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#C9A45C] shadow-md bg-white">
                  <img
                    src="https://i.ibb.co/JwDtHf3Y/Chatbot-avatar-icon-for-store-202609050402.jpg"
                    alt="Vulcan AI Concierge"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#1E4F8F]" />
              </div>
              <div>
                <h4 className="font-['Cormorant_Garamond',serif] text-lg font-bold leading-tight text-[#FFFFFF]">
                  Vulcan's AI Concierge
                </h4>
                <p className="text-[11px] text-[#DFCA95] font-['Poppins',sans-serif] flex items-center gap-1">
                  <span>Kuwait Boutique • Online</span>
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close concierge"
              className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-[300px] text-xs font-['Manrope',sans-serif]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-[#1E4F8F] text-white rounded-br-none'
                      : 'bg-white text-[#493B35] border border-[#E9DDCC] rounded-bl-none shadow-2xs'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[10px] text-[#493B35]/50 px-1 mt-0.5">
                  {m.timestamp}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompts */}
          <div className="px-3 py-2 bg-[#E9DDCC]/30 border-t border-[#E9DDCC] flex flex-wrap gap-1.5">
            {quickPrompts.map((qp) => (
              <button
                key={qp.label}
                type="button"
                onClick={() => handleQuickAction(qp.action)}
                className="px-2.5 py-1 rounded-full bg-white text-[10px] font-['Poppins',sans-serif] font-medium text-[#493B35] border border-[#E9DDCC] hover:border-[#C9A45C] hover:text-[#1E4F8F] transition-colors"
              >
                {qp.label}
              </button>
            ))}
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              handleSend(inputValue);
            }}
            className="p-3 bg-white border-t border-[#E9DDCC] flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask our boutique concierge..."
              className="flex-1 px-3 py-2 text-xs rounded-full border border-[#E9DDCC] focus:outline-none focus:border-[#C9A45C] focus:ring-1 focus:ring-[#C9A45C]/30 text-[#493B35]"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-2 rounded-full bg-[#1E4F8F] text-white disabled:opacity-40 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Direct WhatsApp Callout */}
          <div className="px-4 py-2.5 bg-[#25D366]/10 border-t border-[#25D366]/30 flex items-center justify-between">
            <span className="text-[11px] font-medium text-[#493B35]">
              Instant human representative:
            </span>
            <button
              type="button"
              onClick={handleWhatsAppDirect}
              className="px-3.5 py-1.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-[11px] font-['Poppins',sans-serif] font-semibold flex items-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" fill="#FFFFFF" />
              <span>WhatsApp Now</span>
            </button>
          </div>

        </div>
      )}

      {/* 1. Mobile-Specific Wishlist / Heart Floating Action Button */}
      <button
        type="button"
        onClick={onOpenSaved}
        aria-label={`View Saved Wishlist (${savedCount})`}
        id="mobile-action-dock-wishlist-btn"
        className="sm:hidden group relative flex items-center justify-center w-13.5 h-13.5 rounded-full bg-[#241C18] hover:bg-[#35261F] text-[#DFCA95] shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-[#C9A45C] shrink-0"
      >
        <Heart className={`w-6 h-6 ${savedCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-[#DFCA95]'}`} />
        {savedCount > 0 && (
          <span className="absolute -top-1 -right-1 min-w-[20px] h-[20px] px-1 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center shadow-md border-2 border-white">
            {savedCount}
          </span>
        )}
      </button>

      {/* 2. Floating WhatsApp Direct Shortcut - Identical sizing on both Mobile and Desktop */}
      <a
        href="https://wa.me/37745660298"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        title="WhatsApp Concierge (+377 45 660 298)"
        id="floating-whatsapp-shortcut-btn"
        className="group relative flex items-center justify-center w-13.5 h-13.5 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-white shrink-0"
      >
        <WhatsAppIcon className="w-6.5 h-6.5 sm:w-7 sm:h-7" fill="#FFFFFF" />
        
        {/* Hover Tooltip on desktop */}
        <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#241C18]/90 backdrop-blur-xs text-white text-xs font-['Poppins',sans-serif] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-[#25D366]/50">
          WhatsApp Direct: +377 45 660 298
        </span>
      </a>

      {/* 3. Floating AI Concierge Toggle Button - Identical sizing on both Mobile and Desktop */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close AI Concierge' : 'Open Vulcan AI Concierge'}
        id="floating-ai-concierge-btn"
        className="group relative flex items-center justify-center w-13.5 h-13.5 sm:w-14 sm:h-14 rounded-full bg-white shadow-xl hover:shadow-[#1E4F8F]/40 border-2 border-[#C9A45C] hover:border-[#DFCA95] hover:scale-105 transition-all duration-300 cursor-pointer shrink-0"
      >
        {/* Pulsing ring in luxury gold */}
        <span className="absolute -inset-1 rounded-full bg-[#C9A45C] opacity-35 animate-ping pointer-events-none" />

        {isOpen ? (
          <div className="w-full h-full rounded-full bg-[#1E4F8F] flex items-center justify-center">
            <X className="w-6 h-6 text-white" />
          </div>
        ) : (
          <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
            <img
              src="https://i.ibb.co/JwDtHf3Y/Chatbot-avatar-icon-for-store-202609050402.jpg"
              alt="Vulcan AI Concierge"
              className="w-full h-full object-cover object-center rounded-full"
            />
            {/* Online Indicator Badge in Emerald */}
            <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
          </div>
        )}

        {/* Hover Tooltip on desktop */}
        {!isOpen && (
          <span className="hidden sm:block absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-[#241C18]/90 backdrop-blur-xs text-white text-xs font-['Poppins',sans-serif] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-lg border border-[#C9A45C]/40">
            Boutique AI Concierge
          </span>
        )}
      </button>

    </div>
  );
}
