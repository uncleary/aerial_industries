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
      <NavbarBrand
        className="mr-3"
        href="/"
        style={{ marginLeft: '1rem', marginRight: '1rem', fontWeight: '700' }}>
        Home
      </NavbarBrand>
      <NavbarBrand href="/welcome" style={{ color: '#888', fontWeight: '700' }}>
        iPollen8
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/investment">Investors</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/supplier">Suppliers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/farmers">Farmers</NavLink>
          </NavItem>
          <Button
            style={{
              marginLeft: '1rem',
              marginRight: '1rem',
              padding: '0.5rem 2rem',
              fontWeight: '500',
            }}>
            Register
          </Button>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
