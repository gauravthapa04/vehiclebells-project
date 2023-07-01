import React,{useEffect, useState} from 'react';
import { Container } from "react-bootstrap";
import logo from '../assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image';
import Link from 'next/link';
import { useSession, signOut } from "next-auth/react"
import { userService } from 'services';

export default function Header(){
    const [loading, setLoading] = useState(true);
    //const [user, setUser] = useState(null);
    const { data: session } = useSession(); 
    console.log(session);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 800);
        // Clear the timeout if the component unmounts or the delay time changes
        return () => clearTimeout(timeoutId);
        }, []);

      const ToggleClass = () => {
        document.body.classList.toggle('menu_expanded');
      };
      return(
        <>
        <div className="page_gradient"></div>
        {loading ? <div className="loader"><div className="loader_div"></div></div> :
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
                    <Link href='/about'>About Us</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact Us</Link>
                </li>
                <li>
                <Link href='/pricing'>Pricing</Link>
                </li>
                <li>
                <Link href='/resources'>Resources</Link>  
                </li>
                {!session ? (
                <>
                <li> 
                <Link href='/account/login'>Login</Link>
                </li> 
                <li>
                    <Link href='/account/register' className="register_btn btn">Register Now</Link>
                </li> 
                </>
                    ) :(
                    <>
                        <li><Link href='/dashboard'>Dashboard</Link></li>
                         <li><a className="register_btn btn" onClick={() => signOut()}>Logout</a></li>
                    </>
                )}
                </ul> 
                </div>
                <div className="menu_right_block">
                <div className="menuToggle d-xl-none d-xl-none" onClick={ToggleClass}>
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
      )

}