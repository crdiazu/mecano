"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";

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
import { submitQuote } from "@/app/actions";

const initialState = {
  message: "",
  errors: {},
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
        <Button type="submit" className="w-full shadow-orange" size="lg" disabled={pending}>
            {pending ? "Enviando..." : "Enviar Solicitud de Cotización"}
        </Button>
    );
}


export default function QuoteSection() {
  const [state, formAction] = useFormState(submitQuote, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state?.message) {
        if(state.errors && Object.keys(state.errors).length > 0) {
            toast({
                title: "Error en el formulario",
                description: state.message,
                variant: "destructive",
            });
        } else {
            toast({
                title: "Solicitud Enviada",
                description: state.message,
            });
            // Simple form reset - this might need a more robust solution if form is complex
            const form = document.querySelector('#cotizacion form') as HTMLFormElement;
            if (form) form.reset();
        }
    }
  }, [state, toast]);

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
              <form action={formAction} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
                    <Input id="name" name="name" placeholder="Tu nombre" />
                    {state.errors?.name && <p className="text-destructive text-sm mt-1">{state.errors.name}</p>}
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
                    {state.errors?.email && <p className="text-destructive text-sm mt-1">{state.errors.email}</p>}
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
                  {state.errors?.product && <p className="text-destructive text-sm mt-1">{state.errors.product}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                  {state.errors?.message && <p className="text-destructive text-sm mt-1">{state.errors.message}</p>}
                </div>
                <SubmitButton />
              </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}