"use client"

import { useLanguage } from "@/lib/language-context"
import { Music, ArrowRight } from "lucide-react"
import Link from "next/link"

export function RecordingsLink() {
  const { t } = useLanguage()

  return (
    <section id="recordings" className="scroll-mt-16">
      <h2 className="font-serif text-lg font-bold text-foreground mb-1">
        {t("recordings.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary mb-4" />

      <Link
        href="/recordings"
        className="flex items-center justify-between gap-4 p-4 border border-primary/20 rounded-lg bg-primary/5 hover:bg-primary/10 hover:border-primary/40 transition-all group"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
            <Music className="h-4 w-4 text-primary" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">{t("recordings.title")}</p>
            <p className="text-xs text-muted-foreground">{t("recordings.desc")}</p>
          </div>
        </div>
        <ArrowRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
      </Link>
    </section>
  )
}
