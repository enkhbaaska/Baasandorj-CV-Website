"use client"

import { useLanguage } from "@/lib/language-context"
import { Globe, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const navItems = [
  { key: "nav.summary", href: "/#summary" },
  { key: "nav.experience", href: "/#experience" },
  { key: "nav.education", href: "/#education" },
  { key: "nav.skills", href: "/#skills" },
  { key: "nav.recordings", href: "/recordings" },
  { key: "nav.contact", href: "/#contact" },
]

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "mn" : "en")
  }

  return (
    <header className="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm text-primary-foreground shadow-lg print:hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Logo/Name */}
          <Link href="/" className="font-serif text-base font-semibold tracking-tight">
            B. Enkhjargal
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors rounded-md hover:bg-white/10"
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-foreground hover:bg-white/10 hover:text-primary-foreground gap-1.5 h-8 px-3"
            >
              <Globe className="h-3.5 w-3.5" />
              <span className="text-sm font-medium">{language === "en" ? "MN" : "EN"}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary-foreground hover:bg-white/10 h-8 w-8"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-3 border-t border-white/10">
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/10 rounded-md transition-colors"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
