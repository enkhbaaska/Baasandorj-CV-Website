"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "mn"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.summary": "Summary",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.skills": "Skills",
    "nav.recordings": "Recordings",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Baasandorj Enkhjargal",
    "hero.subtitle": "Computer Science & Artificial Intelligence",
    "hero.location": "York, UK",
    
    // Summary
    "summary.title": "Summary",
    "summary.content": "British–Mongolian Computer Science with AI student at the University of York, with prior undergraduate study in Physics at the University of Leeds. Experience in machine learning, data analysis, and software development through academic and industry projects, including producing analytical reports for Mongolia's leading digital banking platform, MBank. Former Organ Scholar at Leeds Cathedral, performing across churches throughout the UK.",
    
    // Experience
    "experience.title": "Work Experience",
    "experience.ubmetro.role": "Project Management Intern",
    "experience.ubmetro.company": "UB Metro Project",
    "experience.ubmetro.location": "Ulaanbaatar, Mongolia",
    "experience.ubmetro.date": "Jul 2025 - Aug 2025",
    "experience.ubmetro.desc1": "Developed the official metro project website using React, integrating front-end components with back-end APIs and delivering a production-ready site within 5 days.",
    "experience.ubmetro.desc2": "Designed a promotional poster in Adobe Photoshop for a Facebook outreach campaign, resulting in approximately 100 enquiries.",
    "experience.ubmetro.desc3": "Created a ticket pricing algorithm in Google Colab using Python that calculated daily metro revenue and determined the optimum price point to maximize profits.",
    "experience.ubmetro.desc4": "Conducted research on international metro ticket pricing, collecting and analysing data to support pricing strategy decisions.",

    "experience.mbank.role": "Data Analyst Intern",
    "experience.mbank.company": "MBank",
    "experience.mbank.location": "Ulaanbaatar, Mongolia",
    "experience.mbank.date": "Jul 2025 - Aug 2025",
    "experience.mbank.desc1": "Processed ~10,000 transactional and account records, using scikit-learn to identify relationships between loan, savings, and transaction accounts.",
    "experience.mbank.desc2": "Cleaned and analysed 3 months of customer activity data, identifying behavioural segments and presenting findings through reports to stakeholders.",
    "experience.mbank.desc3": "Gained experience in data-driven decision-making and operations in Mongolia's most advanced digital banking systems.",
    "experience.mbank.desc4": "Conducted research on international metro ticket pricing, collecting and analysing data to support pricing strategy decisions.",

    "experience.upwork.role": "Freelance Developer",
    "experience.upwork.company": "Upwork",
    "experience.upwork.location": "London, UK",
    "experience.upwork.date": "Sep 2024 - Jun 2025",
    "experience.upwork.desc1": "Maintained API integrations for the client's main product, resulting in 30% reduction in integration-related bugs.",
    "experience.upwork.desc2": "Managed and optimised MySQL and MongoDB databases, maintaining data integrity across 5 tables.",
    "experience.upwork.desc3": "Implemented 3 feature tests to improve code stability and prevent recurring issues.",
    "experience.upwork.desc4": "Updated project repositories on GitHub documenting code changes.",

    "experience.organ.role": "Organ Scholar",
    "experience.organ.company": "Leeds Cathedral",
    "experience.organ.location": "Leeds, UK",
    "experience.organ.date": "Sep 2018 - Sep 2019",
    "experience.organ.desc1": "Performed organ recitals and accompanied choirs during religious ceremonies.",
    "experience.organ.desc2": "Led Sunday services in churches across the UK.",
    
    // Education
    "education.title": "Education",
    "education.york.degree": "BSc Computer Science with Artificial Intelligence",
    "education.york.school": "University of York",
    "education.york.date": "Expected Jul 2028",
    "education.york.desc1": "Currently preparing a personal game development project using Unreal Engine and C++, focusing on gameplay mechanics.",
    "education.york.desc2": "Modules include Data structures, [Hardware systems](https://simplecpudesign.com/minimal_cpu/index.html) and Human computer interaction",
    "education.york.desc3": "President of [Game development](https://yorksu.org/activities/view/game-development-society) society and Mongolian society",

    
    "education.ai.degree": "AI Course",
    "education.ai.school": "AI Academy Asia",
    "education.ai.location": "Ulaanbaatar, Mongolia",
    "education.ai.date": "Aug 2025",
    "education.ai.desc1": "Built a chatbot for AI project, implementing natural language processing (NLP) techniques to handle user queries intelligently.",
    
    "education.fullstack.degree": "Full Stack Development",
    "education.fullstack.school": "ITCareerswitch",
    "education.fullstack.date": "Jul 2025",
    "education.fullstack.desc1": "Incorporated React to convert static HTML/CSS layouts into dynamic, interactive web and app interfaces.",
    "education.fullstack.desc2": "Applied feature testing to identify and fix software bugs.",
    
    "education.leeds.degree": "DipHE Physics",
    "education.leeds.school": "University of Leeds",
    "education.leeds.date": "Jun 2021",
    "education.leeds.desc1": "Modules include Statistical mechanics, Quantum mechanics, Electromagnetism and Bionanotechnology.",
    "education.leeds.desc2": "Coordinated with the [research team](https://www.leeds.ac.uk/news-enterprise/news/article/4718/reducing-the-environmental-impact-of-cellulose-films) developing biodegradable, eco-friendly cellulose fibres, applying machine learning approach in Python.",
    "education.leeds.desc3": "Participated in a [game jam](https://v3.globalgamejam.org/2020/games/village-school-5) using Raylib.",
    
    "education.school.degree": "Sixth Form",
    "education.school.school": "Christ's Hospital School",
    "education.school.location": "Horsham, West Sussex",
    "education.school.date": "Jul 2018",
    "education.school.desc1": "A-level: Mathematics, Further Mathematics: A*,C | Mandarin: A | Physics: B.",
    "education.school.desc2": "GCSE: Mathematics, Further Mathematics: A*, A** | Physics, Chemistry, Biology: A*, A*, A* | English: C",
    
    // Skills
    "skills.title": "Skills",
    "skills.programming": "Programming Languages",
    "skills.programming.list": "Python, Java, C++, JavaScript",
    "skills.web": "Web Development",
    "skills.web.list": "React, Node.js, Express, REST APIs",
    "skills.data": "Data & AI",
    "skills.data.list": "scikit-learn, NLP, clustering, model evaluation",
    "skills.databases": "Databases",
    "skills.databases.list": "MySQL, MongoDB",
    "skills.dev": "Development Tools",
    "skills.dev.list": "Git/GitHub, feature testing",
    
    // Volunteering
    "volunteering.title": "Volunteering",
    "volunteering.desc1": "Voluntary support in organisation of International Women Business Forums and Award Ceremonies organised by the [Association](https://admwe.org) for Development of Mongolian Women in Europe in Antwerp, Paris and Rome.",
    "volunteering.desc2": "Directed fundraising activities for Lord Mayor's 800th Anniversary Trust and raised £500 to charity.",
    
    // Recordings
    "recordings.title": "Organ Recordings",
    "recordings.desc": "Listen to my organ performances recorded at various venues across the UK.",
    "recordings.link": "View All Recordings",
    
    // Contact
    "contact.title": "Contact",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.cta": "Get in touch",
    
    // Footer
    "footer.rights": "All rights reserved.",
  },
  mn: {
    // Navigation
    "nav.summary": "Товч танилцуулга",
    "nav.experience": "Туршлага",
    "nav.education": "Боловсрол",
    "nav.skills": "Ур чадвар",
    "nav.recordings": "Бичлэгүүд",
    "nav.contact": "Холбоо барих",
    
    // Hero
    "hero.title": "Баасандорж Энхжаргал",
    "hero.subtitle": "Компьютерийн шинжлэх ухаан & Хиймэл оюун ухаан",
    "hero.location": "Йорк, Их Британи",
    
    // Summary
    "summary.title": "Товч танилцуулга",
    "summary.content": "Йоркийн Их Сургуульд Компьютерийн шинжлэх ухаан, хиймэл оюун ухааны чиглэлээр суралцаж буй Британи-Монгол оюутан. Өмнө нь Лийдсийн Их Сургуульд Физикийн чиглэлээр суралцсан. Монголын тэргүүлэгч дижитал банкны платформ МБанкинд аналитик тайлан гаргах зэрэг академик болон үйлдвэрлэлийн төслүүдээр машин сургалт, өгөгдлийн шинжилгээ, програм хангамж хөгжүүлэлтийн туршлагатай. Лийдс Кафедралын хуучин Органы тэтгэлэгт оюутан, Их Британи даяар сүмүүдэд тоглодог байсан.",
    
    // Experience
    "experience.title": "Ажлын туршлага",
    "experience.ubmetro.role": "Төслийн менежментийн дадлагажигч",
    "experience.ubmetro.company": "УБ Метро Төсөл",
    "experience.ubmetro.location": "Улаанбаатар, Монгол",
    "experience.ubmetro.date": "2025 оны 7-р сар - 8-р сар",
    "experience.ubmetro.desc1": "React ашиглан метро төслийн албан ёсны вэбсайтыг хөгжүүлж, front-end компонентуудыг back-end API-тай холбон 5 хоногт үйлдвэрлэлд бэлэн сайт бүтээв.",
    "experience.ubmetro.desc2": "Facebook-д зар сурталчилгааны кампанит ажилд зориулж Adobe Photoshop дээр сурталчилгааны зурагт хуудас зохиож, [ойролцоогоор](https://facebook.com) 100 лавлагаа авав.",
    "experience.ubmetro.desc3": "Python ашиглан Google Colab дээр тасалбарын үнэ тогтоох алгоритм үүсгэж, өдөр тутмын орлогыг тооцоолж, ашгийг нэмэгдүүлэх оновчтой үнийг тодорхойлов.",
    "experience.ubmetro.desc4": "Conducted research on international metro ticket pricing, collecting and analysing data to support pricing strategy decisions.",

    "experience.mbank.role": "Өгөгдлийн шинжээч дадлагажигч",
    "experience.mbank.company": "МБанк",
    "experience.mbank.location": "Улаанбаатар, Монгол",
    "experience.mbank.date": "2025 оны 7-р сар - 8-р сар",
    "experience.mbank.desc1": "~10,000 гүйлгээний болон дансны бүртгэлийг боловсруулж, scikit-learn ашиглан зээл, хадгаламж, гүйлгээний дансуудын хоорондын хамаарлыг тодорхойлов.",
    "experience.mbank.desc2": "3 сарын хэрэглэгчийн идэвхи��н өгөгдлийг цэвэрлэж, шинжилж, зан үйлийн сегментүүдийг тодорхойлж, оролцогч талуудад тайлангаар танилцуулав.",
    "experience.mbank.desc3": "Монголын хамгийн дэвшилтэт дижитал банкны системд өгөгдөлд суурилсан шийдвэр гаргах, үйл ажиллагааны практик туршлага хуримтлуулав.",
    "experience.mbank.desc4": "Conducted research on international metro ticket pricing, collecting and analysing data to support pricing strategy decisions.",

    "experience.upwork.role": "Чөлөөт хөгжүүлэгч",
    "experience.upwork.company": "Upwork",
    "experience.upwork.location": "Лондон, Их Британи",
    "experience.upwork.date": "2024 оны 9-р сар - 2025 оны 6-р сар",
    "experience.upwork.desc1": "Үйлчлүүлэгчийн үндсэн бүтээгдэхүүний API интеграцийг хадгалж, интеграцитай холбоотой алдааг 30% бууруулав.",
    "experience.upwork.desc2": "MySQL болон MongoDB өгөгдлийн санг удирдаж, оновчлов, 5 хүснэгтэд өгөгдлийн бүрэн бүтэн байдлыг хадгалав.",
    "experience.upwork.desc3": "Кодын тогтвортой байдлыг сайжруулж, давтагдах асуудлаас сэргийлэхийн тулд 3 функц тест хийв.",
    "experience.upwork.desc4": "Updated project repositories on GitHub documenting code changes.",

    "experience.organ.role": "Органы тэтгэлэгт оюутан",
    "experience.organ.company": "Лийдс Кафедрал",
    "experience.organ.location": "Лийдс, Их Британи",
    "experience.organ.date": "2018 оны 9-р сар - 2019 оны 9-р сар",
    "experience.organ.desc1": "Органы концерт тоглож, шашны зан үйлд найрал дуучдыг дагалдуулав.",
    "experience.organ.desc2": "Их Британи даяар сүмүүдэд Ням гаргийн үйлчлэлийг удирдав.",
    
    // Education
    "education.title": "Боловсрол",
    "education.york.degree": "Компьютерийн шинжлэх ухаан, хиймэл оюун ухааны бакалавр",
    "education.york.school": "Йоркийн Их Сургууль",
    "education.york.date": "2028 оны 7-р сард төгсөнө",
    "education.york.desc1": "Unreal Engine болон C++ ашиглан тоглоомын механикт төвлөрсөн хувийн тоглоом хөгжүүлэх төсөл бэлтгэж байна.",
    "education.york.desc2": "Modules include Data structures, [Hardware systems](https://simplecpudesign.com/minimal_cpu/index.html) and Human computer interaction",
    "education.york.desc3": "President of [Game development](https://yorksu.org/activities/view/game-development-society) society and Mongolian society",

    "education.ai.degree": "Хиймэл оюун ухааны сургалт",
    "education.ai.school": "AI Academy Asia",
    "education.ai.location": "Улаанбаатар, Монгол",
    "education.ai.date": "2025 оны 8-р сар",
    "education.ai.desc1": "Хиймэл оюун ухааны төсөлд зориулж чатбот бүтээж, хэрэглэгчийн асуултыг ухаалгаар боловсруулахын тулд байгалийн хэлний боловсруулалт (NLP) техникийг хэрэгжүүлэв.",
    
    "education.fullstack.degree": "Full Stack хөгжүүлэлт",
    "education.fullstack.school": "ITCareerswitch",
    "education.fullstack.date": "2025 оны 7-р сар",
    "education.fullstack.desc1": "React ашиглан статик HTML/CSS загварыг динамик, интерактив веб болон апп интерфэйс болгон хөрвүүлэв.",
    "education.fullstack.desc2": "Функц тест хийж програм хангамжийн алдааг олж засварлав.",
    
    "education.leeds.degree": "Физикийн диплом",
    "education.leeds.school": "Лийдсийн Их Сургууль",
    "education.leeds.date": "2021 оны 6-р сар",
    "education.leeds.desc1": "Статистик механик, Квант механик, Цахилгаан соронзон, Бионанотехнологийн хичээлүүд.",
    "education.leeds.desc2": "Python дээр машин сургалтын аргыг хэрэглэн биозадлагддаг, байгальд ээлтэй целлюлозын ширхэг хөгжүүлэх [судалгааны баг](https://www.leeds.ac.uk/news-enterprise/news/article/4718/reducing-the-environmental-impact-of-cellulose-films)тай хамтран ажилласан.",
    "education.leeds.desc3": "Participated in a [game jam](https://v3.globalgamejam.org/2020/games/village-school-5) using Raylib.",

    "education.school.degree": "Дунд сургууль",
    "education.school.school": "Christ's Hospital School",
    "education.school.location": "Хоршам, Вест Сассекс",
    "education.school.date": "2018 оны 7-р сар",
    "education.school.desc1": "A-level: Математик, Нэмэлт Математик: A*,C | ��ятад хэл: A | Физик: B.",
    "education.school.desc2": "GCSE: Математик, Нэмэлт Математик: A*, A** | Физик, Хими, Биологи: A*, A*, A* | Англи хэл: C",
    
    // Skills
    "skills.title": "Ур чадвар",
    "skills.programming": "Програмчлалын хэлүүд",
    "skills.programming.list": "Python, Java, C++, JavaScript",
    "skills.web": "Веб хөгжү��лэлт",
    "skills.web.list": "React, Node.js, Express, REST APIs",
    "skills.data": "Өгөгдөл & Хиймэл оюун ухаан",
    "skills.data.list": "scikit-learn, NLP, кластерчлал, загвар үнэлгээ",
    "skills.databases": "Өгөгдлийн сан",
    "skills.databases.list": "MySQL, MongoDB",
    "skills.dev": "Хөгжүүлэлтийн хэрэгслүүд",
    "skills.dev.list": "Git/GitHub, функц тест",
    
    // Volunteering
    "volunteering.title": "Сайн дурын ажил",
    "volunteering.desc1": "Европ дахь Монгол эмэгтэйчүүдийн хөгжлийн [холбооноос](https://admwe.org) Антверпен, Парис, Ромд зохион байгуулсан Олон улсын эмэгтэйчүүдийн бизнес форум, шагналын ёслолыг зохион байгуулахад сайн дураараа туслав.",
    "volunteering.desc2": "Лорд Мэйорын 800 жилийн ойн сангийн хандив цуглуулах үйл ажиллагааг удирдаж, буяны байгууллагад £500 цуглуулав.",
    
    // Recordings
    "recordings.title": "Органы бичлэгүүд",
    "recordings.desc": "Их Британи даяар янз бүрийн газруудад хийсэн органы тоглолтуудыг сонсоорой.",
    "recordings.link": "Бүх бичлэгийг үзэх",
    
    // Contact
    "contact.title": "Холбоо барих",
    "contact.email": "Имэйл",
    "contact.phone": "Утас",
    "contact.location": "Байршил",
    "contact.cta": "Холбогдох",
    
    // Footer
    "footer.rights": "Бүх эрх хуулиар хамгаалагдсан.",
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations["en"]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
