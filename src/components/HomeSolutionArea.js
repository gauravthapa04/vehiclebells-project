import React from 'react';
import Image from 'next/image';
import company from './assets/images/company.png'
import single from './assets/images/single.png'
class HomeSolutionArea extends React.Component {
    constructor(props) {
      super(props);

    }
    
    render() {

      return (  
      <> 
        <div className="solutions_areas_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="solutions_area_block text-center wow fadeInLeft">
                                <h3 className="text-center">Solution For <span className="c_red">Company</span></h3>
                                <figure>
                                <Image
                                src={company}
                                alt="company"
                                />
                                </figure>
                                <ul>
                                    <li>Build your team.</li>
                                    <li>Track your team activities.</li>
                                    <li>Pay According to activities.</li>
                                    <li>Add/Remove any team member anytime.</li>
                                </ul>
                                <a href="#" className="btn">Check Benefits for company</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="solutions_area_block text-center wow fadeInRight">
                                <h3 className="text-center">Solution For <span className="c_red">Individuals</span></h3>
                                <figure>
                                <Image
                                src={single}
                                alt="company"
                                />
                                </figure>
                                <ul>
                                    <li>Track your Mileage expenses.</li>
                                    <li>Plan your all Trips.</li>
                                    <li>Check all the ATMs and Petrol pumps on the route.</li>
                                    <li>Download and share reports.</li>
                                </ul>
                                <a href="#" className="btn">Check Benefits for individuals</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
      </>
      );
      ;
    }
  }
  export default HomeSolutionArea;