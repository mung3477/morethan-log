interface TNews {
  id: number
  date: string
  summary: string
}

const bio =
  "Thank you for coming!\
  \r\nI am a AI Researcher / former frontend developer.\
  \r\n\r\nI am interested in understanding how AI systems can remain robust in unfamiliar contexts, especially in vision related tasks such as image generation or robotic manipulation.\
  \r\n\r\nI aim to avoid naive scaling of models and datasets, and instead focusing on demystifying what models know and what they don't.\
  \r\n\r\nUltimately, I aim to build models that robustly interpret and act on user intent across diverse modalities like humans, so people can articulate goals naturally rather than adapt to the system."

const news: TNews[] = [
  {
    id: 3,
    date: "Sep 2025",
    summary: "Joined a new student club, Humans of Korea University!",
  },
  {
    id: 2,
    date: "Jul 2025",
    summary: "My first paper was accepted to BMVC 2025!",
  },
  {
    id: 1,
    date: "Jun 2025",
    summary: "Personal blog was renewed!",
  },
  {
    id: 0,
    date: "May 2025",
    summary: "Successfully finished my exchange student program in UMD!",
  },
]

export { bio, news }
