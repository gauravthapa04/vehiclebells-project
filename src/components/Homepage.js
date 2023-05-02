import React from 'react'
import HomeWelcome from './HomeWelcome'
import HomeSolutionVehicleBell from './HomeSolutionVehicleBell'
import Testimonial from './Testimonial'
import CTA from './CTA'
import HomeDownloadReports from './HomeDownloadReports'
import HomeSolutionArea from './HomeSolutionArea'
//import WOW from 'wowjs';
class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }


  render() {
    return (
    <>
      <HomeWelcome />
      <HomeSolutionVehicleBell />
      <HomeSolutionArea />
      <HomeDownloadReports />
      <CTA />
      <Testimonial />
    </>
    );
  }
}
export default Homepage;
