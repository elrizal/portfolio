import React from 'react';
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/header.sass';
import Nav from '../components/nav';
import Zoom from 'react-reveal/Zoom';

const backGround = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1572459480/bottom-marble.jpg'
const foreGround = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1572459480/toplayer-marble.png'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  background: "url(https://res.cloudinary.com/diuubtvqd/image/upload/v1572459480/toplayer-marble.png)"
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
    <Parallax className="top" bgImage={backGround} strength={200}>
      <div style={{ height: 700 }} style={styles}>
        <div style={insideStyles}>HTML inside the parallax</div>
      </div>
    </Parallax>
    <div class="container is-fluid">
    <p>Ad pariatur eiusmod nulla ex proident nulla anim amet ipsum aliqua anim ipsum. 
      Proident irure adipisicing enim aliqua ea sint ut reprehenderit elit nulla anim excepteur veniam excepteur. 
      Ut anim consectetur nostrud Lorem aliquip est laborum deserunt ut anim enim magna. 
      Laboris pariatur adipisicing mollit ullamco fugiat dolore nostrud labore esse exercitation ut duis quis anim.
       Eiusmod do et excepteur dolor quis nisi sunt labore ut veniam et in minim aliquip.
        Ad magna consectetur proident quis ea proident enim ex irure. 
        Consectetur excepteur sint in anim dolor tempor ad in velit occaecat culpa velit consequat.</p>
    </div>
    </div>
    <ScrollAnimation animateIn='fadeIn'>
        <div class="container is-fluid" ><h2>Showcase:</h2>
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