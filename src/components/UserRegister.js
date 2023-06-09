import React,{useEffect, useState} from 'react';
import Image from 'next/image';
import Sitelogo from './assets/images/logo.png'
import Link from 'next/link';
import { useSession, signIn } from "next-auth/react"
import { useRouter } from 'next/router'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { userService, alertService } from 'services';
import { Alert } from './Alert';

export default function UserRegister(){
    const [loading, setLoading] = useState(true);  
    const router = useRouter();
    useEffect(() => {

    const timeoutId = setTimeout(() => {
        setLoading(false);
    }, 800);
    // Clear the timeout if the component unmounts or the delay time changes
    return () => clearTimeout(timeoutId);
    }, []);

    // form validation rules 
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        companyName: Yup.string(),
        email: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    async function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                alertService.success('Registration successful', true);
                return userService.login(user.email, user.password)
                .then(() => {
                    router.push('/welcome');
                })
                .catch(alertService.error);
            })
            .catch(alertService.error);
    }
    const { data: session } = useSession();
      
    //   if(typeof session != 'undefined' && session != null)
    //   {
    //     router.push('/dashboard')
    //   }

      return(
        <>
        <div className="page_gradient"></div>
        {loading ? <div className="loader"><div className="loader_div"></div></div> :
            <div className="login_wrap">
            <div className="container">
                <div className="login_wrap_inner">
                    <div className="row g-0">
                        <div className="col-lg-7">
                            <div className="login_left">
                                <Link href="/" className="login_logo wow fadeInUp">
                                    <Image
                                    src={Sitelogo}
                                    alt="vehicle bells"
                                    />
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
                                <h3 className="wow fadeInUp">Register</h3>
                                <p className="wow fadeInUp">Create your Account</p>
                                <form className="wow fadeInUp" onSubmit={handleSubmit(onSubmit)}>
                                    <Alert />
                                    <div className="row justify-between">
                                        <div className="col-lg-6">
                                            <div className="mb-4">
                                                <input
                                                type="text"
                                                name="firstName"
                                                {...register('firstName')}
                                                placeholder='First Name'
                                                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                                                />
                                            <div className="invalid-feedback">{errors.firstName?.message}</div>
                                            </div>                                    
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="mb-4">
                                            <input
                                                type="text"
                                                name="lastName"
                                                {...register('lastName')}
                                                placeholder='Last Name'
                                                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                                            />
                                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                                            </div>
                                        </div>                                    
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="text"
                                        name="companyName"
                                        {...register('companyName')}
                                        placeholder='Company Name (Optional)'
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="email"
                                        name="email"
                                        {...register('email')}
                                        placeholder='Email'
                                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    />   
                                    <div className="invalid-feedback">{errors.email?.message}</div>    
                                </div>  
                                <div className="mb-4">
<input
type="password"
name="password"
{...register('password')} 
className={`form-control ${errors.password ? 'is-invalid' : ''}`}
placeholder='Password'
/>
<div className="invalid-feedback">{errors.password?.message}</div>
</div>                                   
   
                                <button disabled={formState.isSubmitting} className="btn">
                                {formState.isSubmitting && <span className="spinner-border spinner-border-sm me-1"></span>} Register
                                </button>                                                  
                                </form>
                                <div className="or_text wow fadeInUp"><span>OR</span></div>
                                <div className="login_buttons_group wow fadeInUp">
                                <button onClick={()=>signIn('google')} className="btn">
                                    <svg
xmlns="http://www.w3.org/2000/svg"
xmlnsXlink="http://www.w3.org/1999/xlink"
width={22}
height={22}
fill="none"
>
<path fill="url(#a)" d="M0 0h22v22H0z" />
<defs>
<pattern
id="a"
width={1}
height={1}
patternContentUnits="objectBoundingBox"
>
<use xlinkHref="#b" transform="scale(.02703)" />
</pattern>
<image
xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASiSURBVHgB5ZhtTFtVGMef59y+8OoKAcIkm2jAOROUrLAxwyaDkAUTDYvgIFky4xfNsixziyJuxLKIM5FM4weNiY59GQvdIs4XlmWlsC/GrRD8oCF7ccIWEIYgo1DX9t7zeChvbeltS2mJyX79cO95zv/e+7/3PM+95xTgfwhCBJirq6Udfw88IxEWgMSziJhu/mRuzvkf+ni4kXKppw8iZEWmRksLXwCGVcjpdXFkSjAtAQ2KzWVkUnPGlWu3INqmJssKn3ICfCHEuyECGMAZtyI1ru/+ZSAcfVBTZDQm3Dew94TqKBIkwCoggAkN4oepluufoacZgak/S/INSUz7HSG8CFEEEb5Mt9gOBNNoAgUHi/NS4iRtl7id5yGahgDuKgTNoXSSf+BWRYU+Gd0/id1tEF3ucICyzE7bnVDCZU9qnXO8kZB2QmiGONJ5ibPrLqbc05KEIqMzkUMZeQqCsr0NuZHvyrL03g3jvL459VdJUTaT5BsIqFM9gmBM5MXbaRZbq9iqJuxomfEAIjsuCsStAOwK5wkFNDVemd+q2LW1QfTnQYFDGd22EQiD2ZtESWErMeRjynlFl4cu9uvM5Q3c/btBE0DYlt5pq4E1gC1dlA6jXmFJrwxo4neM+A0LDrpJWwdrxKIphlC+sB9XPIJJtbfdbJ1r3hM/8bj150FYIzzD57JqjaJqevw7aUpHMz9uvJ1yuv9pWEM8ucM4z6Wlh7YIPubCxNqbFjgd+kSlTdMEkYJksr6f3LjQ9Dghwhw1PUPJCjFGjNJmn2vObzVqBxDwUYgxhMqT3m0W8ggufrEGUfFuzplCcKnqJdoIsYbjv95NNueJhtT0xNlWiDVIw95NTy5JOskmu5YXzxjFkWnKWAXUfQQw+MSMc9dbwfqZhuUC1xwN1CcKrd/HoydoBklO1Y6J3cV5t82dTh/bn8NhnihEuM9Wc+EsrILSpn9MANoPAvUhe1jeWZ9mWWjPDd9r4jNLdGbB59eOTfzQg+0eQx7TQJ8+a67OhAjZfepeKoBuf+Be2T6ZOnDVO7JUfRwuOEBDDfYt/BvHJv+qTE/kyucQIa6HScf85lfeFi72vlng9o74TF1eMld03OcJFaBOmyJTXd++b8P+DpadnKoXxfKRWj/XTed1v5P5m3fM54mMsfiDYuMAdfZKGrxa0LrnDQjBNnOlsajleJeC06qGAJVz/oY8Yf9AYVvVCSJqgBAQwYC4o0si36wM2OjsBJMjyxJpsBkRS8WZd86+FZmcBglDdcDkjOWemH1rZ/16W0hTxh9eTkCHvkNcNWpLKyangn7iVdDai5eCnBqtDcmmQPqA676SlkrDdLzUJXbzIYroHpSDfnwvMMJPOo8Z3lXTqS5GS9orDTNO6aJ4Y4azsgkbyfnEV9f2nwr6og26bM/pqNCn2BMbOacjYuWihdWAMEmcN/XWtjeHloZB0bnKbBnZSSGPaOEgEr9d5q6DfbXfD4elhxWw3VydJ2rssKi9cnGlDSHkEwTYwkBqs9W02WAFRPSn2SxbzlYbtZKcKyPmiJmj58OOjDm5QsMyQM+em3n9JpMp9nOxR5r/AFdNntZsuwEwAAAAAElFTkSuQmCC"
id="b"
width={37}
height={37}
/>
</defs>
</svg>    Sign Up with Google
                                    </button>
                                    <Link href="/account/login" className="btn">Already have an account? Sign in</Link>
                                </div>
                                <div className="login_bottom_text wow fadeInUp">By signing In, you agree to our <Link href="/term-and-conditions">Terms and Conditions</Link> and acknowledge that you have read our <Link href="/privacy-policy">Privacy Policy.</Link></div>
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