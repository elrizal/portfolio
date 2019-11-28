import Head from 'next/head'
import '../css/styles.sass';
import Hamburger from './hamburger';

export default ({ children }) => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      </Head>
      <Hamburger/>
      <div className="row extra-top"></div>
        <div className="content">
        {children}
        </div>
      <div className="customfooter">
      <footer className="footer">
        <div className=" has-text-centered">
          <span>2019 Erin Leigh Rizal</span>
        </div>
      </footer>
      </div>
    </div>
  )
}