"use client";

import { useFormState } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Reveal from "@/components/client/reveal";
import { useToast } from "@/hooks/use-toast";
import { submitQuote } from "@/app/actions";

const quoteSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  company: z.string().optional(),
  email: z.string().email("El email no es válido"),
  phone: z.string().optional(),
  product: z.string().min(1, "Por favor selecciona un producto"),
  message: z.string().min(10, "El mensaje es muy corto"),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const initialState = {
  message: "",
  errors: {},
};

export default function QuoteSection() {
  const [state, formAction] = useFormState(submitQuote, initialState);
  const { toast } = useToast();

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      product: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state?.message) {
        if(state.errors) {
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
            form.reset();
        }
    }
  }, [state, toast, form]);

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
            <Form {...form}>
              <form action={formAction} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nombre</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Empresa (Opcional)</FormLabel>
                        <FormControl>
                          <Input placeholder="Nombre de la empresa" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="tu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Teléfono (Opcional)</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="+56 9 1234 5678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="product"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Producto de Interés</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona un producto" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="rack-selectivo">Rack Selectivo</SelectItem>
                          <SelectItem value="estanterias-angulo">Estanterías de Ángulo Ranurado</SelectItem>
                          <SelectItem value="estanterias-full-space">Estanterías Full Space</SelectItem>
                          <SelectItem value="altillos-estructurales">Altillos Estructurales</SelectItem>
                          <SelectItem value="consulta-general">Consulta General</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Cuéntanos sobre tu proyecto..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full shadow-orange" size="lg">
                  Enviar Solicitud de Cotización
                </Button>
              </form>
            </Form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
