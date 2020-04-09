import React from "react";
import Link from 'next/link';
import {useRouter} from 'next/router';
import LazyLoad from 'react-lazyload';

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
      <LazyLoad>

        <img src={props.img} className="case-thumb" alt={props.title}/>
        </LazyLoad>

        <div className="item__details">
          <h3>{props.title}</h3>
          <b>Company:</b>&ensp;{props.company}<br />
            <b>Role(s):</b>&ensp;{props.role}<br />
          <div className="row extra-top">
            <button>
              <Link
                href={`/${props.category}/[id]/[itemselected]`}
                as={`/${props.category}/${id}/${props.endpoint}`}>
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