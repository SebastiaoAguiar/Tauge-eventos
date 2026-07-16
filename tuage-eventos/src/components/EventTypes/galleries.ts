/**
 * ==========================================================
 *  GALERIAS POR TIPO DE EVENTO — carregamento automático
 * ==========================================================
 *  Cada categoria possui sua própria pasta em
 *  `src/assets/images/<categoria>/`. Todas as imagens dentro
 *  dela (png, jpg, jpeg, webp, avif) são importadas
 *  automaticamente pelo Vite — para ampliar um álbum, basta
 *  soltar novas fotos na pasta correspondente. Nenhuma
 *  alteração de código é necessária.
 * ---------------------------------------------------------- */

export type EventCategoryId =
  | "casamento"
  | "debutante"
  | "corporativo"
  | "buffet"
  | "locacao";

/* `import.meta.glob` exige padrões literais — um bloco por categoria. */
const GLOBS: Record<EventCategoryId, Record<string, unknown>> = {
  casamento: import.meta.glob(
    "../../assets/images/casamento/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}",
    { eager: true, import: "default" },
  ),
  debutante: import.meta.glob(
    "../../assets/images/debutante/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}",
    { eager: true, import: "default" },
  ),
  corporativo: import.meta.glob(
    "../../assets/images/corporativo/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}",
    { eager: true, import: "default" },
  ),
  buffet: import.meta.glob(
    "../../assets/images/buffet/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}",
    { eager: true, import: "default" },
  ),
  locacao: import.meta.glob(
    "../../assets/images/locacao/*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}",
    { eager: true, import: "default" },
  ),
};

/** Ordena pelo nome do arquivo para uma sequência previsível (01, 02, ...). */
function toSortedUrls(modules: Record<string, unknown>): string[] {
  return Object.keys(modules)
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((key) => modules[key] as string);
}

export const GALLERIES: Record<EventCategoryId, string[]> = {
  casamento: toSortedUrls(GLOBS.casamento),
  debutante: toSortedUrls(GLOBS.debutante),
  corporativo: toSortedUrls(GLOBS.corporativo),
  buffet: toSortedUrls(GLOBS.buffet),
  locacao: toSortedUrls(GLOBS.locacao),
};
