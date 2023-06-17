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

export default function UserAllVehicle() {
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  const [currentuser, setCurrentuser] = useState('');
  console.log(session);
  useEffect(() => {
     
    if(session != 'undefined' || session != null)
    {
      const userId = session.user.id;
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/AllVehicle?id=${userId}`);
          const data = await response.json();
          //console.log(data)
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
              <h2>All Vehicle</h2>
            </div>
            <div className="d_page_content">
            <div className="d_block">
              <div className="d_head d-flex justify-content-between align-items-start">
                  <h4>Vehicles list</h4>
                    <Link className="btn small_btn" href="/add-vehicle">
                    <svg height='14px' width='12px' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus f_icon" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path></svg>
                    Add Vehicle
                    </Link>
                </div>

              <div className="table-responsive">
                    <table className="dataTable table table-hover table-striped">
                        <thead>
                        <tr>
                            <th>Vehicle Type</th>
                            <th>Manufacturer Company</th>
                            <th>Fuel Type</th>
                            <th>Model</th>
                            <th>Average</th>
                            <th>Odometer Reading</th>
                            <th>Vehicle Average</th>
                        </tr>
                        </thead>
                        <tbody>
                        { data.map((item) => (
                          <tr key={item.id}>
                              <td>{item.vehicleType}</td>
                              <td>{item.ManufacturerCompany}</td>
                              <td>{item.fuelType}</td>
                              <td>{item.vehicleModel}</td>
                              <td>{item.OdometerReading}</td>
                              <td>{item.vehicleAverage}</td>
                            { item.vehicleDefault ? (<><td><span className="table_btn_sm"><FontAwesomeIcon icon={faCheck} /></span></td></>) : (<><td></td></>)}
                            
                          </tr>
                        ))}       
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
