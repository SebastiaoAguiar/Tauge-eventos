import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import logo from "@/assets/images/Logo.png";
import { MAPS_LINK } from "@/config/site";
import { useContactPopup } from "@/components/ContactPopup/ContactPopupProvider";

type NavLink = { href: string; label: string; external?: boolean };

const LINKS: NavLink[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#origem", label: "Origem" },
  { href: "#eventos", label: "Eventos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: MAPS_LINK, label: "Onde estamos", external: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { openContactPopup } = useContactPopup();
  const { scrollY } = useScroll();
  const progress = useTransform(scrollY, [0, 120], [0, 1], { clamp: true });

  useMotionValueEvent(progress, "change", (v) => setIsScrolled(v > 0.5));

  const navPy = useTransform(progress, [0, 1], [14, 8]);
  const navBg = useTransform(progress, [0, 1], ["rgba(250,247,241,0)", "rgba(250,247,241,0.86)"]);
  const navBlur = useTransform(progress, (p: number) => `blur(${Math.round(p * 18)}px)`);
  const navBorder = useTransform(progress, [0, 1], ["rgba(38,34,32,0)", "rgba(38,34,32,0.08)"]);
  const navShadow = useTransform(progress, (p: number) =>
    p > 0.05 ? `0 20px 50px -25px rgba(38,34,32,${(0.35 * p).toFixed(2)})` : "none",
  );

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <motion.div
          className="flex w-full items-center justify-between px-6 md:px-10"
          style={{
            paddingTop: navPy,
            paddingBottom: navPy,
            backgroundColor: navBg,
            backdropFilter: navBlur,
            WebkitBackdropFilter: navBlur,
            borderBottomWidth: 1,
            borderBottomStyle: "solid",
            borderColor: navBorder,
            boxShadow: navShadow,
          }}
        >
          <a href="#inicio" className="flex items-center">
            <img
              src={logo}
              alt="Pinto Eventos"
              className={`h-14 w-auto transition-[filter] duration-300 sm:h-12 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          <nav className="hidden items-center gap-7 xl:flex">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`inline-flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-300 ${
                  isScrolled
                    ? "text-charcoal-soft hover:text-gold"
                    : "text-cream/90 hover:text-cream"
                }`}
              >
                {link.external && <MapPin size={13} className="shrink-0" strokeWidth={2.2} />}
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden xl:block">
            <button
              type="button"
              onClick={openContactPopup}
              className="rounded-full bg-charcoal px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.08em] text-cream transition-all duration-300 hover:bg-gold hover:shadow-[0_10px_30px_-12px_rgba(176,138,78,0.7)]"
            >
              Agendar Visita
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`rounded-full border p-2.5 transition-colors duration-300 xl:hidden ${
              isScrolled ? "border-charcoal/15 text-charcoal" : "border-cream/30 text-cream"
            }`}
            aria-label="Alternar menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed left-0 top-[76px] z-40 w-full px-4 xl:hidden"
          >
            <div className="flex flex-col gap-1 rounded-3xl border border-charcoal/10 bg-cream/95 p-4 shadow-2xl backdrop-blur-xl">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-charcoal-soft transition-colors hover:bg-cream-soft hover:text-gold"
                >
                  {link.external && <MapPin size={15} className="shrink-0" strokeWidth={2.2} />}
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  openContactPopup();
                }}
                className="mt-2 rounded-xl bg-charcoal px-4 py-3 text-center text-sm font-semibold text-cream"
              >
                Agendar Visita
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
