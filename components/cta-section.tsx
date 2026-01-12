"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { BlurReveal } from "@/components/BlurReveal"
import Squares from "@/components/Squares"

export function CTASection() {
  return (
    <section className="py-8 md:py-12 px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="relative bg-muted/30 rounded-3xl md:rounded-[3rem] py-16 md:py-24 px-8 md:px-12 overflow-hidden">
        {/* Animated Squares Background */}
        <Squares
          direction="diagonal"
          speed={0.3}
          borderColor="rgba(0,0,0,0.05)"
          squareSize={50}
          hoverFillColor="rgba(0,0,0,0.03)"
          className="pointer-events-auto"
        />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <BlurReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Research-backed. AI-powered.
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-muted-foreground mb-10 text-pretty">
              Backed by decades of network science research from Harvard, Stanford, and MIT. Start utilizing your network
              today.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.3}>
            <Button size="lg" className="rounded-full px-10 py-6 text-lg">
              <Sparkles className="h-5 w-5 mr-2" />
              Activate Your Network
            </Button>
          </BlurReveal>
          <p className="text-sm text-muted-foreground mt-6">No credit card required. Free forever.</p>
        </div>
      </div>
    </section>
  )
}
