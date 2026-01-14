"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
    Handshake,
    MessageSquare,
    FileText,
    TrendingUp,
    CheckCircle2,
    Clock,
    DollarSign,
    Users,
    ArrowRight,
    BarChart3
} from "lucide-react"
import { BlurReveal } from "@/components/BlurReveal"
import Glow from "@/components/ui/glow"

const deals = [
    {
        id: 1,
        title: "Steel Supply Contract",
        company: "Pacific Steel Co.",
        value: "$125,000",
        stage: "Negotiation",
        progress: 65,
        lastActivity: "2 hours ago",
        contact: "Michael Chang"
    },
    {
        id: 2,
        title: "Logistics Partnership",
        company: "Swift Logistics",
        value: "$89,000",
        stage: "Proposal",
        progress: 40,
        lastActivity: "1 day ago",
        contact: "Sarah Miller"
    },
    {
        id: 3,
        title: "Equipment Purchase",
        company: "Global Equipment",
        value: "$210,000",
        stage: "Closing",
        progress: 90,
        lastActivity: "30 min ago",
        contact: "David Chen"
    }
]

const stages = [
    { name: "Lead", count: 12, color: "bg-slate-500" },
    { name: "Qualified", count: 8, color: "bg-blue-600" },
    { name: "Proposal", count: 5, color: "bg-amber-600" },
    { name: "Negotiation", count: 3, color: "bg-purple-600" },
    { name: "Closing", count: 2, color: "bg-emerald-600" }
]

const stats = [
    { label: "Active Deals", value: "24", icon: Handshake, trend: "+12%" },
    { label: "Total Pipeline", value: "$1.2M", icon: DollarSign, trend: "+8%" },
    { label: "Avg. Deal Size", value: "$48K", icon: BarChart3, trend: "+5%" },
    { label: "Win Rate", value: "68%", icon: TrendingUp, trend: "+3%" }
]

