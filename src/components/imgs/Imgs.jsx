import React from 'react'
import './ImgsCss.css';

export const Imgs = () => {
  return (
    <div>
        <div className="wrapOfImg">
            <div className="imGroup">
                <img className="imClass" src="./img/img3.jpg"  alt=''/>
            </div>
            <div className="imGroup">
                <img className="imClass" src="./img/img4.jpg" alt=''/>
            </div>
            <div className="imGroup">
                <img className="imClass" src="./img/img2.jpg" alt=''/>
            </div>
            <div className="imGroup">
                <img className="imClass" src="./img/img1.jpg" alt=''/>
            </div>
        </div>
    </div>
  )
}
