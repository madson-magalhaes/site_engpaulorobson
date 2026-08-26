"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-8 md:p-20">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <Link href="/">
          <Button variant="ghost" className="text-slate-400 hover:text-white gap-2 pl-0">
            <ArrowLeft className="w-5 h-5" /> Voltar para o início
          </Button>
        </Link>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Termos de <span className="text-yellow-500">Uso</span>
          </h1>
          <p className="text-slate-400 text-sm tracking-widest font-bold uppercase">
            Última atualização: 01 de Abril de 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-lg text-slate-300 font-light leading-relaxed">
          <section className="space-y-4 pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar este site, você concorda em cumprir estes termos de serviço, todas as leis e
              regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido
              de usar ou acessar este site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              2. Natureza do Serviço
            </h2>
            <p>
              O site do <strong>Dr. Paulo Robson / Grupo Prátice</strong> oferece consultoria
              técnica especializada em regularização de INSS e CNO. As informações compartilhadas
              não constituem conselho financeiro ou jurídico absoluto sem uma análise individualizada
              de documentos.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              3. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo visual, metodologias de cálculo e materiais didáticos apresentados são
              de propriedade exclusiva do <strong>Grupo Prátice</strong>, protegidos pelas leis de
              direitos autorais.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              4. Isenção de Responsabilidade
            </h2>
            <p>
              Os resultados de economia variam de acordo com as especificidades de cada obra e a
              precisão das informações fornecidas pelo cliente.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              5. Contato e Suporte
            </h2>
            <p>Para dúvidas técnicas sobre nossos termos, utilize o canal oficial:</p>
            <p className="bg-white/5 p-4 rounded-lg border border-white/10 text-yellow-500 font-bold inline-block">
              inssdeobra@engpaulorobson.com.br
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
