import {useRouter} from 'next/router';
import Link from 'next/link';
import Layout from '../../../components/layout';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import webItems from './items-campaigns';
const WebDev = () => {

  const router = useRouter();
  const {id} = router.query;

  return (
    <Layout>
      <div className="container center">
        <h2>Web Development</h2>
        <p>Web development projects where my main role was a front end developer or full stack developer. </p>
      </div>
     
        <div className="container">
          {webItems.map(item => {
            return  <div className="row">
                <div className="col-lg-4">
                  <img src={item.image} className='case-thumb' alt={item.title}/>
                </div>
                <div className="col-lg-8">
                  <h3>{item.title}</h3><p>
                  <b>My role:</b> {item.role}<br />
                  <b>Languages used:</b> {item.lang.join(', ')}<br />
                  <b>Libraries and APIs:</b> {item.lang.join(', ')}<br />
                  <b>Timeframe:</b> {item.timeframe}<br /></p>
                  <p>{item.description}</p>
                  
                  <Button variant="outlined">
                    <a target="_blank" rel="noopener noreferrer" href={item.github}>
                        Github
                    </a>
                   </Button> <Button variant="outlined">
                    <a target="_blank" rel="noopener noreferrer" href={item.live}>
                        Live
                    </a>
                   </Button>
                </div>
                </div>
          })}

      </div>
    </Layout>
  )
}

export default WebDev;