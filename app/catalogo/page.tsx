import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { VehicleCard } from "@/components/vehicle-card"
import { vehiclesData } from "@/lib/vehicles-data"

export default function CatalogoPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-balance">Nuestro Catálogo</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explorá toda la línea de SUVs GWM Haval. Cada modelo diseñado para superar tus expectativas en tecnología,
              confort y seguridad.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehiclesData.map((vehicle, index) => (
              <VehicleCard key={index} {...vehicle} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿No encontrás lo que buscás?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactanos y te ayudamos a encontrar el vehículo perfecto para vos
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:3534203574"
              className="inline-flex items-center justify-center rounded-md bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-medium transition-colors"
            >
              353 420-3574
            </a>
            <a
              href="tel:3572504803"
              className="inline-flex items-center justify-center rounded-md bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-medium transition-colors"
            >
              3572 50-4803
            </a>
            <a
              href="tel:3535693396"
              className="inline-flex items-center justify-center rounded-md bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg font-medium transition-colors"
            >
              3535 69-3396
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
