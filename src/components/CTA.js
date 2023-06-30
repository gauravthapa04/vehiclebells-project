import React from 'react';
import Link from 'next/dist/client/link';
class CTA extends React.Component {
    constructor(props) {
      super(props);

    }
    
    render() {

      return (  
      <>
    <div className="home_cta_wrap">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h3 className="wow fadeInUp">Make your life easier with Vehicle Bells!</h3>
                </div>
                <div className="col-md-4 text-end">
                    <Link href="/register" className="btn btn_white wow fadeInUp">Sign up now for free</Link>
                </div>
            </div>
        </div>
    </div>      
      </>
      );
      ;
    }
  }
  export default CTA;