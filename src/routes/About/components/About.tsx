import styled from "@emotion/styled"
import React from "react"
import CV from "../constant/CV"
import CVSection from "./CVSection"
import Information from "./Information"

type Props = {}

const About: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <Information />
      <div className="section-wrapper">
        {CV.map((section) => (
          <CVSection key={section.id} section={section} />
        ))}
      </div>
    </StyledWrapper>
  )
}

export default About

const StyledWrapper = styled.div`
  & h2 {
    margin-bottom: 1rem;
    font-size: 1.75rem;
    line-height: 1.75rem;
    font-weight: 700;
    text-wrap-style: balance;
  }

  & p {
    text-wrap-style: balance;
    line-height: 160%;
  }
`
