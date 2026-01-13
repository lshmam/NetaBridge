"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Header() {
  const [isDark, setIsDark] = useState(false)
  const [open, setOpen] = useState(false)

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
        <div className="hidden md:flex rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <div className="flex h-12 items-center gap-3 px-6">
            <Button variant="ghost" size="sm" className="text-white hover:text-white hover:bg-white/10">
              Log In
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-white/90 rounded-full">
              Sign Up
            </Button>
          </div>
        </div>

        {/* Mobile - Hamburger Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/10">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              <Link
                href="#features"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#integrations"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={() => setOpen(false)}
              >
                Integrations
              </Link>
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t">
                <Button variant="outline" className="w-full">
                  Log In
                </Button>
                <Button className="w-full">
                  Sign Up
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
