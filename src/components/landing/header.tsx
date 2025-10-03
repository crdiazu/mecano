"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useState } from "react";

const navLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#cotizacion", label: "Contacto" },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const logoImage = PlaceHolderImages.find((img) => img.id === "logo");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-background/90 border-b border-border w-full">
      <div className="container mx-auto px-6 lg:px-8 h-[88px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          {logoImage && (
            <Image
              src={logoImage.imageUrl}
              alt={logoImage.description}
              width={64}
              height={64}
              className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
              data-ai-hint={logoImage.imageHint}
            />
          )}
          <div>
            <div className="font-headline font-extrabold tracking-tight text-foreground text-xl leading-tight whitespace-nowrap">
              MECANO SOLUTIONS
            </div>
            <div className="text-muted-foreground text-sm">
              Almacenaje Modular en Acero
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-muted-foreground">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="hidden sm:inline-flex"
          >
            <a href="tel:+56999813058">
              <Phone className="mr-2 h-4 w-4" />
              9 9981 3058
            </a>
          </Button>
          <Button asChild className="shadow-orange hidden md:inline-flex">
            <a href="#cotizacion">
              Solicitar Cotización
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-12">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-foreground hover:text-primary transition-colors"
                    onClick={() => setSheetOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button asChild className="mt-8 w-full shadow-orange">
                <a href="#cotizacion" onClick={() => setSheetOpen(false)}>
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
