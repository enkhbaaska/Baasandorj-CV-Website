"use client"

import { useLanguage } from "@/lib/language-context"
import { RenderTextWithLinks } from "@/lib/render-text-with-links"

const educationItems = [
  {
    degreeKey: "education.york.degree",
    schoolKey: "education.york.school",
    dateKey: "education.york.date",
    descKeys: ["education.york.desc1", "education.york.desc2","education.york.desc3"],
    location: "York, UK",
    url:"https://www.york.ac.uk/study/undergraduate/courses/bsc-computer-science/#course-content",
    current: true,
  },
  {
    degreeKey: "education.ai.degree",
    schoolKey: "education.ai.school",
    dateKey: "education.ai.date",
    descKeys: ["education.ai.desc1"],
    locationKey: "education.ai.location",
    url: "https://www.ai-academy.asia/en",
  },
  {
    degreeKey: "education.fullstack.degree",
    schoolKey: "education.fullstack.school",
    dateKey: "education.fullstack.date",
    descKeys: ["education.fullstack.desc1", "education.fullstack.desc2"],
    location: "Online",
    url: "https://itcareerswitch.co.uk/",
  },
  {
    degreeKey: "education.leeds.degree",
    schoolKey: "education.leeds.school",
    dateKey: "education.leeds.date",
    descKeys: ["education.leeds.desc1", "education.leeds.desc2","education.leeds.desc3"],
    location: "Leeds, UK",
    url: "https://courses.leeds.ac.uk/3580/physics-bsc#content",
  },
  {
    degreeKey: "education.school.degree",
    schoolKey: "education.school.school",
    dateKey: "education.school.date",
    descKeys: ["education.school.desc1", "education.school.desc2"],
    locationKey: "education.school.location",
    url: "https://www.christs-hospital.org.uk/",
  },
]

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="scroll-mt-16">
      <h2 className="font-serif text-lg font-bold text-foreground mb-1">
        {t("education.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary mb-4" />

      <div className="space-y-4">
        {educationItems.map((edu, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 mb-1">
              <div>
                <div>
                  <span className="font-semibold text-sm text-foreground">
                    {t(edu.degreeKey)}
                  </span>
                  {" · "}
                  <span className="text-sm text-primary font-medium">
                    {edu.url ? (
                      <a href={edu.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {t(edu.schoolKey)}
                      </a>
                    ) : (
                      t(edu.schoolKey)
                    )}
                  </span>
                  {edu.current && (
                    <span className="ml-2 px-1.5 py-0.5 text-xs bg-primary/10 text-primary rounded font-medium">
                      Current
                    </span>
                  )}
                </div>             
              </div>
              <div className="text-xs text-muted-foreground shrink-0 sm:text-right">
                <span>{t(edu.dateKey)}</span>
                <span className="mx-1">·</span>
                <span>{edu.locationKey ? t(edu.locationKey) : edu.location}</span>
              </div>
            </div>
            <ul className="space-y-0.5">
              {edu.descKeys.map((descKey, i) => (
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
