import galleryList from './items-campaigns.json';
import Layout from '../../../components/layout'
import React from 'react';
import {useRouter} from 'next/router';
import Button from '@material-ui/core/Button';
import BackBtn from '../../../components/back';

const Comment = () => {
  const router = useRouter();
  const {id, itemselected} = router.query;
  return  <Layout>
      <BackBtn/>
     
      <div className="container">
        {galleryList.map(obj => {
          console.log(itemselected)
          console.log("obj:" + obj.order)
          if (itemselected == obj.order) {
            return <div>
              <div className="row animated fadeIn">
                <div className="col-sm-12  col-lg-6">
                <h1>{obj.title}</h1>
                  <h2>{obj.company}</h2><br />
                  <Button target="_blank" variant="outlined" href={obj.mainlink}>View Demo</Button><br />

                <img src={obj.mainimg} alt="Equipment Zone" className='aside-caseimg  add-centering'/>
                </div>
                <div className="col-sm-12  col-lg-6">
                  <p>
                    <b>Responsibilities:</b> {obj.tasks}<br/>
                    <b>Project timeframe: </b>
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
            </div>
          }
        })}
      </div>
    </Layout>
}

export default Comment