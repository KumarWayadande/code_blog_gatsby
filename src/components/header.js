import * as React from "react"
import { useState } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap"

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className=""  horizontal>
            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tags">
                Tags
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/team">
                Team
              </NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  )
}

export default Header
