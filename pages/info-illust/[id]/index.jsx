import {useRouter} from 'next/router';
import Link from 'next/link';

import Button from '@material-ui/core/Button';
import Layout from '../../../components/layout';

const InformationIllustrations = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      <div className="container center animated fadeIn">
        <h2>Infographics and Illustration</h2>
        <p>Designs I've created in order to inform users or custom product illustrations as "passion projects".</p>
        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link
              href="/info-illust/[id]/[itemselected]"
              as={`/info-illust/${id}/fh-installation"`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1582011690/work/installation.jpg"
                className="case-thumb"
                alt="greycomm study"/></a>
            </Link>
            <p>
              <b>FH Product Installation</b><br/>
              Printed and packaged with car seats sold by FH Group Int'l</p>
            <Button variant="outlined">
              <Link
                href="/info-illust/[id]/[itemselected]"
                as={`/info-illust/${id}/fh-installation`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/info-illust/[id]/[itemselected]" as={`/info-illust/${id}/fh-mockupillust`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1582011690/work/fhpujpg.jpg"
                className="case-thumb"
                alt="FH manufacturing"/></a>
            </Link>
            <p>
              <b>Product Manufacturing Outline</b><br/>
              A line drawing outlining the material and unique design of an FH product for
              manufacuterers
            </p>
            <Button variant="outlined">
              <Link href="/info-illust/[id]/[itemselected]" as={`/info-illust/${id}/fh-mockupillust`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/info-illust/[id]/[itemselected]" as={`/info-illust/${id}/personalized-illustrations`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1582011690/work/bagillusts.jpg"
                target="_blank"
                className="case-thumb"
                alt="custom product design"/></a>
            </Link>
            <p>
              <b>Custom Illustrations</b><br/>
              As a freelancer, I was commisioned to create a personalized design for clients to use on custom product printing via Razzle.com</p>
            <Button variant="outlined">
              <Link href="/info-illust/[id]/[itemselected]" as={`/info-illust/${id}/personalized-illustrations"`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>


        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
          <Link href="https://res.cloudinary.com/diuubtvqd/image/upload/v1582005834/work/illust/express.jpg" target="_blank">
              <a target="_blank"><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1582011690/work/express.jpg"
                target="_blank"
                className="case-thumb"
                alt="women of color conference"/></a>
            </Link>
            <p>
              <b>Node & Express Routing Explained</b><br/>
              Created to illustrate modularization of JS within a Node/Express application
              targeted for entry-level engineers.</p>
            <Button variant="outlined">
            <Link href="https://res.cloudinary.com/diuubtvqd/image/upload/v1582005834/work/illust/express.jpg" >
                <a target="_blank">Full Image</a>
              </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
          <Link href="https://res.cloudinary.com/diuubtvqd/image/upload/v1582005834/work/illust/mvc.jpg" target="_blank">
              <a target="_blank"><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1582011690/work/mvcpreview.jpg"
                target="_blank"
                className="case-thumb"
                alt="mvc"/></a>
            </Link>
            <p>
              <b>Model-View-Controller (MVP) Explained</b><br/>
              A graphic created with the intention of introducing the idea of a common design
              pattern in web development, targeted for entry-level engineers.</p>
            <Button variant="outlined">
              <Link href="https://res.cloudinary.com/diuubtvqd/image/upload/v1582005834/work/illust/mvc.jpg" target="_blank">
                <a target="_blank">Full Image</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InformationIllustrations;