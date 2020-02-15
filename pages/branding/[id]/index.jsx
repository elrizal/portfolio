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
        </div>
      </div>
    </Layout>
  )
}

export default Branding;