import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyWhatsApp() {
  const phoneNumber = "917454875874"; 
  const message = encodeURIComponent(
    "Hi Tripshalla! I’m planning an adventure. Can you help me with more details?",
  );

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      /* Animation: Jumps/Jiggles every 4 seconds */
      animate={{ 
        y: [0, -10, 0, -5, 0],
        rotate: [0, -5, 5, -5, 0] 
      }}
      transition={{ 
        duration: 0.6, 
        repeat: Infinity, 
        repeatDelay: 4, 
        ease: "easeInOut" 
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="
        fixed bottom-6 right-6 z-[200]
        flex items-center gap-3
        bg-[#25D366] text-white
        px-4 py-3 md:px-6 md:py-4 rounded-full
        shadow-[0_20px_50px_rgba(37,211,102,0.4)]
        group
      "
    >
      {/* The Animated Pulse Background */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:hidden" />

      <div className="relative">
        <MessageCircle className="w-6 h-6 md:w-7 md:h-7 fill-white/10" />
        
        {/* Unread Message Notification Dot (Tripshalla Orange) */}
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#F7A325] border-2 border-white rounded-full" />
      </div>

      <div className="flex flex-col items-start leading-none">
        <span className="hidden md:block text-[10px] font-black uppercase tracking-widest opacity-80">
          Chat with us
        </span>
        <span className="hidden md:block font-black text-sm uppercase tracking-tighter">
          WhatsApp
        </span>
      </div>
    </motion.a>
  );
}