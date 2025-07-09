interface TNews {
  id: number
  date: string
  summary: string
}

const bio =
  "Thank you for coming!\r\nI am a Newbie AI Researcher / former frontend developer,\r\nand also a relentless questioner.\r\nI am interested in scalable and controllable generative models."

const news: TNews[] = [
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
