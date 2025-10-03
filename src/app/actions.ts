"use server";

import { z } from "zod";

const quoteSchema = z.object({
  name: z.string().min(2, "El nombre es muy corto"),
  company: z.string().optional(),
  email: z.string().email("El email no es válido"),
  phone: z.string().optional(),
  product: z.string().min(1, "Por favor selecciona un producto"),
  message: z.string().min(10, "El mensaje es muy corto"),
});

export async function submitQuote(prevState: any, formData: FormData) {
  const validatedFields = quoteSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Por favor, corrige los errores en el formulario.",
    };
  }

  // In a real application, you would process the data here:
  // - Send an email
  // - Save to a database
  // - Call an external API
  console.log("Quote submission received:", validatedFields.data);

  // Simulate a successful submission
  return {
    message: "¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.",
  };
}
