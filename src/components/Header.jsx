import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for the hamburger menu
import logo from "../assets/images/logo.png"; // Import the logo image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <Hamburger onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </Hamburger>
      <Menu $isOpen={isOpen}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
        <a href="#">Career</a>
        <ContactButton href="#">Hire Developers</ContactButton>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 35px;
  width: 93%;
  z-index: 1000;

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    left: 0;
    width: 76%;
  }

  @media (max-width: 480px) {
    padding: 10px 36px;
  }
`;

const Logo = styled.div`
  img {
    height: 50px;

    @media (max-width: 768px) {
      height: 40px;
    }

    @media (max-width: 480px) {
      height: 35px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    background-color: #0a0f2c;
    position: absolute;
    top: 60px;
    left: ${({ $isOpen }) => ($isOpen ? "0" : "-100%")};
    width: 100%;
    height: 100vh;
    transition: left 0.3s ease-in-out;
    z-index: 999;
  }

  a {
    color: #ffffff;
    margin: 0 15px;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      color: #007bff;
    }

    @media (max-width: 768px) {
      margin: 20px 0;
      font-size: 18px;
    }
  }
`;

const ContactButton = styled.a`
  color: #007bff;
  background-color: transparent;
  border: 1px solid #007bff;
  padding: 8px 20px;
  border-radius: 20px;
  text-decoration: none;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    margin: 20px 0;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  color: #ffffff;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default Header;
