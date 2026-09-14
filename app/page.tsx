"use client"

import { Header } from "@/components/cv/header"
import { Hero } from "@/components/cv/hero"
import { Summary } from "@/components/cv/summary"
import { Experience } from "@/components/cv/experience"
import { Education } from "@/components/cv/education"
import { Projects } from "@/components/cv/projects"
import { Skills } from "@/components/cv/skills"
import { RecordingsLink } from "@/components/cv/recordings-link"
import { Contact } from "@/components/cv/contact"
import { Footer } from "@/components/cv/footer"

export default function CVPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-10 print:space-y-6 print:py-4">
          <Summary />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <RecordingsLink />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
