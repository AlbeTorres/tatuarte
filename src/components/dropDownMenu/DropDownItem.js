import React from 'react';
import './dropDownCss.css'

const DropItem = ({icon,itemSelect,funcion}) => {

        const onClickP =()=>{
            funcion(itemSelect);
            console.log(itemSelect)
        }

  return (
    <div className='flex items-center w-11/12 text-white bg-gray-600 cursor-pointer dropdownme p-1' onClick={onClickP}>
        <span className='p-2 rounded-md text-xs'>{icon}</span>
        <p>{itemSelect}</p>
    </div>
  )
}

export default DropItem;