import { useContext } from 'react';
import { FormContext } from './FormContext';

const UserStep4 = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleTextChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleRadioChange = (e) => {
    updateFormData({ teamSize: e.target.value });
  };

  const handleSelectChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className='welcome_block create_team_block'>
    <div className='welcome_head'>
        <h3>Create your team with a few short details</h3>
    </div>                                
    <div className='my-3'>
        <div className="mb-3">
            <label className="form-label">What is your name?</label>
            <input type="text" name="fullName" value={formData.fullName || ''} onChange={handleTextChange} className="form-control" placeholder='Your full name' />
        </div>
        <div className="mb-3">
            <label className="form-label">Where do you work?</label>
            <input type="text" name="companyName" value={formData.companyName || ''} onChange={handleTextChange} className="form-control" placeholder='company name' />
        </div>
        <div className="mb-3">
            <label className="form-label">Your Team Size</label>
            <select className="form-select" name="selectBox1" value={formData.selectBox1 || ''} onChange={handleSelectChange}>
                <option value="">-- Select an option --</option>
                <option value="1-5">1-5</option>
                <option value="6-20">6-20</option>
                <option value="21-50">21-50</option>
                <option value="51-100">51-100</option>
                <option value="100+">100+</option>
            </select>
            {/* <div className='row'>
                <div className='col-sm-6 col-12'>
                    <div className="form-check mb-2">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="teamSize" value="1-5" checked={formData.teamSize === '1-5'} onChange={handleRadioChange} />
                            <span>1-5</span> 
                        </label>
                    </div>
                </div>
                <div className='col-sm-6 col-12'>
                    <div className="form-check mb-2">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="teamSize" value="6-20" checked={formData.teamSize === '6-20'} onChange={handleRadioChange} />
                            <span>6-20</span> 
                        </label>
                    </div>
                </div>
                <div className='col-sm-6 col-12'>
                    <div className="form-check mb-2">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="teamSize" value="21-50" checked={formData.teamSize === '21-50'} onChange={handleRadioChange} />
                            <span>21-50</span> 
                        </label>
                    </div>
                </div>
                <div className='col-sm-6 col-12'>
                    <div className="form-check mb-2">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="teamSize"  value="51-100" checked={formData.teamSize === '51-100'} onChange={handleRadioChange} />
                            <span>51-100</span> 
                        </label>
                    </div>
                </div>
                <div className='col-sm-6 col-12'>
                    <div className="form-check mb-2">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="teamSize"  value="100+" checked={formData.teamSize === '100+'} onChange={handleRadioChange} />
                            <span>100+</span> 
                        </label>
                    </div>
                </div>
            </div> */}
        </div>
        <div className="mb-3">
            <label className="form-label">what is your phone number?</label>
            <input type="text" name="phoneNumber" value={formData.phoneNumber || ''} onChange={handleTextChange} className="form-control" placeholder='123-456-7890' />
        </div>
    </div>
</div>
  );
};

export default UserStep4;
