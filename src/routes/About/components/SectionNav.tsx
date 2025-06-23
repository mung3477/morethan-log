import styled from "@emotion/styled"
import React from "react"
import CV from "../constant/CV"
import { useVisibleSection } from "../hooks/useVisibleSection"

type Props = {}

const SectionNav: React.FC<Props> = () => {
  const visibleSection = useVisibleSection(CV)

  return (
    <StyledWrapper>
      <div className="top">Index</div>
      <div className="list">
        {CV.map((section) => (
          <a
            key={section.id}
            data-active={section.id === visibleSection}
            href={`#${section.id}`}
          >
            {section.title}
          </a>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default SectionNav

const StyledWrapper = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }

  .top {
    padding: 0 0.25rem;
    margin-bottom: 0.5rem;

    font-weight: 700;
    font-size: 1.25rem;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    a {
      display: block;
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.sand10};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        // background-color: ${({ theme }) => theme.colors.sand4};
        text-decoration: underline;
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.sand12};
        // background-color: ${({ theme }) => theme.colors.sand4};
        text-decoration: underline;

        /**
          :hover {
            background-color: ${({ theme }) => theme.colors.sand4};
          }
        */
      }
    }
  }
`
