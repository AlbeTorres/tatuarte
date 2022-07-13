import React,{useState} from 'react';

const DropMenu = ({children,name, icon}) => {


    const [open,setOpen]= useState(false);

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
            { open && children}

        </div>
    </div>
  )
}

export default DropMenu;