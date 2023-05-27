import { useContext, useEffect } from 'react';
import { FormContext } from './FormContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faUsers,faCheckCircle} from '@fortawesome/free-solid-svg-icons';
import step_team_icon from '../assets/images/step_team_icon.png';
import step_user_icon from '../assets/images/step_user_icon.png';
import Image from 'next/image';


const UserStep1 = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleChange = (e) => {
    updateFormData({ useType: e.target.value });
  };

useEffect(() => {
    // Get the value from LocalStorage
    const user = JSON.parse(localStorage.getItem('user')) || [];
    if(user != null){
        updateFormData({ userId: user.id });
    }    
  }, []);

  return (
      <div className='welcome_block  app_use_block'>
                            <div className='welcome_head'>
                                <h3>I'm Using Vehicle Bells For:-</h3>
                            </div>
                            <div className='select_option_list row justify-content-center'>
                                <div className='col-sm-6 col-12'>
                                    <label className='select_option'>
                                            <input type='radio' name='useType' value="just me" checked={formData.useType === 'just me'} onChange={handleChange} required />
                                            <div className='select_option_inner'>
                                                <span className='s_o_icom'>
                                                    <Image src={step_user_icon} alt='step_user_icon'/>
                                                </span>
                                                <h4>Personal use</h4>
                                                <p>I need to track my pesonal miles and expenses.</p>
                                                <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                            </div>
                                    </label>
                                </div>
                                <div className='col-sm-6 col-12'>
                                    <label className='select_option'>
                                            <input type='radio' name='useType' value="my team" checked={formData.useType === 'my team'} onChange={handleChange} required />
                                            <div className='select_option_inner'>
                                                <span className='s_o_icom'>
                                                    <Image src={step_team_icon} alt='step_team_icon'/>
                                                </span>
                                                <h4>My Team</h4>
                                                <p>I need to track my Team’s miles and expenses.</p>
                                                <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                            </div>
                                    </label>
                                </div>
                            </div>
                        </div>
  );
};

export default UserStep1;
