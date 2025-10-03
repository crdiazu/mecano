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

  // TODO: Integrate an email sending service (e.g., Resend, SendGrid)
  // For now, this action simulates sending the data to info@mecanosolutions.cl
  
  const to = "info@mecanosolutions.cl";
  const data = validatedFields.data;

  console.log("---- Nueva Solicitud de Cotización ----");
  console.log(`Para: ${to}`);
  console.log(`Nombre: ${data.name}`);
  console.log(`Empresa: ${data.company || 'No especificada'}`);
  console.log(`Email: ${data.email}`);
  console.log(`Teléfono: ${data.phone || 'No especificado'}`);
  console.log(`Producto: ${data.product}`);
  console.log(`Mensaje: ${data.message}`);
  console.log("-----------------------------------------");

  // This is a simulation. In a real app, you would get a success/error response
  // from your email sending service.
  const emailSentSuccessfully = true; 

  if (emailSentSuccessfully) {
    return {
      message: "¡Gracias por tu solicitud! Nos pondremos en contacto contigo pronto.",
    };
  } else {
     return {
      errors: { _form: ["No se pudo enviar la solicitud. Por favor, inténtalo más tarde."] },
      message: "Hubo un problema al enviar tu solicitud.",
    };
  }
}