import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Reveal from '@/components/client/reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const products = [
  {
    id: 'rack-selectivo',
    title: 'Rack Selectivo',
    description: 'Solución versátil para almacenaje de palets con acceso directo a cada unidad de carga. Ideal para bodegas con alta rotación.',
    longDescription: 'El sistema de Rack Selectivo es la solución más universal para el almacenaje de pallets. Permite acceso directo y unitario a cada paleta, lo que lo hace ideal para bodegas con una gran variedad de referencias y alta rotación de inventario. Su diseño modular se adapta a cualquier tipo de carga, peso o volumen, y permite una fácil reconfiguración y ampliación. Cumple con los más altos estándares de seguridad y está diseñado para optimizar el espacio y los tiempos de operación en su bodega.'
  },
  {
    id: 'angulo-ranurado',
    title: 'Estanterías de Ángulo Ranurado',
    description: 'Solución económica y versátil para cargas ligeras hasta 150 kg por nivel. Perfectas para oficinas, comercios y pequeñas bodegas.',
    longDescription: 'Las estanterías de Ángulo Ranurado son un sistema de almacenaje manual extremadamente versátil y económico. Su montaje es rápido y sencillo, permitiendo crear una infinidad de configuraciones para adaptarse a cualquier espacio. Son ideales para cargas ligeras y medianas, como cajas, archivos, repuestos y herramientas. Perfectas para organizar oficinas, archivos, talleres, comercios y bodegas pequeñas, ofreciendo una solución robusta y duradera.'
  },
  {
    id: 'full-space',
    title: 'Estanterías Full Space',
    description: 'Sistema móvil sobre rieles para optimización máxima del espacio. Aumenta la capacidad de almacenaje hasta un 100%.',
    longDescription: 'El sistema de Estanterías Móviles Full Space compacta el área de almacenaje al eliminar los pasillos de acceso, dejando solo uno necesario para operar. Las estanterías se desplazan sobre rieles, permitiendo un acceso fácil a la ubicación deseada. Este sistema puede duplicar la capacidad de almacenaje en el mismo espacio o reducir a la mitad el área necesaria. Es la solución perfecta para archivos, depósitos de productos de bajo movimiento y cámaras frigoríficas.'
  },
  {
    id: 'altillo-estructural',
    title: 'Altillos Estructurales',
    description: 'Mesaninas para aprovechar espacios en altura. Duplica tu superficie útil de almacenamiento de forma segura y eficiente.',
    longDescription: 'Los Altillos Estructurales o Mesaninas son la solución ideal para duplicar o triplicar la superficie útil de una nave o bodega aprovechando la altura. Creamos niveles de piso adicionales, completamente desmontables y reutilizables, que pueden ser destinados a áreas de almacenaje, zonas de trabajo, oficinas o picking. Diseñados a medida, cumplen con todas las normativas de seguridad y cálculo estructural para garantizar una operación segura y eficiente.'
  },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M19.67 18.26c-1.33-1.61-2.9-2.95-4.2-3.95-1.04-.8-1.95-1.46-2.58-1.99-.42-.35-.77-.6-1.03-.76-.32-.2-.6-.31-.82-.34-.23-.04-.46-.04-.69.04-.4.12-.73.34-1.02.62-.29.28-.5.58-.62.88-.13.3-.18.6-.16.89.04.3.16.6.34.89.19.29.43.59.72.9.29.3.61.62.97.96.43.41.85.82 1.25 1.22.41.4.82.79 1.22 1.15.65.59 1.26 1.09 1.84 1.5.58.41 1.11.73 1.59.95.48.22.9.34 1.27.38.37.04.7.02.98-.06.28-.08.55-.23.8-.44.25-.21.46-.47.62-.78.16-.31.25-.65.28-.99.03-.34.02-.68-.04-1.02-.1-.52-.31-1.04-.62-1.57zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    </svg>
  );

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
            const whatsappMessage = encodeURIComponent(`Quiero cotizar este producto: ${product.title}`);
            const whatsappUrl = `https://wa.me/56999813058?text=${whatsappMessage}`;
            
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
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button>Ver Detalles</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            {productImage && (
                               <div className="aspect-video rounded-lg overflow-hidden -mx-6 -mt-6 mb-4">
                                <Image
                                  src={productImage.imageUrl}
                                  alt={productImage.description}
                                  width={800}
                                  height={450}
                                  className="w-full h-full object-cover"
                                  data-ai-hint={productImage.imageHint}
                                />
                              </div>
                            )}
                            <DialogTitle className="font-headline text-2xl">{product.title}</DialogTitle>
                            <DialogDescription className="text-base text-muted-foreground">
                              {product.longDescription}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-4 flex justify-end gap-2">
                            <Button variant="outline" asChild>
                                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    <WhatsAppIcon className="mr-2 h-5 w-5 text-green-500" />
                                    Cotizar por WhatsApp
                                </a>
                            </Button>
                             <a href="#cotizacion">
                              <Button className="shadow-orange">Solicitar Cotización</Button>
                             </a>
                          </div>
                        </DialogContent>
                      </Dialog>
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
