/**
 * ==========================================================
 *  CONFIGURAÇÃO CENTRAL — TUAGÊ EVENTOS
 * ==========================================================
 *  Assim que você tiver os dados reais (WhatsApp, endereço,
 *  nome fantasia definitivo, redes sociais), basta editar
 *  este arquivo. Todos os componentes do site consomem
 *  essas informações a partir daqui — não é necessário
 *  alterar nada dentro dos componentes.
 * ---------------------------------------------------------- */

// ⚠️ SUBSTITUA pelo número real no formato 55DDDNUMERO (sem espaços/símbolos)
export const WHATSAPP_NUMBER = "5563992824106";

export const SITE = {
  name: "Tuagê Eventos",
  city: "Palmas - TO", // ⚠️ ajuste a cidade/endereço quando definido
  email: "contato@tuageeventos.com.br",
  phoneDisplay: "(63) 99282-4106",
  instagram: "https://instagram.com/tuageeventos",
  facebook: "https://facebook.com/tuageeventos",
};

/** Gera um link de WhatsApp já com a mensagem contextual preenchida. */
export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
}

/** Link de orçamento usado no CTA da galeria de cada tipo de evento. */
export function whatsappBudgetLink(category: string) {
  return whatsappLink(
    `Olá! Gostaria de solicitar um orçamento para um evento do tipo ${category}.`,
  );
}

export const MAPS_LINK =
 "https://maps.app.goo.gl/6zUyG7NeZQByhNBp7"

/* ----------------------------------------------------------
 *  LOCALIZAÇÃO — usada na seção "Onde Estamos"
 *  ⚠️ Ajuste os textos abaixo quando tiver os dados finais.
 * ---------------------------------------------------------- */
export const LOCATION = {
  /** Endereço completo exibido na seção. */
  address: "Alameda 13, Quadra 903 Sul",
  city: "Palmas",
  state: "Tocantins",
  zip: "77023-392",
  /** Ponto de referência (deixe "" para ocultar a linha). */
  reference: "Região Sul de Palmas, com acesso fácil e estacionamento no local",
  /** Horário de atendimento (deixe "" para ocultar a linha). */
  hours: "Visitas com hora marcada — todos os dias",
  /** Coordenadas exatas do pin (as mesmas do link do Google Maps). */
  coords: { lat: -10.238747, lng: -48.338233 },
};

/** URL do Google Maps Embed com o pin exatamente na Tuagê (não requer API key). */
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${LOCATION.coords.lat},${LOCATION.coords.lng}&z=16&hl=pt-BR&output=embed`;

export const WHATSAPP_MESSAGES = {
  visita: "Olá! Gostaria de agendar uma visita ao espaço da Tuagê Eventos.",
  orcamento: "Olá! Gostaria de solicitar um orçamento para o meu evento.",
  casamento: "Olá! Tenho interesse no espaço da Tuagê para o meu casamento.",
  debutante: "Olá! Gostaria de saber mais sobre a festa de 15 anos na Tuagê.",
  corporativo: "Olá! Preciso de um espaço para um evento corporativo. Podem me ajudar?",
  geral: "Olá! Vim pelo site e gostaria de mais informações sobre a Tuagê Eventos.",
};
