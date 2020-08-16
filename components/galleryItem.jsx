import React from "react";
import Link from 'next/link';
import {useRouter} from 'next/router';
import LazyLoad from 'react-lazyload';
import Skeleton from 'react-loading-skeleton';
const GalleryItem = (props) => {
  const router = useRouter();
  const {id} = router.query;

  const livedemo = 
    <a className='button' href={props.live} target="_blank">
      Demo
    </a>;

  const gitHubBtn = 
    <a className='button' href={props.github} target="_blank">
      GitHub
    </a>;

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
        <img src={props.img || <Skeleton width={500} height={500} />} className="case-thumb" alt={props.title}/>
        </LazyLoad>
        <div className="item__details">
          <h3>{props.title || <Skeleton height={20} />}</h3>
          <b>Company:</b>&ensp;{props.company}<br />
            <b>Role(s):</b>&ensp;{props.role}<br />
            <div className="row">

              <Link
                href={`/${props.category}/[id]/[itemselected]`}
                as={`/${props.category}/${id}/${props.endpoint}`}
                >
                <a className='button'>case study</a>
              </Link>
             {checkLinks(props)}
            </div>
        </div>
      </div>
    </div>
  )
}
export default GalleryItem;