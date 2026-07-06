import Link from "next/link";
import { ArrowRight, MessageCircle, CalendarDays, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { house } from "@/data/house";

export function BookingSection() {
  return (
    <section id="reserva" className="scroll-mt-24">
      <Container className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-lg md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-600">Reserva</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
              Sua escapada começa com uma conversa simples.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-600">
              Envie sua data, quantidade de hóspedes e preferências pelo WhatsApp. A anfitriã responde com orientações personalizadas para o seu período.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-stone-600">
              <div className="flex items-center gap-2 rounded-full bg-stone-100 px-3 py-2">
                <CalendarDays size={16} className="text-amber-600" />
                Datas flexíveis
              </div>
              <div className="flex items-center gap-2 rounded-full bg-stone-100 px-3 py-2">
                <Sparkles size={16} className="text-amber-600" />
                Atendimento personalizado
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-stone-950 p-6 text-stone-50">
            <div className="flex items-center gap-2 text-amber-300">
              <MessageCircle size={18} />
              <span className="text-sm uppercase tracking-[0.3em]">Fale direto</span>
            </div>
            <h3 className="mt-4 font-serif text-2xl">Reserve agora e confirme sua semana perfeita.</h3>
            <p className="mt-3 text-sm leading-7 text-stone-300">
              Entre em contato para verificar disponibilidade e receber o melhor período para sua estadia.
            </p>
            <Link
              href={`https://wa.me/${house.whatsappNumber}?text=Olá!%20Gostaria%20de%20confirmar%20a%20disponibilidade%20da%20cabana.`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
            >
              Conversar no WhatsApp <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
