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

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
  <div className="navbar-brand graybg">
    <a className="navbar-item">

    </a>
    <a id="burger" onClick={toggleStyles} 
        role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarmenu">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div id="navbarmenu" className="navbar-menu">
    <div className="navbar-start">
      <Link  href="/">
        <a className="navbar-item">Home</a>
      </Link>
      <Link href='/post/[id]' as='/post/first'>
        <a className="navbar-item">First</a>
      </Link>
      <Link href='/post/[id]' as='/post/second'>
        <a className="navbar-item">Second</a>
      </Link>
    </div>
    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
-                </div>
      </div>
    </div>
  </div>
</nav>
)

export default Nav
