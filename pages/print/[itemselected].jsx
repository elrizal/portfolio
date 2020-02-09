import React from 'react';
import {useRouter} from 'next/router';
import Layout from '../../../components/layout';

const Comment = () => {
  const router = useRouter();
  const {id, itemselected} = router.query;
  return <Layout>
  <div className ="container">
    <h1>Print Design</h1>
  </div>
   </Layout>
}

export default Comment