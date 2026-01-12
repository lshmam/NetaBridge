"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Change to dark when scrolled past hero (approximately)
      setIsDark(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="absolute top-14 left-0 right-0 z-50 w-full px-8 md:px-16 lg:px-32 xl:px-48">
      <div className="flex items-center justify-between">
        {/* Left Side - Logo (standalone) */}
        <Link href="/" className="flex items-center gap-2 transition-colors duration-300">
          <span
            className={`text-3xl font-semibold transition-colors duration-300 ${isDark ? 'text-foreground' : 'text-white'}`}
            style={{ fontFamily: 'Britannica, serif' }}
          >
            NetaBridge
          </span>
        </Link>

        {/* Right Side - Auth Buttons (with pill background) */}
        <div className="rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <div className="flex h-12 items-center gap-3 px-6">
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10">
              Log In
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
