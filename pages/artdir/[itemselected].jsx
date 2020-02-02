import galleryList from './items-campaigns.json';
import Layout from '../../../components/layout'
import React from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
import Button from '@material-ui/core/Button';

const Comment = () => {
  const router = useRouter();
  const {id, itemselected} = router.query;
  return <Layout>
      <div className="fixed backbtn">
        <Link href='/campaign/[id]' as='/campaign/index'>
          <a>
            <ArrowLeftRounded style={{
              fontSize: 90
            }}/>
          </a>
        </Link>
      </div>
      <div className="container ">

      </div>
    </Layout>
}

export default Comment