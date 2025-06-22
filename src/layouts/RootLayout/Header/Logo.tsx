import Link from "next/link"
import { CONFIG } from "site.config"

import styled from "@emotion/styled"

const Logo = () => {
  return (
    <StyledWrapper href="/" aria-label={CONFIG.blog.title}>
      {CONFIG.blog.title}
    </StyledWrapper>
  )
}

export default Logo

const StyledWrapper = styled(Link)`
  font-weight: 100;
  font-size: 36px;

  @media (max-width: 768px) {
    font-size: 28px;
    max-width: 150px;
    text-overflow: ellipsis;
    white-space: pre;
    overflow: hidden;
  }

  @media (max-width: 375px) {
    max-width: 75px;
  }
`
