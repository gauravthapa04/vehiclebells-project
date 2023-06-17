import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import logo from '../../assets/images/vehicell-horizontal.png'
import user_thumb from '../../assets/images/user_img.png'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faGauge, faRightFromBracket, faSearch, faBell} from '@fortawesome/free-solid-svg-icons';
import { useSession, signOut } from "next-auth/react"
import { userService } from 'services';


export default function AdminHeader(){
    const [user, setUser] = useState(null);
    const { data: session } = useSession(); 
    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
      }, []);   

      const ToggleClass = () => {
        document.body.classList.toggle('menu_collapsed');
      };

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
                        <div className='d_menu_toggle' onClick={ToggleClass}>
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                        <div className='d_header_search'>
                          <form>
                            <input type='text' className='form-control' name='search' placeholder='Search' />
                            <button type='submit' className='search_btn'><FontAwesomeIcon icon={faSearch} /></button>
                          </form>
                        </div>
                        <div className="d_header_right d-flex align-items-center ms-auto">
                          <div className='notification_block'>
                            <div className='noti_icon'>
                              <FontAwesomeIcon icon={faBell} />
                              <span className='noti_count'></span>
                            </div>
                          </div>
                          <Dropdown className="user_dropdown">
                            <Dropdown.Toggle  id="dropdown-basic">
                            <span className='user_thumb'>
                              <Image
                                src={user_thumb}
                                className=""
                                alt="user"
                                /> 
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
              </div>                     
          </Nav>
      </Container>
    </header>

        </>
    )
}