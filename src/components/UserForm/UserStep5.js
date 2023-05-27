import { useContext } from 'react';
import { FormContext } from './FormContext';

const UserStep5 = () => {
  const { formData, updateFormData } = useContext(FormContext);

  const handleInputChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className='welcome_block create_team_block'>
    <div className='welcome_head'>
    <h3>Invite your team to record miles with Vehicle Bells</h3>
    </div>                            
    <div className='my-3'>
    <div className="mb-3">
        <label className="form-label">Email addresses</label>
        <textarea className="form-control" placeholder='Enter email addresses' name="textareaField" value={formData.textareaField || ''} onChange={handleInputChange} />
        <small>Separate emails with a comma, or copy and paste from excel or google sheets.</small>
    </div>
    <div className="mb-3">
        <label className="form-label">Role</label>
        <select className="form-select" name="selectBox1" value={formData.selectBox1 || ''} onChange={handleSelectChange}>
            <option value="">-- Select an option --</option>
            <option value="Member">Member</option>
            <option value="Teamleader">Teamleader</option>
            <option value="Manager">Manager</option>
        </select>
    </div>
    <div className="mb-3">
        <label className="form-label">Program</label>
        <select className="form-select" name="selectBox2" value={formData.selectBox2 || ''} onChange={handleSelectChange}>
            <option value="">-- Select an option --</option>
            <option value="No Program">No Program</option>
            <option value="Program">Program</option>
            <option value="Program">Program</option>
        </select>
    </div>
    </div>
    </div>
  );
};

export default UserStep5;
