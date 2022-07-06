import React, { Fragment } from 'react';
import './trabajo.css'

const Trabajo = () => {
  return (
    <Fragment>
        <div className='relative rounded-md w-4/5 h-44  '>
             <img src='img/test.jpg' className='rounded-md w-full h-44 object-cover '/> 
             <div className='absolute bg-trabajo_card h-full top-0 w-full rounded-md '>
                <h1 className='absolute bottom-2 left-2 '>Trabajo</h1>


             </div>
        </div>

    </Fragment>
  )
}

export default Trabajo