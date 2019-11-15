import Head from 'next/head'
import Link from 'next/link'
import '../css/styles.sass';
import Nav from './nav';
export default ({ children }) => {
  /*
   * Added this to toggle the is-active className. See:
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
        <link href="https://fonts.googleapis.com/css?family=Biryani|Open+Sans&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"></link>
      </Head>
      <Nav/>
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