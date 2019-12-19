import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Link from 'next/link';

const Introgallery = () => {
  const toggleStyles = (event) => {
    document
      .querySelector('#burger')
      .classList
      .toggle('is-active')
    document
      .querySelector('#navbarmenu')
      .classList
      .toggle('is-active')
  }

  return (
    <React.Fragment>
      <div className="container extra-top"></div>
      <div className="container extra-top"></div>

        <p><h2 className='container center'>Categories of work</h2></p>
     
      <ScrollAnimation animateIn='fadeIn'>
        <div className="row">
          <div className="col-sm-6  col-lg-4 casegal web">
            <h3 className="label">Web Applications</h3>
          </div>
          <div className="col-sm-6  col-lg-4 casegal ux">
            <h3 className="label">UX/UI Case Studies</h3>
          </div>
          <Link href='/campaign/[id]' as='/campaign/index'>
          <a className="col-sm-6 col-lg-4 casegal camp">
          <div className="container extra-top"></div>
            <h3 className="label">
              Ads & Campaigns
            </h3>
          </a>
          </Link>
        </div>
        {/* <div className="row">
          <div className="col-sm-6 col-lg-4 casegal camp">
            <h3 className="label">
              Brand Design
            </h3>
          </div>
          <div className="col-sm-6 col-lg-4 casegal camp">
            <h3 className="label">
              Instructional Illustration
            </h3>
          </div>
          <div className="col-sm-6 col-lg-4 casegal camp">
            <h3 className="label">
              Print-Projects
            </h3>
          </div>
        </div> */}
      </ScrollAnimation>
    </React.Fragment>
  )
}

export default Introgallery;