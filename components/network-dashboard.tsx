"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { TrendingUp, ArrowUp, ArrowDown, Building2, Users, Clock } from "lucide-react"
import { ParticlesBackground } from "@/components/particles-background"

const leaderboardData = [
    {
        rank: 1,
        name: "Jeffrey Huang",
        company: "TechInvest Partners",
        score: 1450,
        change: "+5.0%",
        deals: "+118.0",
        isPositive: true
    },
    {
        rank: 2,
        name: "Rachel Chen",
        company: "TechWave Ltd.",
        score: 1310,
        change: "+1.9%",
        deals: "+188.0",
        isPositive: true
    },
    {
        rank: 3,
        name: "Hannah Moore",
        company: "MooreWare Solutions",
        score: 1285,
        change: "+4.7%",
        deals: "+118.0",
        isPositive: true
    },
    {
        rank: 4,
        name: "David Li",
        company: "GreenEnergy Solutions",
        score: 1220,
        change: "+1.7%",
        deals: "+123.0",
        isPositive: true
    },
    {
        rank: 5,
        name: "Jennifer Wong",
        company: "LegalTech Innovations",
        score: 1180,
        change: "+1.6%",
        deals: "+188.0",
        isPositive: true
    },
    {
        rank: 6,
        name: "Alex Zhang",
        company: "VentureHub",
        score: 1155,
        change: "+7.4%",
        deals: "+118.0",
        isPositive: true
    },
]

const activityStats = [
    { label: "New Deals", value: "3", change: "+4.5%", subtext: "12 New Requests +32%" },
    { label: "Investors Introduced", value: "2", change: null, subtext: "5 Supplier Matches +3.8%" },
]

const recentActivity = [
    { text: "Bluelight Energy is seeking $250k in renewable", trend: "up" },
    { text: "Horizon Logistica Ranking Up 2 Spots", trend: "up" },
    { text: "Top Connector Ranking Up 1 spot", trend: "up" },
    { text: "DataSphere Inc. $500k in motion", trend: "down" },
]

