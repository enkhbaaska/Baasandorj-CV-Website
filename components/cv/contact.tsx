"use client"

import { useLanguage } from "@/lib/language-context"
import { Mail, Phone, MapPin } from "lucide-react"

const contactInfo = [
  { labelKey: "contact.email", value: "zqt521@york.ac.uk", href: "mailto:zqt521@york.ac.uk", icon: Mail },
  { labelKey: "contact.phone", value: "+44 7915 551800", href: "tel:+447915551800", icon: Phone },
  { labelKey: "contact.location", value: "York, UK", href: null, icon: MapPin },
]

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="scroll-mt-16">
      <h2 className="font-serif text-lg font-bold text-foreground mb-1">
        {t("contact.title")}
      </h2>
      <div className="w-10 h-0.5 bg-primary mb-4" />

      <div className="flex flex-wrap gap-4">
        {contactInfo.map((info, index) => {
          const Icon = info.icon
          const inner = (
            <div className="flex items-center gap-2 text-sm">
              <Icon className="h-4 w-4 text-primary shrink-0" />
              <div>
                <span className="text-xs text-muted-foreground block">{t(info.labelKey)}</span>
                <span className="font-medium text-foreground">{info.value}</span>
              </div>
            </div>
          )

          return info.href ? (
            <a key={index} href={info.href} className="hover:text-primary transition-colors">
              {inner}
            </a>
          ) : (
            <div key={index}>{inner}</div>
          )
        })}
      </div>
    </section>
  )
}
