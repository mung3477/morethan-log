interface TItem {
  id: string
  title: string
  url?: string
  location?: string
  institution?: string // honors
  authors?: string[] // for publications
  term: string
  role?: string
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

const publications: TItem[] = [
  {
    id: "SemanticControl",
    url: "https://drive.google.com/file/u/1/d/1i4nwpiztXnki2NthBg97ezfwfxh1ECQK/view?usp=sharing",
    title:
      "SemanticControl:\r\n A Training-Free Approach for Handling Loosely Aligned Visual Conditions in ControlNet",
    authors: ["<b><u>Woosung Joung*</u></b>", "Daewon Chae*", "Jinkyu Kim"],
    term: "BMVC 2025",
    role: "First Author (Equal Contribution)",
    description: [
      "Addressed an important issue for ControlNet: existing ControlNet models struggle to use such loosely aligned visual conditions, often resulting in low text fidelity or visual artifacts.",
      "Showed the effectiveness of the proposed method with extensive experimental results and visualizations",
    ],
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
      "Developed and evaluated a training-free enhancement to ControlNet, improving robustness of generative models under loosely aligned visual conditions; results submitted to BMVC 2025.",
      "Collaborating with graduate students to develop scalable methods for autonomous driving dataset augmentation.",
    ],
  },
  {
    id: "Smoretalk",
    title: "Smoretalk",
    location: "Seoul, Republic of Korea",
    term: "May 2023 - Aug 2024",
    role: "Frontend developer",
    description: [
      "Led frontend development for Flamel, an AI image generation platform; implemented core UI components and advanced keyboard shortcuts, supporting 2,500+ users and receiving 100+ positive UX reviews.",
      "Designed and automated a localization pipeline using Google Sheets and I18n, streamlining communication between product and engineering teams.",
    ],
  },
  {
    id: "Facade",
    title: "Facade",
    location: "Seoul, Republic of Korea",
    term: "Jul 2022 - Apr 2023",
    role: "Frontend developer, Founding engineer",
    description: [
      "Founding engineer for Sigmate, a write-to-earn NFT Wiki platform; developed scalable server-side rendering architecture with NextJS to optimize SEO and performance.",
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
      "Designed and deployed a content-based image retrieval system that identifies visually similar Pokémon characters from user-uploaded images.",
      "Engineered efficient model loading and embedding preprocessing pipelines, reducing latency and improving scalability.",
      "Integrated DINOv2 and CLIP for hierarchical feature extraction; implemented high-performance vector search with FAISS.",
    ],
  },
  {
    id: "gojo",
    title: "Unlimited Void (Muryōkūsho)",
    term: "Summer 2024",
    institution: "AIKU (Deep Learning Student Club of KU)",
    role: "Team Lead",
    description: [
      "Led the fine-tuning of LLaMa3-7B using synthetic conversation data generated via the Gemini API, enabling the model to emulate a specific anime character persona through QLoRA.",
      "Deployed an interactive demo on Modal Labs and Vercel, demonstrating real-time persona-driven dialogue generation.",
    ],
  },
  {
    id: "should-i-buy",
    title: "Should I Buy?",
    term: "Spring 2024",
    institution: "AIKU (Deep Learning Student Club of KU)",
    role: "Team Lead",
    description: [
      "Developed a multi-modal prediction pipeline for bitcoin prices, integrating tabular chart data and social media articles.",
      "Employed transformer encoders for time-series analysis and fine-tuned BERT models for sentiment extraction from text.",
      "Built and orchestrated the entire pipeline in PyTorch, enabling end-to-end data preprocessing, feature extraction, and prediction.",
    ],
  },
  {
    id: "smarter-GAN",
    title: "SmarterGAN",
    term: "Fall 2023",
    institution: "COSE474 (Deep Learning) Coursework",
    role: "Solo Work",
    description: [
      "Investigated the impact of initializing GANs with pretrained discriminators on image generation quality.",
    ],
  },
  {
    id: "topic-modeling",
    title: "Topic Modeling for Beauty Product Reviews ",
    term: "Fall 2023",
    institution: "COSE362 (Machine Learning) Coursework",
    role: "Team Project",
    description: [
      "Developed a keyword extraction pipeline for beauty product reviews, combining sentence embedding clustering (HDBSCAN) with Latent Dirichlet Allocation (LDA) for topic modeling.",
    ],
  },
  {
    id: "ara",
    title: "ARA: OS boundless data transfer service ",
    term: "Jan 2020 – Jul 2023",
    institution: "Team ARA",
    role: "Desktop App & Web Page Developer",
    description: [
      "Engineered a cross-platform desktop application (ARA) supporting seamless file transfer and universal clipboard across operating systems.",
      "Utilized Electron, Firebase, WebRTC, and Svelte to ensure real-time data exchange.",
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
    id: "publications",
    title: "Publications",
    items: publications,
  },
  {
    id: "honors",
    title: "Selected Honors and Awards",
    items: honors,
  },
  {
    id: "work",
    title: "Work Experiences",
    items: workExperiences,
  },

  {
    id: "projects",
    title: "Projects",
    items: projects,
  },
]

export default CV
export type { TItem, TSection }
