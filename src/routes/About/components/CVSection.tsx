import styled from "@emotion/styled"
import React from "react"
import { HEADER_HEIGHT } from "src/layouts/RootLayout/Header"
import type { TSection } from "../constant/CV"
import CVItem from "./CVItem"

type Props = { section: TSection }

const CVSection: React.FC<Props> = ({ section }) => {
  return (
    <StyledWrapper>
      <h1 id={section.id} />
      <h2>{section.title}</h2>
      {section.items.map((item) => (
        <CVItem key={item.id} item={item} />
      ))}
    </StyledWrapper>
  )
}

export default CVSection

const StyledWrapper = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  > h1 {
    position: absolute;
    top: -${HEADER_HEIGHT}px;
  }
`
