import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png'
import './style.css'

const NavbarCmp = () => {

    const navList = ["Tech", "Money", "Home", "Wellness", "News & Culture", "Science", "Deals & Reviews", "Price Finder"]

    return (
        <div className='p-2'>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">
                    <img className="logo" src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <h5 className='logo_txt'>Your guide to a better future</h5>
                    </Nav>
                    <Nav>
                        {navList.map((list) => (
                            <Nav.Link href="#deets" className="text-black">{list}</Nav.Link>
                        ))}
                        <NavDropdown title="More" id="collasible-nav-dropdown" className='text-black'>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr style={{ marginLeft: '1rem' }} />
        </div>
    )
}

export default NavbarCmp