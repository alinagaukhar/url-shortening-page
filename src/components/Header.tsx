import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/logo.svg'

function BasicExample() {
  return (
    <Navbar expand="lg" className='app-header'>
      <Container>
        <Navbar.Brand href="#home"> <img src={logo} alt="logo"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <a className='link' href='#'>Features</a>
                <a className='link' href ='#'>Pricing</a>
                <a className='link' href='#'>Resources</a>
                <hr className='separator-mobile'></hr>
            </Nav>
            <nav className='actions'>
                <button className='btn btn-login btn-secondary btn-small'>Log in</button>
                <button className='btn btn-primary btn-small'>Sign up</button>
            </nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;