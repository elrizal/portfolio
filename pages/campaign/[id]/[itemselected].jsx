import galleryList from './items-campaigns.json';
import Layout from '../../../components/layout'
import React from 'react';
import {useRouter} from 'next/router'
import BackBtn from '../../../components/back';

const Comment = () => {
  const router = useRouter();
  const {id, itemselected} = router.query;
  return <Layout>
    <BackBtn/>
    <div className="container ">
      {galleryList
        .map(function (obj, id) {
          if (itemselected == obj.order) {
            return <div className="row animated fadeIn" key={obj.id}>
              <div className="col-sm-12 col-lg-6 add-centering">
                {obj
                  .images
                  .map(imgobj => {
                    if (obj.images.length > 1) {
                      obj
                        .images
                        .slice(0)
                      return <img className='aside-caseimg' src={imgobj} alt='poster'/>
                    } else {
                      return <img className='aside-caseimg' src={obj.images[0]} alt='poster'/>
                    }
                  })}
              </div>
              <div className="col-sm-12 col-lg-6">
                <h1>{obj.title}</h1>
                <h2>{obj.company}</h2>
                <p>
                  <b>My role:</b>
                  {obj.role}<br/>
                  <b>Project timeframe:
                  </b>
                  {obj.timeframe}
                </p>
                <h3>About the project</h3>
                <p>{obj.description}</p>
                <p>{obj.reason}</p>
                <h3>The process</h3>
                <p>{obj.process}</p>
                <h3>Result</h3>
                <p>{obj.result}</p>
              </div>
            </div>
          }
        })}
    </div>
  </Layout>
}

export default Comment