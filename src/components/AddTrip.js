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
            <div className="d_card_list">Add Vehicle Form</div>
          </div>
        </div>
      </div>
    </>
  );
}
