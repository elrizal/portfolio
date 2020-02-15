import galleryList from './cases.json';
import React from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
import Layout from '../../../components/layout';

const Comment = () => {
  const router = useRouter();
  const {id, itemselected} = router.query;

  return  <Layout>
      <div className="fixed backbtn">
        <Link href='/branding/[id]' as='/branding/index'>
          <a>
            <ArrowLeftRounded style={{
              fontSize: 90
            }}/>
          </a>
        </Link>
      </div>
      <div className="container">
        {galleryList.map(obj => {
          if (itemselected == obj.endpoint) {
            return <div>
              <div className="row animated fadeIn">
                <div className="col-sm-12  col-lg-6">

                <img src={obj.img} alt="Case" className='aside-caseimg  add-centering'/>
                </div>
                <div className="col-sm-12  col-lg-6">
                <h1>{obj.title}</h1>
                <h2>{obj.company}</h2>
                  <p>
                    <b>Responsibilities:</b> {obj.role}<br/>
                    <b>Project timeframe: </b>
                    {obj.timeframe}
                  </p>
                  <h3>About the project</h3>
                  <p>{obj.description}</p>
                  <h3>The process</h3>
                  <p>{obj.process}</p>
                </div>
              </div>
            </div>
          }
        })}
      </div>
    </Layout>
}

export default Comment