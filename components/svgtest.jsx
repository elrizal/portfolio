import React, { Fragment } from 'react';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { interpolate } from 'flubber';

const paths = {
  plane:
    'M57.247,182.4c45.386-68.476,125.619-115.376,230.939-93.08C399.555,112.9,418.851,223.041,526.071,218c27.339-1.285,99.085-24.676,190.388,31.926,49.1,30.441,99.382,172.448,46.63,250.982-35.456,52.786-114.615,120.934-228.767,147.471-88.145,20.491-161-81.395-255.144-101.663-78.78-16.96-177.565-24.071-209.9-72.047C30.6,417.282-25.012,334.043,55.721,181.962',
  circle:
    'M182,52c166.5-32.82,148.891,24.6,253,52,141.807,37.323,81.8-46.819,267,19,81.324,28.9,100.221,280.716,45,340-43.341,46.53,50.61,168.583-92,216-232.39,77.268-297.61,27.557-405-55-63.888-49.114-146.449-40.774-186-83C-28.8,441.918,2.61,101.737,181,51',
    b:
    'M57.247,182.4c45.386-68.476,125.619-115.376,230.939-93.08C399.555,112.9,418.851,223.041,526.071,218c27.339-1.285,99.085-24.676,190.388,31.926,49.1,30.441,99.382,172.448,46.63,250.982-35.456,52.786-114.615,120.934-228.767,147.471-88.145,20.491-161-81.395-255.144-101.663-78.78-16.96-177.565-24.071-209.9-72.047C30.6,417.282-25.012,334.043,55.721,181.962',
};

const pathIds = Object.keys(paths);

const morphTransition = ({ from, to }) =>
  tween({
    from: 0.1,
    to: 1
  }).pipe(interpolate(from, to));

const Icon = posed.path(
  pathIds.reduce((config, id) => {
    config[id] = {
      d: paths[id],
      transition: morphTransition
    };

    return config;
  }, {})
);

class Example extends React.Component {
  state = { pathIndex: 0 };

  gotoNext = () => {
    const { pathIndex } = this.state;
    const nextIndex = pathIndex + 1;
    this.setState({
      pathIndex: nextIndex > pathIds.length - 1 ? 0 : nextIndex
    });
  };

  render() {
    return (
      <Fragment>
        <svg width="500" height="500" viewBox="2 2 920 800" >
          <Icon className='introblob' pose={pathIds[this.state.pathIndex]} onMouseOver={this.gotoNext}/>
        </svg>
      </Fragment>
    );
  }
}

//const rootElement = document.getElementById('root');
// ReactDOM.render(<Example />, rootElement);
export default Example;
// Icons by Google
// https://www.flaticon.com/packs/material-design
