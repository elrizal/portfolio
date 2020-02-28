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
          { galleryList.map(order => (<GalleryItem
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


        {/* <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/mycroft`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1581787677/work/branding/mycroft-show.jpg"
                className="case-thumb"
                alt="Logo for Mycroft"/></a>
            </Link>
            <p>
              <b>Logo design for Mycroft</b>
            </p>
            <button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/mycroft`}>
                <a>Case Study</a>
              </Link>
            </button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/gy-identity`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1581807746/work/branding/gy-campaigns.jpg"
                className="case-thumb"
                alt="Logo for LUMD Student Life"/></a>
            </Link>
            <p>
              <b>Rebrand for Greycomm Studios, 2015</b>
            </p>
            <Button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/gy-identity`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link
              href="/branding/[id]/[itemselected]"
              as={`/branding/${id}/studentlifebrand`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423914/work/branding/showcase-studentlife.jpg"
                className="case-thumb"
                alt="Logo for LUMD Student Life"/></a>
            </Link>
            <p>
              <b>Logo and Identity for Student Life</b>
            </p>
            <Button variant="outlined">
              <Link
                href="/branding/[id]/[itemselected]"
                as={`/branding/${id}/studentlifebrand`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>


        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/atn-brand"`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423913/work/branding/atn-logos.png"
                className="case-thumb"
                alt="Logo for atn-brand"/></a>
            </Link>
            <p>
              <b>Logo design for Action Together Network</b>
            </p>
            <Button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/atn-brand`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>

          <div className="col-md-6 col-lg-4 case-contain">
            <Link
              href="/branding/[id]/[itemselected]"
              as={`/branding/${id}/renhaiti`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423913/work/branding/showcase-rh.jpg"
                className="case-thumb"
                alt="Logo for LUMD Student Life"/></a>
            </Link>
            <p>
              <b>Branding for Rendez-vous Haiti"</b>
            </p>
            <Button variant="outlined">
              <Link
                href="/branding/[id]/[itemselected]"
                as={`/branding/${id}/renhaiti`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423914/work/branding/showcase-sheas.jpg"
                className="case-thumb"
                alt="Logo for LUMD Student Life"/></a>
            </Link>
            <p>
              <b>Logo for Shea's Cuts, NJ</b>
            </p>
            <Button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div> 
        </div> */}
      </div>
    </Layout>
  )
}

export default Branding;