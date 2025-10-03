"use client";

import { Check, Clock, Plus } from 'lucide-react';
import Image from 'next/image';
import Reveal from '@/components/client/reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useState, useEffect } from 'react';

const benefits = [
  {
    icon: Check,
    title: 'Certificación & Seguridad',
    description: 'Diseños conforme a ISO 9001:2015 y NCH2369. Asesoría técnica y cálculo estructural.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/15',
  },
  {
    icon: Plus,
    title: 'Modular y Escalable',
    description: 'Crecen con tu operación: accesorios, niveles y protecciones a medida.',
    color: 'text-primary',
    bgColor: 'bg-primary/15',
  },
  {
    icon: Clock,
    title: 'Instalación Rápida',
    description: 'Equipos especializados y planificación sin detener tu operación.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/15',
  },
];

export default function BenefitsSection() {
  const [offsetY, setOffsetY] = useState(0);
  const bgImage = PlaceHolderImages.find(img => img.id === 'full-space');

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
    <section id="beneficios" className="relative w-full py-20 lg:py-28 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/60 z-10"></div>
           <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background z-20"></div>
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            fill
            className="object-cover"
            style={{ transform: `translateY(${offsetY * 0.2}px)` }}
            data-ai-hint={bgImage.imageHint}
          />
        </div>
      )}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-headline font-extrabold tracking-tight text-3xl lg:text-4xl text-white">
            Ventajas de Nuestras Estanterías Metálicas Industriales
          </h2>
          <p className="mt-3 text-slate-200 text-lg">
            Certificación, modularidad e instalación profesional para tu almacén
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 100}>
              <div className="p-6 rounded-2xl bg-card/50 border border-border h-full hover:-translate-y-1 hover:shadow-orange transition-all duration-300 backdrop-blur-sm">
                <div className={`w-12 h-12 rounded-lg ${benefit.bgColor} flex items-center justify-center mb-4`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} strokeWidth={2.5} />
                </div>
                <h3 className="font-headline font-semibold text-xl">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
