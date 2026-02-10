import MetaConfig from "src/components/MetaConfig"
import Feed from "src/routes/Feed"

import { GetStaticProps } from "next"
import { queryKey } from "src/constants/queryKey"
import { queryClient } from "src/libs/react-query"
import { filterPosts } from "src/libs/utils/notion"

import { dehydrate } from "@tanstack/react-query"

import { CONFIG } from "../../site.config"
import { getPosts } from "../apis"
import { NextPageWithLayout } from "../types"

export const getStaticProps: GetStaticProps = async () => {
  const posts = filterPosts(await getPosts())
  await queryClient.prefetchQuery(queryKey.posts(), () => posts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: CONFIG.revalidateTime,
  }
}

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
