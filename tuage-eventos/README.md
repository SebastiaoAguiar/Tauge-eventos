# Tuagê Eventos — Landing Page

Landing page premium para a Tuagê Eventos (casamentos, festas de 15 anos,
eventos corporativos, buffet e locação de espaço), construída com foco em
conversão via WhatsApp.

## Stack

- React 18 + TypeScript
- Vite 6
- Tailwind CSS v4 (tema definido em `src/index.css` via `@theme`, sem
  arquivo `tailwind.config`)
- Framer Motion (revelações suaves ao rolar a página)
- React Router (Home, Política de Privacidade, Termos de Uso, 404)
- lucide-react (ícones)

## Como rodar

```bash
npm install
npm run dev       # ambiente de desenvolvimento
npm run build     # build de produção (gera a pasta dist/)
npm run preview   # pré-visualiza o build de produção
```

## O que você precisa editar antes de publicar

1. **`src/config/site.ts`**
   - `WHATSAPP_NUMBER`: coloque o número real no formato `55DDDNUMERO`.
   - `SITE`: e-mail, telefone exibido, cidade/endereço e Instagram.
   - Todas as mensagens pré-preenchidas de cada CTA do WhatsApp ficam em
     `WHATSAPP_MESSAGES` — ajuste o texto se quiser.

2. **Fotos reais** — como ainda não recebi as fotos do espaço, todas as
   imagens do site usam o componente `src/components/ui/Frame.tsx`, um
   bloco visual em gradiente (dourado/bege/charcoal) com textura de grão,
   pensado para manter a estética premium até a substituição. Para trocar
   por fotos reais, basta substituir o `<Frame ... />` correspondente por
   uma tag `<img src="..." />` mantendo a mesma classe de `rounded-...` e
   `aspect-ratio`. As seções que usam `Frame` são: `Hero`, `About`,
   `Differentials`, `EventTypes` e `Gallery`.

3. **`index.html`** — meta tags de SEO/Open Graph e o JSON-LD
   (`EventVenue`) já estão prontos; atualize `telephone`, `addressLocality`
   e a imagem `og:image` (`/og-cover.jpg`, que deve ser adicionada em
   `public/`) quando tiver os dados finais.

4. **Textos de depoimentos, FAQ e diferenciais** são dados fictícios de
   exemplo (`src/components/Testimonials`, `src/components/FAQ`) — troque
   pelos depoimentos e perguntas reais da Tuagê.

## Estrutura

```
src/
  components/       # um componente por seção (Hero, About, Gallery, ...)
    ui/             # Frame (placeholder de imagem) e Buttons (CTAs)
  config/site.ts     # WhatsApp e dados de contato centralizados
  lib/motion.tsx     # animações de revelação reaproveitáveis (Reveal, RevealGroup)
  pages/             # Home, Privacy, Terms, NotFound
```
