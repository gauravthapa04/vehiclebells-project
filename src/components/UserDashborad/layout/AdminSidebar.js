import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/vehicell-horizontal.png'
import user_thumb from '../../assets/images/user_img.png'
import Image from 'next/image';
import Link from 'next/link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faCar,faMoneyCheckDollar,faChartPie,faFileExport, faGear,faGauge, faRightFromBracket,faCarSide,faMapLocationDot,faMoneyBillTransfer,faPlus,faDollarSign, faLocationDot, faCircleInfo, faChevronRight, faUser, faUsers, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

import { useSession } from "next-auth/react"
export default function AdminSidebar(){
  const router = useRouter();
  const { data: session } = useSession();
  const [pathname, setPathname] = useState('');
  const [profileimage, setProfileImage] = useState(null);
  useEffect(() => {
    console.log(router.pathname.substring(1));
    setPathname(router.pathname.substring(1));
    // Cleanup function
    return () => {
      // Perform any cleanup if needed
    };
  }, [router.pathname]);  

  useEffect(() => {
    setProfileImage(session.user.profileImage)
    }, []); 


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
                        { session && session.user.profileImage ?
                        (<>
                        
                        <Image
                          src={'/assets/user-profile/'+profileimage}
                          className=""
                          alt="user"
                          width={300}
                          height={200}

                          />
                        </>): (<>
                        
                        <Image
                          src={user_thumb}
                          className=""
                          alt="user"
                          />
                          </>)} 
                      </span>
                      <div className='user_info'>
                          <h5>Hi, {session && session.user.firstName ? session.user.firstName : ''}</h5>
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
                      <Link className={ pathname == 'dashboard' ? 'active' : ''} href='/dashboard'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faHome} />
                        </span>
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li>
                        <NavDropdown
                        
                          id="nav-dropdown-dark-your-vehicles"
                          //show={pathname == 'add-vehicle' || pathname == 'all-vehicle' ? 'true' :'false'}
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
                          <Link data-rr-ui-dropdown-item href="/add-vehicle" className={ pathname == 'add-vehicle' ? 'dropdown-item active' : 'dropdown-item'}>Add New Vehicle</Link>
                          <Link data-rr-ui-dropdown-item href="/all-vehicle" className={ pathname == 'all-vehicle' ? 'dropdown-item active' : 'dropdown-item'}>Vehicles List</Link>
                        </NavDropdown>
                    </li>

                    <li>
                        <NavDropdown
                          id="nav-dropdown-dark-your-trips"
                          //show={pathname == 'add-trip' || pathname == 'all-trips' ? 'true' :'false'}
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
                        <Link data-rr-ui-dropdown-item href="/add-trip" className={ pathname == 'add-trip' ? 'dropdown-item active' : 'dropdown-item'}>Add New Trip</Link>
                        <Link data-rr-ui-dropdown-item href="/all-trips" className={ pathname == 'all-trips' ? 'dropdown-item active' : 'dropdown-item'}>Trips List</Link>
                        </NavDropdown>
                    </li>

                    <li>
                      <Link className={ pathname == 'your-transactions' ? 'active' : ''} href='/your-transactions'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faDollarSign} />
                        </span>
                        <span>Your Transactions</span>
                        {/* <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span> */}
                      </Link>
                    </li>
                    <li>
                      <Link className={ pathname == 'reports' ? 'active' : ''} href='/reports'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faChartPie} />
                        </span>
                        <span>Reports</span>
                        {/* <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span> */}
                      </Link>
                    </li>
                    <li>
                      <Link className={ pathname == 'maps' ? 'active' : ''} href='/maps'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faLocationDot} />
                        </span>
                        <span>Maps</span>
                        {/* <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span> */}
                      </Link>
                    </li>
                    <li>
                      <Link className={ pathname == 'information' ? 'active' : ''} href='/information'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faCircleInfo} />
                        </span>
                        <span>Information</span>
                        {/* <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span> */}
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
                        <Link data-rr-ui-dropdown-item href="/" className='dropdown-item'>Profile Setting</Link>
                        <Link data-rr-ui-dropdown-item href="/" className='dropdown-item'>Tracker Settings</Link>
                        <Link data-rr-ui-dropdown-item href="/" className='dropdown-item'>Your Working Hours</Link>
                        </NavDropdown>
                    </li>

                    <li className='mt-auto'>
                      <Link href='/'>
                        <span className='m_i_icon'> 
                          <FontAwesomeIcon icon={faUsers}  />
                        </span>
                        <span>Team Dashboard</span>
                        {/* <span className='m_i_arrow'> 
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span> */}
                      </Link>
                    </li>
                  </ul>
                 </div>
              </div>


        </>
    )
}