"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Target, Users, Handshake } from "lucide-react"
import { BlurReveal } from "@/components/BlurReveal"

const cards = [
    {
        icon: AlertTriangle,
        iconColor: "text-amber-500",
        bgColor: "bg-amber-50",
        title: "Missed Connections",
        description: "Your network has untapped deals hiding in plain sight. We surface them for you.",
        stat: "73%",
        statLabel: "of deals come from warm intros"
    },
    {
        icon: Target,
        iconColor: "text-red-500",
        bgColor: "bg-red-50",
        title: "Wrong Matches",
        description: "Stop wasting time on cold outreach. Find the right supplier or buyer instantly.",
        stat: "2.3%",
        statLabel: "cold email response rate"
    },
    {
        icon: Users,
        iconColor: "text-emerald-500",
        bgColor: "bg-emerald-50",
        title: "Instant Matches",
        description: "AI-powered matching connects you with verified suppliers and buyers in seconds.",
        stat: "10x",
        statLabel: "faster introductions"
    },
    {
        icon: Handshake,
        iconColor: "text-blue-500",
        bgColor: "bg-blue-50",
        title: "Trusted Network",
        description: "Every connection is vetted. Close deals with confidence knowing who you're working with.",
        stat: "92%",
        statLabel: "deal completion rate"
    },
]

export function NetworkDashboard() {
    return (
        <section className="py-8 md:py-12 px-4 md:px-16 lg:px-32 xl:px-48">
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <BlurReveal delay={0.1}>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                            Why NetaBridge?
                        </h2>
                    </BlurReveal>
                    <BlurReveal delay={0.2}>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            We turn your networking challenges into closed deals.
                        </p>
                    </BlurReveal>
                </div>

                {/* Mobile Carousel / Desktop Grid */}
                <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
                    {cards.map((card, idx) => (
                        <BlurReveal key={idx} delay={0.1 + idx * 0.1}>
                            <Card
                                className="flex-shrink-0 w-[280px] md:w-auto snap-center border-2 hover:shadow-lg transition-all duration-300"
                            >
                                <CardContent className="p-6">
                                    <div className={`w-12 h-12 rounded-xl ${card.bgColor} flex items-center justify-center mb-4`}>
                                        <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{card.description}</p>
                                    <div className="pt-4 border-t">
                                        <span className="text-2xl font-bold">{card.stat}</span>
                                        <p className="text-xs text-muted-foreground mt-1">{card.statLabel}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </BlurReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
