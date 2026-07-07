export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-950 px-6 text-stone-50">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-amber-400">
          Base inicial pronta
        </p>
        <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
          Next.js 15 + Tailwind 4 + App Router
        </h1>
        <p className="mt-4 text-lg leading-8 text-stone-300">
          Estrutura preparada para Vercel e Cloudflare Pages, com aliases e layout já configurados.
        </p>
      </div>
    </main>
  );
}
