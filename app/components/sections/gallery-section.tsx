import { Container } from "@/components/ui/container";
import { house } from "@/data/house";

export function GallerySection() {
  return (
    <section id="galeria" className="scroll-mt-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.35em] text-amber-600">Galeria</p>
          <h2 className="mt-3 font-serif text-3xl text-stone-900 sm:text-4xl">
            Veja o espaço, a vista e o clima acolhedor da cabana.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {house.gallery.map((image, index) => (
            <div key={`${image}-${index}`} className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-stone-100">
              <img src={image} alt={`${house.name} - imagem ${index + 1}`} className="h-64 w-full object-cover transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
