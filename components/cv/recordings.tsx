"use client"

import { useLanguage } from "@/lib/language-context"
import { Music, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const sampleRecordings = [
  { title: "Organ Symphony No.5, Op.42 \"Toccata\"", composer: "Charles Widor" },
  { title: "Transport de Joie", composer: "Olivier Messiaen" },
  { title: "BWV 564 - Toccata, Adagio & Fugue in C Major", composer: "Johann Sebastian Bach" },
  { title: "Fantasia & Fugue in G Minor (Fugue)", composer: "Johann Sebastian Bach" },
]

export function Recordings() {
  const { t } = useLanguage()

  return (
    <section id="recordings" className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-10">
          {t("recordings.title")}
          <div className="mt-3 w-16 h-1 bg-primary rounded-full" />
        </h2>

        <Card className="overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/80 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Organ Image */}
              <div className="shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-xl overflow-hidden border-4 border-white/20 shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wcfquxLkk7bkemltbys5eRo1zwIxAE.png"
                  alt="Organ Performance"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="text-center md:text-left text-primary-foreground">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <Music className="h-6 w-6" />
                  <span className="text-lg font-medium">Organ Performances</span>
                </div>
                <p className="text-primary-foreground/80 max-w-md">
                  {t("recordings.desc")}
                </p>
              </div>
            </div>
          </div>

          <CardContent className="p-6">
            <div className="space-y-3 mb-6">
              {sampleRecordings.map((recording, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Music className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-foreground truncate">
                      {recording.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {recording.composer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button asChild className="w-full" size="lg">
              <a
                href="https://baasandorj.surge.sh/recordings.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2"
              >
                <span>{t("recordings.link")}</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
