"use client"

import { useLanguage } from "@/lib/language-context"
import { RenderTextWithLinks } from "@/lib/render-text-with-links"

export function Summary() {
  const { t } = useLanguage()

  return (
    <section id="summary" className="scroll-mt-16">
      <h2 className="font-serif text-lg font-bold text-foreground mb-1 flex items-center gap-2">
        {t("summary.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary mb-3" />
      <p className="text-sm text-muted-foreground leading-relaxed">
        {t("summary.content")}
      </p>
    </section>
  )
}
