"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { VehicleCarousel } from "@/components/vehicle-carousel"
import {
  ArrowLeftIcon,
  PhoneIcon,
  MessageCircleIcon,
  FuelIcon,
  GaugeIcon,
  UsersIcon,
  ShieldIcon,
} from "@/components/icons"
import Link from "next/link"
import { notFound } from "next/navigation"
import { vehiclesData } from "@/lib/vehicles-data"

export default function VehicleDetailPage({ params }: { params: { slug: string } }) {
  const vehicle = vehiclesData.find((v) => v.slug === params.slug)

  if (!vehicle) {
    notFound()
  }

  const specsArray = vehicle.specs
    ? Object.entries(vehicle.specs)
        .filter(([key]) => key !== "consumo")
        .map(([key, value]) => ({
          label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, " $1"),
          value: typeof value === "object" ? JSON.stringify(value) : String(value),
        }))
    : []

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Link
            href="/catalogo"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Volver al catálogo
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted">
              {vehicle.badge && (
                <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">{vehicle.badge}</Badge>
              )}

              {vehicle.gallery && vehicle.gallery.length > 0 ? (
                <VehicleCarousel images={vehicle.gallery} alt={`${vehicle.name} ${vehicle.model}`} />
              ) : (
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={`${vehicle.name} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">{vehicle.name}</h1>
              <p className="text-2xl text-muted-foreground mb-6">{vehicle.model}</p>
              <p className="text-lg leading-relaxed mb-8">{vehicle.description}</p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="tel:3534203574"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  353 420-3574
                </a>
                <a
                  href="tel:3572504803"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  3572 50-4803
                </a>
                <a
                  href="tel:3535693396"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  3535 69-3396
                </a>
                <a
                  href="https://wa.me/5493534203574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
                >
                  <MessageCircleIcon className="h-5 w-5" />
                  WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 p-6 bg-secondary rounded-lg">
                <div className="flex flex-col items-center gap-2">
                  <FuelIcon className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium text-center">{vehicle.features.engine}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <GaugeIcon className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium text-center">{vehicle.features.transmission}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <UsersIcon className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium text-center">{vehicle.features.seats}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {vehicle.equipamiento && vehicle.equipamiento.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Equipamiento</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicle.equipamiento.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg">
                  <ShieldIcon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {vehicle.seguridad && vehicle.seguridad.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Seguridad</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicle.seguridad.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 border border-border rounded-lg">
                  <ShieldIcon className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {specsArray.length > 0 && (
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">Especificaciones Técnicas</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {specsArray.map((spec, index) => (
                <div key={index} className="p-6 bg-background border border-border rounded-lg">
                  <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
                  <div className="text-lg font-bold">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {vehicle.garantia && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Garantía</h2>
            <p className="text-xl text-muted-foreground">{vehicle.garantia}</p>
          </div>
        </section>
      )}

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">¿Te interesa este modelo?</h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Contactanos para agendar un test drive o recibir más información sobre el {vehicle.name}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:3534203574"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              353 420-3574
            </a>
            <a
              href="tel:3572504803"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              3572 50-4803
            </a>
            <a
              href="tel:3535693396"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              3535 69-3396
            </a>
            <a
              href="https://wa.me/5493534203574"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
            >
              <MessageCircleIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
