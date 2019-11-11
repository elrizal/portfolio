import React from 'react';
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/header.sass';
import Nav from '../components/nav';

const backGround = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1572981281/bottom-marble.jpg'

const Home = () => (
  <div className="home-section">
    <Nav/>
    <div>
    <Parallax className="top" bgImage={backGround} strength={300}>
      <div style={{ height: 700 }}>
        <div className="titlecontain">
          <h1 className='header-title t-shadow'>Erin Leigh Rizal</h1>
        </div>
        <div className='marbfront animated fadeIn'>
        </div>
      </div>
    </Parallax>

    <section className="section">
    <div className="container">
      <h1 className="title">Section</h1>
      <h2 className="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  </section>
    <div className="container is-fluid">
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
      <div class="row">
        <div class="col-sm-6  col-md-3 casegal web">Web Development 
        </div>
        <div class="col-sm-6 col-md-3">UX-UI Design Case Studies</div>
        <div class="col-sm-6  col-md-3">Art Direction</div>
        <div class="col-sm-6  col-md-3">Brand Design</div>
      </div>
    
        <div className="s" >
          <h2>Showcase:</h2>

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

  </div>
)

export default Home   