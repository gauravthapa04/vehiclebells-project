import React from 'react';
import Image from 'next/image';
import calculation from './assets/images/calculation.png'
import petrolPumb from './assets/images/petrol-pumb.png'
import toll from './assets/images/toll.png'
import carMeter from './assets/images/car-meter.png'
import atm from './assets/images/atm.png'
import team from './assets/images/team.png'
class HomeSolutionVehicleBell extends React.Component {
    constructor(props) {
      super(props);

    }
    
    render() {

      return (  
      <> 
        <div className="home_solutions_wrap">
        <div className="container">
            <div className="page_head text-center  wow fadeInUp">
                <h2>Save time and simplify your life with <span className="c_red">Vehicle Bells</span></h2>
            </div>

            <div className="h_solution_block">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="h_solution_block_content  wow fadeInLeft">
                            <h3>Calculate your Petrol, Diesel, CNG expenses.</h3>
                            <p>Calculating your petrol, diesel, or CNG expenses can help you better manage your fuel budget and make informed decisions about your transportation choices. By tracking your fuel consumption and costs, you can identify ways to save money and reduce your environmental impact. There are s everal online calculators and mobile apps available that can help you easily calculate your fuel expenses based on your vehicle type, distance traveled, and fuel type.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <figure className=" wow fadeInRight">
                            <Image
                                src={calculation}
                                alt="calculation"
                            />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="h_solution_block">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="h_solution_block_content  wow fadeInRight">
                            <h3>Check your Nearest Petrol Pump</h3>
                            <p>Checking your nearest petrol pump is essential when you need to refuel your vehicle. You can easily find the nearest petrol pump by using online maps, mobile apps, or navigation systems. Some apps even allow you to compare fuel prices and amenities, such as car wash services and convenience stores, to help you choose the best option for your needs.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <figure className=" wow fadeInLeft">
                        <Image
                        src={petrolPumb}
                        alt="petrolPumb"
                        />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="h_solution_block">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="h_solution_block_content wow fadeInLeft">
                            <h3>Check all Tolls rates in your route</h3>
                            <p>Checking all toll rates in your route is important when planning a trip or a commute. You can find toll rates for your specific route by using online maps, mobile apps, or toll road websites. Some apps even allow you to compare toll rates for different routes and provide real-time traffic updates to help you choose the fastest and most cost-effective route. By checking toll rates beforehand, you can avoid unexpected expenses and plan your trip more efficiently.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <figure className=" wow fadeInRight">
                        <Image
                        src={toll}
                        alt="toll"
                        />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="h_solution_block">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="h_solution_block_content  wow fadeInRight">
                            <h3>Check your vehicle Tank Storage</h3>
                            <p>Checking your vehicle tank storage is important to ensure that you have enough fuel for your journey. You can easily check your fuel gauge on the dashboard of your vehicle to determine the current fuel level. Additionally, some vehicles are equipped with an electronic fuel management system that provides more detailed information about fuel consumption and estimated range. By checking your vehicle tank storage before a trip, you can avoid running out of fuel and causing unnecessary delays.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <figure className=" wow fadeInLeft">
                        <Image
                        src={carMeter}
                        alt="carMeter"
                        />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="h_solution_block">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="h_solution_block_content wow fadeInLeft">
                            <h3>Check all the ATM's in the Route</h3>
                            <p>Checking all the ATMs in your route can help you plan your finances and ensure that you have access to cash when you need it. You can find ATMs in your route by using online maps, mobile apps, or bank websites. Some apps even allow you to filter ATMs by features, such as fee-free withdrawals, wheelchair accessibility, and 24/7 availability. By checking ATMs beforehand, you can avoid fees and find the most convenient location for your needs.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <figure className=" wow fadeInRight">
                        <Image
                        src={atm}
                        alt="atm"
                        />
                        </figure>
                    </div>
                </div>
            </div>

            <div className="h_solution_block">
                <div className="row align-items-center">
                    <div className="col-md-7">
                        <div className="h_solution_block_content wow fadeInRight">
                            <h3>Team Management</h3>
                            <p>Team management is the process of overseeing and coordinating the work of a group of individuals to achieve a common goal. Effective team management involves building a positive team culture, setting clear goals and expectations, delegating tasks and responsibilities, providing feedback and support, and fostering collaboration and communication among team members. By implementing effective team management practices, organizations can improve productivity, employee satisfaction, and overall performance.</p>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <figure className="wow fadeInLeft">
                        <Image
                        src={team}
                        alt="atm"
                        />
                        </figure>
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
  export default HomeSolutionVehicleBell;