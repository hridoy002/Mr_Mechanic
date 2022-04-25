import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import { signOut } from 'firebase/auth';
import CustomLink from './CustomLink/CustomLink';


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
                                <Nav className='pt-3 ms-5'>
                                    <CustomLink className='pe-2' as={Link} to="/">Home</CustomLink>
                                    <CustomLink  className='pe-2' as={Link} to="/services">Services</CustomLink>
                                    <CustomLink className='pe-2' as={Link} to="/about">About</CustomLink>
                                    <CustomLink className='pe-2' as={Link} to="/blogs">Blogs</CustomLink>
                                    {user? <button onClick={logout} className=' btn btn-light text-info fs-6 fw-bold'>Log Out</button> :<CustomLink as={Link} to="/login">Login</CustomLink>}
                                   
                                </Nav>
                            </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;