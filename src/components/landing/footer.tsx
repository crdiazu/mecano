import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const logoImage = PlaceHolderImages.find((img) => img.id === "logo");
  const keywords = [
    'Estanterías Metálicas Chile', 'Rack Selectivo', 'Ángulo Ranurado', 'Sistemas de Almacenaje', 'Optimización de Bodegas',
    'Soluciones de Almacenaje', 'Estanterías Industriales', 'Logística de Almacén', 'Almacenaje Industrial', 'Rack de Paletización',
    'Estanterías para Bodegas', 'Mecano Chile', 'Estanterías de Acero', 'Almacenamiento y Logística', 'Rack Industrial',
    'Estanterías Modulares', 'Soluciones Logísticas', 'Almacenaje Eficiente', 'Sistemas de Rack', 'Estanterías Carga Pesada',
    'Asesoría en Almacenaje', 'Diseño de Bodegas', 'Rack para Pallets', 'Estanterías a Medida', 'Montaje de Estanterías',
    'Seguridad en Bodegas', 'Normativa de Almacenaje', 'Altillos Metálicos', 'Entreplantas Industriales', 'Pasillos Elevados',
    'Estanterías Compactas', 'Almacenaje Vertical', 'Gestión de Inventario', 'Estanterías para Picking', 'Racks para Carga Manual',
    'Almacenaje para Pymes', 'Soluciones para Retail', 'Estanterías para Archivos', 'Manejo de Materiales', 'Flujo de Mercancías',
    'Reducción de Costos Almacén', 'Centro de Distribución', 'ISO 9001', 'NCH 2369', 'Bodegas en Santiago',
    'Proyectos de Almacenaje', 'Estanterías Metálicas Precios', 'Venta de Racks', 'Instalación de Estanterías', 'Mantenimiento de Racks'
  ];

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              {logoImage && (
                <Image
                  src={logoImage.imageUrl}
                  alt={logoImage.description}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                  data-ai-hint={logoImage.imageHint}
                />
              )}
              <div>
                <div className="font-headline font-bold text-foreground">
                  MECANO SOLUTIONS
                </div>
                <div className="text-muted-foreground text-sm">
                  Almacenaje Modular en Acero
                </div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm mb-6 max-w-md">
              Soluciones certificadas de almacenaje modular en acero para optimizar tu bodega. ISO 9001:2015 y NCH2369.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#0077B5] hover:text-white hover:bg-[#0077B5]">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#E1306C] hover:text-white hover:bg-[#E1306C]">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-semibold text-foreground mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#productos" className="hover:text-primary transition">Rack Selectivo</Link></li>
              <li><Link href="#productos" className="hover:text-primary transition">Ángulo Ranurado</Link></li>
              <li><Link href="#productos" className="hover:text-primary transition">Full Space</Link></li>
              <li><Link href="#productos" className="hover:text-primary transition">Altillos Estructurales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://wa.me/56999813058" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">+56 9 9981 3058</a></li>
              <li><a href="mailto:info@mecanosolutions.cl" className="hover:text-primary transition">info@mecanosolutions.cl</a></li>
              <li>Carretera General San Martín, Paradero 26 S/N<br/>Colina, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
            <h5 className="font-headline font-semibold text-foreground mb-4">Palabras Clave</h5>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {keywords.join(' | ')}
            </p>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MECANO SOLUTIONS. <a href="http://www.marketingcloud.cl" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">Desarrollado por MarketingCloud para Pymes.</a>
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary transition text-sm">Política de Privacidad</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition text-sm">Términos de Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
