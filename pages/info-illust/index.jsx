import {useRouter} from 'next/router';
import Link from 'next/link';
import Layout from '../../components/layout';
import Button from '@material-ui/core/Button';

const InformationIllustrations = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      <div className="container center animated fadeIn">
      <h2>Information Illustrations</h2>
      <p>Cases where I led the visual direction for identity design and online/Out-of-home brand voice</p>
        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/studentlife-loyola`}>
              <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719479/greycominterest.jpg" className="case-thumb" alt="greycomm study"/></a>
            </Link>
            <p><b>New Hiring at Greycomm Studios</b></p>
            <Button variant="outlined">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/studentlife-loyola`}>
              <a>Case Study</a>
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/cog-systems`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719478/wc.jpg" className="case-thumb"  alt="women of color conference"/></a>
            </Link>
            <p><b>Promotion for Women of Color Conference</b></p>
            <Button variant="outlined">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/cog-systems`}>
              <a>Case Study</a>
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576766036/work/th-ccsjspring.jpg" className="case-thumb"  alt="women of color conference"/></a>
            </Link>
            <p><b>Ad for Loyola's Community Service Center</b></p>
            <Button variant="outlined">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/sheas`}>
              <a>Case Study</a>
            </Link>
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/fh-products`}>
              <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719479/greycominterest.jpg" className="case-thumb" alt="greycomm study"/></a>
            </Link>
            <p><b>New Hiring at Greycomm Studios</b></p>
            <Button variant="outlined">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/fh-products`}>
              <a>Case Study</a>
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/dresday`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719478/wc.jpg" className="case-thumb"  alt="women of color conference"/></a>
            </Link>
            <p><b>Promotion for Women of Color Conference</b></p>
            <Button variant="outlined">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/dresday`}>
              <a>Case Study</a>
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/greycomm`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576766036/work/th-ccsjspring.jpg" className="case-thumb"  alt="women of color conference"/></a>
            </Link>
            <p><b>Ad for Loyola's Community Service Center</b></p>
            <Button variant="outlined">
            <Link href="/branding/[id]/[itemselected]" as={`/branding/${id}/greycomm`}>
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