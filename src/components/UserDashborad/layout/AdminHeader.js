import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import logo from '../../assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faGauge, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { useSession, signOut } from "next-auth/react"
import { userService } from 'services';

export default function AdminHeader(){
    const [user, setUser] = useState(null);
    const { data: session } = useSession(); 
    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
      }, []);   
    return(
        <>

<header className='d_header'>
      <Container fluid>
          <Nav className="navbar navbar-expand-xl">
              <Link href='/' className="navbar-brand">
                  <Image
                  src={logo}
                  className="App-logo"
                  alt="logo"
                  />                    
              </Link>
              <div className="header_right d-flex ms-auto">
                        <Dropdown className="user_dropdown">
                          <Dropdown.Toggle  id="dropdown-basic">
                           <span className='user_icon'>
                               <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlSpace="preserve"
                                    style={{
                                      enableBackground: "new 0 0 24 24",
                                    }}
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4c2.2 0 4 2.2 4 5s-1.8 5-4 5-4-2.2-4-5 1.8-5 4-5zm6.6 15.5C16.9 21 14.5 22 12 22s-4.9-1-6.6-2.5c-.4-.4-.5-1-.1-1.4 1.1-1.3 2.6-2.2 4.2-2.7.8.4 1.6.6 2.5.6s1.7-.2 2.5-.6c1.7.5 3.1 1.4 4.2 2.7.4.4.4 1-.1 1.4z" />
                                </svg>
                           </span>
                            {session ? session.name : user ? user.firstName+' '+user.lastName : null}
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item><FontAwesomeIcon className='f_icon' icon={faGauge} /> Go To Team Dashboard</Dropdown.Item>
                            <Dropdown.Item><FontAwesomeIcon className='f_icon' icon={faGear} /> Personal Settings</Dropdown.Item>
                         {session ? <><Dropdown.Item onClick={() => signOut()}><FontAwesomeIcon className='f_icon' icon={faRightFromBracket} /> Logout</Dropdown.Item></> : user ? <><Dropdown.Item onClick={userService.logout}><FontAwesomeIcon className='f_icon' icon={faRightFromBracket} /> Logout</Dropdown.Item> </> : null}
                          </Dropdown.Menu>
                        </Dropdown>
              </div>                     
          </Nav>
      </Container>
    </header>

        </>
    )
}