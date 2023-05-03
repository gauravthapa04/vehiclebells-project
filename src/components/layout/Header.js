import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Link from 'next/link';
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
    ToggleClass = () => {
        document.body.classList.toggle('menu_expanded');
      }; 
    render() {
      return (
        <>
        <div className="page_gradient"></div>
        { this.state.loading ? <div className="loader"><div className="loader_div"></div></div>
        :
        <header className="main_header">
        <Container>
            <Nav className="navbar navbar-expand-xl">
                <Link href='/' className="navbar-brand">
                    <Image
                        src={logo}
                        className="App-logo"
                        alt="logo"
                    />                    
                </Link>
                <div className="header_right d-flex ms-auto">
                <div className="menu_wrap">
                <ul className="navbar-nav">
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
            <NavDropdown title="Solutions">
            <NavDropdown.Item><Link href='/'>Solutions one</Link></NavDropdown.Item>
            <NavDropdown.Item><Link href='/'>Solutions two</Link></NavDropdown.Item>
            <NavDropdown.Item><Link href='/'>Solutions three</Link></NavDropdown.Item>
            </NavDropdown>
            </li>
            <li>
            <NavDropdown title="Product">
            <NavDropdown.Item><Link href='/'>Product one</Link></NavDropdown.Item>
            <NavDropdown.Item><Link href='/'>Product two</Link></NavDropdown.Item>
            <NavDropdown.Item><Link href='/'>Product three</Link></NavDropdown.Item>
            </NavDropdown>
            </li>
            <li>
            <Link href='/pricing'>Pricing</Link>
            </li>
            <li>
            <Link href='/resources'>Resources</Link>  
            </li>
            <li> 
            <Link href='/login'>Login</Link>
            </li> 
            <li>
                <Link href='/register' className="register_btn btn">Register Now</Link>
            </li>  
            </ul> 
            </div>
            <div className="menu_right_block">
            <div className="menuToggle d-xl-none d-xl-none" onClick={this.ToggleClass}>
            <span></span>
            <span></span>
            <span></span>
        </div>
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