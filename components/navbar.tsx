"use client"

import Link from "next/link"
import { PhoneIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl lg:text-3xl font-bold tracking-tight">
              GWM <span className="text-accent">HAVAL</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-accent transition-colors">
              Inicio
            </Link>
            <Link href="/catalogo" className="text-sm font-medium hover:text-accent transition-colors">
              Catálogo
            </Link>
          </div>

          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
            <PhoneIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Contactar</span>
          </Button>
        </div>
      </div>
    </nav>
  )
}
