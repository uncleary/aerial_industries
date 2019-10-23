import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';

export default function MyNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/welcome">iPollen8</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/funder">Funder</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/supplier">Supplier</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/farmer">Farmer</NavLink>
          </NavItem>
          <Button>
            Sign Up
          </Button>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
