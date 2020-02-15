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
              href="/branding/[id]/[itemselected]"
              as={`/branding/${id}/studentlife-loyola`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719479/greycominterest.jpg"
                className="case-thumb"
                alt="greycomm study"/></a>
            </Link>
            <p>
              <b>FH Product Installation</b><br/>
              Printed and packaged with car seats sold by FH Group Int'l</p>
            <Button variant="outlined">
              <Link
                href="/branding/[id]/[itemselected]"
                as={`/branding/${id}/studentlife-loyola`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/cog-systems`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719478/wc.jpg"
                className="case-thumb"
                alt="women of color conference"/></a>
            </Link>
            <p>
              <b>Product Manufacturing Outline</b><br/>
              A line drawing outlining the material and unique design of an FH product for
              manufacuterers
            </p>
            <Button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/cog-systems`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576766036/work/th-ccsjspring.jpg"
                target="_blank"
                className="case-thumb"
                alt="women of color conference"/></a>
            </Link>
            <p>
              <b>Model-View-Controller (MVP) Explained</b><br/>
              A graphic created with the intention of introducing the idea of a common design
              pattern in web development, targeted for entry-level engineers.</p>
            <Button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576766036/work/th-ccsjspring.jpg"
                target="_blank"
                className="case-thumb"
                alt="women of color conference"/></a>
            </Link>
            <p>
              <b>Node & Express Routing Explained</b><br/>
              Created to illustrate modularization of JS within a Node/Express application
              targeted for entry-level engineers.</p>
            <Button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576766036/work/th-ccsjspring.jpg"
                target="_blank"
                className="case-thumb"
                alt="women of color conference"/></a>
            </Link>
            <p>
              <b>Custom Illustrations</b><br/>
              As a freelancer, I was commisioned to create a personalized design for clients to use on custom product printing via Razzle.com</p>
            <Button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default InformationIllustrations;