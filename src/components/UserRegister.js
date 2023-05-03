import React from 'react';
import Image from 'next/image';
import Sitelogo from './assets/images/logo.png'
import Link from 'next/link';
class UserRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
          loading: true
      };
      }
      componentDidMount(){
          setTimeout(() => this.setState({loading: false}), 500);
      } 
    render() {
      return (  
      <>  
         <div className="page_gradient"></div>
        { this.state.loading ? <div className="loader"><div className="loader_div"></div></div>
        :          
        <div className="login_wrap">
            <div className="container">
                <div className="login_wrap_inner">
                    <div className="row g-0">
                        <div className="col-lg-7">
                            <div className="login_left">
                                <Link href="/" className="login_logo wow fadeInUp">
                                    <Image
                                    src={Sitelogo}
                                    alt="vehicle bells"
                                    />
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
                                <h3 className="wow fadeInUp">Register</h3>
                                <p className="wow fadeInUp">Create your Account</p>
                                <div className="or_text wow fadeInUp"><span>OR</span></div>
                                <div className="login_buttons_group wow fadeInUp">
                                    <Link href="#" className="btn">                                           
                                        Sign Up with Google
                                    </Link>
                                    <Link href="/login" className="btn">Already have an account? Sign in</Link>
                                </div>
                                <div className="login_bottom_text wow fadeInUp">By signing In, you agree to our <Link href="term-and-conditions">Terms and Conditions</Link> and acknowledge that you have read our <Link href="privacy-policy">Privacy Policy.</Link></div>
</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    }
      </>
      );
      ;
    }
  }
  export default UserRegister;