import { useContext } from 'react';
import { FormContext } from './FormContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faUsers,faCheckCircle} from '@fortawesome/free-solid-svg-icons';


const UserStep1 = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleChange = (e) => {
    updateFormData({ step1Data: e.target.value });
  };

  return (
      <div className='welcome_block  app_use_block'>
                            <div className='text-center welcome_head'>
                                <h3>Welcome to <span className='c_red'>Vehicle Bells</span></h3>
                                <p>Tell us about yourself so we can customize the experience for you.</p>
                                <p className='f_20'>select any one option for which you are going to use Vehicle Bells..</p>
                            </div>
                            <div className='select_option_list row justify-content-center'>
                                <div className='col-sm-6 col-12'>
                                    <label className='select_option'>
                                            <input type='radio' name='step1Data' value="just me" checked={formData.step1Data === 'just me'} onChange={handleChange} required />
                                            <div className='select_option_inner'>
                                                <span className='s_o_icom'>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </span>
                                                <h4>Just Me</h4>
                                                <p>I need to track <b className='c_red'>my own</b> miles and expenses</p>
                                                <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                            </div>
                                    </label>
                                </div>
                                <div className='col-sm-6 col-12'>
                                    <label className='select_option'>
                                            <input type='radio' name='step1Data' value="my team" checked={formData.step1Data === 'my team'} onChange={handleChange} required />
                                            <div className='select_option_inner'>
                                                <span className='s_o_icom'>
                                                <FontAwesomeIcon icon={faUsers} />
                                                </span>
                                                <h4>My Team</h4>
                                                <p>I need to track <b className='c_red'>my team's</b> mileage and expenses</p>
                                                <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                            </div>
                                    </label>
                                </div>
                            </div>
                        </div>
  );
};

export default UserStep1;
