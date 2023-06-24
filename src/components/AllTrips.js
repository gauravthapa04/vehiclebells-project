import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import { userService } from "services";
import AdminLayout from "./UserDashborad/layout/AdminLayout";
import AdminSidebar from "./UserDashborad/layout/AdminSidebar";

export default function UserAllTrips() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  useEffect(() => {
     
    if(session != 'undefined' || session != null)
    {
      const userId = session.user.id;
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/AllTrips?id=${userId}`);
          const data = await response.json();
          console.log('data', data)
          setData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, []);
  return (
    <>
    
    <AdminLayout />
      <div className="main_wrapper">
        <div className="d-flex">
          <AdminSidebar />
          <div className="main_content">
            <div className="d_page_header">
              <h2>All Trips</h2>
            </div>
            <div className="d_page_content">
            <div className="d_block">
              <div className="d_head d-flex justify-content-between align-items-start">
                  <h4>Trips list</h4>
                    <Link className="btn small_btn" href="/add-trip">
                    <svg height='14px' width='12px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus f_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                    Add Trip
                    </Link>
                </div>

              <div className="table-responsive">
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
                        { data
                          ? data.map((item) => (
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
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
