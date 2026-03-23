'use client'

import { useLanguage } from '@/lib/language-context'
import { MapPin, Mail, Phone } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="bg-primary text-primary-foreground py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-5">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 shadow-lg shrink-0">
            <img
              src="/profile.jpg"
              alt="Baasandorj Enkhjargal"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
              {t('hero.title')}
            </h1>
            <p className="text-primary-foreground/80 text-sm mt-0.5">
              {t('hero.subtitle')}
            </p>
            <div className="mt-2 flex flex-wrap gap-3 text-xs text-primary-foreground/80">
              <a
                href="mailto:zqt521@york.ac.uk"
                className="flex items-center gap-1 hover:text-primary-foreground transition-colors"
              >
                <Mail className="h-3 w-3" />
                zqt521@york.ac.uk
              </a>
              <a
                href="tel:+447915551800"
                className="flex items-center gap-1 hover:text-primary-foreground transition-colors"
              >
                <Phone className="h-3 w-3" />
                +44 7915 551800
              </a>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {t('hero.location')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
