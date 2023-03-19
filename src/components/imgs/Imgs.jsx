import React from "react";
import "./ImgsCss.css";

export const Imgs = () => {
  return (
    <div>
      <div className="wrapOfImg">
        <div className="imGroup">
          <img className="imClass" src="./img/family.jpg" alt="" />
        </div>
        <div className="imGroup">
          <img className="imClass" src="./img/ordinary.jpg" alt="" />
        </div>
        <div className="imGroup">
          <img className="imClass" src="./img/myself.jpg" alt="" />
        </div>
        <div className="imGroup">
          <img className="imClass" src="./img/didThing.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
