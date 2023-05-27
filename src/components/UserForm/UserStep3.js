import { useContext } from 'react';
import { FormContext } from './FormContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faTruck,faTaxi,faBuilding,faVideoCamera,faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const UserStep3 = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleTextChange = (e) => {
    updateFormData({ custom_occupation: e.target.value });
    updateFormData({ occupationtype: '' });
  };

  const handleRadioChange = (e) => {
    updateFormData({ occupationtype: e.target.value });
  };

  return (

    <div className='welcome_block  work_type_block'>
    <div className='welcome_head'>
        <h3>What do you do for work?</h3>
    </div>
    <div className='c_work_purpose mt-5'>
        <div className="mb-3">
            <label className="form-label">+ Add a custom purpose</label>
            <input type="text"  className="form-control bg_white" placeholder='work purpose' name="custom_occupation" value={formData.custom_occupation || ''} onChange={handleTextChange} />
        </div>
    </div>
    <div className='p_or_text'>Or select any one from below</div>
    <div className='select_option_list'>
        <label className='select_option'>
                <input type='radio' name='occupationtype' value="Delivery" checked={formData.occupationtype === 'Delivery'} onChange={handleRadioChange} />
                <div className='select_option_inner'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faTruck} />
                    </span>
                    <h5>Delivery</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='occupationtype' value="Ride share" checked={formData.occupationtype === 'Ride share'} onChange={handleRadioChange} />
                <div className='select_option_inner d-flex'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faTaxi} />
                    </span>
                    <h5>Ride share</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='occupationtype' value="Real estate" checked={formData.occupationtype === 'Real estate'} onChange={handleRadioChange} />
                <div className='select_option_inner d-flex'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faBuilding} />
                    </span>
                    <h5>Real estate</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='occupationtype' value="Photography" checked={formData.occupationtype === 'Photography'} onChange={handleRadioChange} />
                <div className='select_option_inner d-flex'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faVideoCamera} />
                    </span>
                    <h5>Photography</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='occupationtype' value="Creator" checked={formData.occupationtype === 'Creator'} onChange={handleRadioChange} />
                <div className='select_option_inner d-flex'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <h5>Creator</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='occupationtype' value="Enterpreeur" checked={formData.occupationtype === 'Enterpreeur'} onChange={handleRadioChange} />
                <div className='select_option_inner d-flex'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <h5>Enterpreeur</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
    </div>
</div>

  );
};

export default UserStep3;
