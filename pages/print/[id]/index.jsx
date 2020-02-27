import Layout from '../../../components/layout';
import galleryList from './prints.json';
import GalleryItem from '../../../components/galleryItem';

const Print = () => {
  return (
    <Layout>
      <div className="container center">
        <h2>Infographics and Illustration</h2>
        <p>Designs I've created in order to inform users or custom product illustrations
          as "passion projects".
        </p>
      </div>
        <div className=" container">

          <div className="grid">
            {galleryList.map(order => (<GalleryItem
              key={order.id}
              title={order.title}
              img={order.img}
              property={order.property}
              company={order.company}
              role={order.role}
              endpoint={order.endpoint}/>))
}
          </div>
        </div>

      <div className="message">
        Sorry, your browser does not support CSS Grid. 😅
      </div>
    </Layout>
  )
}

export default Print;