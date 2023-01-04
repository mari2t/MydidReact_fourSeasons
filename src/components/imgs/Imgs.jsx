import React from 'react'
import './ImgsCss.css';

export const Imgs = () => {
  return (
    <div>
        <div className="wrapOfImg">
            <div className="imGroup">
                <img src="./img/img3.jpg" height="200" width="240" alt=''/>
            </div>
            <div className="imGroup">
                <img src="./img/img4.jpg" height="200" width="240" alt=''/>
            </div>
            <div className="imGroup">
                <img src="./img/img2.jpg" height="200" width="240" alt=''/>
            </div>
            <div className="imGroup">
                <img src="./img/img1.jpg" height="200" width="240" alt=''/>
            </div>
        </div>
    </div>
  )
}
