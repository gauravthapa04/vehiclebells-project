import { useContext, useState } from 'react';
import { FormContext } from '@/src/components/UserForm/FormContext';
import UserStep1 from '@/src/components/UserForm/UserStep1';
import UserStep2 from '@/src/components/UserForm/UserStep2';
import UserStep3 from '@/src/components/UserForm/UserStep3';
import UserStep4 from '@/src/components/UserForm/UserStep4';
import UserStep5 from '@/src/components/UserForm/UserStep5';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { userService, alertService } from 'services';
import { useRouter } from 'next/router'

const userSubmitForm = () => {
    const { formData } = useContext(FormContext);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 4; // Update the total number of steps here
    const router = useRouter();
    const handleNext = () => {
       // console.log(formData.useType)
       // console.log(currentStep)
        if(currentStep === 1 && formData.useType == 'undefined'){
          alert("Please select the Type");
          return false;
        }
        if (currentStep < totalSteps) {
          setCurrentStep((prevStep) => prevStep + 1);
        }
      };
    
      const handleBack = () => {
        if (currentStep > 1) {
          setCurrentStep((prevStep) => prevStep - 1);
        }
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        // try {
        //   const response = await fetch('/api/UserOwnTracking', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData),
        //   });
    
        //   if (response.ok) {
        //     console.log('User created successfully');
        //   } else {
        //     console.error('Failed to create user');
        //   }
        // } catch (error) {
        //   console.error('Error creating user', error);
        // }


        return userService.OwnTracking({userId: formData.userId, useType: formData.useType, employeetype: formData.employeetype, CompanyName: formData.CompanyName, Manageremail: formData.Manageremail, custom_occupation: formData.custom_occupation})
        .then((response) => { 
          //alertService.success('Please check your email for password reset');
          //console.log(response)
          if (response) {
            router.push('/dashboard');
          }
        })
        .catch(error => alertService.error(error));


      };

      const ProgressBar = ({ currentStep, totalSteps }) => {
        const progress = (currentStep / totalSteps) * 100;
      
        return (
          <div className='progress_bar'>
            <div
              style={{
                width: `${progress}%`,
                height: '6px',
                backgroundColor: '#00c700',
              }}
            ></div>
          </div>
        );
      };

    // Render the current step based on the currentStep state
    const renderStep = () => {
        switch (currentStep) {
        case 1:
            return <UserStep1 />;
        
        case 2:
            if(formData.useType === 'just me'){
              return <UserStep2 />;
            }else{
              return <UserStep4 />;
            }
        case 3:
          if(formData.useType === 'just me'){
            return <UserStep3 />;  
          }else{
            return <UserStep5 />; 
          }                          
        default:
            return null;
        }
    };


  return (

    <form className='welcome_form' method='post' onSubmit={handleSubmit}>
    {renderStep()}

    {currentStep === totalSteps && (

    <div className='welcome_block completed_step'>
    <div className='text-center welcome_head'>
        <span className='completed_icon'>
            <FontAwesomeIcon icon={faCheck} />
        </span>
        <h3>Lets start with Vehicle Bells</h3>
        <p>Now track your mileage and expenses by using Vehicle Bells</p>
        <button type='submit' className='btn mt-4 mb-5'>Start using Vehicle Bells</button>
    </div>
    </div>                        
    )}


    <div className='w_form_btns d-flex justify-content-center  mb-5'>
    
    {currentStep > 1 && ( <button type='button' className='btn prev_step btn_white' onClick={handleBack}>Back</button> )}
    {currentStep < totalSteps && (  <button type='button' onClick={handleNext} className={formData.useType ? 'btn next_step' : 'btn next_step disabled'}>Next</button> )}
    </div>
    <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

    </form>
  );
};

export default userSubmitForm;
