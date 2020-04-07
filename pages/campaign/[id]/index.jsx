import Layout from '../../../components/layout';
import galleryList from './items-campaigns.json';
import GalleryItem from '../../../components/galleryItem';

const Campaigns = () => {
  return (
    <Layout>
      <div className="container center">
        <h2>Campaign Case Studies</h2>
        <p> Projects where I created the visual direction for advertisement online and out-of-home. </p>
      </div>
      <div className="container animated fadeIn">
        <div className="grid">
          { galleryList.map(order => (<GalleryItem
            key={order.id}
            title={order.title}
            img={order.img}
            category={order.category}
            property={order.property}
            company={order.company}
            role={order.role}
            endpoint={order.endpoint}
            live={order.live}
            github={order.github}/>))
          }
        </div>
      </div>
      {/* <div className="message">
        Sorry, your browser does not support CSS Grid. 😅
      </div> */}
    </Layout>
  )
}

export default Campaigns;