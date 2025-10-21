import { Button } from "@/components/ui/button"
import { ArrowRightIcon, MapPinIcon, PhoneIcon } from "@/components/icons"
import Link from "next/link"
import { GWMLogoAnimated } from "./gwm-logo-animated"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-primary text-primary-foreground overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary via-primary to-primary/90" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-sm font-medium">Concesionario Oficial en Córdoba</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
              Descubrí la nueva generación de SUVs
            </h1>

            <p className="text-xl lg:text-2xl text-primary-foreground/80 mb-12 leading-relaxed">
              Tecnología, diseño y potencia se unen en cada modelo GWM Haval. Encontrá el vehículo perfecto para tu
              estilo de vida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8"
              >
                <Link href="/catalogo">
                  Ver Catálogo
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg h-14 px-8 bg-transparent"
              >
                <a href="tel:3534203574">
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  Llamar Ahora
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                <span>Córdoba, Argentina</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4" />
                <div className="flex flex-col sm:flex-row sm:gap-2">
                  <span>353 420-3574</span>
                  <span className="hidden sm:inline">•</span>
                  <span>3572 50-4803</span>
                  <span className="hidden sm:inline">•</span>
                  <span>3535 69-3396</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden h-[600px]">
            <div className="relative h-full">
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
              <div className="relative z-10 h-full">
                <GWMLogoAnimated />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
