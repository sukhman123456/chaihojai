import { useState } from "react";

// Official Instagram vector icon (silhouette)
export function OfficialInstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Official WhatsApp vector icon
export function OfficialWhatsAppIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.979-.276-.1-.476-.15-.677.15-.2.301-.777.979-.953 1.179-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.896-.799-1.501-1.786-1.677-2.087-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.175.2-.301.301-.502.1-.2.05-.376-.025-.526-.075-.15-.677-1.631-.928-2.236-.244-.589-.493-.509-.677-.518-.175-.009-.376-.01-.577-.01-.2 0-.527.075-.802.376-.276.301-1.053 1.029-1.053 2.509s1.078 2.91 1.228 3.111c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.378.197 1.898.119.579-.087 1.78-.727 2.031-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.577-.35zm-5.461 7.429c-1.802 0-3.568-.485-5.114-1.404l-.367-.218-3.799.996 1.014-3.704-.239-.38a10.024 10.024 0 0 1-1.536-5.326c0-5.545 4.51-10.055 10.051-10.055 2.686 0 5.21 1.047 7.108 2.946a9.995 9.995 0 0 1 2.942 7.109c0 5.546-4.51 10.056-10.059 10.056zm8.535-18.601C18.272 1.009 15.26 0 12.011 0 5.434 0 .079 5.355.077 11.935c0 2.102.548 4.155 1.59 5.96L0 24l6.257-1.641a11.895 11.895 0 0 0 5.751 1.477h.005c6.576 0 11.933-5.356 11.936-11.936 0-3.189-1.242-6.187-3.498-8.442z" />
    </svg>
  );
}

export function FloatingActions() {
  const [hoveredBtn, setHoveredBtn] = useState<"instagram" | "whatsapp" | null>(null);

  const instagramUrl = "https://www.instagram.com/chaihojaye_kaputhala/";
  const whatsappUrl = "https://wa.me/919876900361?text=Hi%20Chai%20Ho%20Jaye%2C%20I%20would%20like%20to%20connect!";

  return (
    <aside
      aria-label="Quick contact and social links"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto sm:bottom-6 sm:right-6 select-none"
    >
      {/* 1. Instagram Floating Action Button */}
      <div className="relative flex items-center justify-end">
        {/* Desktop Tooltip Badge */}
        <div
          role="tooltip"
          id="instagram-tooltip"
          className={`pointer-events-none absolute right-full mr-3 hidden sm:flex items-center gap-2 rounded-full border border-amber-500/20 bg-stone-900/95 px-3 py-1.5 text-xs text-amber-100 shadow-xl backdrop-blur-md transition-all duration-300 ${
            hoveredBtn === "instagram"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2"
          }`}
        >
          <span className="font-semibold text-white">@chaihojaye_kaputhala</span>
          <span className="text-[10px] text-amber-300/80 uppercase tracking-wider">Follow</span>
        </div>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow Chai Ho Jaye on Instagram @chaihojaye_kaputhala"
          aria-describedby="instagram-tooltip"
          onMouseEnter={() => setHoveredBtn("instagram")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="group relative flex h-12 w-12 sm:h-auto sm:w-auto items-center justify-center sm:justify-start gap-2.5 rounded-full p-0 sm:px-4 sm:py-2.5 text-white transition-all duration-300 ease-out active:scale-95 hover:scale-105 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 shadow-[0_8px_24px_rgba(220,39,67,0.38)] hover:shadow-[0_12px_32px_rgba(220,39,67,0.58)] ring-1 ring-white/25 overflow-hidden"
          style={{
            background:
              "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
          }}
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/25 opacity-70 transition-opacity duration-300 group-hover:opacity-90 pointer-events-none" />

          {/* Official Instagram Icon */}
          <div className="relative z-10 flex size-5 items-center justify-center shrink-0">
            <OfficialInstagramIcon className="size-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 drop-shadow" />
          </div>

          {/* Desktop Label */}
          <span className="relative z-10 hidden sm:inline text-xs font-semibold tracking-wide drop-shadow-sm">
            Instagram
          </span>
        </a>
      </div>

      {/* 2. WhatsApp Floating Action Button */}
      <div className="relative flex items-center justify-end">
        {/* Desktop Tooltip Badge */}
        <div
          role="tooltip"
          id="whatsapp-tooltip"
          className={`pointer-events-none absolute right-full mr-3 hidden sm:flex items-center gap-2 rounded-full border border-emerald-500/20 bg-stone-900/95 px-3 py-1.5 text-xs text-emerald-100 shadow-xl backdrop-blur-md transition-all duration-300 ${
            hoveredBtn === "whatsapp"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-2"
          }`}
        >
          <span className="font-semibold text-white">Chat on WhatsApp</span>
          <span className="text-[10px] text-emerald-400 uppercase tracking-wider">Fast reply</span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Chai Ho Jaye on WhatsApp"
          aria-describedby="whatsapp-tooltip"
          onMouseEnter={() => setHoveredBtn("whatsapp")}
          onMouseLeave={() => setHoveredBtn(null)}
          className="group relative flex h-12 w-12 sm:h-auto sm:w-auto items-center justify-center sm:justify-start gap-2.5 rounded-full p-0 sm:px-4 sm:py-2.5 text-white transition-all duration-300 ease-out active:scale-95 hover:scale-105 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950 shadow-[0_8px_24px_rgba(37,211,102,0.38)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.58)] ring-1 ring-white/25 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
          }}
        >
          {/* Subtle Ambient Sheen */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/25 opacity-70 transition-opacity duration-300 group-hover:opacity-90 pointer-events-none" />

          {/* Official WhatsApp Icon */}
          <div className="relative z-10 flex size-5 items-center justify-center shrink-0">
            <OfficialWhatsAppIcon className="size-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110 drop-shadow" />
          </div>

          {/* Desktop Label */}
          <span className="relative z-10 hidden sm:inline text-xs font-semibold tracking-wide drop-shadow-sm">
            WhatsApp
          </span>
        </a>
      </div>
    </aside>
  );
}
