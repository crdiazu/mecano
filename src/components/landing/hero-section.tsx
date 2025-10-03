"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/client/reveal";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const [offsetY, setOffsetY] = useState(0);
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero");
  const logoImage = PlaceHolderImages.find((img) => img.id === "logo");

  const handleScroll = () => {
    if (window.innerWidth > 768) { // Only apply parallax on desktop
      setOffsetY(window.pageYOffset);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative overflow-hidden w-full h-screen min-h-[700px] flex items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background z-20"></div>
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            style={{ transform: `translateY(${offsetY * 0.4}px)` }}
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
      </div>

      <div className="relative z-30 container mx-auto px-6 lg:px-8 py-16">
        <Reveal>
          {logoImage && (
            <Image
              src={logoImage.imageUrl}
              alt={logoImage.description}
              width={180}
              height={180}
              className="w-40 h-40 lg:w-48 lg:h-48 object-contain mx-auto mb-6"
              data-ai-hint={logoImage.imageHint}
              priority
            />
          )}
          <h1 className="font-headline font-extrabold tracking-tight text-5xl lg:text-7xl mb-4 text-white">
            Sistemas de Almacenaje modulares en Acero{" "}
            <span className="text-primary">MECANO SOLUTIONS</span>
          </h1>
          <p className="mt-4 text-lg lg:text-xl max-w-3xl mx-auto text-slate-200">
            Especialistas en rack selectivo, ángulo ranurado y sistemas de almacenaje industrial
          </p>
          <div className="flex flex-wrap justify-center items-center gap-3 mt-6">
            <Button variant="secondary" size="sm" asChild>
                <Link href="#productos">Estanterías Ángulo Ranurado</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
                <Link href="#productos">Rack Selectivo</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
                <Link href="#productos">Full Space</Link>
            </Button>
            <Button variant="secondary" size="sm" asChild>
                <Link href="#productos">Altillos Estructurales</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="shadow-orange">
              <a href="#cotizacion">
                Solicitar Cotización Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#productos">
                Ver Productos
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
