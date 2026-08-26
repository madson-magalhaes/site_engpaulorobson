"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900 text-white">
      <Card className="w-full max-w-lg mx-4 shadow-lg border-0 bg-white/5 backdrop-blur-sm">
        <CardContent className="pt-8 pb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-500/10 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-2">404</h1>

          <h2 className="text-xl font-semibold text-slate-300 mb-4">
            Página não encontrada
          </h2>

          <p className="text-slate-400 mb-8 leading-relaxed">
            Desculpe, a página que você está procurando não existe.
            <br />
            Ela pode ter sido movida ou deletada.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-slate-950 px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Ir para o início
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
