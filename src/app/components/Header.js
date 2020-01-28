import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/Header.scss'
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import {NavLink} from 'react-router-dom'

export const Header = (props) => {
    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
            <NavLink to="/signup"  activeStyle={{color: 'red'}}>Signup</NavLink>
            <NavLink to="/signin"  activeStyle={{color: 'red'}}>Signin</NavLink>
        </Navbar.Collapse>
        </Navbar>
    );
}