"use client"

import { BlurReveal } from "@/components/BlurReveal"
import { ParticlesBackground } from "@/components/ui/particles-background"
import { WaitlistInput } from "@/components/waitlist-input"

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
              Get Early Access
            </h2>
          </BlurReveal>
          <BlurReveal delay={0.2}>
            <p className="text-lg text-white/60 mb-10 text-pretty leading-relaxed">
              Backed by decades of network science research from Harvard, Stanford, and MIT. Secure your spot on the waitlist today.
            </p>
          </BlurReveal>
          <BlurReveal delay={0.3}>
            <WaitlistInput />
          </BlurReveal>
          <p className="text-sm text-white/40 mt-6">No credit card required. Free forever.</p>
        </div>
      </div>
    </section>
  )
}
