import React, { Component } from 'react';
// import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavItem, Jumbotron, NavLink, InputGroup, Input, Button } from 'reactstrap'; 


class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='#'><span className="fa fa-info fa-lg"></span>News</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='#'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                                </NavItem>
                                <div className="mr-3 search" style={{ display: 'flex', alignItems: 'center' }}>
                                 <InputGroup> 
     <Input className="form-control mr-sm-1 flex-grow-1" type="search" placeholder="Search" aria-label="Search" />
    <Button id="search-btn">
    </Button>
  </InputGroup> 
                                </div>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>



            </div>

        );
    }
}

export default Header;
