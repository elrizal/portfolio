import Head from 'next/head'
import Link from 'next/link'
import '../css/styles.sass';

export default ({ children }) => {
  /*
   * Added this to toggle the is-active class. See:
   * 
   * https://bulma.io/documentation/components/navbar/#navbar-menu
   * https://github.com/jgthms/bulma/issues/856
   */
  const toggleStyles = (event) => {
    document.querySelector('#burger').classList.toggle('is-active')
    document.querySelector('#navbarmenu').classList.toggle('is-active')
  }

  return (
    <div>
      <Head>
        <title>Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      </Head>
      <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand graybg">
            <a className="navbar-item">

            </a>
            <a id="burger" onClick={toggleStyles} 
                role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div id="navbarmenu" className="navbar-menu">
            <div className="navbar-start">
              <Link  href="/">
                <a className="navbar-item">Home</a>
              </Link>
              <Link href='/post/[id]' as='/post/first'>
                <a className="navbar-item">First</a>
              </Link>
              <Link href='/post/[id]' as='/post/second'>
                <a className="navbar-item">Second</a>
              </Link>
            </div>
            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
-                </div>
              </div>
            </div>
          </div>
        </nav>
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