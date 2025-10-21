import { ShieldIcon, ZapIcon, AwardIcon, WrenchIcon } from "@/components/icons"

const features = [
  {
    icon: ShieldIcon,
    title: "Seguridad Avanzada",
    description: "Tecnología de última generación para proteger lo que más importa",
  },
  {
    icon: ZapIcon,
    title: "Potencia y Eficiencia",
    description: "Motores diseñados para máximo rendimiento y economía",
  },
  {
    icon: AwardIcon,
    title: "Garantía Extendida",
    description: "Respaldo total con la mejor garantía del mercado",
  },
  {
    icon: WrenchIcon,
    title: "Servicio Postventa",
    description: "Atención personalizada y mantenimiento especializado",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">Por qué elegir GWM Haval</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Más que un vehículo, una experiencia completa de calidad y confianza
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-lg border border-border hover:border-accent/50 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
