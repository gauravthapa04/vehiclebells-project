import React from "react";
import AdminLayout from "./UserDashborad/layout/AdminLayout";
import AdminSidebar from "./UserDashborad/layout/AdminSidebar";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faDollar, faFile, faFileAlt, faFunnelDollar, faNoteSticky, faSave, faShop, faTag,} from "@fortawesome/free-solid-svg-icons";
export default function AddExpenses() {
 return(
    <>
    
    <AdminLayout />
      <div className="main_wrapper">
        <div className="d-flex">
          <AdminSidebar />
          <div className="main_content">
            <div className="d_page_header d-flex justify-content-between align-items-start">
              <h2>Add New Expenses</h2>
            </div>
            <div className="d_page_content">
            <div className="d_block">
              <div className="d_head d-flex justify-content-between align-items-start">
                  <h4>Expense Detail</h4>
                </div>
                
                    <form  className="mb-5">
                    <Row>
                    <Col lg={7}>
                        <div className="form-group">
                            <label>Expense Amount</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faDollar} />
                                </span>
                                <input type="text" className="form-control" placeholder="00.00" name="expense-date" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Date</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faCalendar} />
                                </span>
                                <input type="text" className="form-control" placeholder="DD/MM/YYYY" name="expense-date" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Merchant Name</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faShop} />
                                </span>
                                <input type="text" className="form-control" placeholder="Merchant Name" name="merchant-name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Expense Type</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faFunnelDollar} />
                                </span>
                                <select className="form-control" name="expense-type">
                                    <option value="Personal">Personal</option>
                                    <option value="Uber">Uber</option>
                                    <option value="Other">Other</option>
                                    <option value="Charity">Charity</option>
                                    <option value="Medical">Medical</option>
                                    <option value="Moving">Moving</option>
                                    <option value="Commute">Commute</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Notes</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faNoteSticky} />
                                </span>
                                <textarea className="form-control" placeholder="Notes" name="Notes"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Tags</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faTag} />
                                </span>
                                <input type="text" className="form-control" placeholder="Tags" name="tags" />
                            </div>
                        </div>
                        
                        </Col>
                    <Col lg={5}>
                       <div className="form-group">
                         <label className="fileUpload">
                            <input type="file" name="file-upload" className="file_field" />
                            <span>
                                <FontAwesomeIcon icon={faFileAlt} />
                                Upload Report</span>
                         </label>
                       </div>
                  </Col>
                </Row>
                <button type="submit" className="btn"><FontAwesomeIcon icon={faSave} /> Save</button>
              </form>
                  

                

              
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
 );
}