"use client";

import Link from "next/link";
import { Menu, MoonStar, SunMedium } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.55),_transparent_50%)]">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-stone-950/80 backdrop-blur-xl">
        <Container className="flex items-center justify-between py-4">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-[0.2em] text-stone-100">
            SOLAR DAS MARÉS
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-stone-300 md:flex">
            <Link href="#experiencias" className="transition hover:text-stone-100">
              Experiências
            </Link>
            <Link href="#amenidades" className="transition hover:text-stone-100">
              Amenidades
            </Link>
            <Link href="#reserva" className="transition hover:text-stone-100">
              Reserva
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full border border-stone-700 p-2 text-stone-200 transition hover:border-stone-400"
              aria-label="Alternar tema"
            >
              {mounted && theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
            </button>
            <button
              type="button"
              className="rounded-full border border-stone-700 p-2 text-stone-200 transition hover:border-stone-400 md:hidden"
              aria-label="Abrir menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </Container>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="border-t border-stone-800/80 bg-stone-950/90">
        <Container className="flex flex-col gap-3 py-8 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Pousada Solar das Marés. Todos os direitos reservados.</p>
          <p>Rua das Ondas, 142 • Praia Branca • Brasil</p>
        </Container>
      </footer>
    </div>
  );
}
