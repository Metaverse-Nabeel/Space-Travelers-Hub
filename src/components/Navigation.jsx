/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-closing-bracket-location */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import NavCSS from '../styles/Navigation.module.css';

const Navigation = () => (
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
        <Nav className={NavCSS.navigationLinks}>
          <NavLink
            to="/"
            style={({ isActive, isPending }) => ({
              paddingRight: isActive ? '1rem' : '',
              textDecoration: isActive ? 'underline' : '',
              color: isPending ? '#6abada' : '#0e7ca7',
            })}>
            Rockets
          </NavLink>
          <NavLink
            to="/missions"
            style={({ isActive, isPending }) => ({
              paddingRight: isActive ? '1rem' : '',
              textDecoration: isActive ? 'underline' : '',
              color: isPending ? '#6abada' : '#0e7ca7',
            })}>
            Missions

          </NavLink>
          <NavLink
            to="/profile"
            style={({ isActive, isPending }) => ({
              paddingRight: isActive ? '1rem' : '',
              textDecoration: isActive ? 'underline' : '',
              color: isPending ? '#6abada' : '#0e7ca7',
            })}>
            My Profile
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default Navigation;
