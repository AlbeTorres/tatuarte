import React from 'react'

const ImagenView = ({urlSource,index}) => {
  return (
    <div className='bg-transparent z-20 absolute h-96 w-80 left-1/2 -ml-40 top-1/2 -mt-48  '>
        <img alt='' src={urlSource[index]}   />
    </div>
  )
}

export default ImagenView