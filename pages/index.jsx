import React from 'react';
import {Parallax} from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/styles.sass';
import Hamburger from '../components/hamburger';
import Example from '../components/svgtest'
import Introgallery from '../components/introgal';
import {NextSeo} from 'next-seo';
import Button from '@material-ui/core/Button';
import Code from '@material-ui/icons/Code';
import Storage from '@material-ui/icons/Storage';
import ColorLens from '@material-ui/icons/ColorLens';
// import People from '@material-ui/icons/People';

const backGround = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1576876788/headerlight.jpg'

const Home = () => {
  return (
    <div className="home-section">
      <NextSeo
        title="Erin Leigh Rizal - Developer and UX UI Designer"
        description="A portfolio of a full stack developer and designer."/>
      <Hamburger/>
      <Parallax className="top" bgImage={backGround} strength={200}>
        <div style={{
          height: 700
        }}>
          <div className="titlecontain  animated fadeIn">
            <h1 className='containh1 header -title t-shadow animated pulse'>Erin
              <br/>Leigh
              <br/>
              Rizal</h1>
            <h2 className='introh2'>Developer & Designer</h2>
          </div>
          <div className='marbfront '></div>
        </div>
      </Parallax>

      <div className="intro">
        <ScrollAnimation animateIn='fadeIn'>
          <div className="container">
            <div className="row aboutsec">
              <div className="col-sm-12 col-md-5 col-lg-4 center">
                <Example/>
              </div>
              <div className="col-sm-12 col-md-7 col-lg-8">
                <h2>About</h2>
                <p>I am a full stack developer and UX/UI designer with 4 years of training via
                  internships coupled with 4 years of experience in the field. In those years,
                  I've held a track record of creating strong user and brand experiences across
                  companies like FH Group Int'l, Equipment Zone, Sircle Media, MetLife and more.
                  As a result of my passion for building products from the ground-up, I've
                  developed a multi-disiplinary background in user experience design (UXD), visual
                  design and the MERN stack (Mongo, Express, React & Node).</p>
                <p>Currently, I specialize in using these tools to build full stack applications
                  and user experiences:</p>
                <div className="row center">
                  <div className=" outlinesec">
                    <Code style={{
                      fontSize: 25
                    }}/>
                    <h3 className="outheader">Front End:</h3>
                    JavaScript, jQuery, CSS, Sass, React JS
                  </div>
                  <div className=" outlinesec">
                    <Storage style={{
                      fontSize: 25
                    }}/>
                    <h3 className="outheader">Back End:</h3>
                    Node JS, Express, Mongo, MySQL, Sequelize
                  </div>
                  {/* <div className=" outlinesec">
                  <People style={{
                    fontSize: 25
                  }}/>
                  <h3 className="outheader">UX Design:</h3>
                  Usability testing, A-B testing, interview facilitation
                </div> */}
                  <div className=" outlinesec">
                    <ColorLens style={{
                      fontSize: 25
                    }}/>
                    <h3 className="outheader">UI Design:</h3>
                    Adobe Photoshop, Illustrator, InDesign, InVision, Sketch
                  </div>
                </div>
                <div className="row extra-top">
                  <h2>Project categories</h2>
                  <br/>
                </div>

              </div>
            </div>
          </div>

        </ScrollAnimation>

        <ScrollAnimation animateIn='fadeIn'>
          <Introgallery/>
        </ScrollAnimation>
      </div>

      <div className="contact">
        <div className="row ">
          <ScrollAnimation animateIn='fadeIn'>
            <h2 className="center">Let's get in touch!</h2>
            <p>With all this said, I'm always excited to jump into a new project; or just
              grab a coffee to talk code and UX. If you need help on your next project or just
              want to drop a hello, drop me a message on &nbsp;
              <a href='https://www.linkedin.com/in/erinlrizal/' target='_blank'>
                LinkedIn</a>&nbsp;or&nbsp;
              <a href='mailto:erin@lrizal.com' target='_blank'>
                erin@lrizal.com</a>
            </p>
          </ScrollAnimation>
        </div>
      </div>

      <div className="row">
        <footer className="custom-footer">
          <span>&#169; 2019 Erin Leigh Rizal</span>
        </footer>

      </div>
    </div>
  )

}

export default Home