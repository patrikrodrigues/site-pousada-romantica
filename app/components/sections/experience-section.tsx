import { Container } from "@/components/ui/container";
import { house } from "@/data/house";
import { HeartHandshake, ShieldCheck, Star } from "lucide-react";

const highlights = [
  {
    title: "Experiência romântica",
    description: "Ambiente reservado para relaxar, conversar e aproveitar o tempo juntos.",
    icon: HeartHandshake,
  },
  {
    title: "Conforto e privacidade",
    description: "Espaço inteiro com decoração acolhedora e tudo pensado para seu descanso.",
    icon: ShieldCheck,
  },
  {
    title: "Avaliação excelente",
    description: "Hóspedes destacam o atendimento, o conforto e a atmosfera especial da cabana.",
    icon: Star,
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="scroll-mt-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-600">Sobre a cabana</p>
            <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
              Um retiro íntimo, com a essência da natureza e o conforto de uma hospedagem especial.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-600">{house.about}</p>
          </div>

          <div className="grid gap-4">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-3xl border border-stone-200 bg-white/90 p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-amber-100 p-2 text-amber-700">
                      <Icon size={18} />
                    </div>
                    <h3 className="font-serif text-xl text-stone-900">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
