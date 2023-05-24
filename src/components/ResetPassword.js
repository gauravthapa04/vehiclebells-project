import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import Sitelogo from './assets/images/logo.png'
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { userService, alertService } from 'services';
import { useForm } from 'react-hook-form';
import { Alert } from './Alert';
import queryString from 'query-string';
import { useRouter } from 'next/router'

export default function ResetPassword({ history }) {
  const router = useRouter();
    const TokenStatus = {
        Validating: 'Validating',
        Valid: 'Valid',
        Invalid: 'Invalid'
    }

    const [token, setToken] = useState(null);
    const [tokenStatus, setTokenStatus] = useState(TokenStatus.Validating);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
          setLoading(false);
      }, 800);
      // Clear the timeout if the component unmounts or the delay time changes
      return () => clearTimeout(timeoutId);
    }, []);

    const validationSchema = Yup.object().shape({
        password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

    useEffect(() => {
        const { token } = queryString.parse(location.search);

        userService.validateResetToken(token)
            .then((response) => {
                console.log(response);
                if(response == 'Invalid token')
                {
                    setTokenStatus(TokenStatus.Invalid);
                }
                else{
                    setToken(token);
                    setTokenStatus(TokenStatus.Valid);
                }
            })
            .catch(() => {
                setTokenStatus(TokenStatus.Invalid);
            });
    }, []);

    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit({ password, confirmPassword }) {
        alertService.clear();
        return userService.resetPassword(password, confirmPassword)
          .then((response) => { 
             if(response == 'ok')
             {
              localStorage.removeItem('user');
              router.push('/account/login');
             }
            //alertService.success('Password Reset Successfully', true);
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

                    {tokenStatus == 'Invalid' ? <div className="invalid-tokenerror">Token validation failed, if the token has expired you can get a new one at the <Link href="/forgot-password">forgot password</Link> page.</div>: (    
                      <>
                      <h3 className="wow fadeInUp">Reset Your Password</h3>
                      <p className="wow fadeInUp">
                        You will receive instructions for reseting your
                        password.
                      </p>
                      
                      <form
                        className="wow fadeInUp"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="mb-4">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            {...register('password')}
                            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          />
                          <div className="invalid-feedback">{errors.password?.message}</div>
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm Password"
                            {...register('confirmPassword')}
                            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          />
                          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
                        </div>

                        <button type="submit" disabled={formState.isSubmitting} className="btn">
                        {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>}
                          Submit
                        </button>
                      </form>
                      </>
                      )}
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