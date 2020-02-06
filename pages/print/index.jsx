import {useRouter} from 'next/router';
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import Layout from '../../components/layout';

const Print = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      
    </Layout>
  )
}

export default Print;