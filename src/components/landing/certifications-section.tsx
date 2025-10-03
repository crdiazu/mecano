import { CheckCircle2 } from 'lucide-react';
import Reveal from '@/components/client/reveal';

const certifications = [
  {
    title: 'ISO 9001:2015',
    description: 'Sistema de gestión de calidad certificado.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/15',
  },
  {
    title: 'NCH 2369',
    description: 'Norma chilena para estanterías metálicas.',
    color: 'text-primary',
    bgColor: 'bg-primary/15',
  },
  {
    title: 'Cálculo Estructural',
    description: 'Análisis técnico y certificación de cargas.',
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/15',
  },
];

export default function CertificationsSection() {
  return (
    <section id="certificaciones" className="w-full bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal className="text-center mb-12">
          <h2 className="font-headline font-extrabold tracking-tight text-3xl lg:text-4xl">
            Certificaciones y Estándares
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Cumplimos con las normativas más exigentes del mercado
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 100}>
              <div className="p-8 rounded-2xl bg-card border border-border h-full text-center hover:-translate-y-1 hover:shadow-orange transition-all duration-300">
                <div className={`w-16 h-16 mx-auto rounded-full ${cert.bgColor} flex items-center justify-center mb-4`}>
                  <CheckCircle2 className={`w-8 h-8 ${cert.color}`} strokeWidth={2} />
                </div>
                <h3 className="font-headline font-semibold text-xl">{cert.title}</h3>
                <p className="mt-2 text-muted-foreground">{cert.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
