import React, { Fragment } from 'react';
import './trabajo.css'
import{FaDollarSign, FaHeart} from 'react-icons/fa'

const Trabajo = () => {
  return (
    <Fragment>
        <div className='relative rounded-md contenedor h-44 m-auto estudio-card '>
             <img src='img/test.jpg' className='rounded-md w-full h-44 object-cover'/> 
             <div className='absolute bg-trabajo_card h-full top-0 w-full rounded-md flex items-end'>
              <div className="flex justify-between w-full items-center  mb-2 mx-4 text-xl">

                <div className='flex items-center'>
                  <FaDollarSign className='mb-0  text-white'></FaDollarSign>
                  <h1 className=' text-white  items-center  '>2000</h1>
                </div>
                <FaHeart className='text-white'></FaHeart>

              </div>


             </div>
        </div>

    </Fragment>
  )
}

export default Trabajo