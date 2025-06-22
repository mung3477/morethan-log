import React from "react"

import useScheme from "src/hooks/useScheme"

import styled from "@emotion/styled"

type Props = {}

const ThemeToggle: React.FC<Props> = () => {
  const [scheme, setScheme] = useScheme()

  const handleClick = () => {
    setScheme(scheme === "light" ? "dark" : "light")
  }

  return (
    <StyledWrapper onClick={handleClick}>
      {scheme === "light" ? ": Light" : ": Dark"}
    </StyledWrapper>
  )
}

export default ThemeToggle

const StyledWrapper = styled.div`
  cursor: pointer;

  font-size: 18px;
  font-weight: 200;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`
