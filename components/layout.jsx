import Head from 'next/head'
import '../css/styles.sass';
import Hamburger from './hamburger';

const Layout = ({children}) => {
  return (
    <div>
      <Head>
        <title>Erin Leigh Rizal - Developer and Designer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css"
          integrity="sha256-gvEnj2axkqIj4wbYhPjbWV7zttgpzBVEgHub9AAZQD4="
          crossorigin="anonymous"/>
      </Head>
      <Hamburger/>
      <div className="row extra-top-layout"></div>
      <div className="content extra-top">
        {children}
      </div>
      <div className="customfooter extra-top">
        <footer>
          <div className="container">
            <p>&#169; 2020 Erin Leigh Rizal
              <br/>Connect at &nbsp;<a href='https://www.linkedin.com/in/erinlrizal/' target='_blank'>
                LinkedIn</a>&nbsp;or
              &nbsp;<a href='mailto:erin@lrizal.com'>
                E-mail</a></p>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default Layout