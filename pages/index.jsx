import React from "react";
import { Parallax } from "react-parallax";
import ScrollAnimation from "react-animate-on-scroll";
import Hamburger from "../components/hamburger";
import Blob from "../components/blob";
import Introgallery from "../components/introgal";
import { NextSeo } from "next-seo";
import Code from "@material-ui/icons/Code";
import Storage from "@material-ui/icons/Storage";
import People from "@material-ui/icons/People";
import ColorLens from "@material-ui/icons/ColorLens";
import LazyLoad from "react-lazyload";

const backGround =
  "https://res.cloudinary.com/diuubtvqd/image/upload/v1576876788/headerlight.jpg";

export default function Index() {
  return (
    <section className="home-section">
      <NextSeo
        title="Erin Leigh Rizal - UX UI Developer"
        description="A portfolio of an Austin-TX-based web developer with a background in UI design."
      />
      <Hamburger />
      <Parallax
        bgImage={backGround}
        strength={230}
        className="top animated fadeIn"
      >
        <section className="titleelements">
          <div className="animated fadeIn titlecontain row">
            <div className="col-sm-12 col-md-10 col-lg-10">
              <Blob />
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2">
              <h2 className="introh2">UX&UI Developer: </h2>
              <h1 className="containh1 header-title t-shadow animated fadeIn">
                Erin
                <br />
                Leigh
                <br />
                Rizal
              </h1>
            </div>
          </div>
        </section>
      </Parallax>
      <ScrollAnimation animateIn="fadeIn">
        <LazyLoad>
          <Introgallery />
        </LazyLoad>
      </ScrollAnimation>
      <div className="intro">
        <ScrollAnimation animateIn="fadeIn">
          <div className="container">
            <div className="row aboutsec">
              <h2>About</h2>
              <p>
                Hello! Thanks for checking this out. I am a UX Developer and
                Designer based in Austin, TX. I've held a track record of
                creating strong user and brand experiences across companies like
                FH Group Int'l, 2U, Sircle Media, MetLife and more. As a result
                of my passion for building products from the ground-up, I've
                developed a multi-disiplinary background in user experience
                design (UXD), visual design and front end development in React.
              </p>
              <p>
                Currently, I specialize in using these tools to build full stack
                applications and user experiences:
              </p>
            </div>
            <section className="row skillsrow">
              <div className="outlinesec col">
                <Code
                  style={{
                    fontSize: 30,
                  }}
                />
                <h3 className="outheader">Front End:</h3>
                JavaScript, jQuery, CSS, Sass, React JS
              </div>
              <div className="outlinesec col">
                <Storage
                  style={{
                    fontSize: 30,
                  }}
                />
                <h3 className="outheader ">Back End:</h3>
                Node JS, Express, Mongo, MySQL, Sequelize
              </div>
            </section>

            <section className="row skillsrow">
              <div className="outlinesec col">
                <People
                  style={{
                    fontSize: 30,
                  }}
                />
                <h3 className="outheader">UX Design:</h3>
                Usability testing, A-B testing, interview facilitation
              </div>
              <div className="outlinesec col">
                <ColorLens
                  style={{
                    fontSize: 30,
                  }}
                />
                <h3 className="outheader">UI Design:</h3>
                Adobe Photoshop, Illustrator, InDesign, InVision, Sketch
              </div>
            </section>
          </div>
        </ScrollAnimation>
      </div>
      <section className=" skillsrow">
        <h3>
          Let's get in touch!{" "}
          <a href="https://www.linkedin.com/in/erinlrizal/" target="_blank">
            LinkedIn
          </a>{" "}
          &nbsp; or&nbsp; <a href="mailto:erin@lrizal.com">erin@lrizal.com</a>.
        </h3>
      </section>
      <footer className="custom-footer">&#169; 2023 Erin Leigh Rizal</footer>
    </section>
  );
}
