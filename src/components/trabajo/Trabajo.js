import React, { Fragment } from 'react';
import './trabajo.css'
import{FaDollarSign, FaHeart} from 'react-icons/fa';


const Trabajo = ({id,showImg, img,precio}) => {


      const showImgT=(id)=>{
        showImg(id);
        console.log(id)
      }
  return (
    <Fragment>
        <div className='relative rounded-md h-44 m-auto estudio-card w-full'>
         
             <img src={img} alt='' className='rounded-md w-full h-44 object-cover'/> 
          
             <div className='absolute bg-trabajo_card h-full top-0 w-full rounded-md flex items-end' onClick={()=>showImgT(img)}>
              <div className="flex justify-between w-full items-center  mb-2 mx-4 text-xl">

                <div className='flex items-center'>
                  <FaDollarSign className='mb-0  text-white'></FaDollarSign>
                  <h1 className=' text-white  items-center  '>{precio}</h1>
                </div>
                {/* <FaHeart className='text-white z-50' onClick={()=>console.log('corazon')}></FaHeart> */}

              </div>
             </div>
        </div>
    </Fragment>
  )
}

export default Trabajo