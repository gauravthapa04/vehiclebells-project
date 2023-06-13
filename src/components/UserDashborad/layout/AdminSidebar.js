import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/vehicell-horizontal.png'
import user_thumb from '../../assets/images/user_img.png'
import Image from 'next/image';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faCar,faMoneyCheckDollar,faChartPie,faFileExport, faGear,faGauge, faRightFromBracket,faCarSide,faMapLocationDot,faMoneyBillTransfer,faPlus,faDollarSign, faLocationDot, faCircleInfo, faChevronRight, faUser, faUsers, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';


export default function AdminSidebar(){

return(
    <>
<div className="sidebar_menu">
                 <div className='sidebar_menu_inner'>
                    <div className='sidebar_logo'>
                        <Link href='/'>
                            <Image
                            src={logo}
                            className=""
                            alt="logo"
                            />                    
                        </Link>
                    </div>
                    <div className='user_info_block d-flex align-items-center'>
                      <span className='user_thumb'>
                        <Image
                          src={user_thumb}
                          className=""
                          alt="user"
                          /> 
                      </span>
                      <div className='user_info'>
                          <h5>Hi, Sanjay</h5>
                          <div className='d-flex'>
                            <Link href='#'>
                              <FontAwesomeIcon icon={faGear} />
                            </Link>
                            <Link href='#'>
                              <FontAwesomeIcon icon={faUser} />
                            </Link>
                            <Link href='#'>
                              <FontAwesomeIcon icon={faRightFromBracket} />
                            </Link>
                          </div>
                      </div>
                    </div>
                  <ul className='menu_list'>
                    <li>
                      <Link className='active' href='/dashboard'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li>
                        <NavDropdown
                          id="nav-dropdown-dark-example"
                          title={
                            <>
                              <span className='m_i_icon'> 
                                <FontAwesomeIcon icon={faCar} />
                              </span>
                              <span>Your Vehicles</span>
                              <span className='m_i_arrow'> 
                                <FontAwesomeIcon icon={faChevronRight} />
                              </span>
                            </>
                          }
                          menuVariant="dark"
                          autoClose={false}
                        >
                          <NavDropdown.Item href="#">Add New Vehicle</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Vehicles List</NavDropdown.Item>
                        </NavDropdown>
                    </li>

                    <li>
                        <NavDropdown
                          id="nav-dropdown-dark-example"
                          title={
                            <>
                              <span className='m_i_icon'> 
                              <FontAwesomeIcon icon={faMapLocationDot} />
                              </span>
                              <span>Your Trips</span>
                              <span className='m_i_arrow'> 
                                <FontAwesomeIcon icon={faChevronRight} />
                              </span>
                            </>
                          }
                          menuVariant="dark"
                          autoClose={false}
                        >
                          <NavDropdown.Item href="#">Add New Trip</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Trips List</NavDropdown.Item>
                        </NavDropdown>
                    </li>

                    <li>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faDollarSign} />
                        </span>
                        <span>Your Expenses</span>
                        <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faChartPie} />
                        </span>
                        <span>Reports</span>
                        <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <span>Maps</span>
                        <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faCircleInfo} />
                        </span>
                        <span>Information</span>
                        <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </Link>
                    </li>

                    <li>
                        <NavDropdown
                          id="nav-dropdown-dark-example"
                          title={
                            <>
                              <span className='m_i_icon'> 
                                <FontAwesomeIcon icon={faGear} spin />
                              </span>
                              <span>Settings</span>
                              <span className='m_i_arrow'> 
                                <FontAwesomeIcon icon={faChevronRight} />
                              </span>
                            </>
                          }
                          menuVariant="dark"
                          autoClose={false}
                        >
                          <NavDropdown.Item href="#">Profile Setting</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Tracker Settings</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Your Working Hours</NavDropdown.Item>
                        </NavDropdown>
                    </li>

                    <li className='mt-auto'>
                      <Link href='#'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faUsers}  />
                        </span>
                        <span>Team Dashboard</span>
                        <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </Link>
                    </li>
                  </ul>
                 </div>
              </div>


        </>
    )
}