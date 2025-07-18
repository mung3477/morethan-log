import React from "react"

import { useRouter } from "next/router"
import { useTagsQuery } from "src/hooks/useTagsQuery"

import styled from "@emotion/styled"

type Props = {}

const TagList: React.FC<Props> = () => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined
  const data = useTagsQuery()

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  return (
    <StyledWrapper>
      <div className="top">Tags</div>
      <div className="list">
        {Object.keys(data).map((key) => (
          <a
            key={key}
            data-active={key === currentTag}
            onClick={() => handleClickTag(key)}
          >
            {key}
          </a>
        ))}
      </div>
    </StyledWrapper>
  )
}

export default TagList

const StyledWrapper = styled.div`
  .top {
    display: none;
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
