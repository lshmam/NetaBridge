"use client"

import { Mail, Calendar, MessageCircle, Book, CalendarDays, Brain } from "lucide-react"
import { BlurReveal } from "@/components/BlurReveal"
import { BentoGrid } from "@/components/bento-grid"
import { Button } from "@/components/ui/button"
import { Ripple } from "@/components/ui/ripple"
import Glow from "@/components/ui/glow"
import Image from "next/image"

export function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-8 md:py-12 px-4 md:px-16 lg:px-32 xl:px-48 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Glow variant="center" />
      </div>

      <div className="relative z-10 bg-transparent py-12 md:py-24 px-4 md:px-12">

        {/* Bring Your Network Data Section */}
        <div className="mx-auto max-w-6xl mb-20 md:mb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <div>
              <BlurReveal delay={0.1}>
                <div className="inline-flex text-left items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm mb-6 border border-purple-500/20">
                  <Brain className="w-4 h-4" />
                  <span>Network Intelligence</span>
                </div>
              </BlurReveal>
              <BlurReveal delay={0.2}>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                  1. Consolidate your network data
                </h2>
              </BlurReveal>
              <BlurReveal delay={0.3}>
                <p className="text-lg text-white/60 mb-8 leading-relaxed">
                  Advanced identity resolution automatically merges contacts across email, LinkedIn, X, and more. Our API becomes the intelligence layer between your tools – no complex data science required.
                </p>
              </BlurReveal>
              <BlurReveal delay={0.4}>
                <div className="flex items-center gap-4">
                  <Button className="rounded-full bg-white text-black hover:bg-white/90 gap-2">
                    <Book className="w-4 h-4" />
                    API Docs
                  </Button>
                  <Button variant="outline" className="rounded-full gap-2 border-white/20 text-white hover:bg-white/10">
                    <CalendarDays className="w-4 h-4" />
                    Book a Call
                  </Button>
                </div>
              </BlurReveal>
            </div>

            {/* Right Side - Orbital Integration Icons with Ripple */}
            <div className="flex justify-center lg:justify-end">
              <BlurReveal delay={0.3}>
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Ripple Animation Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Ripple mainCircleSize={150} numCircles={4} />
                  </div>

                  {/* Center Icon - HubSpot */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center p-2">
                      <Image
                        src="/app-icons/hubspot.png"
                        alt="HubSpot"
                        width={40}
                        height={40}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Gmail - Top */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center p-2">
                      <Image
                        src="/app-icons/gmail.png"
                        alt="Gmail"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Apple - Top Right */}
                  <div className="absolute top-12 right-8 z-10">
                    <div className="w-11 h-11 rounded-full bg-white shadow-lg border flex items-center justify-center p-2">
                      <Image
                        src="/app-icons/apple.png"
                        alt="Apple"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* LinkedIn - Left */}
                  <div className="absolute top-1/3 left-4 z-10">
                    <div className="w-12 h-12 rounded-full bg-white shadow-lg border flex items-center justify-center p-2">
                      <Image
                        src="/app-icons/linkedin.png"
                        alt="LinkedIn"
                        width={28}
                        height={28}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Instagram - Right */}
                  <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10">
                    <div className="w-11 h-11 rounded-full bg-white shadow-lg border flex items-center justify-center p-2">
                      <Image
                        src="/app-icons/instagram (1).png"
                        alt="Instagram"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Twitter/X - Bottom Left */}
                  <div className="absolute bottom-1/3 left-8 z-10">
                    <div className="w-11 h-11 rounded-full bg-white shadow-lg border flex items-center justify-center p-2">
                      <Image
                        src="/app-icons/twitter.png"
                        alt="X"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* WhatsApp - Bottom */}
                  <div className="absolute bottom-12 left-1/3 z-10">
                    <div className="w-11 h-11 rounded-full bg-white shadow-lg border flex items-center justify-center p-2">
                      <Image
                        src="/app-icons/whatsapp.png"
                        alt="WhatsApp"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </BlurReveal>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
