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

export function NetworkSearchInput() {
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
        <div className="relative w-full max-w-3xl mx-auto">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 border-gray-200 dark:border-gray-700 p-6">
                {/* Search Input */}
                <div className="flex items-center gap-4 mb-4">
                    <Search className="w-5 h-5 md:w-6 md:h-6 text-gray-400 flex-shrink-0" />
                    <div className="flex-1 min-h-[32px] flex items-center overflow-hidden">
                        <span className="text-sm md:text-lg text-gray-900 dark:text-gray-100 whitespace-nowrap overflow-hidden text-ellipsis">
                            {displayedText}
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-0.5 h-4 md:h-6 bg-blue-500 ml-1 align-middle"
                            />
                        </span>
                    </div>
                    <button className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center hover:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 -mb-2 no-scrollbar">
                    <button className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors flex-shrink-0 text-xs md:text-sm">
                        <Users className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="font-medium">People</span>
                    </button>
                    <button className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0 text-xs md:text-sm">
                        <Building2 className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="font-medium">Organisations</span>
                    </button>
                    <button className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex-shrink-0 text-xs md:text-sm">
                        <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="font-medium">Investors</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
