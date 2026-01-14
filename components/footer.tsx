import Link from "next/link"
import { Network } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t py-8 md:py-12 px-4 md:px-16 lg:px-32 xl:px-48">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            {/* <Network className="h-5 w-5 text-primary" /> */}
            <span className="font-semibold text-xl" style={{ fontFamily: 'Britannica, serif' }}>NetaBridge</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">© 2026 NetaBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
