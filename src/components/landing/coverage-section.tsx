import Reveal from "@/components/client/reveal";

const cities = [
  "Santiago",
  "Valparaíso",
  "Concepción",
  "Antofagasta",
  "La Serena",
  "Puerto Montt",
];

export default function CoverageSection() {
  return (
    <section id="cobertura" className="w-full py-16 bg-card/30">
      <div className="container mx-auto px-6 lg:px-8">
        <Reveal>
          <h3 className="text-center font-headline text-muted-foreground text-lg mb-6">
            Cobertura Nacional
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-muted-foreground max-w-6xl mx-auto">
            {cities.map((city, index) => (
              <div
                key={city}
                className="p-3 rounded-lg bg-card border text-center transition-colors hover:bg-secondary hover:text-secondary-foreground"
              >
                {city}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
