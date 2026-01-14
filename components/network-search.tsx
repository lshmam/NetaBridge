"use client"

import { useState, useEffect } from "react"
import { Search, ArrowRight, Users, Building2, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const typingPhrases = [
    "Do I have any friends of friends in Istanbul?",
    "Who in my network works in renewable energy?",
    "Find suppliers of cotton t-shirts in Vietnam",
    "Connect me with investors in fintech",
]

export function NetworkSearch() {
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
    const [displayedText, setDisplayedText] = useState("")
    const [isTyping, setIsTyping] = useState(true)

    useEffect(() => {
        const currentPhrase = typingPhrases[currentPhraseIndex]

        if (isTyping) {
            if (displayedText.length < currentPhrase.length) {
                const timeout = setTimeout(() => {
                    setDisplayedText(currentPhrase.slice(0, displayedText.length + 1))
                }, 50)
                return () => clearTimeout(timeout)
            } else {
                const timeout = setTimeout(() => {
                    setIsTyping(false)
                }, 2000)
                return () => clearTimeout(timeout)
            }
        } else {
            const timeout = setTimeout(() => {
                setDisplayedText("")
                setCurrentPhraseIndex((prev) => (prev + 1) % typingPhrases.length)
                setIsTyping(true)
            }, 500)
            return () => clearTimeout(timeout)
        }
    }, [displayedText, isTyping, currentPhraseIndex])

    return (
        <div className="w-full max-w-4xl mx-auto py-12 px-4">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Ask your network anything
                </h2>
                <p className="text-xl text-muted-foreground">
                    Find the right people, leverage your connections.
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative">
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700 p-6">
                    {/* Search Input */}
                    <div className="flex items-center gap-4 mb-4">
                        <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
                        <div className="flex-1 min-h-[32px] flex items-center">
                            <span className="text-lg text-gray-900 dark:text-gray-100">
                                {displayedText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-0.5 h-6 bg-blue-500 ml-1"
                                />
                            </span>
                        </div>
                        <button className="flex-shrink-0 w-10 h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-110 transition-transform">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    {/* Filter Chips */}
                    <div className="flex flex-wrap gap-2">
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                            <Users className="w-4 h-4" />
                            <span className="font-medium">People</span>
                        </button>
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">Organisations</span>
                        </button>
                        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                            <TrendingUp className="w-4 h-4" />
                            <span className="font-medium">Investors</span>
                        </button>
                    </div>
                </div>

                {/* Decorative cursor line below */}
                <div className="mt-8 flex justify-center">
                    <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-12 bg-orange-500 rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}
