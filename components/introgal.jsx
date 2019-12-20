import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

const Introgallery = () => {
  return (
    <React.Fragment>
      <div className="center row ">
        <p className="center"> <h2 >Project categories</h2></p>
       
      </div>
      <div className="row center">
        <Link href='/web/[id]' as='/web/index'>
          <a className="col-sm-12 col-md-4 col-lg-4 casegal web">
            <h3 className="label">Applications</h3>
          </a>
        </Link>
        <Link href='/uxui/[id]' as='/uxui/index'>
          <a className="col-sm-12 col-md-4 col-lg-4 casegal ux">
            <h3 className="label">UX/UI Case Studies</h3>
          </a>
        </Link>
        <Link href='/campaign/[id]' as='/campaign/index'>
          <a className="col-sm-12 col-md-4 col-lg-4 casegal camp">
            <div className="container"></div>
            <h3 className="label">
              Ads & Campaigns
            </h3>
          </a>
        </Link>
        
      </div>

    </React.Fragment>
  )
}

export default Introgallery;