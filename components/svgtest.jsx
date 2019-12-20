import React, {Fragment} from 'react';
import posed from 'react-pose';
import {tween} from 'popmotion';
import {interpolate} from 'flubber';

const paths = {
  plane: 'M157,35C294.091-7.2,476.213-14.944,535,89c49.115,86.841,29.967,147.311,81,215,131.371,174.245-20.206,503.608-180,525C116.105,871.825,22.865,653.043,78,567c115.211-179.8,61.692-142.8-8-214C1.464,282.983-9.967,115.142,152,35',
  circle: 'M108,120C190.552,50.333,277.27-2.4,390,37c250.052,87.388-24.832,317.28,219,303,68.825-4.031,141.433,333-57,436-129.9,67.427-352.546-8.5-378-63-47.985-102.748,22.77-209.96-63-226-28.189-5.272-164.185-112.553-6-365',
  b: 'M184.087,24.657c149.974-42.2,293.158,18.269,369.762,115,92.1,116.3-37.465,288.943,15.315,427.016,26.154,68.418,108.4,149.017-37.195,240.01-81.864,51.163-503.447,15.415-508.7-119C16.572,516.04,78.6,521.922,110,390c22.785-95.742-213.283-241.907,72.993-366.343'
};

const pathIds = Object.keys(paths);

const morphTransition = ({from, to}) => tween({from: 0, to: 1}).pipe(interpolate(from, to));

const Icon = posed.path(pathIds.reduce((config, id) => {
  config[id] = {
    d: paths[id],
    transition: morphTransition
  };

  return config;
}, {}));

class Example extends React.Component {
  state = {
    pathIndex: 0
  };

  gotoNext = () => {
    const {pathIndex} = this.state;
    const nextIndex = pathIndex + 1;
    this.setState({
      pathIndex: nextIndex > pathIds.length - 1
        ? 0
        : nextIndex
    });
  };

  render() {
    return (
      <Fragment>
        <svg className="introblob" viewBox="0 0 800 920">
          <defs>
            <clipPath id="theClippingPath">
              <Icon
                pose={pathIds[this.state.pathIndex]}
                onMouseOver={this.gotoNext}
                onMouseOut={this.gotoNext}/>
            </clipPath>
          </defs>
          <image
            onMouseOver={this.gotoNext}
            onMouseOut={this.gotoNext}
            xlinkHref="https://res.cloudinary.com/diuubtvqd/image/upload/v1576873478/coolmoi.jpg"
            clip-path="url(#theClippingPath)"
            style={{
            "width": "900px",
            "height": "900px"
          }}/>
        </svg>
      </Fragment>
    );
  }
}

export default Example;