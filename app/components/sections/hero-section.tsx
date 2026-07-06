"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BedDouble, Bath, Users, Compass, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { house } from "@/data/house";

export function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);
  const [showVideo, setShowVideo] = useState(Boolean(house.heroVideo));

  useEffect(() => {
    if (showVideo) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % house.heroImages.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [showVideo]);

  return (
    <section className="relative overflow-hidden bg-stone-950 text-stone-50">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(200,169,126,0.28),_transparent_35%)]" />
      <Container className="relative grid items-center gap-10 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/80 px-4 py-2 text-sm text-stone-300">
            <Sparkles size={16} className="text-amber-300" />
            Refúgio exclusivo em Barra de Guaratiba
          </div>
          <h1 className="font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
            {house.name}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-300">{house.tagline}</p>
          <p className="mt-4 max-w-xl text-base leading-7 text-stone-400">{house.about}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={`https://wa.me/${house.whatsappNumber}?text=Olá!%20Gostaria%20de%20ver%20disponibilidade%20para%20a%20cabana.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
            >
              Reservar no WhatsApp <ArrowRight size={16} />
            </Link>
            <Link
              href="#galeria"
              className="rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-stone-400"
            >
              Ver galeria
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-3 text-sm text-stone-300">
            {[
              `${house.capacity} hóspedes`,
              `${house.bedrooms} quarto`,
              `${house.bathrooms} banheiro`,
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 rounded-full border border-stone-700 px-3 py-2">
                <Compass size={14} className="text-amber-300" /> {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] border border-stone-800 bg-stone-900/70 p-4 shadow-2xl shadow-black/30 sm:p-6"
        >
          <div className="overflow-hidden rounded-[1.5rem] border border-stone-800">
            {showVideo ? (
              <video
                src={house.heroVideo}
                autoPlay
                muted
                loop
                playsInline
                poster={house.heroImages[0]}
                className="h-80 w-full object-cover sm:h-96"
                onError={() => setShowVideo(false)}
              />
            ) : (
              <img
                src={house.heroImages[activeImage]}
                alt={`${house.name} - visual ${activeImage + 1}`}
                className="h-80 w-full object-cover sm:h-96"
              />
            )}
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-stone-800 bg-stone-950/80 p-3">
              <Users size={16} className="text-amber-300" />
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-stone-500">Hóspedes</p>
              <p className="text-lg font-semibold text-stone-100">{house.capacity}</p>
            </div>
            <div className="rounded-2xl border border-stone-800 bg-stone-950/80 p-3">
              <BedDouble size={16} className="text-amber-300" />
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-stone-500">Quartos</p>
              <p className="text-lg font-semibold text-stone-100">{house.bedrooms}</p>
            </div>
            <div className="rounded-2xl border border-stone-800 bg-stone-950/80 p-3">
              <Bath size={16} className="text-amber-300" />
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-stone-500">Banheiros</p>
              <p className="text-lg font-semibold text-stone-100">{house.bathrooms}</p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
