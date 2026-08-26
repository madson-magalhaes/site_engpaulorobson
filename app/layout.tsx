import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-kanit",
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "Desconto e Redução no INSS de Obras | Eng. Paulo Robson",
  description:
    "Descubra como obter desconto e redução no INSS de obras da construção civil. O Eng. Paulo Robson ensina a regularização correta para a Receita Federal.",
  keywords: [
    "INSS de obras",
    "desconto INSS obra",
    "redução INSS obra",
    "Receita Federal construção civil",
    "Paulo Robson",
    "regularização de obra",
    "CNO",
    "SERO",
  ],
  alternates: {
    canonical: "https://engpaulorobson.com.br/inss-de-obras/",
  },
  openGraph: {
    title: "Desconto e Redução no INSS de Obras | Eng. Paulo Robson",
    description:
      "Especialista revela o passo a passo para garantir a regularização da sua obra com redução de INSS na Receita Federal.",
    type: "website",
    url: "https://engpaulorobson.com.br/inss-de-obras/",
    images: [
      {
        url: "https://engpaulorobson.com.br/inss-de-obras/favicon.png?v=1",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desconto e Redução no INSS de Obras | Eng. Paulo Robson",
    description:
      "Especialista revela o passo a passo para garantir a regularização da sua obra com redução de INSS na Receita Federal.",
    images: ["https://engpaulorobson.com.br/inss-de-obras/favicon.png?v=1"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="pt-BR" className={`${kanit.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#EAB308" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" type="image/png" href="/favicon.png?v=1" />
        {/* Google Tag Manager */}
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
        {/* End Google Tag Manager */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Eng. Paulo Robson - Regularização de INSS de Obras",
              "image": "https://engpaulorobson.com.br/inss-de-obras/paulo-robson-hero.webp",
              "url": "https://engpaulorobson.com.br/inss-de-obras/",
              "telephone": "+5588999244628",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR",
              },
              "description":
                "Especialista em redução e regularização tributária de INSS para obras da construção civil junto à Receita Federal.",
              "priceRange": "$$",
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased font-sans">
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider defaultTheme="dark" switchable={false}>
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
