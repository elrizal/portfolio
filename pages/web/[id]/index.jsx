import galleryList from './items-campaigns.json';
import Layout from '../../../components/layout';
import GalleryItem from '../../../components/galleryItem';

const WebDev = () => {
  return (
    <Layout>
      <div className="container animated fadeIn">
      <h2 className="center">Web Development</h2>
        <p className="center">Applications I've created in full stack development-</p>
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

      </div>
    </Layout>
  )
}

export default WebDev;