"use client"

import { LanguageProvider } from "@/lib/language-context"
import { Header } from "@/components/cv/header"
import { Footer } from "@/components/cv/footer"
import { Music, ArrowLeft } from "lucide-react"
import Link from "next/link"



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
  return (
    <LanguageProvider>
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
                Back to CV
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
                  <h1 className="font-serif text-2xl md:text-3xl font-bold">Organ Recordings</h1>
                  <p className="text-primary-foreground/70 text-sm mt-1">
                    Listen to my organ performances
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

          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
