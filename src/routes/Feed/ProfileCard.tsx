import React from "react"

import Image from "next/image"
import { CONFIG } from "site.config"

import styled from "@emotion/styled"

type Props = {}

const ProfileCard: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <div className="title">Profile</div>
      <div className="content">
        <div className="top">
          <Image src={CONFIG.profile.image} fill alt="" />
        </div>
        <div className="mid">
          <div className=" name">{CONFIG.profile.name}</div>
          <div className="role">{CONFIG.profile.role}</div>
          <div className="bio">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </StyledWrapper>
  )
}

export default ProfileCard

const StyledWrapper = styled.div`
  > .title {
    margin-bottom: 0.5rem;

    font-weight: 700;
    font-size: 1.25rem;

    @media (max-width: 1024px) {
      font-size: 1.75rem;
    }
  }
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;

    .top {
      position: relative;
      width: 100%;
      border-radius: 0.5rem;
      overflow: hidden;
      margin-bottom: 1rem;

      &:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
    }
    .mid {
      display: flex;
      flex-direction: column;

      .name {
        font-size: 1.25rem;
        line-height: 1.75rem;
      }
      .role {
        margin-bottom: 1rem;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.25rem;
        color: ${({ theme }) => theme.colors.sand11};
      }
      .bio {
        margin-bottom: 0.375rem;
        font-size: 0.875rem;
        font-weight: 300;
        line-height: 1.25rem;
      }
    }
  }
`
