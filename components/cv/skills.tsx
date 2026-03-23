"use client"

import { useLanguage } from "@/lib/language-context"
import { RenderTextWithLinks } from "@/lib/render-text-with-links"

const skillCategories = [
  { titleKey: "skills.programming", listKey: "skills.programming.list" },
  { titleKey: "skills.web", listKey: "skills.web.list" },
  { titleKey: "skills.data", listKey: "skills.data.list" },
  { titleKey: "skills.databases", listKey: "skills.databases.list" },
  { titleKey: "skills.dev", listKey: "skills.dev.list" },
]

export function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="font-serif text-lg font-bold text-foreground mb-1">
        {t("skills.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary mb-4" />

      <div className="space-y-2">
        {skillCategories.map((cat, index) => {
          const skills = t(cat.listKey).split(", ")
          return (
            <div key={index} className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-xs font-semibold text-foreground shrink-0 w-40">
                {t(cat.titleKey)}:
              </span>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-xs bg-primary/8 text-primary border border-primary/15 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Volunteering */}
      <div className="mt-6">
        <h3 className="font-serif text-base font-bold text-foreground mb-1">
          {t("volunteering.title")}
        </h3>
        <div className="w-8 h-0.5 bg-primary/40 mb-3" />
        <ul className="space-y-1">
          <li className="text-xs text-muted-foreground flex gap-2">
            <span className="text-primary shrink-0">•</span>
            <RenderTextWithLinks text={t("volunteering.desc1")} />
          </li>
          <li className="text-xs text-muted-foreground flex gap-2">
            <span className="text-primary shrink-0">•</span>
            <RenderTextWithLinks text={t("volunteering.desc2")} />
          </li>
        </ul>
      </div>
    </section>
  )
}
