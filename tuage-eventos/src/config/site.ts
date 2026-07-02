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
};

/** Gera um link de WhatsApp já com a mensagem contextual preenchida. */
export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encoded}`;
}

export const MAPS_LINK =
 "https://maps.app.goo.gl/6zUyG7NeZQByhNBp7"
export const WHATSAPP_MESSAGES = {
  visita: "Olá! Gostaria de agendar uma visita ao espaço da Tuagê Eventos.",
  orcamento: "Olá! Gostaria de solicitar um orçamento para o meu evento.",
  casamento: "Olá! Tenho interesse no espaço da Tuagê para o meu casamento.",
  debutante: "Olá! Gostaria de saber mais sobre a festa de 15 anos na Tuagê.",
  corporativo: "Olá! Preciso de um espaço para um evento corporativo. Podem me ajudar?",
  geral: "Olá! Vim pelo site e gostaria de mais informações sobre a Tuagê Eventos.",
};
