import Image from "next/image"
import Link from "next/link"
import { CONFIG } from "site.config"
import { formatDate } from "src/libs/utils"

import styled from "@emotion/styled"

import Category from "../../../components/Category"
import Tag from "../../../components/Tag"
import { TPost } from "../../../types"

type Props = {
  data: TPost
}

const PostCard: React.FC<Props> = ({ data }) => {
  const category = (data.category && data.category?.[0]) || undefined

  return (
    <StyledWrapper href={`/${data.slug}`}>
      <article>
        {data.thumbnail && (
          <div className="thumbnail">
            <Image
              src={data.thumbnail}
              fill
              alt={data.title}
              css={{ objectFit: "cover" }}
            />
          </div>
        )}

        <div
          data-thumb={!!data.thumbnail}
          data-category={!!category}
          className="content"
        >
          {category && (
            <div className="category">
              <Category>{category}</Category>
            </div>
          )}
          <header className="top">
            <h2>{data.title}</h2>
          </header>
          <div className="date">
            <div className="content">
              {formatDate(
                data?.date?.start_date || data.createdTime,
                CONFIG.lang
              )}
            </div>
          </div>
          <div className="summary">
            <p>{data.summary}</p>
          </div>
          <div className="tags">
            {data.tags &&
              data.tags.map((tag: string, idx: number) => (
                <Tag key={idx}>{tag}</Tag>
              ))}
          </div>
        </div>
      </article>
    </StyledWrapper>
  )
}

export default PostCard

const StyledWrapper = styled(Link)`
  article {
    overflow: hidden;
    position: relative;
    margin-bottom: 1.5rem;

    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;

    @media (min-width: 768px) {
      margin-bottom: 2rem;
    }

    .category {
      margin-bottom: 0.375rem;
    }

    > .thumbnail {
      position: relative;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.sand2};
      padding-bottom: 66%;
      border-top-right-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
      overflow: hidden;

      @media (min-width: 1024px) {
        padding-bottom: 50%;
      }
    }
    > .content {
      padding: 0.75rem 0;

      &[data-thumb="false"] {
        padding-top: 3.5rem;
      }
      &[data-category="false"] {
        padding-top: 1.5rem;
      }
      > .top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (min-width: 768px) {
          flex-direction: row;
          align-items: baseline;
        }
        h2 {
          margin-bottom: 0.375rem;
          font-size: 1.75rem;
          line-height: 1.75rem;
          font-weight: 700;

          cursor: pointer;

          :hover {
            text-decoration: underline;
          }
        }
      }
      > .date {
        display: flex;
        margin-bottom: 0.75rem;
        gap: 0.5rem;
        align-items: center;
        .content {
          font-size: 0.875rem;
          font-weight: 300;
          line-height: 1.25rem;
          color: ${({ theme }) => theme.colors.sand10};
          @media (min-width: 768px) {
            margin-left: 0;
          }
        }
      }
      > .summary {
        margin-bottom: 0.375rem;
        p {
          display: none;
          line-height: 1.5rem;
          font-weight: 300;
          margin: 0;
          @media (min-width: 768px) {
            display: block;
          }
        }
      }
      > .tags {
        display: flex;
        gap: 0.375rem;
      }
    }
  }
`
