import React from 'react';
import Router from 'next/router';
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';

const BackBtn = () => {
    <div className="fixed backbtn">
    <a>
      <ArrowLeftRounded
        onClick={() => Router.back()}
        style={{
        fontSize: 90
      }}/>
    </a>
  </div>
}
export default BackBtn