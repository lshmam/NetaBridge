"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { ParticlesBackground } from "@/components/particles-background"
import { BlurReveal } from "@/components/BlurReveal"

export function HeroSection() {

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden px-4 pt-4 pb-4 md:px-16 md:pt-32 md:pb-12">
      {/* Background with gradient and particles */}
      <div className="absolute inset-4 md:inset-8 lg:inset-12 bg-gradient-to-br from-[#0a0f1a] via-[#0d1526] to-[#0a0f1a] rounded-[2rem] md:rounded-[3rem] overflow-hidden">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 w-full px-4 md:px-16 lg:px-32 xl:px-48 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <BlurReveal delay={0.2}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 whitespace-normal md:whitespace-nowrap">
              Unlock your next deal here
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.4}>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Trusted supply & demand match platform
            </p>
          </BlurReveal>

          {/* Action Buttons */}
          <BlurReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="rounded-full bg-white text-black hover:bg-white/90 px-8 py-6 text-lg w-full sm:w-auto">
                Post a Supply
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                Post a Demand
              </Button>
            </div>
            {/* <p className="text-sm text-white/50 mt-6">Join the waitlist for early access</p> */}
          </BlurReveal>
        </div>
      </div>
    </section>
  )
}
