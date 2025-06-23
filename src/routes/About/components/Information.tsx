import styled from "@emotion/styled"
import React from "react"
import { bio, news } from "../constant/information"

type Props = {}

const Information: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="bio">
        <h2>Introduction</h2>
        <p>{bio}</p>
      </div>
      <div className="news">
        <h2>News</h2>
        {news.map((event) => (
          <div key={event.id} className="news-item">
            <p className="news-date">{event.date}</p>
            <p className="news-summary">{event.summary}</p>
          </div>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default Information

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 2.5rem;
  margin-bottom: 2.5rem;

  @media (max-width: 1024px) {
    display: block;
  }

  > .bio {
    p {
      margin: 0;
      white-space: break-spaces;
    }

    @media (max-width: 1024px) {
      margin-bottom: 2.5rem;
    }
  }

  & .news-item {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 1rem;
    margin-bottom: 0.5rem;

    .news-date {
      margin: 0;
      grid-column: span 1 / span 1;
      font-weight: 200;
    }

    .news-summary {
      margin: 0;
      grid-column: span 3 / span 3;
    }
  }
`
