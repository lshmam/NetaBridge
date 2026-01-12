"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { ParticlesBackground } from "@/components/particles-background"
import { BlurReveal } from "@/components/BlurReveal"

export function HeroSection() {

  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden px-8 pt-8 pb-8 md:px-16 md:pt-32 md:pb-12">
      {/* Background with gradient and particles */}
      <div className="absolute inset-8 md:inset-12 bg-gradient-to-br from-[#0a0f1a] via-[#0d1526] to-[#0a0f1a] rounded-3xl md:rounded-[3rem] overflow-hidden">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 w-full px-8 md:px-16 lg:px-32 xl:px-48 py-12">
        <div className="mx-auto max-w-4xl text-center">
          <BlurReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white mb-6 whitespace-nowrap">
              Tap into your network potential
            </h1>
          </BlurReveal>

          <BlurReveal delay={0.4}>
            <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Search for connections to unlock business opportunities. Track your network performance and compete on the leaderboard to close more deals.
            </p>
          </BlurReveal>

          {/* Email Waitlist Signup */}
          <BlurReveal delay={0.6}>
            <div className="mx-auto max-w-md">
              <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-2xl">
                <div className="flex items-center gap-3 px-4 py-3">
                  <Input
                    type="email"
                    placeholder="Enter Your Email"
                    className="border-0 bg-transparent p-0 focus-visible:ring-0 text-base text-white placeholder:text-white/40"
                  />
                  <Button size="icon" className="shrink-0 rounded-full bg-white text-black hover:bg-white/90">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <p className="text-sm text-white/50 mt-3">Join the waitlist for early access</p>
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  )
}
