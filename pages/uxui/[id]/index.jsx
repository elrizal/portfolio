import {useRouter} from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/layout';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const UserEx = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      <div className="container center">
      <h2>Campaigns</h2>
      <p>Case studies of online and out-of-home campaigns where I was a lead visual designer:</p>
        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/first-item`}>
              <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719479/greycominterest.jpg" className="case-thumb" alt="greycomm study"/></a>
            </Link>
            <p><b>New Hiring at Greycomm Studios</b></p>
            <Button variant="outlined">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/first-item`}>
              View Case
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/second-item`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576719478/wc.jpg" className="case-thumb"  alt="women of color conference"/></a>
            </Link>
            <p><b>Promotion for Women of Color Conference</b></p>
            <Button variant="outlined">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/second-item`}>
              View Case
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/third-item`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576766036/work/th-ccsjspring.jpg" className="case-thumb"  alt="women of color conference"/></a>
            </Link>
            <p><b>Ad for Loyola's Community Service Center</b></p>
            <Button variant="outlined">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/third-item`}>
              View Case
            </Link>
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/fourth-item`}>
              <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576771531/work/ooh/fhfal.jpg" className="case-thumb" alt="FH holiday email study"/></a>
            </Link>
            <p><b>Pre-holiday sales promotion at FH Group Int'l</b></p>
            <Button variant="outlined">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/fourth-item`}>
              View Case
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/fifth-item`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576771873/work/ooh/fhchr.jpg" className="case-thumb"  alt="FH sales event"/></a>
            </Link>
            <p><b>Holiday sales event at FH Group Int'l</b></p>
            <Button variant="outlined">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/fifth-item`}>
              View Case
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/sixth-item`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1576772849/work/ooh/bombas.jpg" className="case-thumb"  alt="women of color conference"/></a>
            </Link>
            <p><b>Bombas holiday promotions</b></p>
            <Button variant="outlined">
            <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/sixth-item`}>
              View Case
            </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default UserEx;