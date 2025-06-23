import styled from "@emotion/styled"
import React from "react"
import { HEADER_HEIGHT } from "src/layouts/RootLayout/Header"
import PersonalInfo from "./components/About"
import SectionNav from "./components/SectionNav"

type Props = {}

const AboutPage: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="left">
        <SectionNav />
      </div>
      <div className="mid">
        <PersonalInfo />
      </div>
    </StyledWrapper>
  )
}

export default AboutPage

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;
  }

  > .left {
    position: sticky;
    top: ${HEADER_HEIGHT}px;
    height: calc(100vh - ${HEADER_HEIGHT}px);
    overflow: scroll;
    grid-column: span 2 / span 2;

    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }

  > .mid {
    grid-column: span 12 / span 12;

    @media (min-width: 768px) {
      grid-column: span 10 / span 10;
    }
  }
`
