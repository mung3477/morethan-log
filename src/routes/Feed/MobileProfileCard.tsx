import React from "react"

import Image from "next/image"
import { CONFIG } from "site.config"

import styled from "@emotion/styled"

type Props = {
  className?: string
}

const MobileProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="top">Profile</div>
      <div className="mid">
        <div className="wrapper">
          <Image
            src={CONFIG.profile.image}
            width={90}
            height={90}
            css={{
              position: "relative",
              borderRadius: "0.5rem",
              marginRight: "1rem",
            }}
            alt="profile_image"
          />
          <div className="wrapper">
            <div className="top">{CONFIG.profile.name}</div>
            <div className="mid">{CONFIG.profile.role}</div>
            <div className="btm">{CONFIG.profile.bio}</div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default MobileProfileCard

const StyledWrapper = styled.div`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }

  > .top {
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    font-weight: 700;
    font-size: 1.75rem;
  }
  > .mid {
    padding: 0.5rem;
    margin-bottom: 1rem;

    > .wrapper {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      > .wrapper {
        height: fit-content;
        > .top {
          font-size: 1.25rem;
          line-height: 1.75rem;
        }
        > .mid {
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 300;
          color: ${({ theme }) => theme.colors.sand10};
        }
        > .btm {
          line-height: 1.5rem;
          font-weight: 300;
        }
      }
    }
  }
`
