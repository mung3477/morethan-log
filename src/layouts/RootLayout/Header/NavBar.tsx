import Link from "next/link"

import styled from "@emotion/styled"

const NavBar: React.FC = () => {
  // const links = [{ id: 1, name: "About", to: "/about" }]
  const links: Link[] = []
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

interface Link {
  id: number
  name: string
  to: string
}

const StyledWrapper = styled.div`
  flex-shrink: 0;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      font-weight: 200;
      font-size: 18px;

      :hover {
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        font-size: 14px;
      }
    }
  }
`
