import React from 'react'
import './ImgsCss.css';

export const Imgs = () => {
  return (
    <div>
        <div className="wrapOfImg">
            <div className="im1Group">
                <img src="./img/img1.jpg" height="200" alt=''/>
            </div>
            <div className="im2Group">
                <img src="./img/img2.jpg" height="200" alt=''/>
            </div>
            <div className="im3Group">
                <img src="./img/img3.jpg" height="200" alt=''/>
            </div>
            <div className="im4Group">
                <img src="./img/img4.jpg" height="200" alt=''/>
            </div>
        </div>
    </div>
  )
}
