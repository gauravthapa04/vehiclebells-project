import { useContext, useState } from 'react';
import { FormContext } from '@/src/components/UserForm/FormContext';
import UserStep1 from '@/src/components/UserForm/UserStep1';
import UserStep2 from '@/src/components/UserForm/UserStep2';
import UserStep3 from '@/src/components/UserForm/UserStep3';
import UserStep4 from '@/src/components/UserForm/UserStep4';
import UserStep5 from '@/src/components/UserForm/UserStep5';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const userSubmitForm = () => {
    const { formData } = useContext(FormContext);
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 3; // Update the total number of steps here

    const handleNext = () => {
        console.log(formData.step1Data)
        console.log(currentStep)
        if(currentStep === 1 && formData.step1Data == 'undefined'){
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
        // Handle the final form submission with all form data
        console.log(formData);
      };

      const ProgressBar = ({ currentStep, totalSteps }) => {
        const progress = (currentStep / totalSteps) * 100;
      
        return (
          <div className='progress_bar'>
            <div
              style={{
                width: `${progress}%`,
                height: '8px',
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
            if(formData.step1Data === 'just me'){
              return <UserStep2 />;
            }else{
              return <UserStep4 />;
            }
        case 3:
          if(formData.step1Data === 'just me'){
            return <UserStep3 />;  
          }else{
            return <UserStep5 />; 
          }                          
        default:
            return null;
        }
    };


  return (

    <form className='welcome_form' onSubmit={handleSubmit}>
    {renderStep()}

    {currentStep === totalSteps && (

    <div className='welcome_block'>
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
    {currentStep < totalSteps && (  <button type='button' onClick={handleNext} className={formData.step1Data ? 'btn next_step' : 'btn next_step disabled'}>Next</button> )}
    </div>
    <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

    </form>
  );
};

export default userSubmitForm;
