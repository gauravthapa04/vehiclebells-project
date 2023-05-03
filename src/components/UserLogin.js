import React from 'react';
import Image from 'next/image';
import Sitelogo from './assets/images/logo.png'
import Link from 'next/link';
class UserLogin extends React.Component {
    constructor(props) {
      super(props);
      this.state = {  
        loading: true,
        email: '',
        password: '',
        rememberMe: false
    };
    }
    componentDidMount(){
        setTimeout(() => this.setState({loading: false}), 500);
    }   

    handleInputChange = event => {
        const { name, value, type, checked } = event.target;
        const val = type === "checkbox" ? checked : value;
        this.setState({ [name]: val });
      };

      handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        // Handle login logic with email and password

        console.log("Email: ", email);
        console.log("Password: ", password);
        console.log("Remember me: ", rememberMe);

      };      

    render() {
        const { email, password, rememberMe } = this.state;
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
    <h3 className="wow fadeInUp">Login</h3>
    <p className="wow fadeInUp">Welcome back! Please login to your account.</p>
    <form className="wow fadeInUp" onSubmit={this.handleSubmit}>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleInputChange}
            placeholder='Email'
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
            placeholder='Password'
          />
        </div>
        <div className="row justify-between">
        <div className="col-6">
        <div className="mb-4 form-check">
          <input
            type="checkbox"
            name="rememberMe"
            checked={rememberMe}
            onChange={this.handleInputChange}
            className="form-check-input"
          />
          <label className="form-check-label">Remember Me</label>
          </div></div>
          <div className="col-6 text-end">
            <a href="/forgot-password" className="forget_password">forgot password?</a>
        </div>          
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    <div className="or_text wow fadeInUp"><span>OR</span></div>
    <div className="login_buttons_group wow fadeInUp">
        <Link href="#" className="btn">                                            
            Sign in with Google
        </Link>
        <Link href="/register" className="btn">No account? Create one</Link>
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
  export default UserLogin;