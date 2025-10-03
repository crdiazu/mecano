import Reveal from "@/components/client/reveal";

export default function CoverageSection() {
  return (
    <section id="cobertura" className="w-full py-20 lg:py-28 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-headline font-extrabold tracking-tight text-3xl lg:text-4xl">
            Visítanos
          </h2>
          <p className="mt-3 text-muted-foreground text-lg">
            Encuentra nuestra ubicación y planifica tu visita
          </p>
        </Reveal>
        <Reveal className="mt-12">
          <div className="aspect-video w-full rounded-2xl border overflow-hidden shadow-orange">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.795101088519!2d-70.68115668480579!3d-33.2703819808332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662b9f3f77332d7%3A0x8e8a3a228f6e8d1a!2sUnnamed%20Road%2C%20Colina%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses!2ses!4v1689283749872!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
