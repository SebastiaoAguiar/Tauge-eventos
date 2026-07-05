import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/config/site";

export default function Privacy() {
  return (
    <main className="min-h-screen bg-cream px-6 py-20 text-charcoal">
      <div className="mx-auto max-w-3xl">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-taupe hover:text-gold"
        >
          <ArrowLeft size={16} /> Voltar ao site
        </Link>
        <p></p>
        <span className="eyebrow">Legal</span>
        <h1 className="mt-4 font-serif text-4xl">Política de Privacidade</h1>

        <div className="prose prose-neutral mt-10 max-w-none leading-relaxed text-taupe">
          <p>
            A {SITE.name} respeita a sua privacidade e está comprometida em
            proteger os dados pessoais coletados através deste site,
            utilizados exclusivamente para viabilizar o contato comercial e a
            organização de eventos.
          </p>
          <h3 className="mt-8 font-serif text-xl text-charcoal">
            Dados coletados
          </h3>
          <p>
            Coletamos apenas as informações fornecidas voluntariamente por
            você ao entrar em contato pelo WhatsApp ou formulários do site,
            como nome, telefone e detalhes sobre o evento desejado.
          </p>
          <h3 className="mt-8 font-serif text-xl text-charcoal">
            Uso das informações
          </h3>
          <p>
            As informações são utilizadas unicamente para responder às suas
            solicitações, elaborar propostas e manter contato sobre o
            planejamento do seu evento. Não compartilhamos seus dados com
            terceiros para fins de marketing.
          </p>
          <h3 className="mt-8 font-serif text-xl text-charcoal">Contato</h3>
          <p>
            Em caso de dúvidas sobre esta política, entre em contato pelo
            e-mail {SITE.email}.
          </p>
        </div>
      </div>
    </main>
  );
}
