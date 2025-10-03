import { Check, Clock, Plus } from 'lucide-react';
import Image from 'next/image';
import Reveal from '@/components/client/reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

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
  const bgImage = PlaceHolderImages.find(img => img.id === 'benefits-bg');

  return (
    <section id="beneficios" className="relative w-full py-20 lg:py-28 overflow-hidden">
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            fill
            className="object-cover filter blur-sm scale-110"
            data-ai-hint={bgImage.imageHint}
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        </div>
      )}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-headline font-extrabold tracking-tight text-3xl lg:text-4xl">
            Ventajas de Nuestras Estanterías Metálicas Industriales
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Certificación, modularidad e instalación profesional para tu almacén
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 100}>
              <div className="p-6 rounded-2xl bg-card/50 border border-border h-full hover:-translate-y-1 hover:shadow-orange transition-all duration-300">
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
