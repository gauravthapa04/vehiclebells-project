import React, { useEffect, useState } from "react";
import AdminLayout from "./UserDashborad/layout/AdminLayout";
import AdminSidebar from "./UserDashborad/layout/AdminSidebar";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faDollar, faFile, faFileAlt, faFunnelDollar, faNoteSticky, faSave, faShop, faTag,} from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import { Alert } from './Alert';
import { userService, alertService } from 'services';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { useSession } from "next-auth/react";

export default function AddExpenses() {
    const [date, setDate] = useState(new Date());
    const { data: session } = useSession();

    const validationSchema = Yup.object().shape({
      expenseAmount: Yup.string()
          .required('Expense Amount is required'),
      expenseDate: Yup.string()
          .required('Expense Date is required'),
      merchantName: Yup.string()
          .required('Merchant Name is required'),
      expenseType: Yup.string()
          .required('Expense Type is required'),
      Notes: Yup.string()
   });

   const formOptions = { resolver: yupResolver(validationSchema) };
   const { register, handleSubmit, formState } = useForm(formOptions);
   const { errors } = formState;

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };   

   async function onSubmit(req) {
    //alertService.clear();
    const mergeData = {userId: session.user.id, ...req}

     return userService.Useraddexpense(mergeData)
     .then(() => {
      alertService.success('Expenses Add Successfully', true);
    })
    .catch(alertService.error);     
   }



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
                
                    <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                    <Row>
                    <Alert />
                    <Col lg={7}>
                        <div className="form-group">
                            <label>Expense Amount</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faDollar} />
                                </span>
                                <input type="text" className="form-control" placeholder="00.00" name="expenseAmount" {...register('expenseAmount')} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Date</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faCalendar} />
                                </span>
                                <input type="hidden" defaultValue={date} className="form-control" placeholder="DD/MM/YYYY" name="expenseDate" {...register('expenseDate')} />
                                <DatePicker
                                placeholder="DD/MM/YYYY"
                                className="form-control"
                                selected={date}
                                onChange={(date) => setDate(date)}
                              />
                                </div>
                        </div>
                        <div className="form-group">
                            <label>Merchant Name</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faShop} />
                                </span>
                                <input type="text" className="form-control" placeholder="Merchant Name" name="merchantName" {...register('merchantName')} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Expense Type</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faFunnelDollar} />
                                </span>
                                <select className="form-control" name="expenseType" {...register('expenseType')}>
                                    <option value="Personal">Personal</option>
                                    <option value="Business">Business</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Notes</label>
                            <div className="input-group">
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faNoteSticky} />
                                </span>
                                <textarea className="form-control" placeholder="Notes" name="Notes" {...register('Notes')}></textarea>
                            </div>
                        </div>
                        
                        </Col>
                    <Col lg={5}>
                       <div className="form-group">
                         <label className="fileUpload">
                            <input type="file" name="file-upload" className="file_field" onChange={handleFileChange} />
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