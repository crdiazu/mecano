"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/client/reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  const [offsetY, setOffsetY] = useState(0);
  const bgImage = PlaceHolderImages.find((img) => img.id === "certifications-bg");

  const handleScroll = () => {
    if (window.innerWidth > 768) {
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full py-20 lg:py-28 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            fill
            className="object-cover"
            style={{ transform: `translateY(${offsetY * 0.1}px)` }}
            data-ai-hint={bgImage.imageHint}
          />
        </div>
      )}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="font-headline font-extrabold tracking-tight text-3xl lg:text-4xl text-white">
            Descubre las Últimas Tendencias en Almacenaje
          </h2>
          <p className="mt-3 text-slate-200 text-lg max-w-2xl mx-auto">
            Visita nuestro blog para encontrar análisis, consejos y novedades sobre la optimización de bodegas y logística.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild className="shadow-orange">
              <Link href="/blog">
                Conocer Más
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
