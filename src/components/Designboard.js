// Dependencies
import React from 'react'
import images from '../assets/2018-art/*.jpg';

const Designboard = () => (
    <div>
        <div id="body-text">
            <div className="col-span">
                <p className="font-heavy-gray">Art & Design</p>
                <div className="preview">
                    {Object.keys(images).map(
                        key => {
                            return  <img key={key} src={images[key]}/>           
                        })}
                </div>
            </div>
        </div>
    </div>
)

// <div className="dotted">&nbsp;</div>

export default Designboard