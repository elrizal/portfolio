import Layout from '../../../components/layout';
import galleryList from './prints.json';
import GalleryItem from '../../../components/galleryItem';

const Print = () => {
  return (
    <Layout>
      <div className="container center">
        <h2>Print Packaging</h2>
        <p>Cases where I created the design of products in the ecommerce/direct-to-consumer industry. 
        </p>
      </div>
      <div className="container">
        <div className="grid">
          { galleryList.map(order => (<GalleryItem
            key={order.id}
            title={order.title}
            img={order.img}
            property={order.property}
            company={order.company}
            role={order.role}
            endpoint={order.endpoint}
            live={order.live}
            github={order.github}/>))
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