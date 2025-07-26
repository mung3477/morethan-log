import React, { MouseEventHandler, useState } from "react"

import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai"

import styled from "@emotion/styled"

import type { TItem } from "../constant/CV"

type Props = { item: TItem }

const CVItem: React.FC<Props> = ({ item }) => {
  const [expanded, setExpanded] = useState(false)

  const onClickItem: MouseEventHandler = (e) => {
    setExpanded((cur) => !cur)
  }

  return (
    <StyledWrapper onClick={onClickItem}>
      <div className="top">
        <div className="basic-info">
          <div className="title-term-wrapper">
            <h4>
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h4>
            <span className="term">{item.term}</span>
          </div>
          <span>
            {item.location ||
              item.institution ||
              (item.authors && (
                <span
                  dangerouslySetInnerHTML={{ __html: item.authors.join(", ") }}
                />
              ))}
          </span>
        </div>
      </div>
      <div className="bottom">
        <p>{item.role}</p>
        {expanded ? <AiFillCaretDown /> : <AiFillCaretRight />}
      </div>
      <ul className="desc" data-expanded={expanded}>
        {item.description?.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default CVItem

const StyledWrapper = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 2rem;
  }

  .top {
    h4 {
      font-size: 1.25rem;
      font-weight: 500;
      line-height: 1.75rem;
      text-wrap-style: balance;

      a {
        color: ${({ theme }) => theme.colors.sand12};
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    span {
      font-weight: 200;
      font-size: 0.875rem;
      color: ${({ theme }) => theme.colors.sand10};
    }

    .title-term-wrapper {
      display: flex;
      flex-direction: column-reverse;
      align-items: start;
    }

    .term {
      padding: 0.0075rem;
      margin-right: 0.75rem;
      color: ${({ theme }) => theme.colors.sand12};
      border: 1px solid ${({ theme }) => theme.colors.sand10};

      @media (max-width: 768px) {
        margin-left: 0;
      }
    }
  }

  .bottom {
    display: flex;
    align-items: center;

    p {
      margin: 0.75rem 0.5rem 0.75rem 0;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.25rem;
    }
  }

  .desc {
    margin: 0;
    max-height: 0px;
    overflow: hidden;

    transition-property: max-height;
    transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
    transition-duration: 300ms;

    &[data-expanded="true"] {
      max-height: 100vh;
    }

    li {
      position: relative;
      padding: 0 1rem;
      margin-bottom: 0.375rem;
      font-size: 0.875rem;
      font-weight: 300;
      line-height: 1.25rem;

      :before {
        content: "";
        position: absolute;
        top: 0.5rem;
        left: 5px;
        width: 2px;
        height: 2px;
        border-radius: 100%;
        background-color: ${({ theme }) => theme.colors.sand12};
      }
    }
  }
`
