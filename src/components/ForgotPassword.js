import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import Sitelogo from './assets/images/logo.png'
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { userService, alertService } from 'services';
import { useForm } from 'react-hook-form';
import { Alert } from './Alert';

export default function UserForgotPassword(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        setLoading(false);
    }, 800);
    // Clear the timeout if the component unmounts or the delay time changes
    return () => clearTimeout(timeoutId);
  }, []);

  const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email is invalid')
        .required('Email is required')
});
const formOptions = { resolver: yupResolver(validationSchema) };
const { register, handleSubmit, formState } = useForm(formOptions);
const { errors } = formState;

function onSubmit(email) {
  alertService.clear();
  return userService.forgotpassword(email)
    .then(() => { 
      const UserLocal = JSON.parse(localStorage.getItem('user'));
      //console.log(UserLocal.resetToken);
      alertService.success('Please check your email for password reset');
      //console.log()
    })
    .catch(error => alertService.error(error));
  }


  return(
    <>
      <div className="page_gradient"></div>
      {loading ? <div className="loader"><div className="loader_div"></div></div> :

        <div className="login_wrap forgot_password_wrap">
        <div className="container">
          <div className="login_wrap_inner">
            <div className="row g-0">
              <div className="col-lg-7">
                <div className="login_left">
                  <Link href="/" className="login_logo wow fadeInUp">
                    <Image src={Sitelogo} alt="vehicle bells" />
                  </Link>
                  <ul className="login_features_list wow fadeInUp">
                    <li>Calculate your Petrol, Diesel, CNG expenses.</li>
                    <li>Check your Nearest Petrol Pump</li>
                    <li>Check all Tolls rates in your route</li>
                    <li>Check your vehicle Tank Storage</li>
                    <li>Check all the ATM's in the Route</li>
                    <li>Team Management</li>
                    <li>Download Your Track Reports as you want</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="login_right">
                  <h3 className="wow fadeInUp">Reset Your Password</h3>
                  <p className="wow fadeInUp">
                    You will receive instructions for reseting your
                    password.
                  </p>
                  <form
                    className="wow fadeInUp"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <Alert />
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        {...register('email')}
                        placeholder="Your Email Address"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                      />
                      <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>
                    <button type="submit" disabled={formState.isSubmitting} className="btn">
                    {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      }
    </>
  )
}