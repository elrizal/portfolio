import {useRouter} from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/layout';
import Button from '@material-ui/core/Button';

const WebDev = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
<Layout>
      <div className="container animated fadeIn">
        <h2 className="center">Web Development</h2><br/>
        <p className="center">Applications I've created as a result of collaboration in
          a development team or independently:</p>
        <br/>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 case-contain">
            <img
              src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423410/work/lit.jpg"
              className="case-thumb"
              alt="it's lit app"/>
            <h3>It's Lit</h3>
            <p>
              This social app is targeted for users seeking to exchange books in their local
              area.<br/>
              <br/><b>Tech stack: </b>
              JavaScript, jQuery, HTML5/CSS, MySQL & Node JS
            </p>
            <Button variant="outlined">
            <Link href="/web/[id]/[itemselected]" as={`/web/${id}/first-item`}>
              <a>Case Study</a>
            </Link>
            </Button>&nbsp;
            <Button
              href="https://github.com/elrizal/its-lit"
              target="_blank"
              variant="outlined">
              Github
            </Button>&nbsp;
            <Button
              href="http://sleepy-peak-84439.herokuapp.com/"
              target="_blank"
              variant="outlined">
              Demo
            </Button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 case-contain">
            <img
              src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423410/work/cwn.jpg"
              className="case-thumb"
              alt="cook with nana"/>
            <h3>Cook With Nana</h3>
            <p>
              This messaging-based app serves as a platform for people who want to learn
              cooking and those who want to connect to younger generations via teaching or
              offering advice.
              <br/>
              <br/><b>Tech stack: </b>
              React JS, MySQL, Node, CSS
            </p>
            <Button variant="outlined">
            <Link href="/web/[id]/[itemselected]" as={`/web/${id}/second-item`}>
              <a>Case Study</a>
            </Link>
            </Button>&nbsp;
            <Button variant="outlined" href="https://github.com/elrizal/CookWithNana" target="_blank">
              <a>Github</a>
            </Button>&nbsp;
            <Button
              href="https://peaceful-woodland-77310.herokuapp.com/"
              target="_blank"
              variant="outlined">
              Demo
            </Button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 case-contain">
            <img
              src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423410/work/train.jpg"
              className="case-thumb"
              alt="greycomm study"/>
            <h3>Train Scheduler</h3>
            <p>
              A brief experiment in identifying weak spots in train scheduling sites and
              creating cleaner UI interactions to confront them.<br/>
              <br/><b>Tech stack: </b>
              jQuery, JavaScript, HTML5, CSS, Firebase
            </p>
            <Button variant="outlined">
            <Link href="/web/[id]/[itemselected]" as={`/web/${id}/third-item`}>
              <a>Case Study</a>
            </Link>
            </Button>&nbsp;
            <Button
              href="https://github.com/elrizal/Train-Planning"
              target="_blank"
              variant="outlined">
              Github
            </Button>&nbsp;
            <Button
              href="https://trainplanner.herokuapp.com/"
              target="_blank"
              variant="outlined">
              Demo
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-4 case-contain">
            <img
              src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/gifgal.jpg"
              target="_blank"
              className="case-thumb"
              alt="it's lit app"/>
            <h3>Give a Gif</h3>
            <p>
              Looking for a quick time-killer? This app scoops up popular gifs based on topics
              of your choice from Giphy.com<br/>
              <br/><b>Tech stack: </b>
              jQuery, JavaScript, HTML5, CSS
            </p>
            <Button
              href="https://github.com/elrizal/give-a-gif"
              target="_blank"
              variant="outlined">
              Github
            </Button>&nbsp;
            <Button
              href="https://elrizal.github.io/give-a-gif/"
              target="_blank"
              variant="outlined">
              Demo
            </Button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 case-contain">
            <img
              src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/72.jpg"
              target="_blank"
              className="case-thumb"
              alt="it's lit app"/>
            <h3>Product Pages and Refactoring for Equipment Zone</h3>
            <p>As a web developer at Equipment Zone, I creating separate campaign pages, as
              well as replacing legacy code on both the client and server side.<br/>
              <br/><b>Tech stack:</b> JavaScript, PHP
            </p>
            <Button
              href="https://equipmentzone.com"
              target="_blank"
              variant="outlined">
              Website
            </Button>&nbsp;
            <Button
              href="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423946/work/f72.gif"
              target="_blank"
              variant="outlined">
              Demo (Not live)
            </Button>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 case-contain">
            <img
              src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423411/work/movr.jpg"
              target="_blank"
              className="case-thumb"
              alt="it's lit app"/>
            <h3>Movr</h3>
            <p>
              A recommendation site that matches developers who are looking to move with
              cities where the tech-industry is booming based on a quick survey.<br/>
              <br/><b>Tech stack: </b>
              Node JS, jQuery, JavaScript, HTML5, CSS
            </p>
            <Button
              href="https://github.com/elrizal/movr"
              target="_blank"
              variant="outlined">
              Github
            </Button>&nbsp;
            <Button
              href="https://moverapp.herokuapp.com/"
              target="_blank"
              variant="outlined">
              Demo
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WebDev;