import React, { useEffect, useState } from "react";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { userService, alertService } from 'services';
import { Alert } from './Alert';
import AdminLayout from "./UserDashborad/layout/AdminLayout";
import AdminSidebar from "./UserDashborad/layout/AdminSidebar";
import { useSession } from "next-auth/react"
export default function UserAddVehicle() {
  const { data: session } = useSession();
  const [userid, setUserid] = useState(true); 
  const validationSchema = Yup.object().shape({
      vehicleType: Yup.string()
          .required('Vehicle Type is required'),
      ManufacturerCompany: Yup.string()
          .required('Manufacturere Company is required'),
      fuelType: Yup.string()
          .required('Fule type is required'),
      OdometerReading: Yup.string()
          .required('Odometer Reading is required'),
      vehicleModel: Yup.string(),
      vehicleAverage: Yup.string(),
      vehicleDefault: Yup.string(),
      vehicleDefault: Yup.string()
   });
   const formOptions = { resolver: yupResolver(validationSchema) };
   const { register, handleSubmit, formState } = useForm(formOptions);
   const { errors } = formState;

   async function onSubmit(req) {
    const mergeData = {userId: session.user.id, ...req}
    //console.log(mergeData)
     return userService.Useraddvehicle(mergeData)
     .then(() => {
      alertService.success('Vehicle Add Successfully', true);
    })
    .catch(alertService.error);     
   }

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
  padding: 5px 0;
  width: 100%;
}
.d_header a.navbar-brand {
  padding: 0;
}
.d_header ul.navbar-nav > li {
  padding: 0px 0;
}
.d_header .navbar-brand img {
  max-width: 200px;
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
.d_header span.user_thumb {
    width: 40px;
    display: block;
    margin-right: 0;
    height: 40px;
    border-radius: 50px;
    background: #D9D9D9;
    border: 1px solid #D9D9D9;
}
.user_dropdown.dropdown button:after {
    display: none;
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
    width: 265px;
    max-width: 265px;
    border-right: 0;
    margin: 0px 0 0;
    background: #0a1c31;
    padding: 0px 0 20px;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9990;
    transition: all ease 0.4s;
}
.sidebar_logo {
  padding: 10px 20px;
  margin: 0 0 30px;
  line-height: 1;
  min-height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.sidebar_logo img {
    max-width: 200px;
    margin: 0 auto;
    display: block;
}
.main_content {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(100% - 265px);
  max-width: calc(100% - 265px);
  padding: 20px 30px;
  margin-left: auto;
}
ul.menu_list li {
  margin: 0 0 10px;
}
ul.menu_list li a {
  display: flex;
  padding: 13px 20px;
  align-items: center;
  transition: all ease 0.4s;
  color: #fff;
}
ul.menu_list > li > a{
  white-space: nowrap;
}
ul.menu_list li:hover > a {
    background: rgba(238, 244, 253,0.10);
}
ul.menu_list li a.active {
    color: #ef3d44;
    background: #EAEDF7;
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
.m_i_arrow {
    margin-left: auto;
    height: 20px;
    width: 20px;
    text-align: center;
    font-size: 12px;
}

.main_wrapper {
  padding: 65px 0 0;
  background: #EAEDF7;
}
.sidebar_menu_inner {
    height: 100%;
}
ul.menu_list {
    padding: 20px 0 0;
    height: calc(100% - 180px);
    display: flex;
    flex-direction: column;
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
  background: #eaedf7;
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

.d_header a.navbar-brand {
  z-index: 1;
  position: relative;
  display: none;
}
.d_header .container-fluid {
    padding: 0 30px 0 265px;
}
.menu_collapsed .d_header .container-fluid {
    padding-left: 65px;
}
.user_info_block {
    padding: 0 20px 10px;
    color: #fff;
}
.user_info_block .user_thumb {
    width: 68px;
    min-width: 68px;
    height: 68px;
    border: 4px solid rgba(255,255,255,0.15);
    border-radius: 50%;
    transition: all ease 0.4s;
}
.user_info {
  padding-left:20px;
}
.user_info h5 {
    color: #fff;
    margin: 0 0 14px;
}
.user_info a svg path {
    fill: #fff;
}
.user_info a {
    display: block;
    margin: 0 20px 0 0;
}
.d_header .header_right {
    width: 100%;
    justify-content: flex-start;
}
.d_header .user_dropdown.dropdown {
    margin-left: auto;
}
.menu_collapsed .sidebar_menu:not(:hover) {
    max-width: 65px;
    width: 65px;
    overflow: hidden;
}
.menu_collapsed .sidebar_menu:not(:hover) ul.menu_list li a span:not(.m_i_icon) {
    display: none;
}
.menu_collapsed .sidebar_menu:not(:hover) .user_info {
    display: none;
}
.menu_collapsed .sidebar_menu:not(:hover) .user_info_block {
    padding: 0 10px 10px;
}
.menu_collapsed .sidebar_menu:not(:hover) .user_info_block .user_thumb {
    width: 45px;
    min-width: 45px;
    height: 45px;
}
.menu_collapsed .main_content {
    max-width: calc(100% - 65px);
    flex: 0 0 calc(100% - 65px);
}



.d_menu_toggle {
    height: 26px;
    width: 26px;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}
.d_menu_toggle span {
    display: block;
    height: 2px;
    background: rgba(10, 28, 49, 0.5);
    width: 26px;
}
.d_menu_toggle span:nth-child(2) {
    margin: 6px 0;
}
.d_menu_toggle span:first-child {
    width: 18px;
}
.d_menu_toggle span:nth-child(3) {
    width: 22px;
}
.d_header_search {
    margin: 0 0 0 50px;
    position: relative;
    background: #EAEDF7;
    border-radius: 6px;
    width: 400px;
}
.d_header_search form {
    display: flex;
    align-items: center;
    justify-content: center;
}
.d_header_search input.form-control {
    height: 40px;
    background: transparent;
    border: 0;
    padding: 5px 20px;
    color: #0A1C31;
    font-size: 15px;
    outline: none;
    box-shadow: none;
}
.d_header_search .search_btn {
    border: 0;
    background: transparent;
    position: absolute;
    right: 15px;
    font-size: 17px;
    color: #808A94;
}


.d_card {
    padding: 20px;
    background: linear-gradient(90deg, #0162E8 0%, rgba(1, 98, 232, 0.5) 100%);
    color: #fff;
    border-radius: 4px;
    margin: 0 0 30px;
    position: relative;
    box-shadow: 0px 8px 20px rgb(3 99 231 / 15%);
}
.d_card.bg_orange {
    background: linear-gradient(90deg, #F76A2D 0%, #EFA65F 100%);
    box-shadow: 0px 8px 20px rgb(247 106 45 / 15%);
}
.d_card.bg_green {
    background: linear-gradient(90deg, #029666 -1.73%, #48D6A8 100%);
    box-shadow: 0px 8px 20px rgb(4 151 103 / 15%);
}
.d_card_head h5 {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #fff;
}
.d_card_content {

}
.d_card_content .card_icon {
    position: absolute;
    right: 30px;
    font-size: 80px;
    top: auto;
    opacity: .5;
    bottom: 20px;
    line-height: 80px;
}
.d_card_head a svg {
    color: #fff;
    font-size: 18px;
}
.d_card_content {
    margin: 20px 0;
}
.d_card_content .card_value {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    text-transform: uppercase;
}
.compare_percentage {
    margin-right: 10px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
}
.compare_percentage svg {
    margin-right: 5px;
    font-size: 13px;
}
.d_card_footer > span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    opacity: 0.8;
}
.notification_block .noti_icon svg {
    font-size: 24px;
    color: rgb(10 28 49 / 50%);
}
.notification_block {
    margin-right: 30px;
}
.notification_block span.noti_count {
    height: 10px;
    width: 10px;
    display: block;
    position: absolute;
    background: #EC3C3F;
    border-radius: 50px;
    top: 0;
    right: -3px;
}
.notification_block .noti_icon {
    position: relative;
    cursor: pointer;
}
ul.menu_list li .dropdown-menu {
    transform: none!important;
    display: none;
    position: static!important;
}
ul.menu_list li .dropdown-menu.show {
    display: block;
    opacity: 1;
}


/* responsive media queries */
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
        <div className="d-flex">
          <AdminSidebar />
          <div className="main_content">
            <div className="d_page_header">
              <h2>Add New Vehicle</h2>
            </div>
            <div className="d_page_content">

              <div className="d_block">
                <div className="d_head">
                  <h4>Vehicle Information</h4>
                </div>      
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Alert />
                  <div className="form-group">
                    <label>Vehicle type</label>
                    <select className={errors.vehicleType ? 'form-control  input_error' : 'form-control '} name="vehicleType" {...register('vehicleType')}>
                      <option value="Bike">Bike</option>
                      <option value="Scooty">Scooty</option>
                      <option value="Car">Car</option>
                      <option value="Van">Van</option>
                      <option value="Jeep">Jeep</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Manufacturer company</label>
                    <input className={errors.ManufacturerCompany ? 'form-control  input_error' : 'form-control'} placeholder="Manufacturer company" name="ManufacturerCompany"  {...register('ManufacturerCompany')} />
                  </div>
                  <div className="form-group">
                    <label>Fuel type</label>
                    <select className={errors.fuelType ? 'form-control  input_error' : 'form-control'} name="fuelType" {...register('fuelType')}>
                      <option value="petrol">Petrol</option>
                      <option value="diesel">Diesel</option>
                      <option value="cng">CNG</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Model(optional)</label>
                    <input className="form-control" placeholder="Model" name="vehicleModel" {...register('vehicleModel')} />
                  </div>
                  <div className="form-group">
                    <label>Average (optional/manual/by default)</label>
                    <input className="form-control" placeholder="Average" name="vehicleAverage" {...register('vehicleAverage')} />
                  </div>
                  <div className="form-group">
                    <label>Odometer Reading</label>
                    <input className={ errors.OdometerReading ? 'form-control  input_error' : 'form-control '} placeholder="Odometer Reading" name="OdometerReading" {...register('OdometerReading')} />
                  </div>
                  
                  <div className="form-group">
                      <div className="c_checkbox_buttons">                        
                          <label className="c_checkbox">
                              <input type="checkbox" className="checkboxBtn" value="true" name="vehicleDefault" {...register('vehicleDefault')} />
                              <span>Make this Vehicle Default</span>
                          </label>
                      </div>
                  </div>
                  <button disabled={formState.isSubmitting} className="btn">
                      {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>} Add Vehicle
                  </button>
                </form>        
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
