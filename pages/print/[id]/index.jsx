import {useRouter} from 'next/router';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Layout from '../../../components/layout';
import PrintList from './prints.json';

const Print = () => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/print/[id]/[itemselected]" as={`/print/${id}/casswell-eo-packaging`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555424248/work/prints/PU006115.png"
                className="case-thumb"
                alt="greycomm study"/></a>
            </Link>
            <p>
              <b>Caswell Massey Essential Oils</b>
            </p>
            <Button variant="outlined">
              <Link href="/print/[id]/[itemselected]" as={`/print/${id}/casswell-eo-packaging`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>

          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/print/[id]/[itemselected]" as={`/print/${id}/fh-fabric-packaging`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1581791613/work/prints/varsity.jpg"
                className="case-thumb"
                alt="greycomm study"/></a>
            </Link>
            <p>
              <b>FH Group Product: PU Fabric Seat Covers 2017</b>
            </p>
            <Button variant="outlined">
              <Link href="/print/[id]/[itemselected]" as={`/print/${id}/fh-fabric-packaging`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>

          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/print/[id]/[itemselected]" as={`/print/${id}/fh-fabric-packaging`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1581791613/work/prints/varsity.jpg"
                className="case-thumb"
                alt="greycomm study"/></a>
            </Link>
            <p>
              <b>FH Group Product: PU Fabric Seat Covers 2017</b>
            </p>
            <Button variant="outlined">
              <Link href="/print/[id]/[itemselected]" as={`/print/${id}/fh-fabric-packaging`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/print/[id]/[itemselected]" as={`/print/${id}/casswell-eo-packaging`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1555424248/work/prints/PU006115.png"
                className="case-thumb"
                alt="greycomm study"/></a>
            </Link>
            <p>
              <b>Caswell Massey Essential Oils</b>
            </p>
            <Button variant="outlined">
              <Link href="/print/[id]/[itemselected]" as={`/print/${id}/casswell-eo-packaging`}>
                <a>Case Study</a>
              </Link>
            </Button>
          </div>

          <div className="col-md-6 col-lg-4 case-contain">
            <Link href="/print/[id]/[itemselected]" as={`/print/${id}/fh-fabric-packaging`}>
              <a><img
                src="https://res.cloudinary.com/diuubtvqd/image/upload/v1581791613/work/prints/varsity.jpg"
                className="case-thumb"
                alt="greycomm study"/></a>
            </Link>
            <p>
              <b>FH Group Product: PU Fabric Seat Covers 2017</b>
            </p>
            <Button variant="outlined">
              <Link href="/print/[id]/[itemselected]" as={`/print/${id}/fh-fabric-packaging`}>
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