export function DealManagement() {
    const [selectedDeal, setSelectedDeal] = useState(deals[0])

    return (
        <section className="relative py-16 md:py-24 px-4 md:px-16 lg:px-32 xl:px-48 overflow-hidden">


            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-left mb-16">
                    <BlurReveal delay={0.1}>
                        <div className="inline-flex text-left items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm mb-6 border border-emerald-500/20">
                            <Handshake className="w-4 h-4" />
                            <span>Deal Management</span>
                        </div>
                    </BlurReveal>
                    <BlurReveal delay={0.2}>
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
                            3. Close deals faster
                        </h2>
                    </BlurReveal>
                    <BlurReveal delay={0.3}>
                        <p className="text-lg text-white/60 max-w-2xl">
                            Manage your entire sales pipeline in one place. Track negotiations,
                            send proposals, and close deals with confidence.
                        </p>
                    </BlurReveal>
                </div>

                {/* Stats Row */}
                <BlurReveal delay={0.4}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
                            >
                                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-4">
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-2xl md:text-3xl font-bold mb-1 text-white">{stat.value}</div>
                                <div className="text-sm text-white/60 mb-2">{stat.label}</div>
                                <div className="text-xs text-emerald-400 font-medium">{stat.trend}</div>
                            </motion.div>
                        ))}
                    </div>
                </BlurReveal>

                {/* Main CRM Interface */}
                <BlurReveal delay={0.5}>
                    <div className="bg-white/5 border border-white/10 rounded-3xl shadow-lg overflow-hidden backdrop-blur-sm">
                        {/* Pipeline Stages */}
                        <div className="border-b border-white/10 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <BarChart3 className="w-5 h-5 text-white/60" />
                                <span className="font-medium text-white">Pipeline Overview</span>
                            </div>
                            <div className="flex gap-2">
                                {stages.map((stage, index) => (
                                    <div key={stage.name} className="flex-1">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs text-white/60 hidden md:inline">{stage.name}</span>
                                            <span className="text-xs font-medium text-white">{stage.count}</span>
                                        </div>
                                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${(stage.count / 12) * 100}%` }}
                                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                                viewport={{ once: true }}
                                                className={`h-full rounded-full ${stage.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Deals Grid */}
                        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
                            {/* Deal List */}
                            <div className="md:col-span-2 p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="font-semibold text-lg text-white">Active Deals</h3>
                                    <button className="text-sm text-blue-400 hover:underline flex items-center gap-1">
                                        View all <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    {deals.map((deal) => (
                                        <motion.div
                                            key={deal.id}
                                            onClick={() => setSelectedDeal(deal)}
                                            whileHover={{ scale: 1.01 }}
                                            className={`p-4 rounded-xl border cursor-pointer transition-colors ${selectedDeal.id === deal.id
                                                ? "border-blue-500 bg-blue-500/10"
                                                : "border-white/5 hover:bg-white/5"
                                                }`}
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div>
                                                    <h4 className="font-medium mb-1 text-white">{deal.title}</h4>
                                                    <p className="text-sm text-white/60">{deal.company}</p>
                                                </div>
                                                <span className="text-lg font-bold text-emerald-400">{deal.value}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-4">
                                                    <span className={`text-xs px-2 py-1 rounded-full ${deal.stage === "Closing"
                                                        ? "bg-emerald-500/20 text-emerald-300"
                                                        : deal.stage === "Negotiation"
                                                            ? "bg-purple-500/20 text-purple-300"
                                                            : "bg-amber-500/20 text-amber-300"
                                                        }`}>
                                                        {deal.stage}
                                                    </span>
                                                    <span className="text-xs text-white/40 flex items-center gap-1">
                                                        <Clock className="w-3 h-3" /> {deal.lastActivity}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-24 h-2 rounded-full bg-white/10 overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${deal.progress}%` }}
                                                            className="h-full rounded-full bg-blue-500"
                                                        />
                                                    </div>
                                                    <span className="text-xs text-white/40">{deal.progress}%</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Deal Details Sidebar */}
                            <div className="p-6 bg-white/5">
                                <h3 className="font-semibold mb-6 text-white">Deal Actions</h3>
                                <div className="space-y-3">
                                    <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 transition-colors text-left group">
                                        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                                            <MessageSquare className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm text-white">Send Message</div>
                                            <div className="text-xs text-white/60">Contact {selectedDeal.contact}</div>
                                        </div>
                                    </button>
                                    <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 transition-colors text-left group">
                                        <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center group-hover:bg-amber-500/30 transition-colors">
                                            <FileText className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm text-white">Create Proposal</div>
                                            <div className="text-xs text-white/60">Generate custom offer</div>
                                        </div>
                                    </button>
                                    <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-transparent border border-white/10 hover:bg-white/5 transition-colors text-left group">
                                        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                                            <Users className="w-5 h-5 text-purple-400" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm text-white">Schedule Meeting</div>
                                            <div className="text-xs text-white/60">Set up a call</div>
                                        </div>
                                    </button>
                                    <button className="w-full flex items-center gap-3 p-3 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors text-left shadow-lg shadow-emerald-900/20">
                                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">Close Deal</div>
                                            <div className="text-xs text-white/80">Mark as won</div>
                                        </div>
                                    </button>
                                </div>

                                {/* Mini Chart */}
                                <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="text-sm font-medium mb-4 text-white">Deal Progress</div>
                                    <div className="flex items-end justify-between h-24 gap-2">
                                        {[40, 55, 45, 70, 65, 80, selectedDeal.progress].map((height, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${height}%` }}
                                                transition={{ delay: i * 0.05 }}
                                                viewport={{ once: true }}
                                                className={`flex-1 rounded-t ${i === 6 ? "bg-emerald-500" : "bg-white/10"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-2 text-xs text-white/40">
                                        <span>Mon</span>
                                        <span>Today</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlurReveal>
            </div>
        </section>
    )
}
