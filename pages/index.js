import React from 'react';
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/header.sass';
import Nav from '../components/nav';
import Zoom from 'react-reveal/Zoom';

const backGround = 'http://res.cloudinary.com/diuubtvqd/image/upload/v1554224388/6.jpg'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};

const Home = () => (
  <div className="home-section">
    <Nav/>
    <div className="animated fadeIn">
    <Parallax bgImage={backGround} strength={500}>
      <div style={{ height: 500 }}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax>
    </div>
    <ScrollAnimation animateIn="fadeIn">
        <div><h2>Showcase:</h2>
        <p> Here are sections with samples of work I have done for my clients and employers from 2011-2019 - </p></div>
        <div align='center' id='introgridc'>
          <a className='introgrid' href="/uxui">
          <img className='introgrid' src={'https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/ux.jpg'} alt='ux design'/> </a>
          <a className='introgrid' href="/branddesign">
          <img className='introgrid' src={'https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/branding.jpg'} alt='brand design'/> </a>
          <a className='introgrid' href="/dev">
          <img className='introgrid' src={'https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/web.jpg'} alt='web development'/></a>
          <a className='introgrid' href="/sm">
          <img className='introgrid' src={'https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/social.jpg'} alt='social media'/> </a>
        </div>  
        </ScrollAnimation>
        <Zoom>
  <p>Markup that will be revealed on scroll</p>
</Zoom>

  </div>
)

export default Home   