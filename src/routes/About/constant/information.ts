interface TNews {
  id: number
  date: string
  summary: string
}

const bio =
  "Thank you for coming!\r\nI am a newbie AI Researcher / former frontend developer,\r\nand also a relentless questioner.\r\n\r\nMy goal is to make predictable & human-aligned generative models by understanding their behavior."

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
