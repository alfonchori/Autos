import { MapPinIcon, PhoneIcon } from "@/components/icons"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">
              GWM <span className="text-accent">HAVAL</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Concesionario oficial en Córdoba. Tu próximo SUV te está esperando.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/catalogo" className="text-muted-foreground hover:text-accent transition-colors">
                  Catálogo
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPinIcon className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>Córdoba, Argentina</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <PhoneIcon className="h-5 w-5 flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:3534203574" className="hover:text-accent transition-colors">
                    353 420-3574
                  </a>
                  <a href="tel:3572504803" className="hover:text-accent transition-colors">
                    3572 50-4803
                  </a>
                  <a href="tel:3535693396" className="hover:text-accent transition-colors">
                    3535 69-3396
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} GWM Haval Córdoba. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
