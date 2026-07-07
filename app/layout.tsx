import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteLayout } from "@/components/layout/site-layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Pousada Solar das Marés",
    template: "%s | Pousada Solar das Marés",
  },
  description:
    "Uma pousada boutique à beira-mar com experiências exclusivas, gastronomia local e vistas inesquecíveis.",
  keywords: [
    "pousada",
    "litoral",
    "luxo",
    "hotel boutique",
    "casamentos",
    "experiências",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Pousada Solar das Marés",
    description:
      "Uma pousada boutique à beira-mar com experiências exclusivas, gastronomia local e vistas inesquecíveis.",
    url: "https://pousada-solar-das-mares.com",
    siteName: "Pousada Solar das Marés",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pousada Solar das Marés",
    description:
      "Uma pousada boutique à beira-mar com experiências exclusivas, gastronomia local e vistas inesquecíveis.",
    images: ["/og-image.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-stone-950 text-stone-100">
        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}