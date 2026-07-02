import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-6 text-center text-charcoal">
      <span className="eyebrow">Erro 404</span>
      <h1 className="mt-4 font-serif text-5xl">Página não encontrada</h1>
      <p className="mt-4 max-w-sm text-taupe">
        O conteúdo que você procura não existe ou foi movido.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-cream transition-colors hover:bg-gold"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
