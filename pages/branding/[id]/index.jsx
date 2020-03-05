import Layout from '../../../components/layout';
import GalleryItem from '../../../components/galleryItem';
import galleryList from './cases.json';

const Branding = () => {
  return (
    <Layout>
      <div className="container center animated fadeIn">
        <h2>Branding</h2>
        <p>Cases where I led the visual direction for identity design and
          online/Out-of-home brand voice</p>

        <div className="container">
          <div className="grid">
            {galleryList.map(order => (<GalleryItem
              key={order.id}
              category={order.category}
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
      </div>
    </Layout>
  )
}

export default Branding;