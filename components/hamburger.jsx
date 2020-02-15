import React from "react";
import { stack as Menu } from 'react-burger-menu'
import '../css/hamburger.sass'
import Link from 'next/link';

const logo = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1576674564/tiger-white-long.png'
const Hamburger = props => {
  return (
    <div className="ham-bar sticky">
      <a href="/">
      <img src={logo} alt='Erin Leigh Rizal' className='logo-elr' />
      </a>
      
      <Menu right disableCloseOnEsc>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <a id="home" className="menu-item" href="/">Home
                </a>
              </li>
              <li>
                <Link href='/web/[id]' as='/web/index'>
                  <a className="menu-item">web development</a>
                </Link>
              </li>
              <li>
                <Link href='/uxui/[id]' as='/uxui/index'>
                  <a className="menu-item">UX-Ui Design</a>
                </Link>
              </li>
              <li>
                <Link href='/campaign/' as='/campaign/index'>
                  <a className="menu-item">campaigns</a>
                </Link>
              </li> 
              <li>
                <Link href='/print/' as='/print/index'>
                  <a className="menu-item">Print & Packaging</a>
                </Link>
              </li>  
              <li>
                <Link href='/info-illust/' as='/info-illust/index'>
                  <a className="menu-item">Infographics</a>
                </Link>
              </li>    
              <li>
                <Link href='/branding/' as='/branding/index'>
                  <a className="menu-item">Branding</a>
                </Link>
              </li>     
              <li>
              <i id='icons' className='fab fa-linkedin fa-lg'></i>
                <a href='https://www.linkedin.com/in/erinlrizal' target='_blank'>
                  LinkedIn </a>
              </li>
              <li>
                <a href='https://www.github.com/elrizal'target='_blank' rel="noopener noreferrer">
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