import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

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
      <div className="container extra-top">
        <p><h2 className='container'>Categories of work</h2></p>
      </div>
      <ScrollAnimation animateIn='fadeIn'>
        <div className="row">
          <div className="col-sm-6  col-lg-4 casegal web">
            <h3 className="label">Web Applications</h3>
          </div>
          <div className="col-sm-6  col-lg-4 casegal ux">
            <h3 className="label">UX/UI Case Studies</h3>
          </div>
          <div className="col-sm-6 col-lg-4 casegal camp">
            <h3 className="label">
              Ads & Campaigns
            </h3>
          </div>
        </div>
        <div className="row">
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
        </div>
      </ScrollAnimation>
    </React.Fragment>
  )
}

export default Introgallery;