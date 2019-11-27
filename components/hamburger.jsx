import React from "react";
import {slide as Menu} from 'react-burger-menu'
import '../css/hamburger.sass'
import { Link } from 'next/link';

const Hamburger = props => {
  return (
    <div className="ham-bar sticky">
      <Menu right>
        <div>
          <nav className="nav">
            <ul>
              <li>
                <a id="home" className="menu-item" href="/">Home
                </a>
              </li>
              <li>
                <a id="web" className="menu-item" href="/dev">Development
                </a>
              </li>
              <li>
              {/* <Link href='/post/[id]/[piece]' as={`/post/${id}/first-piece`}>
            <a>First </a>
          </Link> */}
                <a id="uxui" className="menu-item" href="/uxui">
                  UX & UI Design
                </a>
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