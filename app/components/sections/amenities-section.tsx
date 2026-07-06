import { Container } from "@/components/ui/container";
import { house } from "@/data/house";
import { CheckCircle2, MapPin } from "lucide-react";

export function RegionSection() {
  return (
    <section id="regiao" className="scroll-mt-24">
      <Container className="rounded-[2rem] border border-stone-200 bg-stone-900 p-8 text-stone-50 shadow-xl sm:p-10 lg:p-14">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-amber-300">Região</p>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl">
              A natureza do litoral e a praticidade do bairro em um só destino.
            </h2>
            <p className="mt-4 text-base leading-8 text-stone-300">{house.region.description}</p>
            <div className="mt-6 space-y-3">
              {house.region.highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-stone-800 bg-stone-800/70 p-4">
                  <MapPin className="text-amber-300" size={18} />
                  <span className="text-sm text-stone-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(house.amenities).map(([category, items]) => (
              <div key={category} className="rounded-3xl border border-stone-800 bg-stone-800/70 p-5">
                <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-300">
                  {category}
                </h3>
                <ul className="mt-4 space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-stone-200">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-amber-300" size={16} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
