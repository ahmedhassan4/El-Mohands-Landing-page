import React from "react";
import SwatchWrapper from "./SwatchWrapper";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";

class Canvas extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.initialStep();
  }
  initialStep = () => {};

  render() {
    const { activeData, swatchData, handleSwatchClick } = this.props;
    console.log("this is my canvase swatched data : ", swatchData);
    return (
      <div className="w-full h-3/5 relative z-10 lg:w-1/2 lg:h-full">
        <SwatchWrapper
          activeData={activeData}
          swatchData={swatchData}
          handleSwatchClick={handleSwatchClick}
        />
      </div>
    );
  }
}

export default Canvas;
