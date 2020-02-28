import React from "react";
import Link from 'next/link';
import {useRouter} from 'next/router';

const GalleryItem = (props) => {
  const router = useRouter();
  const {id} = router.query;

  const livedemo = <button>
    <a href={props.live} target="_blank">
      Demo
    </a>
  </button>;

  const gitHubBtn = <button>
    <a href={props.github} target="_blank">
      GitHub
    </a>
  </button>;

  const checkLinks = () => {
    if (props.github && props.live) {
      return (
        <div>
          &ensp;{livedemo}&ensp;{gitHubBtn}
        </div>
      )
    } else if (props.github) {
      return gitHubBtn
    } else if (props.livedemo) {
      return livedemo
    }
  }

  return (
    <div className="para">
      <div className="item item--medium">
        <img src={props.img} className="case-thumb" alt={props.title}/>
        <div className="item__details">
          <h3>{props.title}</h3>
          <p>
            <b>Company:&ensp;
            </b>
            {props.company}<br/>
            <b>Role:&ensp;
            </b>
            {props.role}
          </p>
            <div className="row">
            <button>
            <Link href={`/${props.category}/[id]/[itemselected]`} as={`/${props.category}/${id}/${props.endpoint}`}>
              <a>Case Study</a>
            </Link>
          </button>{checkLinks(props)}
            </div>

        </div>
      </div>
    </div>
  )
}
export default GalleryItem;