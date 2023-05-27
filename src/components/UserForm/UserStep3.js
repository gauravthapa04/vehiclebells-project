import { useContext } from 'react';
import { FormContext } from './FormContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faTruck,faTaxi,faBuilding,faVideoCamera,faCheckCircle } from '@fortawesome/free-solid-svg-icons';


const UserStep3 = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleTextChange = (e) => {
    updateFormData({ step1TextData: e.target.value });
  };

  const handleRadioChange = (e) => {
    updateFormData({ step1RadioData: e.target.value });
  };

  return (

    <div className='welcome_block  work_type_block'>
    <div className='welcome_head'>
        <h3>What do you do for work?</h3>
    </div>
    <div className='c_work_purpose mt-5'>
        <div className="mb-3">
            <label className="form-label">+ Add a custom purpose</label>
            <input type="text" className="form-control bg_white" placeholder='work purpose'name="step1TextData" value={formData.step1TextData || ''} onChange={handleTextChange} />
        </div>
    </div>
    <div className='p_or_text'>Or select any one from below</div>
    <div className='select_option_list'>
        <label className='select_option'>
                <input type='radio' name='work-type' value="Delivery" checked={formData.step1RadioData === 'Delivery'} onChange={handleRadioChange} />
                <div className='select_option_inner'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faTruck} />
                    </span>
                    <h5>Delivery</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='work-type' value="Ride share" checked={formData.step1RadioData === 'Ride share'} onChange={handleRadioChange} />
                <div className='select_option_inner d-flex'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faTaxi} />
                    </span>
                    <h5>Ride share</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='work-type' value="Real estate" checked={formData.step1RadioData === 'Real estate'} onChange={handleRadioChange} />
                <div className='select_option_inner d-flex'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faBuilding} />
                    </span>
                    <h5>Real estate</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='work-type' value="Photography" checked={formData.step1RadioData === 'Photography'} onChange={handleRadioChange} />
                <div className='select_option_inner d-flex'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faVideoCamera} />
                    </span>
                    <h5>Photography</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='work-type' value="Creator" checked={formData.step1RadioData === 'Creator'} onChange={handleRadioChange} />
                <div className='select_option_inner d-flex'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faUser} />
                    </span>
                    <h5>Creator</h5>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        <label className='select_option'>
                <input type='radio' name='work-type' value="Enterpreeur" checked={formData.step1RadioData === 'Enterpreeur'} onChange={handleRadioChange} />
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
