"use client"

import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-4 mt-8 print:hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <p className="font-serif text-sm font-semibold">Baasandorj Enkhjargal</p>
        <p className="text-primary-foreground/60 text-xs">
          © {currentYear} {t("footer.rights")}
        </p>
      </div>
    </footer>
  )
}
