import React from 'react';

import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/home">User Management</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <LinkContainer to="/home">
                    <NavItem eventKey={1}>
                        Users
                    </NavItem>
                </LinkContainer>
                <LinkContainer to="/add-user">
                    <NavItem eventKey={2}>
                        Add Users
                    </NavItem>
                </LinkContainer>
            </Nav>
        </Navbar>
    )
}

export default Header;