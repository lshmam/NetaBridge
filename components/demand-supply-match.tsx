"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Link2 } from "lucide-react"
import { useState, useEffect } from "react"

export function DemandSupplyMatch() {
    const [isMatched, setIsMatched] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMatched(true)
        }, 2000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="relative w-full max-w-5xl mx-auto py-12 px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
                {/* Demand Post Card */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-200 overflow-hidden">
                        {/* Header */}
                        <div className="bg-blue-500 text-white px-6 py-4">
                            <h3 className="text-xl font-semibold">Demand Post</h3>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div>
                                <p className="text-sm text-gray-600">Seeking:</p>
                                <p className="text-lg font-semibold text-gray-900">Cotton T-Shirts</p>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Quantity:</span>
                                    <span className="font-medium text-gray-900">20,000 pcs</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Target Price:</span>
                                    <span className="font-medium text-gray-900">$2.50 per unit</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Destination:</span>
                                    <span className="font-medium text-gray-900">USA</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Required By:</span>
                                    <span className="font-medium text-gray-900">Within 30 Days</span>
                                </div>
                            </div>

                            {/* Badges */}
                            <div className="flex gap-2 pt-2">
                                <div className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>Verified Company</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                                    <span>Trade History: 50+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Supply Post Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="relative"
                >
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden">
                        {/* Header */}
                        <div className="bg-emerald-500 text-white px-6 py-4">
                            <h3 className="text-xl font-semibold">Supply Post</h3>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-4">
                            <div>
                                <p className="text-sm text-gray-600">Offering:</p>
                                <p className="text-lg font-semibold text-gray-900">Cotton T-Shirts</p>
                            </div>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Available:</span>
                                    <span className="font-medium text-gray-900">50,000 pcs/month</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Lead Time:</span>
                                    <span className="font-medium text-gray-900">15-20 Days</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Certifications:</span>
                                    <span className="font-medium text-gray-900">ISO, BSCI</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Exported To:</span>
                                    <span className="font-medium text-gray-900">EU, Canada, Japan</span>
                                </div>
                            </div>

                            {/* Badges */}
                            <div className="flex gap-2 pt-2">
                                <div className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>Certified Supplier</span>
                                </div>
                                <div className="flex items-center gap-1 text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
                                    <CheckCircle2 className="w-3 h-3" />
                                    <span>Proven Track Record</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Connection Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isMatched ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-full p-4 shadow-xl border-4 border-gray-200"
                >
                    <Link2 className="w-8 h-8 text-gray-700" />
                </motion.div>
            </div>

            {/* Connecting Lines */}
            <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 pointer-events-none hidden md:block">
                <motion.line
                    x1="45%"
                    y1="50%"
                    x2="50%"
                    y2="50%"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={isMatched ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                />
                <motion.line
                    x1="50%"
                    y1="50%"
                    x2="55%"
                    y2="50%"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={isMatched ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                />
            </svg>

            {/* Match Result */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isMatched ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 2 }}
                className="text-center mt-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    Matched in <span className="text-blue-600">6 Hours!</span>
                </h2>
                <p className="text-lg text-gray-600">Fast, Verified Trade Connection</p>
            </motion.div>
        </div>
    )
}
