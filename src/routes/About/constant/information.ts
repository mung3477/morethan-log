interface TNews {
  id: number
  date: string
  summary: string
}

const bio =
  "Thank you for coming!\
  \r\nI am a AI Researcher / former frontend developer.\
  \r\n\r\nMy goal is to make AI systems effective collaborators for people.\
  \r\n\r\nI am interested in improving generative models’ generalization and developing mechanisms that give users direct controlover AI behavior. Ultimately, I aim to build systems that internalize these mechanisms and naturally infer intent."

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
