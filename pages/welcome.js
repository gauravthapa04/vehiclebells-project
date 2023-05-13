import Layout from '@/src/components/layout/Layout';
import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../src/components/assets/images/logo.png'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear,faGauge, faRightFromBracket,faUser,faUsers,faPerson,faPeopleGroup,faTruck,faTaxi,faBuilding,faVideoCamera,faCheckCircle, faCheck } from '@fortawesome/free-solid-svg-icons';




export default function Welcome() {
  return (
    <Layout title="Vehicle Bells | Welcome" showHead='false' showFooter='false'>
        <header className='d_header'>
            <Container fluid>
                <Nav className="navbar navbar-expand-xl">
                    <Link href='/' className="navbar-brand">
                        <Image
                        src={logo}
                        className="App-logo"
                        alt="logo"
                        />                    
                    </Link>
                    <div className="header_right d-flex ms-auto">
                                <Dropdown className="user_dropdown">
                                <Dropdown.Toggle  id="dropdown-basic">
                                <span className='user_icon'>
                                    <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlSpace="preserve"
                                            style={{
                                            enableBackground: "new 0 0 24 24",
                                            }}
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 4c2.2 0 4 2.2 4 5s-1.8 5-4 5-4-2.2-4-5 1.8-5 4-5zm6.6 15.5C16.9 21 14.5 22 12 22s-4.9-1-6.6-2.5c-.4-.4-.5-1-.1-1.4 1.1-1.3 2.6-2.2 4.2-2.7.8.4 1.6.6 2.5.6s1.7-.2 2.5-.6c1.7.5 3.1 1.4 4.2 2.7.4.4.4 1-.1 1.4z" />
                                        </svg>
                                </span>
                                    Uiwebsoft
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><FontAwesomeIcon className='f_icon' icon={faGauge} /> Go To Team Dashboard</Dropdown.Item>
                                    <Dropdown.Item href="#"><FontAwesomeIcon className='f_icon' icon={faGear} /> Personal Settings</Dropdown.Item>
                                    <Dropdown.Item href="#"><FontAwesomeIcon className='f_icon' icon={faRightFromBracket} /> Log out</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                    </div>                     
                </Nav>
            </Container>
            </header>
            <div className='main_wraper'>

            <Container>

                <div className='welcome_wrap'>
            

                    <form className='welcome_form'>

                        <div className='welcome_block  app_use_block'>
                            <div className='text-center welcome_head'>
                                <h3>Welcome to <span className='c_red'>Vehicle Bells</span></h3>
                                <p>Tell us about yourself so we can customize the experience for you.</p>
                                <p className='f_20'>select any one option for which you are going to use Vehicle Bells..</p>
                            </div>
                            <div className='select_option_list row justify-content-center'>
                                <div className='col-sm-6 col-12'>
                                    <label className='select_option'>
                                            <input type='radio' name='using-for' checked />
                                            <div className='select_option_inner'>
                                                <span className='s_o_icom'>
                                                    <FontAwesomeIcon icon={faUser} />
                                                </span>
                                                <h4>Just Me</h4>
                                                <p>I need to track <b className='c_red'>my own</b> miles and expenses</p>
                                                <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                            </div>
                                    </label>
                                </div>
                                <div className='col-sm-6 col-12'>
                                    <label className='select_option'>
                                            <input type='radio' name='using-for' />
                                            <div className='select_option_inner'>
                                                <span className='s_o_icom'>
                                                <FontAwesomeIcon icon={faUsers} />
                                                </span>
                                                <h4>My Team</h4>
                                                <p>I need to track <b className='c_red'>my team's</b> mileage and expenses</p>
                                                <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                            </div>
                                    </label>
                                </div>
                            </div>
                            {/* <div className='w_form_btns d-flex justify-content-center  mb-5'>
                                    <button type='button' className='btn prev_step btn_white'>back</button>
                                    <button type='button' className='btn next_step'>Next</button>
                            </div> */}
                        </div>


                        <div className='welcome_block work_mode_block'>
                            <div className='text-center welcome_head'>
                                <h3><span className='c_red'>Choose a mode</span> to get started</h3>
                                <p>We'll optimize the app based on what kind of work you do you can edit this later.</p>
                            </div>
                            <div className='select_option_list row justify-content-center'>
                                <div className='col-sm-6 col-12'>
                                <label className='select_option'>
                                        <input type='radio' name='mode-type' checked />
                                        <div className='select_option_inner'>
                                            <span className='s_o_icom'>
                                                <FontAwesomeIcon icon={faPerson} />
                                            </span>
                                            <h4>Self-employed</h4>
                                            <p>Delivery, rideshare, real estate, photography, creator, enterpreeur, etc.</p>
                                            <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        </div>
                                </label>
                                </div>
                                <div className='col-sm-6 col-12'>
                                <label className='select_option'>
                                        <input type='radio' name='mode-type' />
                                        <div className='select_option_inner'>
                                            <span className='s_o_icom'>
                                            <FontAwesomeIcon icon={faPeopleGroup} />
                                            </span>
                                            <h4>Employee</h4>
                                            <p>Taxes are taken out of your payckeck. example: healthcare, distribution, sales.</p>
                                            <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        </div>
                                </label>
                                </div>
                            </div>
                            <div className='employee_company_info mb-5'>
                                <h5 class="mb-3">Get Vehicle Bells for your company</h5>
                                <div class="mb-3">
                                    <label class="form-label">what company do you work for?</label>
                                    <input type="text" class="form-control" placeholder='Company Name' />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Manager email address</label>
                                    <input type="email" class="form-control" placeholder='Manager email' />
                                </div>
                            </div>
                            
                        </div>


                        <div className='welcome_block  work_type_block'>
                            <div className='text-center welcome_head'>
                                <h3>What do you do for work?</h3>
                                <p>What is the work purpose for all your drives?</p>
                            </div>
                            <div className='c_work_purpose mt-5'>
                                <div class="mb-3">
                                    <label class="form-label">+ Add a custom purpose</label>
                                    <input type="text" class="form-control" placeholder='work purpose' />
                                </div>
                            </div>
                            <div className='p_or_text'>Or select any one from below</div>
                            <div className='select_option_list'>
                                <label className='select_option'>
                                        <input type='radio' name='work-type' value="Delivery" />
                                        <div className='select_option_inner'>
                                            <span className='s_o_icom'>
                                                <FontAwesomeIcon icon={faTruck} />
                                            </span>
                                            <h5>Delivery</h5>
                                            <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        </div>
                                </label>
                                <label className='select_option'>
                                        <input type='radio' name='work-type' value="Ride share" />
                                        <div className='select_option_inner d-flex'>
                                            <span className='s_o_icom'>
                                                <FontAwesomeIcon icon={faTaxi} />
                                            </span>
                                            <h5>Ride share</h5>
                                            <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        </div>
                                </label>
                                <label className='select_option'>
                                        <input type='radio' name='work-type' value="Real estate" />
                                        <div className='select_option_inner d-flex'>
                                            <span className='s_o_icom'>
                                                <FontAwesomeIcon icon={faBuilding} />
                                            </span>
                                            <h5>Real estate</h5>
                                            <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        </div>
                                </label>
                                <label className='select_option'>
                                        <input type='radio' name='work-type' value="Photography" />
                                        <div className='select_option_inner d-flex'>
                                            <span className='s_o_icom'>
                                                <FontAwesomeIcon icon={faVideoCamera} />
                                            </span>
                                            <h5>Photography</h5>
                                            <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        </div>
                                </label>
                                <label className='select_option'>
                                        <input type='radio' name='work-type' value="Creator"  />
                                        <div className='select_option_inner d-flex'>
                                            <span className='s_o_icom'>
                                                <FontAwesomeIcon icon={faUser} />
                                            </span>
                                            <h5>Creator</h5>
                                            <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        </div>
                                </label>
                                <label className='select_option'>
                                        <input type='radio' name='work-type' value="Enterpreeur"  />
                                        <div className='select_option_inner d-flex'>
                                            <span className='s_o_icom'>
                                                <FontAwesomeIcon icon={faUser} />
                                            </span>
                                            <h5>Enterpreeur</h5>
                                            <div class="option_check"><FontAwesomeIcon icon={faCheckCircle} /></div>
                                        </div>
                                </label>
                            </div>
                        </div>

                        
                        <div className='welcome_block create_team_block'>
                            <div className='text-center welcome_head'>
                                <h3>Create your team with a few short details</h3>
                            </div>                            
                            <div className='my-5'>
                                <div class="mb-3">
                                    <label class="form-label">What is your name?</label>
                                    <input type="text" class="form-control" placeholder='Your full name' />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Where do you work?</label>
                                    <input type="text" class="form-control" placeholder='company name' />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">number of employees tracking mileage</label>
                                    <div className='row'>
                                        <div className='col-sm-6 col-12'>
                                            <div class="form-check mb-2">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="radio" name="team-size" value="1-5"/>
                                                    <span>1-5</span> 
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-12'>
                                            <div class="form-check mb-2">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="radio" name="team-size" value="6-20" />
                                                    <span>6-20</span> 
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-12'>
                                            <div class="form-check mb-2">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="radio" name="team-size" value="21-50" />
                                                    <span>21-50</span> 
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-12'>
                                            <div class="form-check mb-2">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="radio" name="team-size"  value="51-100"/>
                                                    <span>51-100</span> 
                                                </label>
                                            </div>
                                        </div>
                                        <div className='col-sm-6 col-12'>
                                            <div class="form-check mb-2">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="radio" name="team-size"  value="100+"/>
                                                    <span>100+</span> 
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">what is your phone number?</label>
                                    <input type="text" class="form-control" placeholder='123-456-7890' />
                                </div>
                            </div>
                        </div>

                        <div className='welcome_block create_team_block'>
                            <div className='text-center welcome_head'>
                                <h3>Invite your team to record miles with Vehicle Bells</h3>
                            </div>                            
                            <div className='my-5'>
                                <div class="mb-3">
                                    <label class="form-label">Email addresses</label>
                                    <textarea class="form-control" placeholder='Enter email addresses'></textarea>
                                    <small>Separate emails with a comma, or copy and paste from excel or google sheets.</small>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Role</label>
                                    <select class="form-select">
                                        <option value="Member">Member</option>
                                        <option value="Teamleader">Teamleader</option>
                                        <option value="Manager">Manager</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Program</label>
                                    <select class="form-select">
                                        <option value="No Program">No Program</option>
                                        <option value="Program">Program</option>
                                        <option value="Program">Program</option>
                                    </select>
                                </div>
                            </div>
                        </div>


                        <div className='welcome_block'>
                            <div className='text-center welcome_head'>
                                <span className='completed_icon'>
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                <h3>Lets start with Vehicle Bells</h3>
                                <p>Now track your mileage and expenses by using Vehicle Bells</p>
                                <a href='#' className='btn mt-4 mb-5'>Start using Vehicle Bells</a>
                            </div>
                        </div>




                        <div className='w_form_btns d-flex justify-content-center  mb-5'>
                                <button type='button' className='btn prev_step btn_white'>back</button>
                                <button type='button' className='btn next_step'>Next</button>
                        </div>

                        <div className='w_form_steps mb-5'>
                            <ul className='steps_list d-flex justify-content-center'>
                                <li className='active w_step'>1</li>
                                <li className='w_step'>2</li>
                                <li className='w_step'>3</li>
                                <li className='w_step'>4</li>
                            </ul>
                        </div>

                    </form>
                    
                
                </div>

            </Container>

            </div>
   </Layout>
  )
}