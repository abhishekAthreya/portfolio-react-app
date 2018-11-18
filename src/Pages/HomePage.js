import React from 'react';
import { render } from 'react-dom';
import Plx from 'react-plx';
import '../Styles/HomePage.css';
import InteractiveScroll from '../Components/InteractiveScroll';


const containerParallaxData = [
  {
    start: 100,
    duration: 400,
    properties: [
      {
        startValue: 1,
        endValue: 0.5,
        property: "scale"
      }
    ]
  }
];

const infoParallaxData = [
  {
    start: 400,
    duration: 450,
    properties: [
      {
        startValue: 0,
        endValue: 1,
        property: "opacity"
      }
    ]
  }
];
  

class HomePage extends React.Component {
  render() {
    return (
        <div style={{ height: 3000 }}>
            <div id="intro">
                Name
                <span>
                    Tag Line
                </span>
            </div>
            <InteractiveScroll style={{ marginLeft: 190, marginTop: 130 }} direction="down"/>
            <Plx className="highlighted-info-container" parallaxData={containerParallaxData} style={{ marginLeft: 445 }}><Plx className="info" parallaxData={infoParallaxData}>Test Info</Plx></Plx>
      </div>
    );
  }
}

export default HomePage