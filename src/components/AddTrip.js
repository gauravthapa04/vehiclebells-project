import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faLocationDot,
  faCalendarAlt,
  faClock,
  faStar,
  faNoteSticky,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react";
import AdminLayout from "./UserDashborad/layout/AdminLayout";
import AdminSidebar from "./UserDashborad/layout/AdminSidebar";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { userService, alertService } from 'services';
import { Alert } from './Alert';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import Autocomplete, { geocodeByAddress, getLatLng } from "react-google-autocomplete";


export default function UserAddTrip() {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("10:00");
  const [startTrip, setStartTrip] = useState();
  const [endTrip, setEndTrip] = useState();
  const { data: session } = useSession();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const userId = session.user.id;
      const response = await fetch(`/api/getvehicle?id=${userId}`);
      const resdata = await response.json();
      setData(resdata.data);
    };
    fetchData();
  }, []);
  const triptype = [
    "Personal",
    "Business",
    "Uber",
    "Other",
    "Charity",
    "Medical",
    "Moving",
    "Commute",
  ];

  const validationSchema = Yup.object().shape({
    tripStartDate: Yup.string()
        .required('Trip Start Date is required'),
    tripEndDate: Yup.string()
        .required('Trip End Date is required'),
    tripStartTime: Yup.string()
        .required('Trip Start Time is required'),
    tripEndTime: Yup.string()
        .required('Trip End Time is required'),
    startAddress: Yup.string()
        .required('Staring Address is required'),
    endAddress: Yup.string()
       .required('Ending Address is required'),
    chooseVehicle: Yup.string()
       .required('Select Vehicle is required'),
    tripType: Yup.string()
       .required('Trip Type is required'),
    tripNote: Yup.string(),
    tripTags: Yup.string(),
    RoundTrip: Yup.string()
 });

 const formOptions = { resolver: yupResolver(validationSchema) };
 const { register, handleSubmit, formState } = useForm(formOptions);
 const { errors } = formState;

 async function onSubmit(req) {
  const mergeData = {userId: session.user.id, ...req}
  //console.log(req)
   return userService.Useraddtrip(mergeData)
   .then(() => {
    alertService.success('Trip Add Successfully', true);
  })
  .catch(alertService.error);     
 }


 const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 37.7749, // Replace with your desired latitude
  lng: -122.4194, // Replace with your desired longitude
};

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
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Alert />
                      <div className="form-group">
                        <Row>
                          <Col sm={6}>
                            <label>Trip Start Date</label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                              </span>
                              <input type="hidden" defaultValue={startDate} className="form-control" placeholder="Trip Date" name="tripStartDate" {...register('tripStartDate')} />
                              <DatePicker
                                className="form-control"
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <label>Trip End Date</label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                              </span>
                              <input defaultValue={endDate} type="hidden" className="form-control" placeholder="Trip Date"                                 name="tripEndDate"
                                {...register('tripEndDate')} />
                              <DatePicker
                                className="form-control"
                                selected={endDate}
                                onChange={(date) => setEndDate(date)}
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="form-group">
                        <Row>
                          <Col sm={6}>
                            <label>Trip Start Time</label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <FontAwesomeIcon icon={faClock} />
                              </span>
                              <input type="hidden" className="form-control" placeholder="Start Time" 
                                {...register('tripStartTime')}
                                name="tripStartTime" defaultValue={startTime} />
                              <TimePicker
                                className="form-control"
                                onChange={setStartTime}
                                value={startTime}
                              />
                            </div>
                          </Col>
                          <Col sm={6}>
                            <label>Trip End Time</label>
                            <div className="input-group">
                              <span className="input-group-text">
                                <FontAwesomeIcon icon={faClock} />
                              </span>
                              <input type="hidden" className="form-control" placeholder="End Time" 
                                name="tripEndTime"
                                {...register('tripEndTime')} defaultValue={endTime} />
                              <TimePicker
                                className="form-control"
                                onChange={setEndTime}
                                value={endTime}
                              />
                            </div>
                          </Col>
                        </Row>
                      </div>

                      <div className="form-group">
                        <label>From</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faLocationDot} />
                          </span>
                            <Autocomplete
                              className="form-control"
                              placeholder="Search for Start Address"
                              apiKey='AIzaSyCmq_w4Yo_NR8ZzoUOAB3G7kaEexaUTEXE'
                              types={['geocode']}
                              fields={['formatted_address', 'geometry']}
                              onPlaceSelected={(place) => {
                                console.log(place)
                                setStartTrip(place.formatted_address);
                                setSelectedPlace(place.geometry.location)
                              }}
                            />
                          <input
                            type="hidden"
                            className={errors.startAddress ? 'form-control  input_error' : 'form-control '}
                            placeholder="Search for Start Address"
                            name="startAddress"
                            defaultValue={startTrip}
                            {...register('startAddress')}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>End</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faLocationDot} />
                          </span>
                          <Autocomplete
                              className="form-control"
                              placeholder="Search for End Address"
                              apiKey='AIzaSyCmq_w4Yo_NR8ZzoUOAB3G7kaEexaUTEXE'
                              onPlaceSelected={(place) => {
                                setEndTrip(place.formatted_address);
                              }}
                            />                          
                          <input
                            type="hidden"
                            className={errors.endAddress ? 'form-control  input_error' : 'form-control '}
                            placeholder="Search for End Address"
                            name="endAddress"
                            defaultValue={endTrip}
                            {...register('endAddress')}
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Choose Vehicle</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faCar} />
                          </span>
                          <select
                            className={errors.chooseVehicle ? 'form-control  input_error' : 'form-control '}
                            name="chooseVehicle"
                            {...register('chooseVehicle')}
                          >
                            {data
                              ? data.map((item, i) => (
                                  <option key={i} value={data[i].vehicleType}>
                                    {data[i].vehicleType}
                                  </option>
                                ))
                              : null}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Trip Type</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faStar} />
                          </span>

                          <select className={errors.vehicleType ? 'form-control  input_error' : 'form-control '} name="tripType" {...register('tripType')}>
                            <option value="">Select a trip type</option>
                            {triptype.map((option, index) => (
                              <option key={index} value={option}>
                                {option}
                              </option>
                            ))}
                            {/* <option value="Office Trip">Office Trip</option>
                              <option value="Work Trip">Work Trip</option>
                              <option value="Family Trip">Family Trip</option>
                              <option value="Friends Trip">Friend's Trip</option> */}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label>Note</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faNoteSticky} />
                          </span>
                          <textarea
                            className="form-control"
                            placeholder="Notes"
                            name="tripNote"
                            {...register('tripNote')}
                          />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Tags</label>
                        <div className="input-group">
                          <span className="input-group-text">
                            <FontAwesomeIcon icon={faTag} />
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Tags"
                            name="tripTags"
                            {...register('tripTags')}
                          />
                        </div>
                      </div>
                      {/* <div className="form-group">
                          <label>Trip Photo</label>
                          <input className="form-control" type="file" id="formFile" />
                        </div> */}
                      <div className="form-group">
                        <div className="c_checkbox_buttons">
                          <label className="c_checkbox">
                            <input
                              type="checkbox"
                              className="checkboxBtn"
                              name="RoundTrip"
                              value="true"
                              {...register('RoundTrip')}
                            />
                            <span>Round Trip</span>
                          </label>
                        </div>
                      </div>
                      <button disabled={formState.isSubmitting} className="btn">
                      {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>} Add Trip
                      </button>                      
                    </form>
                  </Col>
                  <Col lg={6}>
                    <div className="trip_map">
    <LoadScript googleMapsApiKey="AIzaSyCmq_w4Yo_NR8ZzoUOAB3G7kaEexaUTEXE">
      <GoogleMap
      mapContainerStyle={containerStyle}
      center={selectedPlace}
    >
      {selectedPlace && <Marker position={selectedPlace} />}
    </GoogleMap>

    </LoadScript>
                      
                      {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54870.46555202257!2d76.72232943188325!3d30.73514871927828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1686851932634!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      /> */}
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
