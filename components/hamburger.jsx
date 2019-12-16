import React from "react";
import {slide as Menu} from 'react-burger-menu'
import '../css/hamburger.sass'
import Link from 'next/link';

const logo = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1576463417/whitelogo.png'
const Hamburger = props => {
  return (
    <div className="ham-bar sticky">
      {/* <img src={logo} alt= 'Erin Leigh Rizal' className='logo' /> */}
      <Menu right>
        <div>
          <nav className="nav">
          
            <ul>
              <li>
                <a id="home" className="menu-item" href="/">Home
                </a>
              </li>
              <li>
                <Link href='/campaign'>
                  <a className="menu-item">campaigns</a>
                </Link>
              </li>
              <li>
                <Link href='/post/[id]' as='/post/first'>
                  <a>First Post</a>
                </Link>
              </li>
              <li>
                <a id="brand" className="menu-item" href="/branddesign">
                  Branding
                </a>
              </li>
              <li>
                <a id="posters" className="menu-item" href="/sm">Digital Campaigns</a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/erinlrizal'
                  target='_blank'
                  rel="noopener noreferrer">
                  <i id='icons' className='fab fa-linkedin fa-lg'></i>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href='https://www.github.com/elrizal'
                  target='_blank'
                  rel="noopener noreferrer">
                  <i id='icons' className='fab fa-github fa-lg'></i>
                  Github
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Menu>
    </div>
  );
}

export default Hamburger