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
      <div className="container">
      <h2 className="center">Ux-Ui Case Studies</h2><br />
      <p className="center">Projects in which I researched users and compettitors, as well as created the interface design for:</p>
      <br />
        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/uxui/[id]/[itemselected]" as={`/uxui/${id}/first-item`}>
              <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423410/work/enroll.jpg" className="case-thumb" alt="greycomm study"/></a>
            </Link>
            <p><b>Client Life Insurance Enrollment Platform</b><br />
            While working for Adams Direct and Media, I was the UX developer for their major insurance-client's new life insurance online form</p>
            <Button className="center" variant="outlined">
            <Link href="/uxui/[id]/[itemselected]" as={`/uxui/${id}/first-item`}>
              View Case
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/uxui/[id]/[itemselected]" as={`/uxui/${id}/second-item`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423411/work/ez-prev.png" className="case-thumb"  alt="women of color conference"/></a>
            </Link>
            <p><b>Equipment Zone UI Guide and Re-design</b><br />
            As a contract web developer and lead designer for the company, I overhauled their legacy UI and created a reformatted guide in order to help inform our UX/development team.
            </p>
            <Button variant="outlined">
            <Link href="/uxui/[id]/[itemselected]" as={`/uxui/${id}/second-item`}>
              View Case
            </Link>
            </Button>
          </div>
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/uxui/[id]/[itemselected]" as={`/uxui/${id}/third-item`}>
            <a><img src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/ux.jpg" className="case-thumb"  alt="women of color conference"/></a>
            </Link>
            <p><b>Wherefor.com Purposed Re-Design</b><br />
            A hypothetical reiteration on the existing travel's information architecture, user flow and overall UX. To confront additional problems travelers experience during trip-planning, new features are also suggested here.
            </p>
            <Button variant="outlined">
            <Link href="/uxui/[id]/[itemselected]" as={`/uxui/${id}/third-item`}>
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