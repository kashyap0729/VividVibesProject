import 'bootstrap/dist/css/bootstrap.min.css';  
import {
    Outlet,
  } from "react-router-dom";
import { Link } from 'react-router-dom';

import {
    Nav,
    Navbar,
    Container,
    Button,
    NavDropdown}from 'react-bootstrap';

import './Layout.css';
import { hover } from '@testing-library/user-event/dist/hover';


function Layout() {
    return(
        <>
        <Navbar collapseOnSelect bg="light" expand="lg" sticky="top" className="bg-body-tertiary">
            <Container fluid>
            <Navbar.Brand href="#">Vivid Vibes</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarSupportedContent" />
            <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto">
                     {/*<Nav.Link href="#">Home</Nav.Link>*/}
                   <Nav.Link as={Link} to="/" activeClassName="active">Home</Nav.Link>
                    <NavDropdown title="Events" id="basic-nav-dropdown" style={{ color: '#F2EDD0' }}>
                    <div className="scrollable-dropdown">
                      {/*<div className="column">
                        <ul>
                            <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}} href="#">Marriages</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Indian Style</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">American Style</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Misc. Style</NavDropdown.Item></li>  
                        </ul>  
                        <ul>
                           <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}}  href="#">Festivals</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">New Year Events</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Easter Day</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Good Friday</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Haloween</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Thanksgiving</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Christmas</NavDropdown.Item></li>
                        </ul>
                      </div>
                      <div className="column">
                        <ul>
                            <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}} href="#">Parties</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Birthday Parties</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Anniversary Parties</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Retirement Parties</NavDropdown.Item></li>  
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Customizable Parties</NavDropdown.Item></li>    
                        </ul>
                        <ul>
                           <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}}  href="#">Indian Festivals</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Diwali Events</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Holi Events</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Garba Eventsy</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Dussehra Events</NavDropdown.Item></li>
                        </ul>
                        <ul>
                           <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}}  href="#">Misc. Events</NavDropdown.Item></li>
                        </ul>
    </div>*/}
                      <div className="row">
                        <ul>
                            <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}} href="#">Marriages</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Indian Style</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">American Style</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Misc. Style</NavDropdown.Item></li>      
                        </ul>
                        <ul>
                           <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}}  href="#">Festivals</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">New Year Events</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Easter Day</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Good Friday</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Haloween</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Thanksgiving</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Christmas</NavDropdown.Item></li>
                        </ul>
                      </div>
                      <div className="row">
                        <ul>
                            <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}} href="#">Parties</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Birthday Parties</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Anniversary Parties</NavDropdown.Item></li>
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Retirement Parties</NavDropdown.Item></li>  
                            <li><NavDropdown.Item style={{color: 'gray'}} href="#">Customizable Parties</NavDropdown.Item></li>    
                        </ul>
                        <ul>
                           <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}}  href="#">Indian Festivals</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Diwali Events</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Holi Events</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Garba Eventsy</NavDropdown.Item></li>
                           <li><NavDropdown.Item style={{color: 'gray'}} href="#">Dussehra Events</NavDropdown.Item></li>
                        </ul>
                        <ul>
                           <li><NavDropdown.Item style={{color: '#3d7373', fontWeight:'bold'}}  href="#">Misc. Events</NavDropdown.Item></li>
                        </ul>
                      </div>
                    
                </div>    
                    </NavDropdown>
                    <Nav.Link as={Link} to="#" activeClassName="active">Our Work</Nav.Link>
                    <Button variant="outline-success">Log In</Button>
                    <Button variant="outline-success">Sign Up</Button>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        <Outlet />
        </>
    )
}

export default Layout;