import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import ContactPopup from "@/components/ContactPopup";

type ContactPopupContextValue = {
  openContactPopup: () => void;
  closeContactPopup: () => void;
};

const ContactPopupContext = createContext<ContactPopupContextValue | null>(null);

/**
 * Ponto único de montagem do pop-up de contato. Qualquer botão da app pode
 * chamar `useContactPopup().openContactPopup()` sem precisar saber nada
 * sobre o componente visual ou seus canais.
 */
export function ContactPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openContactPopup = useCallback(() => setIsOpen(true), []);
  const closeContactPopup = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ openContactPopup, closeContactPopup }),
    [openContactPopup, closeContactPopup],
  );

  return (
    <ContactPopupContext.Provider value={value}>
      {children}
      <ContactPopup isOpen={isOpen} onClose={closeContactPopup} />
    </ContactPopupContext.Provider>
  );
}

export function useContactPopup() {
  const context = useContext(ContactPopupContext);
  if (!context) {
    throw new Error("useContactPopup deve ser usado dentro de um ContactPopupProvider");
  }
  return context;
}
