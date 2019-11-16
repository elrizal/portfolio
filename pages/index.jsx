import React from 'react';
import {Parallax} from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/styles.sass';
import Container from '@material-ui/core/Container';
import Hamburger from '../components/hamburger';

const backGround = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1572981281/bottom-marble.jpg'

const Home = () => (
  <div className="home-section">
    <Hamburger/>
    <Parallax className="top" bgImage={backGround} strength={200}>
      <div style={{
        height: 700
      }}>
        <div className="titlecontain">
          <h1 className='header -title t-shadow'>Erin Leigh Rizal</h1>
        </div>
        <div className='marbfront animated fadeIn'></div>
      </div>
    </Parallax>
    <Container className="container" maxWidth="lg">
      <h2>About</h2>
      <p>I am is a US-based full stack developer and UX/UI designer with 4 years of training via internships and 
        4 years of experience in the field. After interning at Loyola University MD for small clients and the college itself, 
        I've created user and brand experiences across companies like FH Group Int'l, Equipment Zone, Sircle Media, MetLife and more.
        As a result of my passion for building products from the ground-up, I've developed a multi-disiplinary background
        in user experience design (UXD), visual design and the MERN stack (Mongo, Express, React & Node). 
      </p>
      <p>
        With all this said, I'm excited to jump into a new project; or just grab some coffee to talk code and UX.
        If you need help on your next project or just want to drop a hello, I can be found on  <a href='https://www.linkedin.com/in/erinlrizal/' target='_blank'>LinkedIn</a>.
      </p>
    </Container>
    <ScrollAnimation animateIn='fadeIn'>
      <div class="row">
        <div class="col-sm-6  col-lg-3 casegal web">
          <h3 className="label">Web Applications</h3>
        </div>
        <div class="col-sm-6  col-lg-3 casegal ux">
          <h3 className="label">UX/UI Case Studies</h3>
        </div>
        <div class="col-sm-6 col-lg-3 casegal camp">
          <h3 className="label">
            Ads & Campaigns
          </h3>
        </div>
        <div class="col-sm-6  col-md-3 casegal branding">
          <h3 className="label">Branding</h3>
        </div>
      </div>

    </ScrollAnimation>
  </div>
)

export default Home