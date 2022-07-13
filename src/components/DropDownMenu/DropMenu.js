import React,{useState} from 'react';
import{FaFilter} from 'react-icons/fa';
import DropItem from './DropItem';

const DropMenu = ({name, icon}) => {


    const [open,setOpen]= useState(false);

    const provinciaArray= [
        {icon: <FaFilter/>,provincia:'Artemisa'},
        {icon: <FaFilter/>,provincia:'La Habana'},
        {icon:<FaFilter/>,provincia:'Pinar del Río'},
        {icon: <FaFilter/>,provincia:'Mayabeque'},
        {icon: <FaFilter/>,provincia:'Matánzas'},
        
    ];

  return (
    <div className=' bg-gray-600 rounded-md text-white w-fit m-auto mt-4 cursor-pointer'>
        <div className='p-2 flex items-center justify-center ' onClick={ ()=>setOpen(!open) } >
            <p className='p-0'>    
                {name}
            </p> 
            <div className='mt-1'>
                {icon} 
            </div> 
        </div>
        <div>
            { open && 
                provinciaArray.map(provincia=><DropItem icon={provincia.icon} provincia={provincia.provincia} />)
            }

        </div>
    </div>
  )
}

export default DropMenu;