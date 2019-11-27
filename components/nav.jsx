import React from 'react'
import Link from 'next/link'
import '../css/styles.sass';

import '../css/layout.sass'

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const toggleStyles = (event) => {
  document.querySelector('#burger').classList.toggle('is-active')
  document.querySelector('#navbarmenu').classList.toggle('is-active')
}
const logoImg = '../image/logo.png';

const Nav = () => (
<nav class="navbar fixed" role="navigation" aria-label="main navigation">

  <div class="navbar-brand">
  <img src={logoImg} alt="Erin Leigh Rizal"/>
      <a id="burger" onClick={toggleStyles} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarmenu"class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Documentation
      </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          More
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item">
            About
          </a>
          <a class="navbar-item">
            Jobs
          </a>
          <a class="navbar-item">
            Contact
          </a>
          <hr class="navbar-divider"/>
          <a class="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
)

export default Nav
