import React from 'react'
import images from '../assets/2016-photography/*.jpg';
import Tile from './Tile'

const Travelboard = () => (
    <div>
        <div>
            <div className="row-span">
                <div className="tiles">
                    {Object.keys(images).map(
                        key => {
                            return  <Tile key={key} src={images[key]}/>           
                        })}
                </div>
            </div>
        </div>
    </div>
)

export default Travelboard