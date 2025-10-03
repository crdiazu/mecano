"use client";

import { useState } from "react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Reveal from "@/components/client/reveal";
import { useToast } from "@/hooks/use-toast";

const quoteSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  company: z.string().optional(),
  email: z.string().email("El email no es válido"),
  phone: z.string().optional(),
  product: z.string().min(1, "Por favor selecciona un producto"),
  message: z.string().min(10, "El mensaje es muy corto"),
});

type FormData = z.infer<typeof quoteSchema>;

const initialErrors = {
    name: [],
    company: [],
    email: [],
    phone: [],
    product: [],
    message: [],
};

export default function QuoteSection() {
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<keyof FormData, string[] | undefined>>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(initialErrors);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const validatedFields = quoteSchema.safeParse(data);

    if (!validatedFields.success) {
      const fieldErrors = validatedFields.error.flatten().fieldErrors;
      setErrors(fieldErrors as Record<keyof FormData, string[] | undefined>);
      toast({
        title: "Error en el formulario",
        description: "Por favor, corrige los errores antes de enviar.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const { name, company, email, phone, product, message } = validatedFields.data;
    
    const whatsappMessage = `
*Nueva Solicitud de Cotización*

*Nombre:* ${name}
*Empresa:* ${company || 'No especificada'}
*Email:* ${email}
*Teléfono:* ${phone || 'No especificado'}
*Producto de Interés:* ${product}

*Mensaje:*
${message}
    `.trim();

    const whatsappUrl = `https://wa.me/56999813058?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
        title: "Redirigiendo a WhatsApp",
        description: "Preparamos tu mensaje. ¡Solo falta que lo envíes!",
    });

    // Reset form
    (event.target as HTMLFormElement).reset();
    setIsSubmitting(false);
  };

  return (
    <section id="cotizacion" className="relative w-full bg-background/70 py-20 lg:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-headline font-extrabold tracking-tight text-4xl lg:text-5xl">Solicita tu Cotización</h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Nuestros especialistas te ayudarán a encontrar la solución perfecta para tu bodega.
          </p>
        </Reveal>

        <Reveal className="mt-12 max-w-2xl mx-auto" delay={200}>
          <div className="rounded-2xl bg-card border p-6 lg:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                    <Input id="name" name="name" placeholder="Tu nombre" />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Empresa (Opcional)</label>
                    <Input id="company" name="company" placeholder="Nombre de la empresa" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                    <Input id="email" name="email" type="email" placeholder="tu@email.com" />
                     {errors.email && <p className="text-destructive text-sm mt-1">{errors.email[0]}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Teléfono (Opcional)</label>
                    <Input id="phone" name="phone" type="tel" placeholder="+56 9 1234 5678" />
                  </div>
                </div>
                <div>
                  <label htmlFor="product" className="block text-sm font-medium mb-2">Producto de Interés</label>
                    <Select name="product">
                        <SelectTrigger>
                            <SelectValue placeholder="Selecciona un producto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="rack-selectivo">Rack Selectivo</SelectItem>
                          <SelectItem value="estanterias-angulo">Estanterías de Ángulo Ranurado</SelectItem>
                          <SelectItem value="estanterias-full-space">Estanterías Full Space</SelectItem>
                          <SelectItem value="altillos-estructurales">Altillos Estructurales</SelectItem>
                          <SelectItem value="consulta-general">Consulta General</SelectItem>
                        </SelectContent>
                    </Select>
                  {errors.product && <p className="text-destructive text-sm mt-1">{errors.product[0]}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message[0]}</p>}
                </div>
                <Button type="submit" className="w-full shadow-orange" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Generando Mensaje..." : "Enviar por WhatsApp"}
                </Button>
              </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
