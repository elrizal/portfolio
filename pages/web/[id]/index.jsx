import galleryList from './items-campaigns.json';
import Layout from '../../../components/layout';
import GalleryItem from '../../../components/galleryItem';

const WebDev = () => {
  return (
    <Layout>
      <div className="container animated fadeIn">
      <h2 className="center">Web Development</h2>
        <p className="center">Applications I've created as a result of collaboration in
          a development team or independently:</p>
        <br/>
        <div className="grid">
          {galleryList.map(order => (<GalleryItem
            key={order.id}
            title={order.title}
            img={order.img}
            category={order.category}
            property={order.property}
            company={order.company}
            role={order.role}
            endpoint={order.endpoint}
            live={order.live}
            prevdesc={order.prevdesc}
            github={order.github}/>))
}
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
              of your choice from Giphy.com; Made with JavaScript, HTML5, CSS
            </p>
            <button
              href="https://github.com/elrizal/give-a-gif"
              target="_blank"
              variant="outlined">
              Github
            </button>&nbsp;
            <button
              href="https://elrizal.github.io/give-a-gif/"
              target="_blank"
              variant="outlined">
              Demo
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-4 case-contain">
            <img
              src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/72.jpg"
              target="_blank"
              className="case-thumb"
              alt="Equipment Zone product pages"/>
            <h3>Product Pages and Refactoring for Equipment Zone</h3>
            <p>As a web developer at Equipment Zone, I creating separate campaign pages, as
              well as replacing legacy code on both the client and server side. Bulit with
              JavaScript, PHP.
            </p>
            <button href="https://equipmentzone.com" target="_blank" variant="outlined">
              Website
            </button>&nbsp;
            <button
              href="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423946/work/f72.gif"
              target="_blank"
              variant="outlined">
              Demo (Not live)
            </button>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-4 case-contain">
            <img
              src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423411/work/movr.jpg"
              target="_blank"
              className="case-thumb"
              alt="movr"/>
            <h3>Movr</h3>
            <p>
              A recommendation site that matches developers who are looking to move with
              cities where the tech-industry is booming based on a quick survey.
              Built with Node JS, jQuery, JavaScript, HTML5, CSS.
            </p>
            <button
              href="https://github.com/elrizal/movr"
              target="_blank"
              variant="outlined">
              Github
            </button>&nbsp;
            <button
              href="https://moverapp.herokuapp.com/"
              target="_blank"
              variant="outlined">
              Demo
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WebDev;