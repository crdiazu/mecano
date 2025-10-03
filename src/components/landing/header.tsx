"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useState } from "react";

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

export default function Header() {
  const logoImage = PlaceHolderImages.find((img) => img.id === "logo");
  const navLinks = [
    { href: "/#productos", label: "Productos" },
    { href: "/#beneficios", label: "Beneficios" },
  ];
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-background/90 border-b border-border w-full">
      <div className="container mx-auto px-6 lg:px-8 h-[120px] flex items-center justify-between">
        
        <div className="w-1/3">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col h-full p-6">
                  <nav className="flex flex-col gap-6 mt-8">
                      {navLinks.map((link) => (
                        <SheetClose key={link.href} asChild>
                          <Link href={link.href} className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                      <SheetClose asChild>
                          <Link href="/blog" className="text-lg font-medium text-foreground hover:text-primary transition-colors flex items-center gap-2">
                              <BookOpen className="w-5 h-5"/> Blog
                          </Link>
                      </SheetClose>
                  </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="flex-1 flex justify-center">
            <Link href="/" className="flex items-center gap-3 group shrink-0">
            {logoImage && (
                <Image
                src={logoImage.imageUrl}
                alt={logoImage.description}
                width={128}
                height={128}
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain"
                data-ai-hint={logoImage.imageHint}
                />
            )}
            <div className="hidden sm:block">
                <div className="font-headline font-extrabold tracking-tight text-foreground text-xl leading-tight whitespace-nowrap">
                MECANO SOLUTIONS
                </div>
                <div className="text-muted-foreground text-sm">
                Almacenaje Modular en Acero
                </div>
            </div>
            </Link>
        </div>


        <div className="flex items-center justify-end gap-3 w-1/3">
            <div className="hidden sm:flex items-center gap-3">
              <Button
                variant="outline"
                asChild
              >
                <a href="https://wa.me/56999813058" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5 text-green-500" />
                  WhatsApp
                </a>
              </Button>
              <Button asChild className="shadow-orange">
                <a href="#cotizacion">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="sm:hidden">
              <Button asChild size="sm" className="shadow-orange">
                  <a href="#cotizacion">
                    Cotizar
                  </a>
              </Button>
            </div>
        </div>
      </div>
    </header>
  );
}
