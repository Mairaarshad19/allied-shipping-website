import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/923004018802"
      target="_blank"
      rel="noopener noreferrer"
      className="relative group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 pointer-events-none">
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-200 hover:scale-110">
        <MessageCircle className="h-7 w-7 text-white" fill="white" stroke="none" />
      </div>
    </a>
  );
}