import React from "react";
import AdminLayout from "./UserDashborad/layout/AdminLayout";
import AdminSidebar from "./UserDashborad/layout/AdminSidebar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollar, faDollarSign, faFileExport, faPencil, faSackDollar, faTrash, faTrashAlt,} from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
export default function YourTransactions() {
 return(
    <>
    
    <AdminLayout />
      <div className="main_wrapper">
        <div className="d-flex">
          <AdminSidebar />
          <div className="main_content">
            <div className="d_page_header d-flex justify-content-between align-items-start">
              <h2>Your Transactions</h2>
                <Dropdown className="add_t_dropdown">
                    <Dropdown.Toggle id="dropdown-basic" className="btn small_btn">
                        <svg height='14px' width='12px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus f_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                        Add New
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="/add-expenses">
                        <FontAwesomeIcon icon={faDollar} /> Add Expenses
                        </Dropdown.Item>
                        <Dropdown.Item href="#">
                        <FontAwesomeIcon icon={faSackDollar} /> Add Revenue
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <div className="d_page_content">

            <div className="d_block">
              <div className="d_head d-flex justify-content-between align-items-start">
                  <h4>This Year Total</h4>
                </div>
                <div className="exp_rev_block">
                  <div className="exp_rev_item rev_item">
                      <strong className="c_green"><FontAwesomeIcon icon={faDollar} /> 400</strong><br />
                      <span>REVENUE</span>
                  </div>

                  <div className="exp_rev_item exp_item">
                      <strong  className="c_red"><FontAwesomeIcon icon={faDollar} /> 1630</strong><br />
                      <span>EXPENSES</span>
                  </div>
                </div>
            </div>

            <div className="d_block">
              <div className="d_head d-flex justify-content-between align-items-start">
                  <h4>Transactions list</h4>
                  <Link href="#" className="btn small_btn">
                       <FontAwesomeIcon className="me-2" icon={faFileExport} />
                        Export Report
                  </Link>
                </div>

                <div className="table-responsive">
                    <table className="dataTable table table-hover table-striped">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Merchant Name</th>
                            <th>Transaction type</th>
                            <th>Notes</th>
                            <th>Report</th>
                            <th>Tags</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                          <tr>
                              <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="rev_indicator me-3"></span>
                                    <b className="c_green">$200</b>
                                </div>
                              </td>
                              <td>25-6-2023</td>  
                              <td>Pooja Stationary</td>
                              <td>Personal</td>
                              <td>Purchased Some Books</td>
                              <td>no report</td>
                              <td>Expenses, books , stationary</td>
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
                          <tr>
                              <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="exp_indicator me-3"></span>
                                    <b className="c_red">$100</b>
                                </div>
                              </td>
                              <td>25-6-2023</td>  
                              <td>Pooja Stationary</td>
                              <td>Personal</td>
                              <td>Purchased Some Books</td>
                              <td>no report</td>
                              <td>Expenses, books , stationary</td>
                              <td>
                                <div className="d-flex">
                                    <Link className="btn icon_btn bg_blue mx-1" href="/add-expenses">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <Link className="btn icon_btn  mx-1" href="#">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Link>
                                </div>
                            </td>                         
                          </tr>
                          <tr>
                              <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="exp_indicator me-3"></span>
                                    <b className="c_red">$300</b>
                                </div>
                              </td>
                              <td>25-6-2023</td>  
                              <td>Pooja Stationary</td>
                              <td>Personal</td>
                              <td>Purchased Some Books</td>
                              <td>no report</td>
                              <td>Expenses, books , stationary</td>
                              <td>
                                <div className="d-flex">
                                    <Link className="btn icon_btn bg_blue mx-1" href="/add-expenses">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <Link className="btn icon_btn  mx-1" href="#">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Link>
                                </div>
                            </td>                           
                          </tr>
                          <tr>
                              <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="rev_indicator me-3"></span>
                                    <b className="c_green">$100</b>
                                </div>
                              </td>
                              <td>25-6-2023</td>  
                              <td>Pooja Stationary</td>
                              <td>Personal</td>
                              <td>Purchased Some Books</td>
                              <td>no report</td>
                              <td>Expenses, books , stationary</td>
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
                          <tr>
                            <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="exp_indicator me-3"></span>
                                    <b className="c_red">$200</b>
                                </div>
                            </td>
                              <td>25-6-2023</td>  
                              <td>Pooja Stationary</td>
                              <td>Personal</td>
                              <td>Purchased Some Books</td>
                              <td>no report</td>
                              <td>Expenses, books , stationary</td>
                              <td>
                                <div className="d-flex">
                                    <Link className="btn icon_btn bg_blue mx-1" href="/add-expenses">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <Link className="btn icon_btn  mx-1" href="#">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Link>
                                </div>
                            </td>                         
                          </tr>
                          <tr>
                            <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="exp_indicator me-3"></span>
                                    <b className="c_red">$280</b>
                                </div>
                              </td>
                              <td>25-6-2023</td>  
                              <td>Pooja Stationary</td>
                              <td>Personal</td>
                              <td>Purchased Some Books</td>
                              <td>no report</td>
                              <td>Expenses, books , stationary</td>
                              <td>
                                <div className="d-flex">
                                    <Link className="btn icon_btn bg_blue mx-1" href="/add-expenses">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <Link className="btn icon_btn  mx-1" href="#">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Link>
                                </div>
                            </td>                         
                          </tr>
                          <tr>
                            <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="exp_indicator me-3"></span>
                                    <b className="c_red">$250</b>
                                </div>
                              </td>
                              <td>25-6-2023</td>  
                              <td>Pooja Stationary</td>
                              <td>Personal</td>
                              <td>Purchased Some Books</td>
                              <td>no report</td>
                              <td>Expenses, books , stationary</td>
                              <td>
                                <div className="d-flex">
                                    <Link className="btn icon_btn bg_blue mx-1" href="/add-expenses">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <Link className="btn icon_btn  mx-1" href="#">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Link>
                                </div>
                            </td>                           
                          </tr>
                          <tr>
                            <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="rev_indicator me-3"></span>
                                    <b className="c_green">$100</b>
                                </div>
                              </td>
                              <td>25-6-2023</td>  
                              <td>Pooja Stationary</td>
                              <td>Personal</td>
                              <td>Purchased Some Books</td>
                              <td>no report</td>
                              <td>Expenses, books , stationary</td>
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
                          <tr>
                            <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <span className="exp_indicator me-3"></span>
                                    <b className="c_red">$500</b>
                                </div>
                              </td>
                              <td>25-6-2023</td>  
                              <td>Pooja Stationary</td>
                              <td>Personal</td>
                              <td>Purchased Some Books</td>
                              <td>no report</td>
                              <td>Expenses, books , stationary</td>
                              <td>
                                <div className="d-flex">
                                    <Link className="btn icon_btn bg_blue mx-1" href="/add-expenses">
                                        <FontAwesomeIcon icon={faPencil} />
                                    </Link>
                                    <Link className="btn icon_btn  mx-1" href="#">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </Link>
                                </div>
                            </td>                         
                          </tr>
                        </tbody>
                    </table>
              </div>

              
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
 );
}