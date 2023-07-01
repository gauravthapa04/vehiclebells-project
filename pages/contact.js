import Layout from "@/src/components/layout/Layout";
import React from "react";
import { Row, Col } from "react-bootstrap";
import { Alert } from "@/src/components/Alert";
import { userService, alertService } from 'services';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock, faDollar, faFile, faFileAlt, faFunnelDollar, faNoteSticky, faSave, faShop, faTag,} from "@fortawesome/free-solid-svg-icons";
export default function ContactForm() {

    const validationSchema = Yup.object().shape({
        UserName: Yup.string()
            .required('Name is required'),
        UserEmail: Yup.string()
            .required('Email is required'),
        phone: Yup.string()
            .required('Phone Name is required'),
        message: Yup.string()
     });

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    async function onSubmit(req) {
        const response = await fetch('/api/sendEmail', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              to: 'testbytecode1@gmail.com',
              subject: 'Enquery From' +req.UserName,
              text: `<p>Name : ${req.UserName}</p><p>Emai : ${req.UserEmail}</p><p>Phone : ${req.phone}</p><p>Message : ${req.message}</p>`,
            }),
          });
          if (response.ok) {
            console.log('Email sent successfully');
          } else {
            console.error('Failed to send email');
          }  
    }
  return (
    <>
      <Layout title="Contact Us">
        <div className="main_wrapper">
          <div className="d_page_content">
          
            <Row>
              <Col lg={6}>
              <div className="d_block">
              <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
              <Alert />
                 <div className="form-group">
                    <label>Name:</label>
                    <div className="input-group">
                    <input {...register('UserName')} type="text" name="UserName" className="form-control" placeholder="Name" />
                    <div className="invalid-feedback">{errors.UserName?.message}</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <div className="input-group">
                    <input {...register('UserEmail')} type="email" name="UserEmail" className="form-control" placeholder="Email" />
                    <div className="invalid-feedback">{errors.UserEmail?.message}</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Phone:</label>
                    <div className="input-group">
                    <input {...register('phone')} type="text" name="phone" className="form-control" placeholder="Phone" />
                    <div className="invalid-feedback">{errors.phone?.message}</div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message:</label>
                    <div className="input-group">
                    <textarea {...register('message')} name="message" className="form-control" placeholder="Phone"></textarea>
                    </div>
                  </div>
                  <button disabled={formState.isSubmitting} className="btn">
                      {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>} <FontAwesomeIcon icon={faSave} /> Save
                  </button>
                </form>
                </div>
              </Col>
              <Col lg={6}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55210.72821626622!2d77.22901224331743!3d30.132240353239176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ef99b8b19ea25%3A0xfc76e2b1f391902!2sYamuna%20Nagar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1688196567189!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </Col>
            </Row>
            
          </div>
        </div>
      </Layout>
    </>
  );
}
