import React, { InputHTMLAttributes } from "react"

import styled from "@emotion/styled"

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const SearchInput: React.FC<Props> = ({ ...props }) => {
  return (
    <StyledWrapper>
      <div className="top">Search</div>
      <input className="mid" type="text" placeholder="Keyword..." {...props} />
    </StyledWrapper>
  )
}

export default SearchInput

const StyledWrapper = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 1024px) {
    margin-right: 2rem;
    margin-bottom: 2rem;
  }
  > .top {
    padding: 0 0.25rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    font-size: 1.25rem;
  }
  > .mid {
    padding: 0.5rem 0.25rem;
    font-size: 0.875rem;
    outline-style: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.sand4};

    width: 100%;
    // background-color: ${({ theme }) => theme.colors.sand4};

    :focus-visible {
      border-color: ${({ theme }) => theme.colors.sand12};
    }
  }
`
