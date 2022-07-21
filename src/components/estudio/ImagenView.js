import React from 'react'
import './estudioCard.css'

const ImagenView = ({img}) => {
  return (
    <div className='bg-transparent flex justify-center items-center imagen-view z-20 absolute h-96  w-80 left-1/2 -ml-40 top-1/2 -mt-56   '>
        <img alt='' src={img}   />
    </div>
  )
}

export default ImagenView