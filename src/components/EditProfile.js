import React,{useEffect, useState, useRef} from 'react';
import Image from 'next/image';
import Sitelogo from './assets/images/logo.png'
import Link from 'next/link';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { userService, alertService } from 'services';
import { useForm } from 'react-hook-form';
import { Alert } from './Alert';
import { async } from 'rxjs';

export default function EditProfile(){
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLoading(false);
        }, 800);
        // Clear the timeout if the component unmounts or the delay time changes
        return () => clearTimeout(timeoutId);
      }, []);

      useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
      }, []);


        const handleFileChange = (event) => {
            setSelectedFile(event.target.files[0]);
        };    

      const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        companyName: Yup.string()
    });

    const formOptions = { resolver: yupResolver(validationSchema) };

    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

   async function onSubmit(data) {
        alertService.clear();
        try{
            const formData = new FormData();
            formData.append('file', selectedFile);

            // Make a POST request to the API route for image upload
            const response = await fetch('/api/imageUpload', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                const { filename } = await response.json();
                console.log('Image uploaded successfully:', filename);
                if(filename)
                {
                    return userService.editprofile({...data, filename})
                      .then(() => { 
                        alertService.success('Profile Updated Successfully');
                      })
                      .catch(error => alertService.error(error));
                }
                // Handle success response
              } else {
                console.error('Failed to upload image');
                // Handle error response
            }

        }catch(error){
            console.error('Error uploading image', error);
        }
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
                           <h3 className="wow fadeInUp">Edit Profile</h3>
                           <p className="wow fadeInUp">
                             You will receive instructions for edit profile.
                           </p>
                           <form
                             className="wow fadeInUp"
                             onSubmit={handleSubmit(onSubmit)}
                           >
                             <Alert />
                             <div className="mb-4">
                               <input
                                 type="text"
                                 name="firstName"
                                 {...register('firstName')}
                                 defaultValue={user.firstName}
                                 className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                               />
                               <div className="invalid-feedback">{errors.firstName?.message}</div>
                            </div>
                            <div className="mb-4">
                            <input
                            type="text"
                            name="lastName"
                            {...register('lastName')}
                            defaultValue={user.lastName}
                            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                            />
                            <div className="invalid-feedback">{errors.lastName?.message}</div>
                            </div>
                            <div className="mb-4">
                            <input
                                type="text"
                                name="companyName"
                                {...register('companyName')}
                                defaultValue={user.companyName}
                                className="form-control"
                            />
                            </div>
                            <div className="mb-4">
                            <input
                                type="text"
                                name="phoneNumber"
                                {...register('phoneNumber')}
                                defaultValue={user.phoneNumber}
                                placeholder='Phone Number'
                                className="form-control"
                            />
                            </div>
                            <div className="mb-4">
                            <input 
                               type="file" 
                               onChange={handleFileChange}
                               className="form-control"
                             />
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