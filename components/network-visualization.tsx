"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { TrendingUp } from "lucide-react"

const leaderboard = [
  { rank: 1, name: "Jeffrey Huang", company: "TechInvest Partners", score: 1450, change: "+5.0%" },
  { rank: 2, name: "Rachel Chen", company: "TechWave Ltd.", score: 1310, change: "+1.9%" },
  { rank: 3, name: "Hannah Moore", company: "MooreWare Solutions", score: 1285, change: "+4.7%" },
  { rank: 4, name: "David Li", company: "GreenEnergy Solutions", score: 1220, change: "+1.7%" },
]

export function NetworkVisualization() {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-background/20 text-background/80">
            Network Intelligence
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
            Track Network Performance like a Stock Market
          </h2>
          <p className="text-lg text-background/70 max-w-2xl mx-auto text-pretty">
            See the most connected, deal-closing, and trusted networks. Raise your rank to create more opportunities.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="bg-background/5 border-background/10">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold text-background">Network Leaderboard</h3>
                <Badge variant="outline" className="border-background/20 text-background/80">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  Live
                </Badge>
              </div>

              <div className="space-y-4">
                {leaderboard.map((user) => (
                  <div
                    key={user.rank}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/5 hover:bg-background/10 transition-colors"
                  >
                    <span className="text-2xl font-bold text-background/40 w-8">{user.rank}</span>
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/20 text-primary">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-background truncate">{user.name}</p>
                      <p className="text-sm text-background/60 truncate">{user.company}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-background text-lg">{user.score}</p>
                      <p className="text-sm text-emerald-400">{user.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background/5 border-background/10 overflow-hidden">
            <CardContent className="p-0 relative h-full min-h-[500px]">
              <img
                src="/images/cafbe32a-edef-40bc-9c33-52f33189d319.gif"
                alt="Network visualization"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-5xl font-bold text-background mb-3">Your Network</p>
                  <p className="text-background/70 text-lg">Visualized in real-time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