export function NetworkDashboard() {
    return (
        <section className="py-8 md:py-12 px-8 md:px-16 lg:px-32 xl:px-48">
            <div className="relative rounded-3xl md:rounded-[3rem] overflow-hidden py-16 md:py-24">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1526] to-[#0a0f1a]">
                    <ParticlesBackground />
                </div>

                <div className="relative z-10 px-8 md:px-16 lg:px-32 xl:px-48">
                    <div className="mx-auto max-w-7xl">
                        {/* Header */}
                        <div className="text-center mb-16">
                            <Badge variant="outline" className="mb-4 border-white/20 text-white/80 bg-white/5">
                                Network Intelligence
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                                Track Network Performance like a Stock Market
                            </h2>
                            <p className="text-lg text-white/70 max-w-2xl mx-auto">
                                See the most connected, deal-closing, and trusted networks. Raise your rank to create more opportunities.
                            </p>
                        </div>

                        <div className="grid gap-6 lg:grid-cols-12">
                            {/* Left Column - Leaderboard */}
                            <div className="lg:col-span-5">
                                <Card className="bg-black/40 border-white/10 backdrop-blur-xl">
                                    <CardContent className="p-6">
                                        <div className="flex items-center justify-between mb-6">
                                            <h3 className="text-xl font-semibold text-white">Network Leaderboard</h3>
                                            <div className="flex items-center gap-2 text-emerald-400 text-2xl font-bold">
                                                1450
                                                <TrendingUp className="h-5 w-5" />
                                            </div>
                                        </div>

                                        {/* Tabs */}
                                        <div className="flex gap-2 mb-6 border-b border-white/10">
                                            <button className="px-4 py-2 text-sm text-white border-b-2 border-white">
                                                Top Networks
                                            </button>
                                            <button className="px-4 py-2 text-sm text-white/50 hover:text-white/70">
                                                Most Deals Closed
                                            </button>
                                            <button className="px-4 py-2 text-sm text-white/50 hover:text-white/70">
                                                Best Introducers
                                            </button>
                                        </div>

                                        {/* Leaderboard List */}
                                        <div className="space-y-3">
                                            {leaderboardData.map((user) => (
                                                <div
                                                    key={user.rank}
                                                    className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${user.rank === 1
                                                        ? "bg-emerald-500/10 border border-emerald-500/20"
                                                        : "bg-white/5 hover:bg-white/10"
                                                        }`}
                                                >
                                                    <span className="text-lg font-bold text-white/40 w-6">{user.rank}</span>
                                                    <Avatar className="h-10 w-10">
                                                        <AvatarFallback className="bg-white/10 text-white text-xs">
                                                            {user.name
                                                                .split(" ")
                                                                .map((n) => n[0])
                                                                .join("")}
                                                        </AvatarFallback>
                                                    </Avatar>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-medium text-white text-sm truncate">{user.name}</p>
                                                        <div className="flex items-center gap-1 text-xs text-white/60">
                                                            <Building2 className="h-3 w-3" />
                                                            <span className="truncate">{user.company}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-white text-base">{user.score}</p>
                                                        <div className="flex items-center gap-1 text-xs">
                                                            <span className="text-emerald-400">{user.change}</span>
                                                            <span className="text-white/40">{user.deals}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Right Column - Activity & Stats */}
                            <div className="lg:col-span-7 space-y-6">
                                {/* Top User Card */}
                                <Card className="bg-black/40 border-white/10 backdrop-blur-xl">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center gap-3">
                                                <Avatar className="h-12 w-12">
                                                    <AvatarFallback className="bg-white/10 text-white">JH</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                                        Jeffrey Huang
                                                        <span className="text-emerald-400 text-sm flex items-center gap-1">
                                                            <ArrowUp className="h-4 w-4" />
                                                            5.0%
                                                        </span>
                                                        <span className="text-white/60 text-sm">5.0%</span>
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-sm text-white/60">
                                                        <Building2 className="h-3 w-3" />
                                                        <span>TechInvest Partners</span>
                                                        <Clock className="h-3 w-3 ml-2" />
                                                        <span>10 hours ago</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                                                Verified Connector
                                            </Badge>
                                        </div>

                                        {/* Mini Chart Placeholder */}
                                        <div className="h-32 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-lg mb-4 flex items-end p-4">
                                            <div className="w-full h-full relative">
                                                {/* Simple line chart visualization */}
                                                <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                                                    <path
                                                        d="M 0,80 L 50,70 L 100,60 L 150,50 L 200,40 L 250,30 L 300,20"
                                                        fill="none"
                                                        stroke="rgb(52, 211, 153)"
                                                        strokeWidth="2"
                                                        opacity="0.6"
                                                    />
                                                    <path
                                                        d="M 0,80 L 50,70 L 100,60 L 150,50 L 200,40 L 250,30 L 300,20 L 300,100 L 0,100 Z"
                                                        fill="url(#gradient)"
                                                        opacity="0.2"
                                                    />
                                                    <defs>
                                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                                            <stop offset="0%" stopColor="rgb(52, 211, 153)" stopOpacity="0.4" />
                                                            <stop offset="100%" stopColor="rgb(52, 211, 153)" stopOpacity="0" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {activityStats.map((stat, idx) => (
                                                <div key={idx} className="bg-white/5 rounded-lg p-4">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <span className="text-3xl font-bold text-white">{stat.value}</span>
                                                        {stat.change && (
                                                            <span className="text-emerald-400 text-sm flex items-center gap-1">
                                                                <ArrowUp className="h-3 w-3" />
                                                                {stat.change}
                                                            </span>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-white/60 mb-1">{stat.label}</p>
                                                    <p className="text-xs text-white/40">{stat.subtext}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Recent Activity */}
                                <Card className="bg-black/40 border-white/10 backdrop-blur-xl">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                                        <div className="space-y-3">
                                            {recentActivity.map((activity, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                                    <div className={`mt-1 ${activity.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                                                        {activity.trend === 'up' ? (
                                                            <ArrowUp className="h-4 w-4" />
                                                        ) : (
                                                            <ArrowDown className="h-4 w-4" />
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-white/80 flex-1">{activity.text}</p>
                                                    <span className={`text-xs px-2 py-1 rounded ${activity.trend === 'up' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                                                        }`}>
                                                        {activity.trend === 'up' ? '+1%' : '-26%'}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
