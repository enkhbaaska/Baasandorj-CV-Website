"use client"

import { useLanguage } from "@/lib/language-context"
import { RenderTextWithLinks } from "@/lib/render-text-with-links"

interface ProjectItem {
  nameKey: string
  subKey?: string
  // Tech stacks are set in italics; organisations are not
  subItalic?: boolean
  dateKey: string
  descKeys: string[]
}

const projects: ProjectItem[] = [
  {
    nameKey: "projects.sign.name",
    subKey: "projects.sign.sub",
    dateKey: "projects.sign.date",
    descKeys: ["projects.sign.desc1"],
  },
  {
    nameKey: "projects.script.name",
    subKey: "projects.script.sub",
    subItalic: true,
    dateKey: "projects.script.date",
    descKeys: ["projects.script.desc1", "projects.script.desc2"],
  },
  {
    nameKey: "projects.no2.name",
    subKey: "projects.no2.sub",
    subItalic: true,
    dateKey: "projects.no2.date",
    descKeys: ["projects.no2.desc1"],
  },
  {
    nameKey: "projects.hackathon.name",
    subKey: "projects.hackathon.sub",
    dateKey: "projects.hackathon.date",
    descKeys: ["projects.hackathon.desc1"],
  },
]

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="font-serif text-lg font-bold text-foreground mb-1">
        {t("projects.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary mb-4" />

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4 hover:border-primary transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 mb-1">
              <div>
                <span className="font-semibold text-sm text-foreground">
                  <RenderTextWithLinks text={t(project.nameKey)} />
                </span>
                {project.subKey && (
                  <>
                    {" · "}
                    <span className={`text-sm text-primary font-medium${project.subItalic ? " italic" : ""}`}>
                      <RenderTextWithLinks text={t(project.subKey)} />
                    </span>
                  </>
                )}
              </div>
              <div className="text-xs text-muted-foreground shrink-0 sm:text-right">
                {t(project.dateKey)}
              </div>
            </div>
            <ul className="space-y-0.5">
              {project.descKeys.map((descKey, i) => (
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
