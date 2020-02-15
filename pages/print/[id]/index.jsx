import {useRouter} from 'next/router';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Layout from '../../../components/layout';

const Print = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/print/[id]/[itemselected]" as={`/print/${id}/fh-pu-packaging`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1581791613/work/prints/varsity.jpg"
                className="case-thumb"
                alt="greycomm study"/></a>
            </Link>
            <p>
              <b>FH Group Product: PU Varsity Seat Covers 2017</b>
            </p>
            <Button variant="outlined">
              <Link href="/print/[id]/[itemselected]" as={`/print/${id}/fh-pu-packaging`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Print;