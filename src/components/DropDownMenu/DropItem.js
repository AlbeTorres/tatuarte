import React from 'react';
import './dropDown.css'

const DropItem = ({icon,provincia}) => {

        const onClickP =()=>{
            console.log(provincia)
        }

  return (
    <div className='flex items-center  p-2 text-white bg-gray-600 cursor-pointer dropdownme w-full' onClick={onClickP}>
        <span className='p-2 rounded-md text-xs'>{icon}</span>
        <p>{provincia}</p>
    </div>
  )
}

export default DropItem;