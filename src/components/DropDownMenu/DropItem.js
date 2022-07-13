import React from 'react';

const DropItem = ({icon,provincia}) => {

        const onClickP =()=>{
            console.log(provincia)
        }

  return (
    <div className='flex items-center w-fit p-2 text-white bg-gray-600 cursor-pointer' onClick={onClickP}>
        <span className=''>{icon}</span>
        <p>{provincia}</p>
    </div>
  )
}

export default DropItem;