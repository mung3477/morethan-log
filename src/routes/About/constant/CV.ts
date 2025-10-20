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
    url: "https://mung3477.github.io/semantic-control/",
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
  {
    id: "Truthful-Intehitance",
    // url: "https://mung3477.github.io/semantic-control/",
    title:
      "Identifying Truthful Inheritance in Family Models and Enhancing Truthfulness",
    authors: [
      "Miso Choi",
      "Seonga Choi",
      "Mincheol Kwon",
      "<b><u>Woosung Joung</u></b>",
      "Jinkyu Kim",
    ],
    term: "Under Review",
    role: "Contributed to experiments",
    description: [
      "Conducted experiments on combining our intervention strategies with direct attention weight manipulation methods such as VCD, OPERA, PAI, and VisAttnSink.",
    ],
  },
]

const workExperiences: TItem[] = [
  {
    id: "VAI",
    title: "Vision&AI",
    location: "Korea University, Seoul, Republic of Korea",
    term: "Sep 2024 - Current",
    role: "Research Intern",
    description: [
      "Improved ControlNet’s robustness when visual conditions conflict with text prompts. Proposed training-free method to attenuate conflicting areas of ControlNet features, using saliency maps from surrogate prompt that describes visual reference; outperformed baselines by at least 1.5x in human studies on canny-edge conditioning",
      "Verified whether our method-identifying and modulating hallucination-related transformer heads shared within each model family—can combined with other hallucination mitigation methods such as VCD or PAI",
    ],
  },
  {
    id: "Smoretalk",
    title: "Smoretalk",
    location: "Seoul, Republic of Korea",
    term: "May 2023 - Jan 2025",
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
      "Co-founded Sigmate, NFT wiki platform; built Notion‑style, block‑based editor and optimized search engine optimization with NextJS.",
      "Secured $35,000 in commercialization funding through Pre-startup Package Program administered by Korea Institute of Startup & Entrepreneurship Development.",
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
    role: "Full tuition until graduation ($35,000)",
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
    institution: "AIKU Fall 2024 Term Project (Best Project Award)",
    role: "Team Lead",
    description: [
      "Designed and deployed a content-based image retrieval system that identifies visually similar Pokémon characters from user-uploaded images.",
      "Engineered efficient model loading and embedding preprocessing pipelines, reducing latency and improving scalability.",
      "Integrated DINOv2 and CLIP for hierarchical feature extraction; implemented high-performance vector search with FAISS, enabling live demo for 50+ attendees at internal conference.",
    ],
  },
  {
    id: "gojo",
    title: "Unlimited Void (Muryōkūsho)",
    term: "Summer 2024",
    institution: "AIKU Summer 2024 Project",
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
    institution: "AIKU Spring 2024 Term Project",
    role: "Team Lead",
    description: [
      "Developed a multi-modal prediction pipeline for bitcoin prices, integrating tabular chart data and social media articles.",
      "Employed transformer encoders for time-series analysis and fine-tuned BERT models for sentiment extraction from text.",
      "Built and orchestrated the entire pipeline in PyTorch, enabling end-to-end data preprocessing, feature extraction, and prediction.",
    ],
  },
  {
    id: "topic-modeling",
    title: "Topic Modeling for Beauty Product Reviews ",
    term: "Fall 2023",
    institution: "COSE362 (Machine Learning) Team Project",
    role: "Team Member",
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

const extraCurriculars: TItem[] = [
  {
    id: "HoKU",
    title: "Humans of Korea University (HoKU, Street Interview Student Club)",
    url: "https://blog.naver.com/humansofkoreauniv",
    location: "Korea University, Seoul",
    term: "Sep 2025 - Current",
    role: "Photography Team Member",
    description: [
      "Served on the photography team, photographing 8 interviews featuring people around Korea University",
      "Published special interview edition featuring people I met during my first semester in HoKU",
    ],
  },
  {
    id: "AIKU",
    title:
      "Artificial Intelligence in Korea University (AIKU, Deep Learning Student Club)",
    location: "Korea University, Seoul",
    term: "Jan 2024 - Jan 2025",
    role: "Club Member",
    description: [
      "Presented to 30+ peers on reasoning behind deep learning foundations, linking Rosenblatt's perceptron to nonlinear activations and Hopfield networks to the emergent abilities of large models",
      "Awarded Eco-Friendly Prize at 3rd AIKUTHON(internal recommendation system datathon)--placed 5th/12 with CPU-only solution evaluated on quantitative accuracy metrics, and justified strategic use of rule-based approach over trained model",
    ],
  },
  {
    id: "LifeCommons",
    title: "LifeCommons (Photography Student Club)",
    location: "Korea University, Seoul",
    term: "Aug 2019 - Current",
    role: "Club Member, Vice President (2022)",
    description: [
      "Served as vice president at 2022; Revived regular club events (e.g., semester photo trips and exhibitions) after COVID-19, drawing on prior experience as one of two only members familiar with pre-pandemic activities",
      "Tutored basics of photography weekly to 60+ club members in 2022",
      "Organized 20+ group photo trips as semester group leader",
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
    id: "work",
    title: "Research & Work Experiences",
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
  {
    id: "extra-curriculars",
    title: "Leadership & Extra Curricular Activities",
    items: extraCurriculars,
  },
]

export default CV
export type { TItem, TSection }
