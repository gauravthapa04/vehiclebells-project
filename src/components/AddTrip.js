import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faChartPie,
  faCarSide,
  faMapLocationDot,
  faMoneyBillTransfer,
  faPlus,
  faDollarSign,
  faLocationDot,
  faCircleInfo,
  faChevronRight,
  faUser,
  faUsers,
  faSquareCaretUp,
  faCalendar,
  faCalendarCheck,
  faCalendarAlt,
  faClock,
  faStar,
  faNoteSticky,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { userService } from "services";
import AdminLayout from "./UserDashborad/layout/AdminLayout";
import AdminSidebar from "./UserDashborad/layout/AdminSidebar";

export default function UserAddTrip() {
  return (
    <>
      <AdminLayout />
      <div className="main_wrapper">
        <div className="d-flex">
          <AdminSidebar />
          <div className="main_content">
            <div className="d_page_header">
              <h2>Add Trip</h2>
            </div>
            <div className="d_page_content">
              <div className="d_block">
                <div className="d_head">
                  <h4>Trip Information</h4>
                </div>
                <Row className="mb-5">
                    <Col lg={6}>
                    <form>
                    
                        <div className="form-group">
                          <label>Trip Date</label>
                          <div className="input-group">
                            <span className="input-group-text"><FontAwesomeIcon icon={faCalendarAlt} /></span>
                            <input type="text" className="form-control" placeholder="Trip Date" name="trip-date" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Trip Time</label>
                          <Row>
                            <Col sm={6}>
                                <div className="input-group">
                                <span className="input-group-text"><FontAwesomeIcon icon={faClock} /></span>
                                <input type="text" className="form-control" placeholder="Start Time" name="trip-start-time" />
                              </div>
                            </Col>
                            <Col sm={6}>
                                <div className="input-group">
                                <span className="input-group-text"><FontAwesomeIcon icon={faClock} /></span>
                                <input type="text" className="form-control" placeholder="End Time" name="trip-end-time" />
                              </div>
                            </Col>
                          </Row>
                        </div>


                        <div className="form-group">
                          <label>From</label>
                          <div className="input-group">
                            <span className="input-group-text"><FontAwesomeIcon icon={faLocationDot} /></span>
                            <input type="text" className="form-control" placeholder="Search for Start Address" name="start-address" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Where</label>
                          <div className="input-group">
                            <span className="input-group-text"><FontAwesomeIcon icon={faLocationDot} /></span>
                            <input type="text" className="form-control" placeholder="Search for End Address" name="end-address" />
                          </div>
                        </div>

                        
                        <div className="form-group">
                          <label>Choose Vehicle</label>
                          <div className="input-group">
                            <span className="input-group-text"><FontAwesomeIcon icon={faCar} /></span>
                            <select className="form-control" name="Choose-Vehicle">
                              <option value="Choose Vehicle">Choose Vehicle</option>
                              <option value="Choose Vehicle">Choose Vehicle</option>
                              <option value="Choose Vehicle">Choose Vehicle</option>
                              <option value="Choose Vehicle">Choose Vehicle</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Trip Type</label>
                          <div className="input-group">
                            <span className="input-group-text"><FontAwesomeIcon icon={faStar} /></span>
                            <select className="form-control" name="trip-type">
                              <option value="Trip Type">Trip Type</option>
                              <option value="Trip Type">Trip Type</option>
                              <option value="Trip Type">Trip Type</option>
                              <option value="Trip Type">Trip Type</option>
                            </select>
                          </div>
                        </div>

                        <div className="form-group">
                          <label>Note</label>
                          <div className="input-group">
                            <span className="input-group-text"><FontAwesomeIcon icon={faNoteSticky} /></span>
                            <textarea className="form-control" placeholder="Notes" name="trip-note" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Tags</label>
                          <div className="input-group">
                            <span className="input-group-text"><FontAwesomeIcon icon={faTag} /></span>
                            <input type="text" className="form-control" placeholder="Tags" name="trip-tags" />
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Photo</label>
                          <input class="form-control" type="file" id="formFile" />
                        </div>



                        
                        


                        <div className="form-group">
                          <div className="c_checkbox_buttons">
                            <label className="c_checkbox">
                              <input type="checkbox" className="checkboxBtn" name="RoundTrip" value="true" />
                              <span>Round Trip</span>
                            </label>
                          </div>
                        </div>
                        <button className="btn"> Add Trip</button>
                      </form>
                    </Col>
                    <Col lg={6}>
                      <div className="trip_map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54870.46555202257!2d76.72232943188325!3d30.73514871927828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1686851932634!5m2!1sen!2sin"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                      </div>

                    </Col>
                  </Row>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
