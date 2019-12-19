import {useRouter} from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/layout';

const Campaigns = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      <div className='extra-top'></div>
      <div className="container">
        
      <h1>Campaigns</h1>
      <p>Case studies of online and out-of-home campaigns:</p>
        <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/first-item`}>
          <a><img src="https://static1.squarespace.com/static/546fc106e4b007974054777d/54748e0ae4b0e7532cedb0bd/56b9fa9c60b5e93ef6c9195a/1487787681788/interestmeeting.png?format=1500w" className='case-thumb' alt="greycomm study"/></a>
        </Link>
        <Link href="/campaign/[id]/[itemselected]" as={`/campaign/${id}/second-item`}>
          <a>Second comment</a>
        </Link>
      </div>
    </Layout>
  )
}

export default Campaigns;