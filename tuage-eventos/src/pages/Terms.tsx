import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/config/site";

export default function Terms() {
  return (
    <main className="min-h-screen bg-cream px-6 py-20 text-charcoal">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-taupe hover:text-gold"
        >
          <ArrowLeft size={16} /> Voltar ao site
        </Link>

        <span className="eyebrow">Legal</span>
        <h1 className="mt-4 font-serif text-4xl">Termos de Uso</h1>

        <div className="prose prose-neutral mt-10 max-w-none leading-relaxed text-taupe">
          <p>
            Ao utilizar este site, você concorda com os termos descritos a
            seguir. A {SITE.name} reserva-se o direito de atualizar este
            conteúdo a qualquer momento, sem aviso prévio.
          </p>
          <h3 className="mt-8 font-serif text-xl text-charcoal">
            Uso do conteúdo
          </h3>
          <p>
            Todo o conteúdo deste site — textos, imagens e identidade visual —
            é de propriedade da {SITE.name} e não pode ser reproduzido sem
            autorização prévia.
          </p>
          <h3 className="mt-8 font-serif text-xl text-charcoal">
            Orçamentos e disponibilidade
          </h3>
          <p>
            As informações apresentadas no site têm caráter informativo. A
            disponibilidade de datas, valores e condições comerciais são
            confirmadas exclusivamente através do nosso atendimento.
          </p>
          <h3 className="mt-8 font-serif text-xl text-charcoal">Contato</h3>
          <p>
            Dúvidas sobre estes termos podem ser esclarecidas pelo e-mail{" "}
            {SITE.email}.
          </p>
        </div>
      </div>
    </main>
  );
}
