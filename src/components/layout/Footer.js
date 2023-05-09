import React from 'react';
import whitelogo from '../assets/images/logo-white.png'
import { Container, Row, Col } from "react-bootstrap"
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isDisplayed: false
      };       
    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
    }
  
    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () => {
      if (window.pageYOffset > 100) {
        this.setState({ isDisplayed: true });
      } else {
        this.setState({ isDisplayed: false });
      }
    };
    backToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };    
    render() {
      const { isDisplayed } = this.state;
      return (  
        <footer className="main_footer">
        <Container>
            <Row>
              <Col lg={4}>
                <div className="footer_block wow fadeInUp">
                        <Link href="#" className="footer_logo">
                            <Image
                                src={whitelogo}
                                alt="vehicle bells"
                            />
                            </Link>
                        <p>Vehicle Bells will help in keeping a record of the distance traveled by a vehicle for business, tax, or personal purposes. This information is often used to calculate the amount of reimbursement for business-related travel expenses or to determine the tax deduction for the use of a personal vehicle for business purposes.</p>
                </div>                
              </Col>
              <Col lg={8}>
                <Row>
                  <Col lg={4}>
                    <div className="footer_block wow fadeInUp">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Help Center</a></li>
                            <li><a href="">Resource Hub</a></li>
                            <li><a href="">Jobs</a></li>
                            <li><a href="">Terms of Service</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>                    
                  </Col>
                  <Col lg={4}>
                  <div className="footer_block wow fadeInUp">
                      <h4>Solutions</h4>
                      <ul>
                          <li><a href="">Mileage Tracking</a></li>
                          <li><a href="">Team Management</a></li>
                          <li><a href="">Route ATM locations</a></li>
                          <li><a href="">Route Petrol pumps locations</a></li>
                          <li><a href="">Calculate Trip expenses</a></li>
                      </ul>
                  </div>                    
                  </Col>
                  <Col lg={4}>
                  <div className="footer_block wow fadeInUp">
                      <h4>Contact Us</h4>
                      <ul>
                          <li>
                              <a href="">
                                  <svg width="20" height="13" viewBox="0 0 20 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M0.890605 1.60568C1.40623 1.8691 8.56873 5.65243 8.83592 5.78868C9.1031 5.92493 9.37498 5.98852 9.79685 5.98852C10.2187 5.98852 10.4906 5.92493 10.7578 5.78868C11.025 5.65243 18.1875 1.8691 18.7031 1.60568C18.8953 1.5103 19.2187 1.33771 19.289 1.14242C19.4109 0.79724 19.2797 0.665527 18.7594 0.665527H9.79685H0.834355C0.314042 0.665527 0.182792 0.801781 0.304667 1.14242C0.37498 1.34226 0.698417 1.5103 0.890605 1.60568Z" fill="white"/>
                                      <path d="M19.1109 1.81022C18.7266 2.00097 15.2766 4.38088 12.9938 5.81155L16.8469 10.0127C16.9406 10.1035 16.9828 10.2126 16.9313 10.2671C16.875 10.317 16.7531 10.2898 16.6547 10.2035L12.0328 6.42469C11.3344 6.8607 10.8422 7.16046 10.7578 7.20588C10.3969 7.38301 10.1438 7.40572 9.79688 7.40572C9.45 7.40572 9.19688 7.38301 8.83594 7.20588C8.74688 7.16046 8.25938 6.8607 7.56094 6.42469L2.93906 10.2035C2.84531 10.2943 2.71875 10.3216 2.6625 10.2671C2.60625 10.2171 2.64844 10.1035 2.74219 10.0127L6.59063 5.81155C4.30781 4.38088 0.820312 2.00097 0.435937 1.81022C0.0234375 1.60584 0 1.84655 0 2.03277C0 2.21898 0 11.3435 0 11.3435C0 11.7658 0.642188 12.2927 1.10156 12.2927H9.79688H18.4922C18.9516 12.2927 19.5 11.7613 19.5 11.3435C19.5 11.3435 19.5 2.21444 19.5 2.03277C19.5 1.84201 19.5281 1.60584 19.1109 1.81022Z" fill="white"/>
                                  </svg>
                                  support@vehiclebells.com
                              </a>
                          </li>
                          <li>
                              <a href="">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g clipPath="url(#clip0_45_180)">
                                      <path d="M4.41667 7.19667C5.37667 9.08333 6.92 10.6267 8.81 11.5867L10.2767 10.1167C10.46 9.93333 10.7233 9.88 10.9533 9.95333C11.7 10.2 12.5033 10.3333 13.3333 10.3333C13.7033 10.3333 14 10.63 14 11V13.3333C14 13.7033 13.7033 14 13.3333 14C7.07333 14 2 8.92667 2 2.66667C2 2.29667 2.3 2 2.66667 2H5C5.37 2 5.66667 2.29667 5.66667 2.66667C5.66667 3.49667 5.8 4.3 6.04667 5.04667C6.12 5.27667 6.06667 5.54 5.88333 5.72333L4.41667 7.19667Z" fill="white"/>
                                      </g>
                                      <defs>
                                      <clipPath id="clip0_45_180">
                                      <rect width="16" height="16" fill="white"/>
                                      </clipPath>
                                      </defs>
                                  </svg>
                                  (+91) 2141526541 INDIA
                              </a>
                          </li>
                          <li>
                              <a href="">
                                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <g clipPath="url(#clip0_45_180)">
                                      <path d="M4.41667 7.19667C5.37667 9.08333 6.92 10.6267 8.81 11.5867L10.2767 10.1167C10.46 9.93333 10.7233 9.88 10.9533 9.95333C11.7 10.2 12.5033 10.3333 13.3333 10.3333C13.7033 10.3333 14 10.63 14 11V13.3333C14 13.7033 13.7033 14 13.3333 14C7.07333 14 2 8.92667 2 2.66667C2 2.29667 2.3 2 2.66667 2H5C5.37 2 5.66667 2.29667 5.66667 2.66667C5.66667 3.49667 5.8 4.3 6.04667 5.04667C6.12 5.27667 6.06667 5.54 5.88333 5.72333L4.41667 7.19667Z" fill="white"/>
                                      </g>
                                      <defs>
                                      <clipPath id="clip0_45_180">
                                      <rect width="16" height="16" fill="white"/>
                                      </clipPath>
                                      </defs>
                                  </svg>
                                  (+91) 2141526541 INDIA
                              </a>
                          </li>
                      </ul>
                      <ul className="social_list">
                          <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>
                          <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
                          <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
                          <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
                      </ul>
                  </div>                    
                  </Col>
                </Row>
              </Col>
            </Row>
            <div className="copyright_block">
                <p>Copyright 2023 Vehicle Bells</p>
            </div>
            {isDisplayed && (
            <a onClick={this.backToTop} className="backToTop">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                     <path fillRule="evenodd" clipRule="evenodd" d="M10.125 6.09068V15.7499H7.87496V6.09068L4.17034 9.7953L2.57959 8.20456L8.99996 1.78418L15.4203 8.20456L13.8296 9.7953L10.125 6.09068Z" fill="white"></path>
                </svg>
            </a>
            )}            
        </Container>
        </footer>
      );
      ;
    }
  }
  export default Footer;