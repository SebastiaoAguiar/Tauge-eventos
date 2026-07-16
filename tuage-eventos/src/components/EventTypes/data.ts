import { whatsappBudgetLink } from "@/config/site";
import { GALLERIES, type EventCategoryId } from "@/components/EventTypes/galleries";

import debutanteImg from "@/assets/images/Debutante.png";
import casamentoImg from "@/assets/images/Casamento.png";
import corporativoImg from "@/assets/images/Corporativo.png";
import buffetImg from "@/assets/images/Buffet.png";
import tuage from "@/assets/images/Tuage.jpeg";

export type EventCategory = {
  id: EventCategoryId;
  image: string;
  title: string;
  text: string;
  /** Nome usado na mensagem automática do WhatsApp. */
  whatsappLabel: string;
  /** Fotos do álbum — importadas automaticamente da pasta da categoria. */
  gallery: string[];
  /** CTA de orçamento exibido ao final da galeria. */
  budgetHref: string;
};

function category(
  id: EventCategoryId,
  image: string,
  title: string,
  text: string,
  whatsappLabel: string,
): EventCategory {
  return {
    id,
    image,
    title,
    text,
    whatsappLabel,
    gallery: GALLERIES[id],
    budgetHref: whatsappBudgetLink(whatsappLabel),
  };
}

export const EVENTS: EventCategory[] = [
  category(
    "casamento",
    casamentoImg,
    "Casamentos",
    "Cerimônia e recepção em um só lugar, com cenários que acompanham cada estilo de celebração.",
    "Casamento",
  ),
  category(
    "debutante",
    debutanteImg,
    "Festas de 15 Anos",
    "Ambientação exclusiva para a festa dos sonhos, com estrutura para grandes produções.",
    "Festa de 15 Anos",
  ),
  category(
    "corporativo",
    corporativoImg,
    "Eventos Corporativos",
    "Auditório e salões modulares para convenções, lançamentos e confraternizações.",
    "Evento Corporativo",
  ),
  category(
    "buffet",
    buffetImg,
    "Buffet",
    "Gastronomia autoral com opções personalizáveis para todos os tipos de evento.",
    "Buffet",
  ),
  category(
    "locacao",
    tuage,
    "Locação de Espaço",
    "Alugue nossos salões para o seu próprio projeto, com toda a infraestrutura já inclusa.",
    "Locação de Espaço",
  ),
];
