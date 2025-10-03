export function JsonLd() {
    const localBusiness = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "MECANO SOLUTIONS",
        "image": "https://picsum.photos/seed/mecano-logo/256/256",
        "url": "https://www.mecanosolutions.cl/",
        "telephone": "+56999813058",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Industrial 1234",
          "addressLocality": "Santiago",
          "addressRegion": "RM",
          "postalCode": "8320000",
          "addressCountry": "CL"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "-33.4489",
          "longitude": "-70.6693"
        },
        "openingHours": "Mo-Fr 09:00-18:00",
        "areaServed": "CL",
        "sameAs": [
          "https://www.linkedin.com/company/mecanosolutions",
          "https://www.facebook.com/mecanosolutions"
        ]
      };

    const organization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MECANO SOLUTIONS",
        "url": "https://www.mecanosolutions.cl",
        "logo": "https://picsum.photos/seed/mecano-logo/256/256",
        "description": "Especialistas en estanterías metálicas industriales en Chile. Rack selectivo, ángulo ranurado, full space y altillos estructurales.",
        "telephone": "+56999813058",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "CL",
          "addressRegion": "Región Metropolitana",
          "addressLocality": "Santiago"
        },
        "areaServed": ["Chile", "Santiago", "Valparaíso", "Concepción", "Antofagasta"],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "name": "ISO 9001:2015",
            "description": "Certificación de Sistema de Gestión de Calidad"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "name": "NCH2369",
            "description": "Norma Chilena para Estanterías Metálicas"
          }
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Rack Selectivo",
              "description": "Sistema de estanterías metálicas para almacenaje selectivo",
              "category": "Estanterías Industriales"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Estanterías Ángulo Ranurado",
              "description": "Sistema modular de estanterías con ángulo ranurado",
              "category": "Estanterías Industriales"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Estanterías Full Space",
              "description": "Sistema de estanterías que maximiza el espacio de almacenaje",
              "category": "Estanterías Industriales"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": "Altillos Estructurales",
              "description": "Mesaninas industriales para optimizar espacios verticales",
              "category": "Estructuras Industriales"
            }
          }
        ]
      };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
            />
        </>
    );
}
