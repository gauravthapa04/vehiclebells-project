import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPencil, faCar,faChartPie,faCarSide,faMapLocationDot,faMoneyBillTransfer,faPlus,faDollarSign, faLocationDot, faCircleInfo, faChevronRight, faUser, faUsers, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useSession } from "next-auth/react"
import { userService } from 'services';
import AdminLayout from './layout/AdminLayout';
import AdminSidebar from './layout/AdminSidebar';

export default function UserDashboard() {

  //const [user, setUser] = useState(null);
  const { data: session } = useSession();
  const [trips, setTrips] = useState(null);
  const [count, setCount] = useState(null);

  const [transaction, setTransaction] = useState(null);
  const [transactioncount, setTransactioncount] = useState(null);
  useEffect(() => {
    if(session != 'undefined' || session != null)
    {
      const userId = session.user.id;
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/AllTrips?id=${userId}`);
          const data = await response.json();
          setTrips(data);
          setCount(data.length)
          console.log(data.length)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    if(session != 'undefined' || session != null)
    {
      const userId = session.user.id;
      const fetchTransaction = async () => {
        try {
          const response = await fetch(`/api/YourTransaction?id=${userId}`);
          const data1 = await response.json();
          setTransaction(data1);
          setTransactioncount(data1.length)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchTransaction();
    }
  }, []);

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
                          <Link href='/all-trips'><FontAwesomeIcon icon={faPlus} /></Link>
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
                          <Link href='/add-expenses'><FontAwesomeIcon icon={faPlus} /></Link>
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
                            <Link href='/add-expenses'>
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
                      {count > 0 ? (
                      <table className="dataTable table table-hover table-striped">
                        <thead>
                        <tr>
                            <th>Trip Start</th>
                            <th>Trip End</th>
                            <th>Trip Start Address</th>
                            <th>Trip End Address</th>
                            <th>Vehicle Type</th>
                            <th>Trip Type</th>
                            <th>RoundTrip</th>
                        </tr>
                        </thead>
                        <tbody>
                        { trips
                          ? trips.map((item) => (
                          <tr key={item.id}>
                              <td>{item.tripStartDate}</td>  
                              <td>{item.tripEndDate}</td>
                              <td>{item.startAddress}</td>
                              <td>{item.endAddress}</td>
                              <td>{item.chooseVehicle}</td>
                              <td>{item.tripType}</td>
                              <td>{item.RoundTrip}</td>
                            
                          </tr>
                        )): null}       
                        </tbody>                                                
                      </table>
                      ):(
                        <span>There is no trip yet.</span>
                      )}
                        <Link href='/add-trip' className='btn small_btn mt-3'><FontAwesomeIcon className='f_icon' icon={faPlus} />Add Trip</Link>
                      </div>
                    </div>
                  </Col>
                  <Col lg={12}>
                    <div className='d_block'>
                      <div className='d_head'>
                        <h4>Your Transactions</h4>
                      </div>
                      <div className='no_data_block'>
                      {transactioncount > 0 ? (
                        <div className="table-responsive">
                            <table className="dataTable table table-hover table-striped">
                              <thead>
                                <tr>
                                    <th></th>
                                    <th>Date</th>
                                    <th>Merchant Name</th>
                                    <th>Transaction type</th>
                                    <th>Report</th>
                                    <th>Notes</th>
                                    <th>Actions</th>
                                </tr>
                              </thead>   
                              { transaction
                          ? transaction.map((item) => (
                          <tr key={item.id}>
                              <td>
                              <div className="d-flex align-items-center justify-content-center">
                                    <span className="rev_indicator me-3"></span>
                                    <b className="c_green">{item.expenseAmount}</b>
                                </div>
                                
                              </td>  
                              <td>{item.expenseDate}</td>
                              <td>{item.merchantName}</td>
                              <td>{item.expenseType}</td>
                              <td>no report</td>
                              <td>{item.Notes}</td>
                              <td>
                              <div className="d-flex">
                                    <Link className="btn icon_btn bg_blue mx-1" href="#">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <Link className="btn icon_btn  mx-1" href="#">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Link>
                                </div>
                              </td>
                            
                          </tr>
                        )): null}                                                         
                            </table>
                        </div>
                      ):(
                        <span>There is no Transaction yet.</span>
                      )}
                        
                        <Link href='/add-expenses' className='btn small_btn mt-3'><FontAwesomeIcon className='f_icon' icon={faPlus} />Add Transaction</Link>
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
