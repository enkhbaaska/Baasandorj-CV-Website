"use client"

import { useLanguage } from "@/lib/language-context"
import { Header } from "@/components/cv/header"
import { Footer } from "@/components/cv/footer"
import { Music, ArrowLeft, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

// To add a certificate: drop the image in public/certificates/ and add an entry
// here. Use file names without spaces, e.g. /certificates/abrsm-grade-8.jpg
const certificates: { title: string; issuer?: string; date?: string; image: string }[] = [
  {
    title: "Grade 8 Organ — Distinction",
    issuer: "ABRSM",
    date: "2016",
    image: "/certificates/abrsm-grade-8-organ.jpg",
  },
  {
    title: "Grade 8 Piano — Distinction",
    issuer: "ABRSM",
    date: "2015",
    image: "/certificates/abrsm-grade-8-piano.jpg",
  },
  {
    title: "The Organ Scholar Experience",
    issuer: "Royal College of Organists",
    date: "Jul 2016",
    image: "/certificates/rco-organ-scholar-experience.jpg",
  },
  {
    title: "Summer School",
    issuer: "Oundle for Organists",
    date: "Jul 2016",
    image: "/certificates/oundle-for-organists-summer-school.jpg",
  },
  {
    title: "Organ Recital",
    issuer: "Christ's Hospital Chapel",
    date: "Apr 2018",
    image: "/certificates/christs-hospital-organ-recital.jpg",
  },
]

const recordings = [
  {
    title: 'Organ Symphony No.5, Op.42 "Toccata"',
    composer: "Charles Widor",
    audio: "/audio/widor toccata.m4a",
  },
  {
    title: "Transport de Joie",
    composer: "Olivier Messiaen",
    audio: "/audio/Transport De Joie.m4a",
  },
  {
    title: "BWV 593 - Organ Concerto in A Minor",
    composer: "Johann Sebastian Bach",
    audio: "/audio/Bach A Minor.m4a",
  },
  {
    title: "Prelude and Fugue in B major",
    composer: "Eugène Dupré",
    audio: "/audio/Dupre.m4a",
  },
  {
    title: "Dieu parmi nous",
    composer: "Olivier Messiaen",
    audio: "/audio/Dieu parmi noua.m4a",
  },
  {
    title: "Prelude and Fugue in C major",
    composer: "Georg Böhm",
    audio: "/audio/Bohm.m4a",
  },
  {
    title: "Toccata and Fugue in F Major",
    composer: "Johann Sebastian Bach",
    audio: "/audio/F major official.m4a",
  },
]

export default function RecordingsPage() {
  const { t } = useLanguage()
  const [lightbox, setLightbox] = useState<string | null>(null)

  useEffect(() => {
    if (!lightbox) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox])

  return (
    <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {/* Page Header */}
          <div className="bg-primary text-primary-foreground py-10">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-5 transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("recordings.back")}
              </Link>
              <div className="flex items-center gap-5">
                <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-white/20 shrink-0">
                  <img
                    src="/organ.JPG"
                    alt="Baasandorj Enkhjargal"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <h1 className="font-serif text-2xl md:text-3xl font-bold">{t("recordings.title")}</h1>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    {t("recordings.subtitle")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Recordings List */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">

            <div className="space-y-3 mb-8">
              {recordings.map((recording, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Music className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground text-sm">{recording.title}</p>
                    <p className="text-xs text-muted-foreground mb-2">~ {recording.composer}</p>

                    {recording.audio && (
                      <audio controls className="w-full" controlsList="nodownload">
                        <source src={recording.audio} type="audio/mp4" />
                        Your browser does not support the audio element.
                      </audio>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Certificates */}
            {certificates.length > 0 && (
              <div className="mb-8">
                <h2 className="font-serif text-xl font-bold text-foreground mb-1">{t("recordings.certificates")}</h2>
                <div className="w-10 h-0.5 bg-primary mb-4" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certificates.map((cert) => (
                    <button
                      key={cert.image}
                      type="button"
                      onClick={() => setLightbox(cert.image)}
                      className="text-left bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 hover:shadow-sm transition-all"
                    >
                      {/* contain, not cover: these are documents, so cropping loses text */}
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full aspect-[3/4] object-contain bg-secondary p-2"
                      />
                      <div className="p-3">
                        <p className="font-medium text-foreground text-sm">{cert.title}</p>
                        {(cert.issuer || cert.date) && (
                          <p className="text-xs text-muted-foreground">
                            {[cert.issuer, cert.date].filter(Boolean).join(" · ")}
                          </p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </div>
        </main>
        <Footer />

        {/* Full-size certificate view */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              aria-label="Close"
              className="absolute top-4 right-4 text-white/80 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={lightbox}
              alt=""
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
        </div>
      )}
    </div>
  )
}
