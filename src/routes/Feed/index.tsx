import { useState } from "react"

import styled from "@emotion/styled"

import ContactCard from "./ContactCard"
import { FeedHeader } from "./FeedHeader"
import Footer from "./Footer"
import MobileProfileCard from "./MobileProfileCard"
import PostList from "./PostList"
import PinnedPosts from "./PostList/PinnedPosts"
import ProfileCard from "./ProfileCard"
import SearchInput from "./SearchInput"
import TagList from "./TagList"

import { HEADER_HEIGHT } from "src/layouts/RootLayout/Header"

type Props = {}

const Feed: React.FC<Props> = () => {
  const [q, setQ] = useState("")

  return (
    <StyledWrapper>
      <div
        className="lt"
        css={{
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
        <TagList />
      </div>
      <div className="mid">
        <MobileProfileCard />
        <PinnedPosts q={q} />
        <div className="tags">
          <SearchInput value={q} onChange={(e) => setQ(e.target.value)} />
          <TagList />
        </div>
        <FeedHeader />
        <PostList q={q} />
        <div className="footer">
          <Footer />
        </div>
      </div>
      <div
        className="rt"
        css={{
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        <ProfileCard />
        {/** <ServiceCard / > */}
        <ContactCard />
        <div className="footer">
          <Footer />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Feed

const StyledWrapper = styled.div`
  grid-template-columns: repeat(12, minmax(0, 1fr));
  display: grid;
  gap: 3rem;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
  }

  > .lt {
    display: none;
    overflow: scroll;
    position: sticky;
    grid-column: span 2 / span 2;
    top: ${HEADER_HEIGHT}px;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (min-width: 1024px) {
      display: block;
    }
  }

  > .mid {
    grid-column: span 12 / span 12;

    @media (min-width: 1024px) {
      grid-column: span 7 / span 7;
    }

    > .tags {
      display: block;
      margin: 2rem 0;

      @media (min-width: 1024px) {
        display: none;
      }
    }

    > .footer {
      padding-bottom: 2rem;
      @media (min-width: 1024px) {
        display: none;
      }
    }
  }

  > .rt {
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    display: none;
    overflow: scroll;
    position: sticky;
    top: ${HEADER_HEIGHT}px;

    @media (min-width: 1024px) {
      display: block;
      grid-column: span 3 / span 3;
    }

    .footer {
      padding-top: 1rem;
    }
  }
`
