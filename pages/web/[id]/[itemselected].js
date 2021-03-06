import galleryList from './items-campaigns.json';
import Layout from '../../../components/layout'
import React from 'react';
import {useRouter} from 'next/router';
import Button from '@material-ui/core/Button';
import BackBtn from '../../../components/back';

const Comment = () => {
  const router = useRouter();
  const {id, itemselected} = router.query;
  return <Layout>
    <BackBtn/>
    <div className="container ">
      {galleryList.map(obj => {
        if (itemselected == obj.endpoint) {
          return <div className="container"><div
            className="row animated fadeIn"
            key={obj
            .id
            .toString()}>
            <div className="col-sm-12 col-md-6 col-lg-5 add-centering">
              <img src={obj.img} className='aside-webimg' alt=""/>
              <br/>
              <Button variant="outlined" color="primary">
                <a href={obj.live} target="_blank">Demo</a>
              </Button>&nbsp;
              <Button variant="outlined" color="primary">
                <a href={obj.github} target="_blank">Github</a>
              </Button><br/><br/>
            </div>
            <div className="col-sm-12 col-md-6  col-lg-7">
              <h1>{obj.title}</h1>
              <p>
                <b>My role: </b>
                {obj.role}<br/>
                <b>Built with: </b>
                {obj.tech.join(', ')}<br/>
                <b>APIs and libraries used: </b>
                {obj
                  .libapi
                  .join(', ')}<br/>
                <b>Project timeframe: </b>
                {obj.timeframe}
              </p>
              <h3>About the project </h3>
              <p>{obj.description}</p>
              <h3>Purpose</h3>
              <p>{obj.problem}</p>
              <h3>Process</h3>
              <p>{obj.process}</p>
              <h3>Result and Future Developments</h3>
              <p>{obj.future}</p>
            </div>
          </div>
          </div>
        }
      })}
    </div>
  </Layout>

}

export default Comment