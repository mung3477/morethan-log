import MetaConfig from "src/components/MetaConfig"
import Feed from "src/routes/Feed"

import { CONFIG } from "../../site.config"
import { NextPageWithLayout } from "../types"

type Props = {}

const FeedPage: NextPageWithLayout<Props> = () => {
  return <Feed />
}

FeedPage.getLayout = (page) => {
  return (
    <>
      <MetaConfig
        {...{
          title: CONFIG.blog.title,
          description: CONFIG.blog.description,
          type: "website",
          url: CONFIG.link,
        }}
      />
      {page}
    </>
  )
}

export default FeedPage
