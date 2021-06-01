import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './FaShCoP.png';


class CustomNavbar extends Component {
    render() {
        return (
            <Navbar bg="transparent" variant="transparent" background-color="transparent">
                <Navbar.Brand href="#home"><img
                    height = "90"
                    width = "150"
                    src= {logo}
                /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Nav>
                        <Button btn-margin-left variant="outline-light">Log In</Button>{' '} 
                        <Button variant="dark">Join Now</Button>{' '}
                    </Nav>
                    
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default CustomNavbar;