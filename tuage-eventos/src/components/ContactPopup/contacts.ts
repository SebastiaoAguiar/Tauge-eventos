import { MessageCircle, Receipt, Instagram, Facebook, type LucideIcon } from "lucide-react";

export type ContactChannel = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Placeholder — substituir pelo link real de cada canal. */
  href: string;
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    icon: MessageCircle,
    title: "WhatsApp Comercial",
    description: "Orçamentos, visitas e datas disponíveis.",
    href: "https://api.whatsapp.com/send?phone=5563992824106&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20espa%C3%A7o%20da%20Tuag%C3%AA%20Eventos.",
  },
  {
    icon: Receipt,
    title: "WhatsApp Financeiro",
    description: "Pagamentos, contratos e notas fiscais.",
    href: "https://api.whatsapp.com/send?phone=556399782481&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20espa%C3%A7o%20da%20Tuag%C3%AA%20Eventos.",
  },
  {
    icon: Instagram,
    title: "Instagram",
    description: "Fotos, vídeos e bastidores dos eventos.",
    href: "https://www.instagram.com/tuageeventos/",
  },
  {
    icon: Facebook,
    title: "Facebook",
    description: "Novidades e avaliações de clientes.",
    href: "https://www.facebook.com/tuageeventos",
  },
];
