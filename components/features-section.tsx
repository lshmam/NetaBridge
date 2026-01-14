"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Search, Users, Check, ChevronDown } from "lucide-react"
import { BlurReveal } from "@/components/BlurReveal"
import { Globe } from "@/components/ui/globe"
import Glow from "@/components/ui/glow"

const people = [
  { name: "Steve", initials: "ST", location: "Toronto, ON", role: "Construction Company Owner", relSummary: "2 Deals ongoing", company: "BuildCo Inc" },
  { name: "Michael Chang", initials: "MC", location: "Vancouver, BC", role: "Steel Supplier", relSummary: "5 Deals completed", company: "Pacific Steel" },
  { name: "Sarah Miller", initials: "SM", location: "Montreal, QC", role: "Logistics Partner", relSummary: "1 Deal ongoing", company: "Swift Logistics" },
  { name: "David Chen", initials: "DC", location: "New York, NY", role: "Equipment Buyer", relSummary: "New Contact", company: "Global Equipment" },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-8 md:py-12 px-4 md:px-16 lg:px-32 xl:px-48 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Glow variant="center" />
      </div>

      <div className="relative z-10 bg-transparent rounded-[2rem] md:rounded-[3rem] py-12 md:py-24 px-4 md:px-12">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-left mb-12 md:mb-16 w-full max-w-full">
            <BlurReveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-left text-white break-words">2. Get connected to the right people</h2>
            </BlurReveal>
            <BlurReveal delay={0.2}>
              <p className="text-lg text-white/60 max-w-2xl text-pretty text-left">
                Our AI evaluates search results instantly to show you exactly who to approach
              </p>
            </BlurReveal>
          </div>

          {/* Toggle Buttons */}
          {/* <div className="flex items-center justify-center gap-3 mb-12">
            <Button variant="outline" className="rounded-full bg-transparent">
              Smart Search
            </Button>
            <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90">
              Relationship Intelligence
            </Button>
          </div> */}

          <div className="bg-white/5 border border-white/10 rounded-2xl shadow-lg overflow-hidden mb-16 backdrop-blur-sm">
            {/* Filter Bar */}
            <div className="flex items-center gap-2 px-4 md:px-6 py-4 border-b border-white/10 bg-white/5 overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-200 text-sm whitespace-nowrap border border-amber-500/30 flex-shrink-0">
                <span>Location</span>
                <span className="font-medium">is any of</span>
                <span className="bg-amber-500/30 px-2 py-0.5 rounded-full text-xs">3 Places</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/70 text-sm whitespace-nowrap border border-white/10 flex-shrink-0">
                <span>X relationship</span>
                <span className="font-medium">is</span>
                <span>follows you</span>
              </div>
              <ChevronDown className="h-4 w-4 text-white/40 shrink-0" />
            </div>

            {/* Table Header - Hidden on Mobile */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/10 text-sm text-white/40">
              <div className="col-span-1"></div>
              <div className="col-span-3">Name</div>
              <div className="col-span-2">Company</div>
              <div className="col-span-3">Role</div>
              <div className="col-span-3">Relationship</div>
            </div>

            {/* Table Rows */}
            {people.map((person, index) => (
              <div
                key={person.name}
                className={`group flex flex-col md:grid md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:items-center hover:bg-white/5 transition-colors ${index !== people.length - 1 ? "border-b border-white/10" : ""
                  }`}
              >
                {/* Mobile: Top Row with Avatar, Name, Relationship */}
                <div className="flex items-center justify-between md:contents">
                  <div className="flex items-center gap-3 md:col-span-4 lg:col-span-4">
                    <div className="md:hidden">
                      <input type="checkbox" className="rounded border-white/20 bg-transparent" />
                    </div>
                    <div className="hidden md:block md:col-span-1">
                      <input type="checkbox" className="rounded border-white/20 bg-transparent" />
                    </div>

                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-white/10 text-white/80 text-sm">{person.initials}</AvatarFallback>
                      </Avatar>
                      <div className="block md:hidden">
                        <span className="font-medium block text-white">{person.name}</span>
                        <span className="text-xs text-white/60">{person.location}</span>
                      </div>
                      <span className="font-medium hidden md:block text-white">{person.name}</span>
                    </div>
                  </div>

                  {/* Mobile: Relationship (Right aligned on top row? maybe simple indicator) */}
                  {/* Hidden on mobile, shown in name block above */}
                </div>

                {/* Desktop: Company Column */}
                <div className="hidden md:block md:col-span-2">
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-white/60">{person.company}</span>
                  </div>
                </div>

                {/* Position and Experience - Mobile: Stacked below */}
                <div className="md:col-span-3 pl-[3.25rem] md:pl-0">
                  <p className="font-medium text-sm md:text-base text-white/80">{person.role}</p>
                  <p className="text-sm text-white/40">{person.location}</p>
                </div>

                <div className="md:col-span-3 pl-[3.25rem] md:pl-0 flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-white/60">{person.relSummary}</span>
                </div>
              </div>
            ))}

            {/* AI Evaluation Tooltip */}
            {/* <div className="relative mx-6 mb-6 mt-2">
              <div className="absolute right-0 bottom-0 bg-amber-50 border border-amber-200 rounded-xl p-4 max-w-md shadow-lg">
                <p className="text-sm text-amber-900">
                  Working at <span className="font-semibold text-amber-700">Rivian</span> and his PhD title is '
                  <span className="font-semibold text-blue-600">Multimodal Interaction Inside A Vehicle</span> Using Gaze,
                  Finger Pointing and Speech', which is related to electric vehicles.
                </p>
                <p className="text-xs text-amber-600 mt-2 text-right uppercase tracking-wide">Evaluated by AI</p>
              </div>
            </div> */}
          </div>


          {/* Feature Cards */}
          {/* <div className="grid gap-8 md:grid-cols-3 mt-24">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Search className="h-4 w-4 text-emerald-600" />
                </div>
                <h3 className="font-semibold">Search Your Entire Network at Once</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Find the right people across all your contacts in a single search. Easily include additional lists – like
                conference attendees, portfolio companies, or industry contacts – to expand your search scope.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center">
                  <span className="text-amber-600 font-bold text-sm">!!</span>
                </div>
                <h3 className="font-semibold">Understands What You Actually Mean</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                The search grasps the intent behind your words, not just exact phrases. Ask for 'someone who understands
                fintech regulation' and it'll find regulatory experts, compliance specialists, and financial services
                lawyers.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600" />
                </div>
                <h3 className="font-semibold">Sees the Complete Picture</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Considers each person's entire professional background against what you're looking for. This reveals
                meaningful connections that simple word-matching would miss entirely.
              </p>
            </div>
          </div> */}
        </div>
        <Globe className="top-20 opacity-40" />
        <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
      </div >
    </section >
  )
}
