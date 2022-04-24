import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
      };
    return (
        <div>
            <Navbar bg="light" expand="lg" className='fs-5 fw-bolder'>
                <Container>
                        <Navbar.Brand as={Link} to="/" className='fs-2 fw-bold text-info'><span style={{color:"orangered"}}>Mr.</span> Mechanic</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav>
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                                    {user? <button onClick={logout} className=' btn btn-light'>Log Out</button> :<Nav.Link as={Link} to="/login">Login</Nav.Link>}
                                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown> */}
                                </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;