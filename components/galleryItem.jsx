import React from "react";
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import {useRouter} from 'next/router';

const GalleryItem = (props) => {
  const router = useRouter();
  const {id} = router.query;
  console.log(props.title)
  return (
    <div className="para">

    
    <div class="item item--medium">
      <img src={props.img} className="case-thumb" alt={props.title}/>
      <div class="item__details">
        <h3>{props
            .title
            .toUpperCase()}</h3>
        <p><b>Company: </b>{props.company}<br />
        <b>My role:</b> {props.role}
        </p>

        <Button variant="outlined">
          <Link href="/print/[id]/[itemselected]" as={`/print/${id}/${props.endpoint}`}>
            <a>Case Study</a>
          </Link>
        </Button>

      </div>
      </div>
    </div>
  )
}
export default GalleryItem;