"use client"

export function GWMLogoAnimated() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative animate-float">
        <div className="absolute inset-0 bg-accent/30 blur-3xl rounded-full animate-pulse" />
        <div className="relative z-10 text-center">
          <div className="text-8xl font-bold text-accent mb-4 animate-glow">GWM</div>
          <div className="text-4xl font-semibold text-primary-foreground tracking-wider">HAVAL</div>
        </div>
      </div>
    </div>
  )
}
