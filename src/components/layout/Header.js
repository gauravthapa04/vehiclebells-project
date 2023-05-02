import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
//import '../assets/css/style.css'
class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  
            loading: true
        };
    }
    componentDidMount(){
        setTimeout(() => this.setState({loading: false}), 1000);
    }

    render() {
      return (
        <>
        <div className="page_gradient"></div>
        { this.state.loading ? <div className="loader"><div className="loader_div"></div></div>
        :
        <header className="main_header">
        <Container>
            <Nav className="navbar navbar-expand-xl">
                <a className="navbar-brand">
                    <Image
                        src={logo}
                        className="App-logo"
                        alt="logo"
                    />                    
                </a>
                <div className="header_right d-flex ms-auto">
                <div className="menu_wrap">
                <ul className="navbar-nav">
            <li>
                <Nav.Link>Home</Nav.Link>
            </li>
            <li>
            <NavDropdown title="Solutions">
            <NavDropdown.Item>Solutions one</NavDropdown.Item>
            <NavDropdown.Item>Solutions two</NavDropdown.Item>
            <NavDropdown.Item>Solutions three</NavDropdown.Item>
            <NavDropdown.Item>Solutions four</NavDropdown.Item>
            </NavDropdown>
            </li>
            <li>
            <NavDropdown title="Product">
            <NavDropdown.Item>Product one</NavDropdown.Item>
            <NavDropdown.Item>Product two</NavDropdown.Item>
            <NavDropdown.Item>Product three</NavDropdown.Item>
            <NavDropdown.Item>Product four</NavDropdown.Item>
            </NavDropdown>
            </li>
            <li>
                <Nav.Link>Pricing</Nav.Link>
            </li>
            <li>
                <Nav.Link>Resources</Nav.Link>  
            </li>
            <li> 
                <Nav.Link>Login</Nav.Link>
            </li> 
            <li>
                <Nav.Link className="register_btn btn">Register Now</Nav.Link>
            </li>  
            </ul> 
            </div>
                </div>                     
            </Nav>
        </Container>
        </header>
        }    
        </>
      );
      ;
    }
  }
  export default Header;