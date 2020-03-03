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
      <div className="container">
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
// import {useRouter} from 'next/router';
// import Link from 'next/link';
// import Layout from '../../../components/layout';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
//import Campaigns from './index';

// const Campaigns = () => {

//   const router = useRouter();
//   const {id} = router.query;

//   return (
//     <Layout>
//       <div className="container center animated fadeIn">
//       <h2>Campaigns</h2>
//       <p>Case studies of online and out-of-home campaigns where I was a lead visual designer:</p>
//         <div className="row">
//           <div className="col-md-6 col-lg-4 case-contain">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/first-item`}>
//               <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719479/greycominterest.jpg" className="case-thumb" alt="greycomm study"/></a>
//             </Link>
//             <p><b>New Hiring at Greycomm Studios</b></p>
//             <Button variant="outlined">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/first-item`}>
//               <a>Case Study</a>
//             </Link>
//             </Button>
//           </div>
//           <div className="col-md-6 col-lg-4 case-contain">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/second-item`}>
//             <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719478/wc.jpg" className="case-thumb"  alt="women of color conference"/></a>
//             </Link>
//             <p><b>Promotion for Women of Color Conference</b></p>
//             <Button variant="outlined">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/second-item`}>
//               <a>Case Study</a>
//             </Link>
//             </Button>
//           </div>
//           <div className="col-md-6 col-lg-4 case-contain">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/third-item`}>
//             <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576766036/work/th-ccsjspring.jpg" className="case-thumb"  alt="women of color conference"/></a>
//             </Link>
//             <p><b>Ad for Loyola's Community Service Center</b></p>
//             <Button variant="outlined">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/third-item`}>
//               <a>Case Study</a>
//             </Link>
//             </Button>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-md-6 col-lg-4 case-contain">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/fourth-item`}>
//               <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576771531/work/ooh/fhfal.jpg" className="case-thumb" alt="FH holiday email study"/></a>
//             </Link>
//             <p><b>Pre-holiday sales promotion at FH Group Int'l</b></p>
//             <Button variant="outlined">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/fourth-item`}>
//               <a>Case Study</a>
//             </Link>
//             </Button>
//           </div>
//           <div className="col-md-6 col-lg-4 case-contain">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/fifth-item`}>
//             <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576771873/work/ooh/fhchr.jpg" className="case-thumb"  alt="FH sales event"/></a>
//             </Link>
//             <p><b>Holiday sales event at FH Group Int'l</b></p>
//             <Button variant="outlined">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/fifth-item`}>
//               <a>Case Study</a>
//             </Link>
//             </Button>
//           </div>
//           <div className="col-md-6 col-lg-4 case-contain">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/sixth-item`}>
//             <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576772849/work/ooh/bombas.jpg" className="case-thumb"  alt="women of color conference"/></a>
//             </Link>
//             <p><b>Bombas holiday promotions</b></p>
//             <Button variant="outlined">
//             <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/sixth-item`}>
//               <a>Case Study</a>
//             </Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Campaigns;