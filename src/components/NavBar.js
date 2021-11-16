import React, { Component } from 'react'
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import PropTypes from 'prop-types'

export class NavBar extends Component {
    static propTypes = {
    }

    render() {
        return (
                <Navbar bg="dark" variant='dark'>
                        <Navbar.Brand><Nav.Link href="/">ShareCoin</Nav.Link></Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/chain">Current Blockchain</Nav.Link>
                            <Nav.Link>Generate Key</Nav.Link>
                            <Nav.Link href="/transaction">Create Transxn</Nav.Link>
                            <Nav.Link href="/user">Sign up</Nav.Link>
                            <Nav.Link href="/user">Log In</Nav.Link>
                        </Nav>
                </Navbar>  
        )
    }
}

export default NavBar
