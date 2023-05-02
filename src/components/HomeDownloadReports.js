import React from 'react';
import Image from 'next/image';
import reports from './assets/images/reports.png'
class HomeDownloadReports extends React.Component {
    constructor(props) {
      super(props);

    }
    
    render() {

      return (  
      <>
  <div className="download_reports_wrap">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className="d_r_left">
                        <div className="page_head text-left wow fadeInUp">
                            <h2>Download Your <span className="c_red">Track <br></br> Reports</span> as you want</h2>
                        </div>
                        <p className="wow fadeInUp">Vehicle Bells will generate a PDF file of all your mileage and trip records so that you can pay your Taxes and other expenses accordingly. you can download your reports as you want:-</p>
                        <ul className="wow fadeInUp">
                            <li>Daily bases</li>
                            <li>Weekly wise</li>
                            <li>Monthaly wise</li>
                            <li>Yearly wise</li>
                            <li>Selected Date wise</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d_r_right">
                        <figure className="wow fadeInUp">
                        <Image
                        src={reports}
                        alt="reports"
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
  export default HomeDownloadReports;