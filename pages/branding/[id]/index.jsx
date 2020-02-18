import {useRouter} from 'next/router';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Layout from '../../../components/layout';

const Branding = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      <div className="container center animated fadeIn">
        <h2>Branding</h2>
        <p>Cases where I led the visual direction for identity design and
          online/Out-of-home brand voice</p>
        <div className="row">
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
            <Button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/mycroft`}>
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
              <b>Logo and Identity for Student Life</b>
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
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/dresjay`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423913/work/branding/showcase-rh.jpg"
                className="case-thumb"
                alt="Logo for LUMD Student Life"/></a>
            </Link>
            <p>
              <b>Logo for Shea's Cuts, NJ</b>
            </p>
            <Button variant="outlined">
              <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/dresjay`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Branding;