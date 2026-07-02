import { whatsappLink, WHATSAPP_MESSAGES } from "@/config/site";

import debutanteImg from "@/assets/images/Debutante.png";
import casamentoImg from "@/assets/images/Casamento.png";
import corporativoImg from "@/assets/images/Corporativo.png";
import buffetImg from "@/assets/images/Buffet.png";
import tuage from "@/assets/images/Tuage.jpeg";

export const EVENTS = [
  {
    image: casamentoImg,
    title: "Casamentos",
    text: "Cerimônia e recepção em um só lugar, com cenários que acompanham cada estilo de celebração.",
    href: whatsappLink(WHATSAPP_MESSAGES.casamento),
  },
  {
    image: debutanteImg,
    title: "Festas de 15 Anos",
    text: "Ambientação exclusiva para a festa dos sonhos, com estrutura para grandes produções.",
    href: whatsappLink(WHATSAPP_MESSAGES.debutante),
  },
  {
    image: corporativoImg,
    title: "Eventos Corporativos",
    text: "Auditório e salões modulares para convenções, lançamentos e confraternizações.",
    href: whatsappLink(WHATSAPP_MESSAGES.corporativo),
  },
  {
    image: buffetImg,
    title: "Buffet",
    text: "Gastronomia autoral com opções personalizáveis para todos os tipos de evento.",
    href: whatsappLink(WHATSAPP_MESSAGES.orcamento),
  },
  {
    image: tuage,
    title: "Locação de Espaço",
    text: "Alugue nossos salões para o seu próprio projeto, com toda a infraestrutura já inclusa.",
    href: whatsappLink(WHATSAPP_MESSAGES.geral),
  },
];
