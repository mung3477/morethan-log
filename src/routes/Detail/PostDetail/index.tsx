import React from "react"

import Category from "src/components/Category"
import usePostQuery from "src/hooks/usePostQuery"

import styled from "@emotion/styled"

import NotionRenderer from "../components/NotionRenderer"
import CommentBox from "./CommentBox"
import Footer from "./PostFooter"
import PostHeader from "./PostHeader"

type Props = {}

const PostDetail: React.FC<Props> = () => {
  const data = usePostQuery()

  if (!data) return null

  const category = (data.category && data.category?.[0]) || undefined

  return (
    <StyledWrapper>
      <article>
        {category && (
          <div css={{ marginBottom: "0.5rem" }}>
            <Category readOnly={data.status?.[0] === "PublicOnDetail"}>
              {category}
            </Category>
          </div>
        )}
        {data.type[0] === "Post" && <PostHeader data={data} />}
        <div>
          <NotionRenderer recordMap={data.recordMap} />
        </div>
        {data.type[0] === "Post" && (
          <>
            <Footer />
            <CommentBox data={data} />
          </>
        )}
      </article>
    </StyledWrapper>
  )
}

export default PostDetail

const StyledWrapper = styled.div`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 3rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  margin: 0 auto;
  > article {
    margin: 0 auto;
    max-width: 42rem;
  }
`
