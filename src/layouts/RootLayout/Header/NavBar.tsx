import Link from "next/link"

import styled from "@emotion/styled"

const NavBar: React.FC = () => {
  const links = [
    {
      id: 3,
      name: "CV",
      to: "https://drive.google.com/file/d/1gClNWV1qljT1N4g-NmDNF2HVLqRCSOhO/view?usp=sharing",
      target: "_blank",
    },
    { id: 1, name: "About", to: "/" },
    { id: 2, name: "Feed", to: "/feed" },
  ]
  // const links: Link[] = []
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link href={link.to} target={link.target || "_self"}>
              {link.name}
            </Link>
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
