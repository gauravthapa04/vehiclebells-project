import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faCar,faMoneyCheckDollar,faChartPie,faFileExport, faGear,faGauge, faRightFromBracket,faCarSide,faMapLocationDot,faMoneyBillTransfer,faPlus } from '@fortawesome/free-solid-svg-icons';
import { useSession } from "next-auth/react"
import { userService } from 'services';
import AdminLayout from './layout/AdminLayout';

export default function UserDashboard() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    //const user = JSON.parse(localStorage.getItem('user')) || [];
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
    <AdminLayout />

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
