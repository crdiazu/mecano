import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Reveal from '@/components/client/reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const products = [
  {
    id: 'rack-selectivo',
    title: 'Rack Selectivo',
    description: 'Solución versátil para almacenaje de palets con acceso directo a cada unidad de carga. Ideal para bodegas con alta rotación.',
    href: '#',
  },
  {
    id: 'angulo-ranurado',
    title: 'Estanterías de Ángulo Ranurado',
    description: 'Solución económica y versátil para cargas ligeras hasta 150 kg por nivel. Perfectas para oficinas, comercios y pequeñas bodegas.',
    href: '#',
  },
  {
    id: 'full-space',
    title: 'Estanterías Full Space',
    description: 'Sistema móvil sobre rieles para optimización máxima del espacio. Aumenta la capacidad de almacenaje hasta un 100%.',
    href: '#',
  },
  {
    id: 'altillo-estructural',
    title: 'Altillos Estructurales',
    description: 'Mesaninas para aprovechar espacios en altura. Duplica tu superficie útil de almacenamiento de forma segura y eficiente.',
    href: '#',
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="w-full bg-background py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal>
          <h2 className="font-headline font-extrabold tracking-tight text-4xl lg:text-5xl">
            Estanterías Metálicas y Sistemas de Almacenaje
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Sistemas modulares para cada necesidad: versatilidad, seguridad y eficiencia.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const productImage = PlaceHolderImages.find((img) => img.id === product.id);
            return (
              <Reveal key={product.id} delay={index * 100}>
                <Card className="h-full bg-card border-border hover:-translate-y-1 hover:shadow-orange transition-all duration-300 flex flex-col">
                  {productImage && (
                    <div className="aspect-video rounded-t-lg overflow-hidden">
                      <Image
                        src={productImage.imageUrl}
                        alt={productImage.description}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                        data-ai-hint={productImage.imageHint}
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-headline text-xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <p className="text-muted-foreground flex-grow">{product.description}</p>
                    <div className="mt-4">
                      <Button asChild>
                        <a href={product.href}>Ver Detalles</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
