import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { pages } from "../pages";

const Container = styled.section``;

const Nav = styled.nav`
  background-color: #dfd8d8;
  color: #449;
  padding: 20px;
`;

const NavLink = styled.a`
  border-radius: 5px;
  color: inherit;
  font-size: 120%;
  padding: 10px;
  text-decoration: inherit;
  transition: background-color 200ms ease;

  &:not(:last-of-type) {
    margin-inline-end: 25px;
  }

  &:hover {
    background-color: #c9bcbc;
  }
`;

function Navigation() {
  return (
    <Container>
      <Nav>
        {pages.map((page, index) => (
          <NavLink as={Link} key={index} to={page.path}>
            {page.title}
          </NavLink>
        ))}
      </Nav>
    </Container>
  );
}

export { Navigation };
