"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

const STORAGE_KEY = "cv-language"

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
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.recordings": "Recordings",
    "nav.contact": "Contact",
    
    // Hero
    "hero.title": "Baasandorj Enkhjargal",
    "hero.subtitle": "Computer Science & Artificial Intelligence",
    "hero.location": "York, UK",
    
    // Summary
    "summary.title": "Summary",
    "summary.content": "British–Mongolian Computer Science with AI student at the University of York, with prior undergraduate study in Physics at the University of Leeds. Experience in machine learning, computational physics and software development through academic and industry projects. From producing analytical reports for Mongolia's leading digital banking platform, MBank, to building independent projects in satellite monitoring, NLP and sign language recognition. Freelance church organist and former Organ Scholar at Leeds Cathedral.",
    
    // Experience
    "experience.title": "Work Experience",
    "experience.un.role": "UN Volunteer",
    "experience.un.company": "UNCCD COP17",
    "experience.un.location": "Ulaanbaatar, Mongolia",
    "experience.un.date": "Jul 2026 - Aug 2026",
    "experience.un.desc1": "Selected as one of 100 participants in the Model COP training programme.",
    "experience.un.desc2": "Presented a satellite emissions monitoring project to a conference audience of ~20 delegates.",
    "experience.un.desc3": "Collaborated with delegates and project teams on desertification planning and financing discussions, working in both Mongolian and English.",

    "experience.mbank.role": "Data Analyst Intern",
    "experience.mbank.company": "MBank",
    "experience.mbank.tagline": "Mongolia's leading digital bank",
    "experience.mbank.location": "Ulaanbaatar, Mongolia",
    "experience.mbank.date": "Jul 2025 - Aug 2025",
    "experience.mbank.desc1": "Processed ~10,000 transactional and account records, using scikit-learn to identify relationships between loan, savings and transaction accounts.",
    "experience.mbank.desc2": "Cleaned and analysed 3 months of customer activity data, identifying behavioural segments and presenting findings to stakeholders.",
    "experience.mbank.desc3": "Rebuilt the team's data visualisations to communicate key insights to analysts and company data trainees.",

    "experience.ubmetro.role": "Project Management Intern",
    "experience.ubmetro.company": "UB Metro Project",
    "experience.ubmetro.location": "Ulaanbaatar, Mongolia",
    "experience.ubmetro.date": "Jul 2025 - Aug 2025",
    "experience.ubmetro.desc1": "Built and shipped the official metro project website in React, integrating front-end components with back-end APIs, within 5 days.",
    "experience.ubmetro.desc2": "Created a ticket pricing algorithm in Python calculating daily revenue and identifying the profit-maximising price point.",
    "experience.ubmetro.desc3": "Researched international metro fare structures to support pricing strategy decisions.",

    "experience.tutoring.role": "Tutoring and Freelance Development",
    "experience.tutoring.company": "[Empowering Learning](https://www.empowering-learning.com/) · [Upwork](https://www.upwork.com/)",
    "experience.tutoring.location": "London, UK",
    "experience.tutoring.date": "Jul 2021 - Jul 2025",
    "experience.tutoring.desc1": "Tutored ~10 GCSE and A-level students in maths and sciences, adapting technical explanations to each student's level.",
    "experience.tutoring.desc2": "Managed MySQL and MongoDB databases, maintaining data integrity across 5 tables and ensuring reliable data flow between systems.",
    "experience.tutoring.desc3": "Diagnosed and fixed software defects in a client's main product, achieving a 30% reduction in integration-related bugs.",

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
    "education.york.date": "Sep 2025 - Jul 2028",
    "education.york.desc1": "**Average 73%.** Object Oriented Algorithms 86% · Data Structures 80% · Foundations of Programming 84% · Mathematical Foundations of Computer Science 71% · Human–Computer Interaction 71% · Formal Languages & Automata 69% · [Systems & Devices](https://simplecpudesign.com/minimal_cpu/index.html) 63%",
    "education.york.desc2": "**President, [Mongolian Cultural Society](https://yorksu.org/activities/view/mongolian-cultural-soc)**: lead a committee running cultural events showcasing Mongolian history, language and calligraphy.",
    "education.york.desc3": "**President, [Game Development Society](https://yorksu.org/activities/view/game-development-society)**: run Unreal Engine 5 and C++ development sessions and organise [game jams](https://tollgnoll.itch.io/the-trip) for ~30 members.",
    "education.york.desc4": "**Treasurer, AI Society**: manage the society budget, organising weekly AI talks and monthly hackathons.",

    
    "education.certificates.degree": "Certificates",
    "education.certificates.desc1": "[AI Academy Asia](https://www.ai-academy.asia/en): AI Course, including NLP chatbot build (Aug 2025) · [ITCareerswitch](https://itcareerswitch.co.uk/): Full Stack Development (Jul 2024)",

    "education.leeds.degree": "Diploma of Higher Education, Physics",
    "education.leeds.school": "University of Leeds",
    "education.leeds.date": "Sep 2018 - Jul 2021",
    "education.leeds.desc1": "Coordinated with the [research team](https://eps.leeds.ac.uk/physics-research-groups/doc/reducing-environmental-impact-cellulose-films) developing biodegradable, eco-friendly cellulose fibres, applying machine learning approach in Python.",
    "education.leeds.desc2": "Modules: Statistical Mechanics, Quantum Mechanics, Electromagnetism, Bionanotechnology.",
    "education.leeds.desc3": "Participated in a [game jam](https://v3.globalgamejam.org/2020/games/village-school-5) using Raylib.",
    
    "education.school.degree": "Sixth Form",
    "education.school.school": "Christ's Hospital School",
    "education.school.location": "Horsham, West Sussex",
    "education.school.date": "Sep 2013 - Jul 2018",
    "education.school.desc1": "A-level: Mathematics A* · Mandarin A · Physics B · Further Mathematics C",
    "education.school.desc2": "GCSE: Mathematics, Further Mathematics: A*, A** | Physics, Chemistry, Biology: A*, A*, A* | English: C",
    
    // Projects
    "projects.title": "Projects",
    "projects.sign.name": "Mongolian Sign Language Recognition",
    "projects.sign.sub": "[Ember](https://ember.mn)",
    "projects.sign.date": "Jul 2026 - Aug 2026",
    "projects.sign.desc1": "Trained a computer vision model that converts video of a person signing into Mongolian text. MediaPipe extracts hand and body landmarks from each frame, PyTorch classifier maps the landmarks to signs.",
    "projects.sign.desc2": "Mongolian Sign Language had no existing training corpus, so designed a capture tool and collected the dataset from scratch against a verified 1,236-sign reference dictionary.",

    "projects.script.name": "[Mongolian Script Converter](https://huggingface.co/spaces/zqt521/mongolian-converter)",
    "projects.script.sub": "Python, PyTorch, NLP",
    "projects.script.date": "May 2026",
    "projects.script.desc1": "Implemented a bidirectional Cyrillic ↔ traditional Mongolian script converter in PyTorch, trained on open-source corpus.",
    "projects.script.desc2": "Cyrillic lost distinctions the old script kept, meaning conversion isn't always one-to-one. Added confidence scores so uncertain words get flagged for review.",

    "projects.no2.name": "Satellite NO₂ Monitoring over Ulaanbaatar",
    "projects.no2.sub": "[Google Earth Engine](https://earthengine.google.com/) Sentinel-5P TROPOMI",
    "projects.no2.date": "Jun 2026",
    "projects.no2.desc1": "Analysed Sentinel-5P TROPOMI tropospheric NO₂ data over Ulaanbaatar to test for a winter heating signal from the city's ger districts.",

    "projects.hackathon.name": "Harvard HSIL [Hackathon](https://hsph.harvard.edu/research/health-systems-innovation-lab/work/hsil-hackathon-2026-building-high-value-health-systems-leveraging-ai/) 2026 — London Hub",
    "projects.hackathon.sub": "UCL Global Business School for Health · UCL East",
    "projects.hackathon.date": "Apr 2026",
    "projects.hackathon.desc1": "Led the machine learning chatbot component of a sexual health app, delivered in two days in a team of 5.",

    // Skills
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.languages.list": "Python, C++, Java, JavaScript",
    "skills.ml": "ML & Data",
    "skills.ml.list": "PyTorch, scikit-learn, MediaPipe, NLP",
    "skills.web": "Web & Databases",
    "skills.web.list": "React, Node.js, Express, REST APIs, MySQL, MongoDB",
    "skills.tools": "Tools",
    "skills.tools.list": "Git / GitHub, Google Earth Engine, Unreal Engine 5, Unity",
    "skills.spoken": "Spoken Languages",
    "skills.spoken.list": "Mongolian (native), English (native), Mandarin (intermediate)",

    // Volunteering
    "volunteering.title": "Volunteering",
    "volunteering.desc1": "Co-ordinated with the [Association for Development of Mongolian Women in Europe](https://admwe.org/) in organising International Women's Business Forums and Award ceremonies in Ireland, France, Belgium and Italy.",
    "volunteering.desc2": "Directed fundraising activities for the Lord Mayor's 800th Anniversary Trust, raising £500 for charity.",
    
    // Recordings
    "recordings.title": "Organ Recordings",
    "recordings.desc": "Listen to my organ performances recorded at various venues across the UK.",
    "recordings.link": "View All Recordings",
    "recordings.back": "Back to CV",
    "recordings.subtitle": "Listen to my organ performances",
    "recordings.certificates": "Certificates & Recitals",
    
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
    "nav.projects": "Төслүүд",
    "nav.skills": "Ур чадвар",
    "nav.recordings": "Бичлэгүүд",
    "nav.contact": "Холбоо барих",

    // Hero
    "hero.title": "Баасандорж Энхжаргал",
    "hero.subtitle": "Компьютерын шинжлэх ухаан ба хиймэл оюун ухаан",
    "hero.location": "Йорк, Их Британи",

    // Summary
    "summary.title": "Товч танилцуулга",
    "summary.content": "Их Британийн Йоркийн Их Сургуульд Компьютерын шинжлэх ухаан ба хиймэл оюун ухааны чиглэлээр суралцаж буй Британи–Монгол оюутан. Өмнө нь Лидсийн Их Сургуульд Физикийн чиглэлээр бакалаврын түвшний сургалтад хамрагдсан. Машин сургалт, тооцооллын физик, програм хангамжийн хөгжүүлэлтийн чиглэлээр академик болон үйлдвэрлэлийн төслүүд дээр ажилласан туршлагатай. Монголын тэргүүлэх дижитал банкны платформ болох MBank-д аналитик тайлан боловсруулахаас эхлээд хиймэл дагуулын хяналт, NLP, дохионы хэл таних бие даасан төслүүд хүртэл ажиллаж байсан. Мөн чөлөөт сүмийн органист бөгөөд Лидсийн сүмийн органист тэтгэлэгт суралцагч байсан.",

    // Experience
    "experience.title": "Ажлын туршлага",
    "experience.un.role": "НҮБ-ын сайн дурын ажилтан",
    "experience.un.company": "UNCCD COP17",
    "experience.un.location": "Улаанбаатар, Монгол",
    "experience.un.date": "2026 оны 7-р сар - 2026 оны 8-р сар",
    "experience.un.desc1": "Model COP сургалтын хөтөлбөрийн 100 оролцогчийн нэгээр шалгарсан.",
    "experience.un.desc2": "Хиймэл дагуулаар хийн ялгарлыг хянах төслөө ~20 төлөөлөгчийн өмнө танилцуулсан.",
    "experience.un.desc3": "Цөлжилтийн төлөвлөлт, санхүүжилтийн хэлэлцүүлгээр төлөөлөгчид болон төслийн багуудтай монгол, англи хэлээр хамтран ажилласан.",

    "experience.mbank.role": "Өгөгдлийн шинжээчийн дадлагажигч",
    "experience.mbank.company": "MBank",
    "experience.mbank.tagline": "Монголын тэргүүлэх дижитал банк",
    "experience.mbank.location": "Улаанбаатар, Монгол",
    "experience.mbank.date": "2025 оны 7-р сар - 2025 оны 8-р сар",
    "experience.mbank.desc1": "Ойролцоогоор 10,000 гүйлгээ болон дансны бүртгэлийг боловсруулж, scikit-learn ашиглан зээл, хадгаламж, гүйлгээний дансуудын хоорондын хамаарлыг тодорхойлов.",
    "experience.mbank.desc2": "3 сарын хэрэглэгчийн идэвхийн өгөгдлийг цэвэрлэж, шинжилгээ хийж, зан төлөвийн сегментүүдийг тодорхойлон, үр дүнг оролцогч талуудад танилцуулав.",
    "experience.mbank.desc3": "Багийн өгөгдлийн дүрслэлүүдийг шинэчлэн бүтээж, гол дүгнэлтүүдийг шинжээчид болон компанийн өгөгдлийн сургалтын оюутнуудад ойлгомжтой хүргэсэн.",

    "experience.ubmetro.role": "Төслийн менежментийн дадлагажигч",
    "experience.ubmetro.company": "УБ Метро Төсөл",
    "experience.ubmetro.location": "Улаанбаатар, Монгол",
    "experience.ubmetro.date": "2025 оны 7-р сар - 2025 оны 8-р сар",
    "experience.ubmetro.desc1": "React ашиглан метро төслийн албан ёсны вэбсайтыг бүтээж, front-end компонентуудыг back-end API-тай холбон 5 хоногийн дотор ашиглалтад оруулсан.",
    "experience.ubmetro.desc2": "Python дээр тасалбарын үнийн алгоритм боловсруулж, өдөр тутмын орлогыг тооцоолон ашгийг хамгийн их байлгах үнийг тодорхойлсон.",
    "experience.ubmetro.desc3": "Олон улсын метроны тарифын бүтцийг судалж, үнийн стратегийн шийдвэр гаргалтад дэмжлэг үзүүлсэн.",

    "experience.tutoring.role": "Багшлах болон чөлөөт хөгжүүлэлт",
    "experience.tutoring.company": "[Empowering Learning](https://www.empowering-learning.com/) · [Upwork](https://www.upwork.com/)",
    "experience.tutoring.location": "Лондон, Их Британи",
    "experience.tutoring.date": "2021 оны 7-р сар - 2025 оны 7-р сар",
    "experience.tutoring.desc1": "GCSE болон A-level-ийн ~10 сурагчид математик, байгалийн ухааны хичээл зааж, техникийн тайлбарыг сурагч бүрийн түвшинд тохируулсан.",
    "experience.tutoring.desc2": "MySQL болон MongoDB өгөгдлийн сангуудыг удирдаж, 5 хүснэгтийн өгөгдлийн бүрэн бүтэн байдал болон системүүд хоорондын өгөгдлийн найдвартай урсгалыг хангасан.",
    "experience.tutoring.desc3": "Үйлчлүүлэгчийн үндсэн бүтээгдэхүүний програмын алдааг оношилж засварлан, интеграцитай холбоотой алдааг 30%-иар бууруулсан.",

    "experience.organ.role": "Органист тэтгэлэгт суралцагч",
    "experience.organ.company": "Leeds Cathedral",
    "experience.organ.location": "Лидс, Их Британи",
    "experience.organ.date": "2018 оны 9-р сар - 2019 оны 9-р сар",
    "experience.organ.desc1": "Орган хөгжмөөр тоглолт хийж, шашны ёслолын үеэр найрал дуучдыг дагалдуулсан.",
    "experience.organ.desc2": "Их Британийн олон сүмд Ням гаргийн мөргөлүүдэд хөгжмөөр үйлчилсэн.",

    // Education
    "education.title": "Боловсрол",
    "education.york.degree": "Компьютерын шинжлэх ухаан ба хиймэл оюун ухааны бакалавр",
    "education.york.school": "Йоркийн Их Сургууль",
    "education.york.date": "2025 оны 9-р сар - 2028 оны 7-р сар",
    "education.york.desc1": "**Дундаж дүн 73%.** Обьект хандалтат алгоритм 86% · Өгөгдлийн бүтэц 80% · Програмчлалын үндэс 84% · Компьютерын шинжлэх ухааны математик үндэс 71% · Хүн–компьютерын харилцан үйлдэл 71% · Формал хэл ба автомат 69% · [Систем ба төхөөрөмж](https://simplecpudesign.com/minimal_cpu/index.html) 63%",
    "education.york.desc2": "**[Монголын соёлын нийгэмлэгийн](https://yorksu.org/activities/view/mongolian-cultural-soc) ерөнхийлөгч**: Монголын түүх, хэл, уран бичлэгийг сурталчлах соёлын арга хэмжээ зохион байгуулах хороог удирдаж байна.",
    "education.york.desc3": "**[Game Development Society](https://yorksu.org/activities/view/game-development-society)-ийн ерөнхийлөгч**: Unreal Engine 5 болон C++ хөгжүүлэлтийн хичээл явуулж, ~30 гишүүнд зориулсан [game jam](https://tollgnoll.itch.io/the-trip) зохион байгуулдаг.",
    "education.york.desc4": "**AI Society-ийн нярав**: нийгэмлэгийн төсвийг удирдаж, долоо хоног бүрийн хиймэл оюун ухааны лекц, сар бүрийн хакатон зохион байгуулдаг.",

    "education.certificates.degree": "Гэрчилгээ",
    "education.certificates.desc1": "[AI Academy Asia](https://www.ai-academy.asia/en): Хиймэл оюун ухааны сургалт, NLP чатбот бүтээх төсөл (2025 оны 8-р сар) · [ITCareerswitch](https://itcareerswitch.co.uk/): Full Stack хөгжүүлэлт (2024 оны 7-р сар)",

    "education.leeds.degree": "Физикийн дээд боловсролын диплом",
    "education.leeds.school": "Лидсийн Их Сургууль",
    "education.leeds.date": "2018 оны 9-р сар - 2021 оны 7-р сар",
    "education.leeds.desc1": "Биозадралтай, байгальд ээлтэй целлюлозон ширхэгт материал боловсруулах [судалгааны багтай](https://eps.leeds.ac.uk/physics-research-groups/doc/reducing-environmental-impact-cellulose-films) хамтран ажиллаж, Python дээр машин сургалтын аргыг ашигласан.",
    "education.leeds.desc2": "Судалсан хичээлүүд: Статистик механик, Квант механик, Цахилгаан соронзон орон, Бионанотехнологи.",
    "education.leeds.desc3": "Raylib ашиглан [game jam](https://v3.globalgamejam.org/2020/games/village-school-5)-д оролцсон.",

    "education.school.degree": "Ахлах сургууль",
    "education.school.school": "Christ's Hospital School",
    "education.school.location": "Хоршам, Вест Сассекс",
    "education.school.date": "2013 оны 9-р сар - 2018 оны 7-р сар",
    "education.school.desc1": "A-level: Математик A* · Мандарин хэл A · Физик B · Нэмэлт математик C",
    "education.school.desc2": "GCSE: Математик, Нэмэлт математик: A*, A** | Физик, Хими, Биологи: A*, A*, A* | Англи хэл: C",

    // Projects
    "projects.title": "Төслүүд",
    "projects.sign.name": "Монгол дохионы хэлний таних систем",
    "projects.sign.sub": "[Ember](https://ember.mn)",
    "projects.sign.date": "2026 оны 7-р сар - 2026 оны 8-р сар",
    "projects.sign.desc1": "Дохиогоор ярьж буй хүний бичлэгийг монгол бичвэр болгон хөрвүүлдэг компьютер хараанчлалын загвар сургасан. MediaPipe нь кадр бүрээс гар болон биеийн цэгүүдийг ялгаж, PyTorch ангилагч эдгээр цэгүүдийг дохионд харгалзуулдаг.",
    "projects.sign.desc2": "Монгол дохионы хэлэнд сургалтын өгөгдлийн сан урьд нь байгаагүй тул бичлэг цуглуулах хэрэгсэл зохион бүтээж, баталгаажсан 1,236 дохио бүхий толь бичигт тулгуурлан өгөгдлийн санг эхнээс нь бүрдүүлсэн.",

    "projects.script.name": "[Монгол бичиг хөрвүүлэгч](https://huggingface.co/spaces/zqt521/mongolian-converter)",
    "projects.script.sub": "Python, PyTorch, NLP",
    "projects.script.date": "2026 оны 5-р сар",
    "projects.script.desc1": "Кирилл ↔ монгол бичгийн хоёр талт хөрвүүлэгчийг PyTorch дээр хэрэгжүүлж, нээлттэй эхийн корпус дээр сургасан.",
    "projects.script.desc2": "Кирилл үсэг нь монгол бичгийн зарим ялгааг алдсан тул хөрвүүлэлт үргэлж нэг-нэгээр тохирдоггүй. Иймд эргэлзээтэй үгсийг шалгуулахаар тэмдэглэх итгэлцлийн оноог нэмсэн.",

    "projects.no2.name": "Улаанбаатар дээрх NO₂-ын хиймэл дагуулын хяналт",
    "projects.no2.sub": "[Google Earth Engine](https://earthengine.google.com/) Sentinel-5P TROPOMI",
    "projects.no2.date": "2026 оны 6-р сар",
    "projects.no2.desc1": "Sentinel-5P TROPOMI-ийн тропосферийн NO₂-ын өгөгдлийг Улаанбаатар дээр шинжилж, гэр хорооллын өвлийн халаалтын нөлөөг илрүүлэх оролдлого хийсэн.",

    "projects.hackathon.name": "Harvard HSIL [Hackathon](https://hsph.harvard.edu/research/health-systems-innovation-lab/work/hsil-hackathon-2026-building-high-value-health-systems-leveraging-ai/) 2026 — Лондонгийн төв",
    "projects.hackathon.sub": "UCL Global Business School for Health · UCL East",
    "projects.hackathon.date": "2026 оны 4-р сар",
    "projects.hackathon.desc1": "5 хүний багт бэлгийн эрүүл мэндийн аппликейшны машин сургалтын чатбот хэсгийг удирдан, хоёр хоногийн дотор гүйцэтгэсэн.",

    // Skills
    "skills.title": "Ур чадвар",
    "skills.languages": "Програмчлалын хэл",
    "skills.languages.list": "Python, C++, Java, JavaScript",
    "skills.ml": "Машин сургалт ба өгөгдөл",
    "skills.ml.list": "PyTorch, scikit-learn, MediaPipe, NLP",
    "skills.web": "Вэб ба өгөгдлийн сан",
    "skills.web.list": "React, Node.js, Express, REST APIs, MySQL, MongoDB",
    "skills.tools": "Хэрэгслүүд",
    "skills.tools.list": "Git / GitHub, Google Earth Engine, Unreal Engine 5, Unity",
    "skills.spoken": "Ярианы хэл",
    "skills.spoken.list": "Монгол (төрөлх), Англи (төрөлх), Мандарин (дунд түвшин)",

    // Volunteering
    "volunteering.title": "Сайн дурын ажил",
    "volunteering.desc1": "[Европ дахь Монгол эмэгтэйчүүдийн хөгжлийн холбоотой](https://admwe.org/) хамтран Ирланд, Франц, Бельги, Итали улсад Олон улсын эмэгтэйчүүдийн бизнес форум болон шагнал гардуулах ёслолуудыг зохион байгуулахад оролцсон.",
    "volunteering.desc2": "Lord Mayor's 800th Anniversary Trust-ийн хандивын үйл ажиллагааг удирдан, буяны зорилгоор £500 босгосон.",

    // Recordings
    "recordings.title": "Орган хөгжмийн бичлэгүүд",
    "recordings.desc": "Их Британийн янз бүрийн газруудад бичүүлсэн миний орган хөгжмийн тоглолтуудыг сонсоорой.",
    "recordings.link": "Бүх бичлэгийг үзэх",
    "recordings.back": "CV рүү буцах",
    "recordings.subtitle": "Миний орган хөгжмийн тоглолтуудыг сонсоорой",
    "recordings.certificates": "Гэрчилгээ ба тоглолт",

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
  // Always start on "en" so the server and client render the same markup,
  // then restore the saved choice once mounted.
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved === "en" || saved === "mn") setLanguageState(saved)
    } catch {
      // storage unavailable (private browsing, blocked cookies) — keep the default
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore: the toggle still works for this page view
    }
  }

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
