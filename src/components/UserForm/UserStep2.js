import { useContext, useState, useEffect } from 'react';
import { FormContext } from './FormContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPerson,faPeopleGroup,faCheckCircle} from '@fortawesome/free-solid-svg-icons';
//import fse from 'fs-extra';
import path from 'path';

const UserStep2 = () => {
  const { formData, updateFormData } = useContext(FormContext);
  const [showForm, setShowForm] = useState(false);

  const handleChange = (e) => {
    updateFormData({ employeetype: e.target.value  });
    setShowForm(e.target.value === 'Employee');
  };

  const handleTextChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

 useEffect(() => {
    const SelectedValue = formData.employeetype;
    setShowForm(SelectedValue === 'Employee');
  }, []);

  return (
    <div className='welcome_block work_mode_block'>
    <div className='welcome_head'>
        <h3>Choose a mode to get started :-</h3>
    </div>
    <div className='select_option_list row justify-content-center'>
        <div className='col-sm-6 col-12'>
        <label className='select_option'>
                <input type='radio' name='employeetype' value="Self employed" checked={formData.employeetype === 'Self employed'} onChange={handleChange} />
                <div className='select_option_inner'>
                    <span className='s_o_icom'>
                        <FontAwesomeIcon icon={faPerson} />
                    </span>
                    <h4>Self-employed</h4>
                    <p>Delivery, rideshare, real estate, photography, creator, enterpreeur, etc.</p>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        </div>
        <div className='col-sm-6 col-12'>
        <label className='select_option'>
                <input type='radio' name='employeetype' value="Employee" checked={formData.employeetype === 'Employee'} onChange={handleChange} />
                <div className='select_option_inner'>
                    <span className='s_o_icom'>
                    <FontAwesomeIcon icon={faPeopleGroup} />
                    </span>
                    <h4>Employee</h4>
                    <p>For example: healthcare, distribution, sales.</p>
                    <div className="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                </div>
        </label>
        </div>
    </div>
    {showForm && (
    <div className='employee_company_info mb-5'>
        <h5 className="mb-3">Get Vehicle Bells for your company</h5>
        <div className="mb-3">
            <label className="form-label">what company do you work for?</label>
            <input type="text" name="CompanyName" className="form-control" placeholder='Company Name' onChange={handleTextChange} />
        </div>

        <div className="mb-3">
            <label className="form-label">Manager email address</label>
            <input type="email" name="Manageremail" className="form-control" placeholder='Manager email' onChange={handleTextChange} />
        </div>
    </div>
    )}

</div>
  );
};

export default UserStep2;
