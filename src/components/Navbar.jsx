import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: rgb(146, 10, 17);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-links {
    display: flex;
    gap: 30px; /* Espaçamento entre "Home" e "Transações" */
  }

  .right-link {
    margin-left: auto; /* Empurra "Sair" para a extrema direita */
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Navbar: React.FC = () => (
  <NavbarContainer>
    <div className="left-links">
      <Link to="/home">Home</Link>
      <Link to="/transactions">Transações</Link>
    </div>
    <div className="right-link">
      <Link to="/">Sair</Link>
    </div>
  </NavbarContainer>
);

export default Navbar;
