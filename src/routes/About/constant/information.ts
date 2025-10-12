interface TNews {
  id: number
  date: string
  summary: string
}

const bio =
  'Thank you for coming!\
  \r\nI am a AI Researcher / former frontend developer,\
  \r\nand also a relentless "why" person.\
  \r\n\r\nMy goal is to make models truly understand what humans mean without detailed instructions.\
  \r\nI hope to enable seamless human-AI collaboration, where people no longer adapt to the model’s limitations, but the models can infer and adapt to human intent from minimal, multimodal cues.'

const news: TNews[] = [
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
