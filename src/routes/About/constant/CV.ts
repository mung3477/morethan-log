interface TItem {
  id: string
  title: string
  location?: string
  term: string
  role?: string
  institution?: string // scholarship, education
  description?: string[] // bullet points
}

interface TSection {
  id: string
  title: string
  items: TItem[]
}

const education: TItem[] = [
  {
    id: "KU",
    title: "Korea University",
    location: "Seoul, Republic of Korea",
    term: "2019 - 2026",
    role: "B.S. in Computer Science and Engineering",
    description: ["Cumulative GPA: 4.36/4.5"],
  },
  {
    id: "UMD",
    title: "University of Maryland, College Park",
    location: "Maryland, United States",
    term: "Spring 2025",
    role: "Exchange student in Computer Science and Engineering",
    description: ["GPA: 4.0/4.0"],
  },
]

const workExperiences: TItem[] = [
  {
    id: "VAI",
    title: "Vision&AI",
    location: "Korea University, Republic of Korea",
    term: "Sep 2024 - Current",
    role: "Research Intern",
    description: [
      "Researched about a training-free enhancement to ControlNet that enables robust generation under loosely aligned visual conditions",
    ],
  },
  {
    id: "Smoretalk",
    title: "Smoretalk",
    location: "Seoul, Republic of Korea",
    term: "May 2023 - Jan 2025",
    role: "Frontend developer",
    description: [
      "Developed website for Flamel, an AI image generation service, using React and Typescript.",
      "Implemented overall components, keyboard shortcuts, transitions and responsive designs as the team’s only frontend developer, resulting in over 2,500 users and 100 compliments on intuitive UX.",
      "Set up a pipeline to translate the website based on user preferences using Google Sheet and I18n module, reducing redundant communications between product managers and developers.",
      "Improved on-page SEO with meta tags and semantic markups.",
    ],
  },
  {
    id: "Facade",
    title: "Facade",
    location: "Seoul, Republic of Korea",
    term: "Jul 2022 - Apr 2023",
    role: "Frontend developer, Founding engineer",
    description: [
      "Developed website for Sigmate, a write-to-earn NFT Wiki service, focusing on SEO with SSR using NextJS.",
    ],
  },
]

const honors: TItem[] = [
  {
    id: "Kiat",
    title:
      "Korea – U.S. Special Exchange Program Scholarship for STEM Students",
    term: "Spring 2025",
    institution: "Korea Institute for Advancement of Technology",
    role: "Stipend for a single semester ($9,000)",
    description: [
      "The Ministry of Trade, Industry and Energy sponsored young talents in science and engineering who are scheduled to be dispatched as exchange students to U.S. universities, to provide opportunities to acquire technology and experience in advanced industries in the United States for the purpose of fostering global talent.",
    ],
  },
  {
    id: "national-scholarship",
    title: "The National Scholarship for Science and Engineering",
    term: "Fall 2019 - Fall 2025",
    institution: "Korea Student Aid Foundation",
    role: "Full tuition until graduation ($24,900)",
    description: [
      "This program supports outstanding talent to actively encourage them to pursue science and engineering fields, foster them as core national talent, and secure a competitive edge for the country in science and technology.",
    ],
  },
  {
    id: "dean-list",
    title: "Dean’s list",
    term: "Fall 2022",
    institution: "Korea University",
    role: "Award",
    description: [
      "An award given to an undergraduate student with GPA 4.5/4.5 for a semester.",
    ],
  },
]

const projects: TItem[] = [
  {
    id: "similar-pokemon",
    title: "Which pokemon do I look like?",
    term: "Fall 2024",
    institution: "AIKU (Deep Learning Student Club of KU)",
    role: "Team Lead",
    description: [
      "Deployed a content based image retrieval(CBIR) service that finds a pokemon which is similar with the given image. Focused on efficient model loading and preprocessing image embeddings to enhance UX.",
      "Utilized DINOv2 and CLIP embeddings to capture both coarse structures and fine-grained details. Implemented vector search with FAISS.",
    ],
  },
  {
    id: "gojo",
    title: "Unlimited Void (Muryōkūsho)",
    term: "Summer 2024",
    institution: "AIKU (Deep Learning Student Club of KU)",
    role: "Team Lead",
    description: [
      "Using synthetic conversation data created with Gemini API, we conducted QLoRA on a pretrained LLaMa3-7B to enable an LLM to portray a persona of certain anime character.",
      "Deployed a demo using Modal labs and Vercel.",
    ],
  },
  {
    id: "should-i-buy",
    title: "Should I Buy?",
    term: "Spring 2024",
    institution: "AIKU (Deep Learning Student Club of KU)",
    role: "Team Lead",
    description: [
      "Proposed and implemented a pipeline to predict bitcoin prices using tabular chart data and bitcoin related articles on social media, with transformer encoders and pretrained BERTs respectively.",
      "Used Pytorch to preprocess and utilize chart data and construct the overall pipeline.",
    ],
  },
  {
    id: "smarter-GAN",
    title: "SmarterGAN",
    term: "Fall 2023",
    institution: "COSE474 (Deep Learning) Coursework",
    role: "Solo Work",
    description: [
      "Proposed a hypothesis that initializing a GAN with a pretrained discriminator might improve the image generation quality.",
    ],
  },
  {
    id: "topic-modeling",
    title: "Topic Modeling for Beauty Product Reviews ",
    term: "Fall 2023",
    institution: "COSE362 (Machine Learning) Coursework",
    role: "Team Project",
    description: [
      "Proposed a pipeline for extracting keywords from reviews about beauty products using clustering and LDA.",
      "Successfully clustered sentence embeddings using the HDBSCAN algorithm.",
    ],
  },
  {
    id: "ara",
    title: "ARA: OS boundless data transfer service ",
    term: "Jan 2020 – Jul 2023",
    institution: "Team ARA",
    role: "Desktop App & Web Page Developer",
    description: [
      "Developed desktop application for ARA, a service that enables airdrop and universal clipboard regardless of the OS, using Electron, Firebase, webRTC and Svelte.",
    ],
  },
]

const CV: TSection[] = [
  {
    id: "edu",
    title: "Education",
    items: education,
  },
  {
    id: "work",
    title: "Work Experiences",
    items: workExperiences,
  },
  {
    id: "honors",
    title: "Selected Honors and Awards",
    items: honors,
  },
  {
    id: "projects",
    title: "Projects",
    items: projects,
  },
]

export default CV
export type { TItem, TSection }
