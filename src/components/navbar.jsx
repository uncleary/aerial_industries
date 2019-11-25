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
      <NavbarBrand href="/ipollen8" style={{ color: '#888', fontWeight: '700' }}>
        iPollen8
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto text-center" navbar>
          <NavItem>
            <NavLink href="/funders">Funders</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/ipollen8">Suppliers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/farmers">Farmers</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signup" style={{ padding: '0' }}>
              <Button
                outline
                style={{
                  marginLeft: '1rem',
                  marginRight: '1rem',
                  padding: '0.5rem 2rem',
                  fontWeight: '500',
                }}>
                Connect
              </Button>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}
