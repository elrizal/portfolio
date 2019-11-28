import React from 'react';
import {Parallax} from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/styles.sass';
import Container from '@material-ui/core/Container';
import Hamburger from '../components/hamburger';
import Example from '../components/svgtest'
import Modal from '../components/modal';
import useModal from '../components/useModal';

const backGround = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1572981281/bottom-marble.jpg'

const Home = () => {
  const {isShowing, toggle} = useModal();

  return (
    <div className="home-section">
      <Hamburger/>
      <Parallax className="top" bgImage={backGround} strength={500}>
        <div style={{
          height: 700
        }}>
          <div className="titlecontain  animated fadeIn">
            <h1 className='header -title t-shadow '>Erin
              <br/>Leigh
              <br/>
              Rizal</h1>
            <h2 className='introh2'>Developer & Designer</h2>
          </div>
          <div className='marbfront animated pulse'></div>
        </div>
      </Parallax>
      <Container className="intro" maxWidth="lg">
        <ScrollAnimation animateIn='fadeIn'>
          <div className="row">
            <div className="col-sm-2 col-lg-2">
              <Example/>
            </div>
            <div className="col-sm-10 col-lg-10">
              <p>
           

                <h2>Introduction</h2>
                I am a US-based full stack developer and UX/UI designer with 4 years of training
                via internships coupled with 4 years of experience in the field. In those years,
                I've held a track record of creating strong user and brand experiences across
                companies like FH Group Int'l, Equipment Zone, Sircle Media, MetLife and more.
                As a result of my passion for building products from the ground-up, I've
                developed a multi-disiplinary background in user experience design (UXD), visual
                design and the MERN stack (Mongo, Express, React & Node).</p>

              <p>With all this said, I'm always excited to jump into a new project; or just
                grab a coffee to talk code and UX. If you need help on your next project or just
                want to drop a hello, I can be found on
                <a href='https://www.linkedin.com/in/erinlrizal/' target='_blank'>
                  LinkedIn</a>.
              </p>
              <div className="row">
                <div className="col-sm-12  col-lg-4">
                  <h3>Front end stack:</h3>
                  JavaScript, React, CSS, Sass, jQuery
                </div>
                <div className="col-sm-12  col-lg-4">
                  <h3>Back end stack:</h3>
                  Node JS, Express, Mongo, MySQL, Sequelize
                </div>
                <div className="col-sm-12  col-lg-4">
                  <h3>Design stack:</h3>
                  Adobe Photoshop, Illustrator, Animate, InDesign, InVision, MockFlow, Sketch
                </div>
              </div>
              <div className="row extraspace-top">
                <h2>Categories of work</h2>
              </div>
            </div>
          </div>

        </ScrollAnimation>
      </Container>

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

      <div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
    </div>
  )
}

export default Home