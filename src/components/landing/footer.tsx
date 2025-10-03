import Image from "next/image";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";

import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const logoImage = PlaceHolderImages.find((img) => img.id === "logo");

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
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
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
              <li>contacto@mecanosolutions.cl</li>
              <li>Carretera General San Martín, Paradero 26 S/N<br/>Colina, Chile</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} MECANO SOLUTIONS. Todos los derechos reservados.
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
