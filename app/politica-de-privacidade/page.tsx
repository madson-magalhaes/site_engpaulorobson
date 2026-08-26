"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PrivacyPolicy() {
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
            Política de <span className="text-yellow-500">Privacidade</span>
          </h1>
          <p className="text-slate-400 text-sm tracking-widest font-bold uppercase">
            Última atualização: 01 de Abril de 2026
          </p>
        </div>

        <div className="prose prose-invert max-w-none space-y-8 text-lg text-slate-300 font-light leading-relaxed">
          <section className="space-y-4 pt-8 border-t border-white/5">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              1. Informações Gerais
            </h2>
            <p>
              O <strong>Grupo Prátice</strong> (referido como \"nós\" ou \"Dr. Paulo Robson\") está
              comprometido em proteger a sua privacidade. Esta Política de Privacidade explica como
              suas informações pessoais são coletadas, usadas e protegidas ao interagir com nosso
              site.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              2. Coleta de Dados Pessoais
            </h2>
            <p>
              Coletamos informações que você nos fornece voluntariamente ao solicitar um diagnóstico
              ou contato, incluindo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo</li>
              <li>Número de telefone / WhatsApp</li>
              <li>Endereço de e-mail</li>
              <li>Informações básicas sobre sua obra para fins de pré-análise técnica.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              3. Uso das Informações
            </h2>
            <p>Seus dados são utilizados exclusivamente para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Realizar o diagnóstico técnico de redução de INSS.</li>
              <li>Entrar em contato para fornecer orientações sobre a regularização de sua obra.</li>
              <li>Melhorar a experiência do usuário em nossa plataforma.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              4. Compartilhamento de Dados
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para fins
              comerciais. Seus dados são tratados com total confidencialidade técnica.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white uppercase tracking-wider">
              5. Contato
            </h2>
            <p>
              Para qualquer dúvida sobre esta política ou para solicitar a remoção de seus dados,
              entre em contato através do e-mail:
            </p>
            <p className="bg-white/5 p-4 rounded-lg border border-white/10 text-yellow-500 font-bold inline-block">
              inssdeobra@engpaulorobson.com.br
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
