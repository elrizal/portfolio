import React from 'react';
import Link from 'next/link';

const Introgallery = () => {
  return (
    <React.Fragment>
      <section className="row center">
        <Link href='/web/[id]' as='/web/index'>
          <a className="col-sm-12 col-md-4 col-lg-4 dark-text casegal web">
            <h3 className="label">Applications</h3><br />
          </a>
        </Link>
        <Link href='/uxui/[id]' as='/uxui/index'>
          <a className="col-sm-12 col-md-4 col-lg-4 casegal ux">
            <h3 className="label">UX/UI Case Studies</h3><br />
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
      </section>

      <section className="row center">
        <Link href='/branding/[id]' as='/branding/index'>
          <a className="col-sm-12 col-md-4 col-lg-4 casegal branding">
            <h3 className="label">Branding</h3><br />
          </a>
        </Link>
        <Link href='/print/[id]' as='/print/index'>
          <a className="col-sm-12 col-md-4 col-lg-4 casegal print">
            <h3 className="label">Print Design</h3><br />
          </a>
        </Link>
        <Link href='/info-illust/[id]' as='/info-illust/index'>
          <a className="col-sm-12 col-md-4 col-lg-4 casegal infoillust">
            <div className="container"></div>
            <h3 className="label">
              Illustrations
            </h3>
          </a>
        </Link>
      </section> 
    </React.Fragment>
  )
}

export default Introgallery;