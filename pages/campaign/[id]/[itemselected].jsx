import galleryList from './items-campaigns.json';
import Layout from '../../../components/layout'
import React from 'react';
import {useRouter} from 'next/router'
import Link from 'next/link';
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
export default function Comment() {

  const router = useRouter();
  const {id, itemselected} = router.query;
  return (
    <Layout>
      <div className="fixed backbtn">
        <Link href='/campaign/[id]' as='/campaign/index'>
          <a>
            <ArrowLeftRounded style={{
              fontSize: 90
            }}/>
          </a>
        </Link>

      </div>
      <div className="container">
        {galleryList.map(obj => {
          console.log(itemselected)
          console.log("obj:" + obj.order)
          if (itemselected == obj.order) {
            return <div>

              <div className="row">
                <div className="col-sm-12  col-lg-6 add-centering">
                  <img className='aside-caseimg' src={obj.images[0]} alt='poster'/>
                </div>
                <div className="col-sm-12  col-lg-6">
                  <h1>{obj.title}</h1>
                  <h2>At {obj.company}</h2>
                  <p>
                    <i>Project created in: {obj.timeframe}</i>
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
        {/* {this.state.shoppingCart.map(card => {
        {card.title} {card.role}
      })} */}

      </div>
    </Layout>
  )
}

//export default Comment