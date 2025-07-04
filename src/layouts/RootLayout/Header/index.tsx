import { zIndexes } from "src/styles/zIndexes"

import styled from "@emotion/styled"

import Logo from "./Logo"
import NavBar from "./NavBar"
import ThemeToggle from "./ThemeToggle"

type Props = {
  fullWidth: boolean
}

const HEADER_HEIGHT = 104

const Header: React.FC<Props> = ({ fullWidth }) => {
  return (
    <StyledWrapper>
      <div data-full-width={fullWidth} className="container">
        <Logo />
        <div className="nav">
          <NavBar />
          <ThemeToggle />
        </div>
      </div>
    </StyledWrapper>
  )
}

export default Header

export { HEADER_HEIGHT }

const StyledWrapper = styled.div`
  z-index: ${zIndexes.header};
  position: sticky;
  top: 0;
  padding-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.sand1};

  .container {
    display: flex;
    padding-left: 1rem;
    padding-right: 1rem;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1120px;
    height: 4.5rem;
    margin: 0 auto;
    &[data-full-width="true"] {
      @media (min-width: 768px) {
        padding-left: 6rem;
        padding-right: 6rem;
      }
    }
    .nav {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      justify-content: space-between;
    }
  }
`
