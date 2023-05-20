import Layout from '@/src/components/layout/Layout';
import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import logo from '../src/components/assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faGauge, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { FormProvider } from '../src/components/UserForm/FormContext';
import UserSubmitForm from '../src/components/UserForm/UserSubmitForm';
import { useSession, signOut } from "next-auth/react"
import { userService } from 'services';


export default function Welcome() {
  const { data: session } = useSession();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscription = userService.user.subscribe(x => setUser(x));
    return () => subscription.unsubscribe();
  }, []);
  return (
    <>
    <style jsx global>
      {`
 html {
  height: 100%;
}
body{
  min-height: 100%;
}


header.d_header {
  position: fixed;
  top: 0;
  z-index: 9990;
  background: #FFFFFF;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 3px 0;
  width: 100%;
}
.d_header a.navbar-brand {
  padding: 0;
}
.d_header ul.navbar-nav > li {
  padding: 0px 0;
}
.d_header .navbar-brand img {
  max-width: 110px;
}
.d_header button.btn {
  background: transparent!important;
  color: #000;
  border: 0;
  padding: 0;
  box-shadow: none;
  outline: none;
  display: flex;
  align-items: center;
}
.d_header span.user_icon {
  max-width: 22px;
  display: inline-block;
  margin-right: 10px;
}
.d_header span.user_icon svg {
  height: 20px;
  width: 20px;
  display: block;
}
.d_header span.user_icon svg path {
  fill: #ef3d44;
}
.menu_sidebar {
  flex: 0 0 250px;
  max-width: 250px;
}
.main_content {
  flex: 0 0 calc(100% - 250px);
  max-width: calc(100% - 250px);
}
.sidebar_menu {
  width: 250px;
  max-width: 250px;
  border-right: 0;
  margin: 0px 0 0;
  background: #ffff;
  padding: 75px 0 20px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}
.main_content {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(100% - 250px);
  max-width: calc(100% - 250px);
  padding: 20px 30px;
  margin-left: auto;
}
ul.menu_list li {
  margin: 0 0 1px;
}
ul.menu_list li a {
  display: flex;
  padding: 12px 15px;
  align-items: center;
  transition: all ease 0.4s;
}
ul.menu_list li a.active {
  color: #EC3C3F;
  background: rgb(236 60 63 / 2%);
  font-weight: 600;
}
span.m_i_icon {
  margin: 0 10px 0 0;
  display: block;
}
span.m_i_icon svg {
  width: 20px;
  height: 20px;
}
.main_wrapper {
  padding: 65px 0 0;
}
ul.menu_list {
  padding: 20px 0 0;
}
.f_icon {
  margin-right: 5px;
}

.d_page_header {
  margin: 0 0 20px;
}
.d_page_header h2 {
  margin: 0;
  font-size: 20px;
}
.d_head h4 {
  font-size: 16px;
  margin: 0;
  font-weight: 600;
}
.d_block {
  background: #fff;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 2px 2px 4px rgb(34 38 69 / 5%);
  margin: 0 0 20px;
}
.d_head {
  margin: 0 0 15px;
}

.quick_links_list ul li a {
  display: flex;
  padding: 20px 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.quick_links_list li a > span {
  height: 100px;
  width: 100px;
  background: rgb(248 250 253);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 10px;
  border-radius: 50px;
  font-size: 30px;
}
.no_data_block {
  text-align: center;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.small_btn {
  padding: 6px 15px;
  line-height: 1.315;
}

@media (max-width:1199px){
  .sidebar_menu {
      transition: all ease 0.4s;
      transform: translateX(-110%);
  }
  .main_content {
      flex-basis: 100%;
      max-width: 100%;
      padding: 20px 15px;
      transition: all ease 0.4s;
  }
}

@media (max-width:767px){
  .quick_links_list ul li a {
      padding: 20px 20px;
  }
}     
      
      `}
    </style>


    <Layout title="Vehicle Bells | Welcome" showHead='false' showFooter='false'>
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
                                { session ? session.user.name : '' }
                                { user ? user.firstName + user.lastName : '' }
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item><Link href='/'><FontAwesomeIcon className='f_icon' icon={faGauge} /> Go To Team Dashboard</Link></Dropdown.Item>
                                    <Dropdown.Item><Link href='/'><FontAwesomeIcon className='f_icon' icon={faGear} /> Personal Settings</Link></Dropdown.Item>
                                    { session ?
                                    <>
                                     <Dropdown.Item><a onClick={() => signOut()}><FontAwesomeIcon className='f_icon' icon={faRightFromBracket} />Logout</a></Dropdown.Item>
                                    </>
                                    :
                                    user ?
                                    <>
                                      <Dropdown.Item><a onClick={userService.logout}><FontAwesomeIcon className='f_icon' icon={faRightFromBracket} />Logout</a></Dropdown.Item>
                                    </>
                                    :
                                    <></>
                                    }
                                </Dropdown.Menu>
                                </Dropdown>
                    </div>                     
                </Nav>
            </Container>
            </header>
            <div className='main_wraper'>

            <Container>

                <div className='welcome_wrap'>
            
                <FormProvider>
                   <UserSubmitForm />
                </FormProvider>
                
                </div>

            </Container>

            </div>
   </Layout>
   </>
  )
}