<<<<<<< HEAD
=======
// Dependencies
>>>>>>> 18b7ac3382c2804903b195b5a889753585873f8a
import React from 'react'
import images from '../assets/2016-art/*.jpg';
import Tile from './Tile'

const Artboard = () => (
    <div>
        <div>
            <div className="row-span">
<<<<<<< HEAD
=======
                <p className="font-heavy-gray">Art & Design</p>
>>>>>>> 18b7ac3382c2804903b195b5a889753585873f8a
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