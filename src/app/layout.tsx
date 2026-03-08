import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { JsonLd } from '@/components/landing/json-ld';

export const metadata: Metadata = {
  title: 'Estanterías Metálicas Chile | Rack Selectivo y Ángulo Ranurado | MECANO SOLUTIONS',
  description: '✅ Estanterías metálicas industriales en Chile. Rack selectivo, ángulo ranurado, full space y altillos estructurales. Certificación ISO 9001:2015. Cotización gratuita ☎️ 9 9981 3058',
  keywords: 'estanterías metálicas chile, rack selectivo chile, estanterías ángulo ranurado, estanterías industriales, sistemas almacenaje, estanterías full space, altillos estructurales, mesaninas industriales, ISO 9001 2015, NCH2369, estanterías santiago, estanterías valparaíso',
  metadataBase: new URL('https://www.mecanosolutions.cl'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#F28C38',
  openGraph: {
    title: 'Estanterías Metálicas Chile | Rack Selectivo y Ángulo Ranurado | MECANO SOLUTIONS',
    description: '✅ Estanterías metálicas industriales en Chile. Rack selectivo, ángulo ranurado, full space y altillos estructurales. Certificación ISO 9001:2015. Cotización gratuita',
    type: 'website',
    url: 'https://www.mecanosolutions.cl/',
    images: [
      {
        url: 'https://picsum.photos/seed/mecano-og/1200/630',
        width: 1200,
        height: 630,
        alt: 'MECANO SOLUTIONS - Estanterías metálicas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet" />
        <JsonLd />
      </head>
      <body className="font-body text-mecano-slate bg-white antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
