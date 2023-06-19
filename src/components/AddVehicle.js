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
                      <option value="Petrol-CNG">Petrol/CNG</option>
                      <option value="Diesel-CNG">Diesel/CNG</option>
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
