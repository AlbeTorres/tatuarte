import React,{useState} from 'react';
import{FaFilter} from 'react-icons/fa';
import DropItem from './DropDownItem';

const DropMenu = ({name, icon,arreglo}) => {


    const [open,setOpen]= useState(false);

    

  return (
    <div className=' bg-gray-600 rounded-md text-white w-fit cursor-pointer'>
        <div className='p-2 flex items-center justify-center ' onClick={ ()=>setOpen(!open) } >
            <p className='ml-1'>    
                {name}
            </p> 
            <div className='mt-1 ml-4'>
                {icon} 
            </div> 
        </div>
        
            { open && 
                <div className='absolute rounded-md bg-gray-600 flex items-center flex-col w-2/4  '>
                {arreglo.map(item=><DropItem icon={item.icon} provincia={item.text} />) }
                </div>
            }

        
    </div>
  )
}

export default DropMenu;