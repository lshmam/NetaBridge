"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

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
    <header className="absolute top-8 md:top-14 left-0 right-0 z-50 w-full px-4 md:px-16 lg:px-32 xl:px-48">
      <div className="flex items-center justify-between">
        {/* Left Side - Logo (standalone) */}
        <Link href="/" className="flex items-center gap-2 transition-colors duration-300">
          <span
            className={`text-xl md:text-3xl font-semibold transition-colors duration-300 ${isDark ? 'text-foreground' : 'text-white'}`}
            style={{ fontFamily: 'Britannica, serif' }}
          >
            NetaBridge
          </span>
        </Link>

        {/* Desktop - Auth Buttons */}
        {/* <div className="hidden md:flex rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <div className="flex h-12 items-center gap-3 px-6">
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10">
              Log In
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full">
              Sign Up
            </Button>
          </div>
        </div> */}

        {/* Mobile - Hamburger Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px] bg-[#0a0a0a] border-white/10 text-white">
            {/* <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer rounded-xl" asChild>
              <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent h-10 justify-center mb-2">
                Log In
              </Button>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-white/10 focus:text-white cursor-pointer rounded-xl" asChild>
              <Button className="w-full bg-white text-black hover:bg-white/90 h-10 justify-center">
                Sign Up
              </Button>
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
