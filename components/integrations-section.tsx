"use client"

import { Button } from "@/components/ui/button"
import { Search, FileCode, MoreVertical } from "lucide-react"

export function IntegrationsSection() {
  return (
    <section id="integrations" className="py-8 md:py-12 px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="bg-background rounded-3xl md:rounded-[3rem] py-16 md:py-24 px-8 md:px-12">
        {/* Network Data Section */}
        <div className="mx-auto max-w-6xl mb-32">
          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <div className="flex items-center gap-2 text-muted-foreground mb-6">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>+</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>+</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-balance">
                  Bring your network data anywhere
                </h2>
                <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
                  Advanced identity resolution automatically merges contacts across email, LinkedIn, X, and more. Our API
                  becomes the intelligence layer between your tools – no complex data science required.
                </p>
                <div className="flex gap-4">
                  <Button className="rounded-lg">
                    <FileCode className="h-4 w-4 mr-2" />
                    API Docs
                  </Button>
                  <Button variant="outline" className="rounded-lg bg-transparent">
                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    Book a Call
                  </Button>
                </div>
              </div>

              {/* Integration Icons Network */}
              <div className="relative h-80">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Center Icon */}
                  <div className="absolute w-14 h-14 rounded-full bg-card border-2 shadow-lg flex items-center justify-center z-10">
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>

                  {/* Left Side Icons */}
                  <div className="absolute left-0 top-1/4 w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center">
                    <span className="font-bold text-blue-600">G</span>
                  </div>
                  <div className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center">
                    <span className="font-bold text-blue-700">in</span>
                  </div>
                  <div className="absolute left-0 bottom-1/4 w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center">
                    <span className="font-bold">X</span>
                  </div>
                  <div className="absolute left-16 bottom-0 w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center">
                    <span className="text-green-500">📞</span>
                  </div>

                  {/* Right Side Icons */}
                  <div className="absolute right-0 top-1/4 w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center">
                    <span className="text-blue-500">💬</span>
                  </div>
                  <div className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center">
                    <span className="text-orange-500">📊</span>
                  </div>
                  <div className="absolute right-0 bottom-1/4 w-12 h-12 rounded-full bg-card border shadow-md flex items-center justify-center">
                    <span className="text-green-600">📋</span>
                  </div>

                  {/* Connection Lines - using SVG */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                    <line
                      x1="20%"
                      y1="25%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="15%"
                      y1="50%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="20%"
                      y1="75%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="30%"
                      y1="90%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="80%"
                      y1="25%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="85%"
                      y1="50%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                    <line
                      x1="80%"
                      y1="75%"
                      x2="50%"
                      y2="50%"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-border"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Section */}
        <div className="mx-auto max-w-6xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-300 bg-amber-50 text-amber-800 text-sm font-medium mb-12">
            <span>🔑</span>
            Unlock Your Network
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Sync Card */}
            <div>
              {/* Mini Preview */}
              <div className="bg-card border rounded-xl p-4 mb-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-green-600">$</span>
                    <span>INVESTMENT</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>2 hours ago</span>
                    <MoreVertical className="h-3 w-3" />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">
                    EQ
                  </div>
                  <div>
                    <p className="font-medium text-sm">EQT Ventures</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="text-amber-500">👆</span>
                      <span>invested in</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-3 text-xs text-muted-foreground">
                  <span>Organisation</span>
                  <span>Conn. Str.</span>
                  <span>Coinvestors</span>
                </div>
              </div>

              <p className="text-sm text-primary font-medium mb-2">Sync</p>
              <h3 className="text-2xl font-bold mb-3">Always Updated</h3>
              <p className="text-muted-foreground leading-relaxed">
                Never miss important updates. We track key changes across your entire network – new roles, relocations,
                announcements – and notify you proactively.
              </p>
            </div>

            {/* Search Card */}
            <div>
              {/* Mini Preview */}
              <div className="bg-card border rounded-xl p-4 mb-6 shadow-sm">
                <div className="flex items-center gap-3 px-3 py-2 border rounded-lg mb-3">
                  <Search className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Who can introduce me to someone</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">👤</span>
                  <Button variant="default" size="sm" className="rounded-full text-xs bg-blue-600 hover:bg-blue-700">
                    👥 People
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full text-xs bg-transparent">
                    🏢 Organisation
                  </Button>
                </div>
              </div>

              <p className="text-sm text-primary font-medium mb-2">Search</p>
              <h3 className="text-2xl font-bold mb-3">Effortlessly Searchable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ask naturally, get answers instantly. Search your entire network using plain language. No filters, no
                complexity – just accurate results.
              </p>
            </div>

            {/* Integrate Card */}
            <div>
              {/* Mini Preview - Code Block */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 mb-6 shadow-sm font-mono text-xs overflow-hidden">
                <div className="text-gray-400">
                  <span className="text-gray-500">1</span> <span className="text-cyan-400">curl</span> -X POST
                  https://api.neta...
                </div>
                <div className="text-gray-400">
                  <span className="text-gray-500">2</span> <span className="text-yellow-400">-H</span> "Authorization:
                  Bearer g...
                </div>
                <div className="text-gray-400">
                  <span className="text-gray-500">3</span> <span className="text-yellow-400">-H</span> "Content-Type:
                  applicati...
                </div>
                <div className="text-gray-400">
                  <span className="text-gray-500">4</span> <span className="text-yellow-400">-H</span> "Accept:
                  application/json...
                </div>
                <div className="text-gray-400">
                  <span className="text-gray-500">5</span> <span className="text-yellow-400">-d</span> '{"{"}
                  "usr_8f2e1d9c4b7a6e3f"...
                </div>
              </div>

              <p className="text-sm text-primary font-medium mb-2">Integrate</p>
              <h3 className="text-2xl font-bold mb-3">Seamlessly Portable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our API-first design means every data point and action within the app is accessible via our API, allowing
                you to seamlessly <span className="text-primary underline">integrate</span> with any external tool of your
                choice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
