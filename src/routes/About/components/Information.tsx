import styled from "@emotion/styled"
import Image from "next/image"
import React from "react"
import { bio, news } from "../constant/information"

import { CONFIG } from "site.config"

type Props = {}

const Information: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="bio">
        <h2>Introduction</h2>
        <div className="wrapper">
          <div className="profile-image">
            <Image
              src={CONFIG.profile.realImage}
              fill
              objectFit="contain"
              style={{ float: "left" }}
              alt=""
            />
          </div>
          <p>{bio}</p>
        </div>
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
    @media (max-width: 1024px) {
      margin-bottom: 2.5rem;
    }

    .wrapper {
      display: grid;
      grid-template-columns: repeat(10, minmax(0, 1fr));
      gap: 1rem;

      .profile-image {
        position: relative;
        grid-column: span 3 / span 3;
        aspect-ratio: 1920 / 2083;
      }

      p {
        grid-column: span 7 / span 7;
        margin: 0;
        white-space: break-spaces;
        font-weight: 300;
      }
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
      font-weight: 300;
    }
  }
`
