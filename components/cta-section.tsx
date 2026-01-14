"use client"

import { Button } from "@/components/ui/button"
import { BlurReveal } from "@/components/BlurReveal"
import { BorderBeam } from "@/components/ui/border-beam"
import { ParticlesBackground } from "@/components/ui/particles-background"

import Glow from "@/components/ui/glow"

export function CTASection() {
  return (
    <section className="py-2 px-2 md:py-4 md:px-4">
      <div className="relative bg-[#0a0a0a] rounded-[2rem] md:rounded-[3rem] py-12 md:py-24 px-4 md:px-12 overflow-hidden border border-white/10 w-full">
        {/* Glow Effect */}
        <Glow variant="below" className="bottom-0" />

        {/* Network Animation Background */}
        <div className="absolute inset-0 opacity-50">
          <ParticlesBackground id="tsparticles-cta" />
        </div>

        {/* Subtle dot pattern background - matching Hero */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:40px_40px]" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <BlurReveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance text-white">
              Research-backed. AI-powered.
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-white/60 mb-10 text-pretty leading-relaxed">
              Backed by decades of network science research from Harvard, Stanford, and MIT. Start utilizing your network today.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.3}>
            {/* Wrapper for BorderBeam effect */}
            <div className="relative overflow-hidden rounded-full inline-block">
              <Button size="lg" className="relative rounded-full px-10 py-6 text-lg bg-white text-black hover:bg-white/90">
                Activate Your Network
              </Button>
              <BorderBeam size={200} duration={4} className="from-transparent via-purple-500 to-transparent" />
            </div>
          </BlurReveal>
          <p className="text-sm text-white/40 mt-6">No credit card required. Free forever.</p>
        </div>
      </div>
    </section>
  )
}
