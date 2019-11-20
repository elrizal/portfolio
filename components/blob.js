import React from 'react';
import anime from 'animejs';

// const svgPath = document.querySelectorAll('.path');
// var svgPath = this.refs.Progress1;
// const svgText = anime({
//   targets: svgPath,
//   loop: true,
//   direction: 'alternate',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 700,
//   delay: (el, i) => { return i * 500 }
// });

const Blob = ({
    style = {},
    fill = '#fff',
    width = '100%',
    className = '',
    height = '60%',
    viewBox = '0 0 32 32',
  }) => 
    <svg
      width={width}
      style={style}
      height={height}
      viewBox={viewBox}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        <path d="some path here" fill={fill} />
    </svg>;

export default Blob;