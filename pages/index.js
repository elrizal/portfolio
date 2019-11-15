import React from 'react';
import {Parallax} from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/styles.sass';
import Nav from '../components/nav';
import Container from '@material-ui/core/Container';
import Hamburger from '../components/hamburger';

const backGround = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1572981281/bottom-marble.jpg'

const Home = () => (
  <div className="home-section">
    <Hamburger/>>
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
      <h2>test</h2>
      <p>Nostrud reprehenderit mollit proident sint laborum laboris veniam incididunt
        non commodo Lorem veniam. Eu deserunt ad quis esse laboris elit culpa sint anim
        eiusmod. Consequat incididunt id et sunt ea aliquip nisi.</p>
    </Container>
    <ScrollAnimation animateIn='fadeIn'>
      <div class="row">
        <div class="col-sm-6  col-lg-3 casegal web">
          <h2 className="label">Web Applications</h2>
        </div>
        <div class="col-sm-6  col-lg-3 casegal ux">
          <h2 className="label">UX/UI Case Studies</h2>
        </div>
        <div class="col-sm-6 col-lg-3 casegal camp">
          <h2 className="label">
            Ads & Campaigns
          </h2>
        </div>
        <div class="col-sm-6  col-md-3 casegal camp">
          <h2 className="label">Branding</h2>
        </div>
      </div>

    </ScrollAnimation>
  </div>
)

export default Home