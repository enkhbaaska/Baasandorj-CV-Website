"use client"

import { useLanguage } from "@/lib/language-context"
import { RenderTextWithLinks } from "@/lib/render-text-with-links"


interface ExperienceItem {
  roleKey: string
  companyKey: string
  taglineKey?: string
  locationKey: string
  dateKey: string
  descKeys: string[]
  // Omit when the company field itself carries its links as markdown
  url?: string
}

const experiences: ExperienceItem[] = [
  {
    roleKey: "experience.un.role",
    companyKey: "experience.un.company",
    locationKey: "experience.un.location",
    dateKey: "experience.un.date",
    descKeys: ["experience.un.desc1", "experience.un.desc2", "experience.un.desc3"],
    url: "https://unccdcop17.org/?lang=en",
  },
  {
    roleKey: "experience.mbank.role",
    companyKey: "experience.mbank.company",
    taglineKey: "experience.mbank.tagline",
    locationKey: "experience.mbank.location",
    dateKey: "experience.mbank.date",
    descKeys: ["experience.mbank.desc1", "experience.mbank.desc2", "experience.mbank.desc3"],
    url: "https://m-bank.mn/",
  },
  {
    roleKey: "experience.ubmetro.role",
    companyKey: "experience.ubmetro.company",
    locationKey: "experience.ubmetro.location",
    dateKey: "experience.ubmetro.date",
    descKeys: ["experience.ubmetro.desc1", "experience.ubmetro.desc2", "experience.ubmetro.desc3"],
    url: "https://www.ubmetro.com/en",
  },
  {
    roleKey: "experience.tutoring.role",
    companyKey: "experience.tutoring.company",
    locationKey: "experience.tutoring.location",
    dateKey: "experience.tutoring.date",
    descKeys: ["experience.tutoring.desc1", "experience.tutoring.desc2", "experience.tutoring.desc3"],
  },
  {
    roleKey: "experience.organ.role",
    companyKey: "experience.organ.company",
    locationKey: "experience.organ.location",
    dateKey: "experience.organ.date",
    descKeys: ["experience.organ.desc1", "experience.organ.desc2"],
    url: "https://dioceseofleedsmusic.org.uk/choral-and-organ-scholarships/",
  },
]

export function Experience() {
  const { t } = useLanguage()

  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="font-serif text-lg font-bold text-foreground mb-1">
        {t("experience.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary mb-4" />

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 mb-1">
              <div>
                <span className="font-semibold text-sm text-foreground">{t(exp.roleKey)}</span>
                {" · "}
                <span className="text-sm text-primary font-medium">
                  {exp.url ? (
                    <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {t(exp.companyKey)}
                    </a>
                  ) : (
                    <RenderTextWithLinks text={t(exp.companyKey)} />
                  )}
                </span>
                {exp.taglineKey && (
                  <span className="text-xs text-muted-foreground italic">
                    {" — "}
                    {t(exp.taglineKey)}
                  </span>
                )}
              </div>
              <div className="text-xs text-muted-foreground shrink-0 sm:text-right">
                <span>{t(exp.dateKey)}</span>
                <span className="mx-1">·</span>
                <span>{t(exp.locationKey)}</span>
              </div>
            </div>
            <ul className="space-y-0.5">
              {exp.descKeys.map((descKey, i) => (
                <li key={i} className="text-xs text-muted-foreground flex gap-2">
                  <span className="text-primary shrink-0">•</span>
                  <RenderTextWithLinks text={t(descKey)} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
