import React from 'react'
import images from '../assets/2016-art/*.jpg';
import Tile from './Tile'

const Artboard = () => (
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

export default Artboard