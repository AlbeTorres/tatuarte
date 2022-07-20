import React, { Fragment } from 'react';
import './trabajo.css'
import{FaDollarSign, FaHeart} from 'react-icons/fa';
import {RViewer, RViewerTrigger } from 'react-viewerjs';

const Trabajo = ({index, img,precio}) => {
  return (
    <Fragment>
      <RViewer imageUrls={img} >
        
     
        <div className='relative rounded-md h-44 m-auto estudio-card w-full'>
          <RViewerTrigger index={index}>
             <img src={img} alt='' className='rounded-md w-full h-44 object-cover'/> 
          </RViewerTrigger>
             <div className='absolute bg-trabajo_card h-full top-0 w-full rounded-md flex items-end'>
              <div className="flex justify-between w-full items-center  mb-2 mx-4 text-xl">

                <div className='flex items-center'>
                  <FaDollarSign className='mb-0  text-white'></FaDollarSign>
                  <h1 className=' text-white  items-center  '>{precio}</h1>
                </div>
                <FaHeart className='text-white'></FaHeart>

              </div>


             </div>
        </div>
        </RViewer>
    </Fragment>
  )
}

export default Trabajo