import React, { Component } from 'react';
import Image from 'next/image';
import Sitelogo from './assets/images/logo.png'
import Link from 'next/link';
class UserForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
        email:'',    
        loading: true
      };
      }   
    componentDidMount(){
        setTimeout(() => this.setState({loading: false}), 500);
    } 
    handleInputChange = event => {
        const { name, value } = event.target;
        const val = value;
        this.setState({ [name]: val });
      };
      handleSubmit = (event) => {
        event.preventDefault();
        const { email } = this.state;
        // Handle login logic with email and password

        console.log("Email: ", email);
      }; 


    render() {
        const { email } = this.state;


        return (
          <>
         <div className="page_gradient"></div>
        { this.state.loading ? <div className="loader"><div className="loader_div"></div></div>
        :            
            <div className="login_wrap forgot_password_wrap">
              <div className="container">
                <div className="login_wrap_inner">
                  <div className="row g-0">
                    <div className="col-lg-7">
                      <div className="login_left">
                        <Link href="/" className="login_logo wow fadeInUp">
                          <Image src={Sitelogo} alt="vehicle bells" />
                        </Link>
                        <ul className="login_features_list wow fadeInUp">
                          <li>Calculate your Petrol, Diesel, CNG expenses.</li>
                          <li>Check your Nearest Petrol Pump</li>
                          <li>Check all Tolls rates in your route</li>
                          <li>Check your vehicle Tank Storage</li>
                          <li>Check all the ATM's in the Route</li>
                          <li>Team Management</li>
                          <li>Download Your Track Reports as you want</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="login_right">
                        <h3 className="wow fadeInUp">Reset Your Password</h3>
                        <p className="wow fadeInUp">
                          You will receive instructions for reseting your
                          password.
                        </p>
                        <form
                          className="wow fadeInUp"
                          onSubmit={this.handleSubmit}
                        >
                          <div className="mb-4">
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={this.handleInputChange}
                              placeholder="Your Email Address"
                              className="form-control"
                            />
                          </div>
                          <button type="submit" className="btn">
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    }
          </>
        );
    }
}

export default UserForgotPassword;