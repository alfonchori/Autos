"use client"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VehicleCarousel } from "@/components/vehicle-carousel"
import { FuelIcon, GaugeIcon, UsersIcon } from "@/components/icons"
import Link from "next/link"

interface VehicleCardProps {
  name: string
  model: string
  image: string
  gallery?: string[]
  price: string
  features: {
    engine: string
    transmission: string
    seats: string
  }
  badge?: string
  slug: string
}

export function VehicleCard({ name, model, image, gallery, price, features, badge, slug }: VehicleCardProps) {
  if (!features) {
    console.error("[v0] VehicleCard: features is undefined for vehicle:", name)
    return null
  }

  return (
    <Link href={`/catalogo/${slug}`} className="block">
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow cursor-pointer">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          {badge && <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">{badge}</Badge>}

          {gallery && gallery.length > 0 ? (
            <VehicleCarousel images={gallery} alt={`${name} ${model}`} />
          ) : (
            <img
              src={image || "/placeholder.svg"}
              alt={`${name} ${model}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          )}
        </div>
        <CardContent className="p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold mb-1">{name}</h3>
            <p className="text-muted-foreground">{model}</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-y border-border">
            <div className="flex flex-col items-center gap-1">
              <FuelIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{features.engine}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <GaugeIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{features.transmission}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <UsersIcon className="h-5 w-5 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">{features.seats}</span>
            </div>
          </div>

          <div className="text-3xl font-bold text-accent mb-4">{price}</div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="w-full bg-accent hover:bg-accent/90 text-accent-foreground h-11 px-8 rounded-md inline-flex items-center justify-center text-sm font-medium transition-colors">
            Ver Detalles
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
