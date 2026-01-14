"use client"

import { Sparkles } from "lucide-react"
import { BlurReveal } from "@/components/BlurReveal"
import Glow from "@/components/ui/glow"
import { NetworkSearchInput } from "@/components/network-search-input"
import { ParticlesBackground } from "@/components/ui/particles-background"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="py-2 px-2 md:py-4 md:px-4">
      <div className="relative min-h-[95vh] rounded-[2rem] md:rounded-[3rem] flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
        {/* Network Particles Background */}
        <ParticlesBackground id="tsparticles-hero" />

        {/* Subtle dot pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:40px_40px]" />

        {/* Glow effect with delayed entry */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          <Glow variant="above" />
        </motion.div>

        <div className="relative z-10 w-full max-w-4xl text-center px-4">
          {/* Badge */}
          <BlurReveal delay={0.1}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-8">
              <Sparkles className="w-4 h-4" />
              <span>Trusted supply & demand match platform</span>
            </div>
          </BlurReveal>

          {/* Main Headline */}
          <BlurReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
              Unlock your next deal here
            </h1>
          </BlurReveal>

          {/* Subtitle */}
          <BlurReveal delay={0.3}>
            <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
              The AI-powered supply chain network that turns connections into contracts
            </p>
          </BlurReveal>

          {/* Network Search Component */}
          <BlurReveal delay={0.4}>
            <NetworkSearchInput />
          </BlurReveal>
        </div>

        {/* Bottom fade to seamlessly blend with the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none z-20" />
      </div>
    </section>
  )
}
