import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faCar,faMoneyCheckDollar,faChartPie,faFileExport, faGear,faGauge, faRightFromBracket,faCarSide,faMapLocationDot,faMoneyBillTransfer,faPlus } from '@fortawesome/free-solid-svg-icons';


class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }


  render() {
    return (
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
                            Uiwebsoft
                          </Dropdown.Toggle>

                          <Dropdown.Menu>
                            <Dropdown.Item href="#"><FontAwesomeIcon className='f_icon' icon={faGauge} /> Go To Team Dashboard</Dropdown.Item>
                            <Dropdown.Item href="#"><FontAwesomeIcon className='f_icon' icon={faGear} /> Personal Settings</Dropdown.Item>
                            <Dropdown.Item href="#"><FontAwesomeIcon className='f_icon' icon={faRightFromBracket} /> Log out</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
              </div>                     
          </Nav>
      </Container>
    </header>

    <div className="main_wrapper">
          <div className='d-flex'>
              <div className="sidebar_menu">
                 <div className='sidebar_menu_inner'>
                  <ul className='menu_list'>
                    <li>
                      <Link className='active' href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faHome} />
                        </span>
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faCar} />
                        </span>
                        Trips
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faMoneyCheckDollar} />
                        </span>
                        Transactions
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faChartPie} />
                        </span>
                        Reports
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faFileExport} />
                        </span>
                        Data Reports
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faGear} spin />
                        </span>
                        Settings
                      </Link>
                    </li>
                  </ul>
                 </div>
              </div>
              <div className='main_content'>
                <div className='d_page_header'>
                  <h2>Dashboard</h2>
                </div>
                <Row>
                  <Col lg={12}>
                    <div className='d_block'>
                      <div className='d_head'>
                        <h4>Quick Links</h4>
                      </div>

                      <div className='quick_links_list'>
                        <ul className='d-flex flex-wrap'>
                          <li>
                            <Link href='#'>
                              <span><FontAwesomeIcon icon={faCarSide} /></span>
                              <strong>Add Vehicle</strong>
                            </Link>
                          </li>
                          <li>
                            <Link href='#'>
                              <span><FontAwesomeIcon icon={faMapLocationDot} /></span>
                              <strong>Add Trip</strong>
                            </Link>
                          </li>
                          <li>
                            <Link href='#'>
                              <span><FontAwesomeIcon icon={faMoneyBillTransfer} /></span>
                              <strong>Add Expense</strong>
                            </Link>
                          </li>
                          <li>
                            <Link href='#'>
                              <span><FontAwesomeIcon icon={faChartPie} /></span>
                              <strong>View Reports</strong>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='d_block'>
                      <div className='d_head'>
                        <h4>Your Trips</h4>
                      </div>
                      <div className='no_data_block'>
                        <span>There is no trip yet.</span>
                        <Link href='#' className='btn small_btn mt-3'><FontAwesomeIcon className='f_icon' icon={faPlus} />Add Trip</Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='d_block'>
                      <div className='d_head'>
                        <h4>Your Transactions</h4>
                      </div>
                      <div className='no_data_block'>
                        <span>There is no Transaction yet.</span>
                        <Link href='#' className='btn small_btn mt-3'><FontAwesomeIcon className='f_icon' icon={faPlus} />Add Transaction</Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              </div>
    </div>
    </>
    );
  }
}
export default UserDashboard;
