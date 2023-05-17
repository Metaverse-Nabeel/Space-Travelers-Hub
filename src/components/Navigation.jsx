/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-bracket-location */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import NavCSS from '../styles/Navigation.module.css';

function Navigation() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container className={NavCSS.navbarContainer}>
          <Navbar.Brand className={NavCSS.navbarBrand}>
            <img
              alt="Logo"
              src={logo}
              width="70"
              height="70"
              className="d-flex align-top"
            />
            Space Travelers&apos; Hub
          </Navbar.Brand>
          <Nav className={NavCSS.navigationLinks} id="links">
            <NavLink
              to="/rockets"
              style={({ isActive, isPending }) => ({
                borderRight: isActive ? '4px solid #040444' : '',
                paddingRight: isActive ? '1rem' : '',
                color: isPending ? '#2299c8' : '#040444',
              })}>
              Rockets
            </NavLink>
            <NavLink
              to="/missions"
              style={({ isActive, isPending }) => ({
                borderRight: isActive ? '4px solid #040444' : '',
                paddingRight: isActive ? '1rem' : '',
                color: isPending ? '#2299c8' : '#040444',
              })}>
              Missions

            </NavLink>
            <NavLink
              to="/profile"
              style={({ isActive, isPending }) => ({
                borderRight: isActive ? '4px solid #040444' : '',
                paddingRight: isActive ? '1rem' : '',
                color: isPending ? '#2299c8' : '#040444',
              })}>
              My Profile

            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
