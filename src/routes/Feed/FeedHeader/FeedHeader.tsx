import React from "react"

import styled from "@emotion/styled"

import CategorySelect from "./CategorySelect"
import OrderButtons from "./OrderButtons"

type Props = {}

const FeedHeader: React.FC<Props> = () => {
  return (
    <StyledWrapper>
      <CategorySelect />
      <OrderButtons />
    </StyledWrapper>
  )
}

export default FeedHeader

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  // border-bottom: 1px solid ${({ theme }) => theme.colors.sand6};
`
