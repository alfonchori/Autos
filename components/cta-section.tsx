import { Button } from "@/components/ui/button"
import { PhoneIcon, MessageCircleIcon, MapPinIcon } from "@/components/icons"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance">¿Listo para tu próximo vehículo?</h2>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                Visitanos en Córdoba o contactanos para más información. Nuestro equipo está listo para ayudarte a
                encontrar el SUV perfecto.
              </p>

              <div className="flex items-start gap-3 mb-8 justify-center lg:justify-start">
                <MapPinIcon className="h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-lg text-primary-foreground/90">Av. Emilio Caraffa 2640, X5009 Córdoba</p>
              </div>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8"
                  >
                    <a href="tel:3534203574">
                      <PhoneIcon className="mr-2 h-5 w-5" />
                      353 420-3574
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8"
                  >
                    <a href="tel:3572504803">
                      <PhoneIcon className="mr-2 h-5 w-5" />
                      3572 50-4803
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg h-14 px-8"
                  >
                    <a href="tel:3535693396">
                      <PhoneIcon className="mr-2 h-5 w-5" />
                      3535 69-3396
                    </a>
                  </Button>
                </div>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 text-lg h-14 px-8 bg-transparent"
                >
                  <a href="https://wa.me/5493534203574" target="_blank" rel="noopener noreferrer">
                    <MessageCircleIcon className="mr-2 h-5 w-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.8234567890123!2d-64.1234567!3d-31.4234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI1JzI0LjQiUyA2NMKwMDcnMjQuNCJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar&q=Av.+Emilio+Caraffa+2640,+X5009+Córdoba"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación GWM Haval Córdoba"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
