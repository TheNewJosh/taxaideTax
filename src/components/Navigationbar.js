import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../image/logo.png';

const Navigationbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-black">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link className="white-text linkHref activeLink" href="/">For Individuals</Nav.Link>
                    <Nav.Link className="white-text linkHref" href="/business">For Businesses</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className="white-text linkHref" href="#">About Us</Nav.Link>
                    <Nav.Link className="white-text linkHref" href="#">Contact</Nav.Link>
                    <Nav.Link className="white-text linkHref sideBar" href="#">Login</Nav.Link>
                    <Nav.Link className="white-text linkHref buttonArea" href="#">Create free account</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigationbar;