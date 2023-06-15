import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar,faChartPie,faCarSide,faMapLocationDot,faMoneyBillTransfer,faPlus,faDollarSign, faLocationDot, faCircleInfo, faChevronRight, faUser, faUsers, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useSession } from "next-auth/react"
import { userService } from 'services';
import AdminLayout from './layout/AdminLayout';
import AdminSidebar from './layout/AdminSidebar';

export default function UserDashboard() {

  //const [user, setUser] = useState(null);
  const { data: session } = useSession();
  useEffect(() => {

  }, []);

  console.log(session)

    return (
    <>
    <AdminLayout />

    <div className="main_wrapper">
          <div className='d-flex'>
              <AdminSidebar />
              <div className='main_content'>
                <div className='d_page_header'>
                  <h2>Dashboard</h2>
                </div>
                <div className="d_card_list">

                  <Row>
                    <Col lg={4}>
                      <div className="d_card bg_blue">
                        <div className='d_card_head d-flex justify-content-between'>
                          <h5>Total Trips</h5>
                          <Link href='#'><FontAwesomeIcon icon={faPlus} /></Link>
                        </div>
                        <div className='d_card_content'>
                          <div className='card_value'>2000 MI</div>
                          <div className='card_icon'><FontAwesomeIcon icon={faCar} /></div>
                        </div>
                        <div className='d_card_footer d-flex'>
                          <div className='compare_percentage'>
                            <FontAwesomeIcon icon={faSquareCaretUp} />
                            <span>20%</span>
                          </div>
                          <span>Compared to last week</span>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="d_card bg_orange">
                        <div className='d_card_head d-flex justify-content-between'>
                          <h5>Total Expenses</h5>
                          <Link href='#'><FontAwesomeIcon icon={faPlus} /></Link>
                        </div>
                        <div className='d_card_content'>
                          <div className='card_value'>$ 5000</div>
                          <div className='card_icon'><FontAwesomeIcon icon={faDollarSign} /></div>
                        </div>
                        <div className='d_card_footer d-flex'>
                          <div className='compare_percentage'>
                            <FontAwesomeIcon icon={faSquareCaretUp} />
                            <span>20%</span>
                          </div>
                          <span>Compared to last week</span>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4}>
                      <div className="d_card bg_green">
                        <div className='d_card_head d-flex justify-content-between'>
                          <h5>Total Profit</h5>
                          <Link href='#'><FontAwesomeIcon icon={faPlus} /></Link>
                        </div>
                        <div className='d_card_content'>
                          <div className='card_value'>$ 1000</div>
                          <div className='card_icon'><FontAwesomeIcon icon={faChartPie} /></div>
                        </div>
                        <div className='d_card_footer d-flex'>
                          <div className='compare_percentage'>
                            <FontAwesomeIcon icon={faSquareCaretUp} />
                            <span>20%</span>
                          </div>
                          <span>Compared to last week</span>
                        </div>
                      </div>
                    </Col>
                  </Row>

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
                            <Link href='/add-vehicle'>
                              <span><FontAwesomeIcon icon={faCarSide} /></span>
                              <strong>Add Vehicle</strong>
                            </Link>
                          </li>
                          <li>
                            <Link href='/add-trip'>
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
