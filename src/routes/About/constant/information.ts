interface TNews {
  id: number
  date: string
  summary: string
}

const bio =
  "Newbie AI Researcher / Former frontend developer.\r\nRelentless Questioner.\r\nI want to understand the world with visual understandings!"

const news: TNews[] = [
  {
    id: 0,
    date: "May 2025",
    summary: "Successfully finished my exchange student program in UMD!",
  },
  {
    id: 1,
    date: "Jun 2025",
    summary: "Personal blog was renewed!",
  },
]

export { bio, news }
