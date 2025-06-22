import React from "react"

import { CONFIG } from "site.config"

import styled from "@emotion/styled"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <StyledTitle>Service</StyledTitle>
      <StyledWrapper>
        {CONFIG.projects.map((project, idx) => (
          <a
            key={idx}
            href={`${project.href}`}
            rel="noreferrer"
            target="_blank"
          >
            <div className="name">{project.name}</div>
          </a>
        ))}
      </StyledWrapper>
    </>
  )
}

export default ServiceCard

const StyledTitle = styled.div`
  margin-bottom: 0.5rem;
`

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 2.25rem;
  flex-direction: column;
  border-radius: 1rem;

  > a {
    display: flex;
    padding: 0.5rem;
    gap: 0.5rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.sand11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.sand12};
      text-decoration: underline;
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
