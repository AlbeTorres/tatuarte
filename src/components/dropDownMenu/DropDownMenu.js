import React,{useState} from 'react';
import DropItem from './DropDownItem';

const DropMenu = ({name, icon,arreglo, funcion}) => {


    const [open,setOpen]= useState(false);

    const onSelected=(itemSelect)=>{

        funcion(itemSelect);
        setOpen(!open);
    }
    

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
                {arreglo.map(item=><DropItem icon={item.icon} itemSelect={item.text} funcion={onSelected} />) }
                </div>
            }

        
    </div>
  )
}

export default DropMenu;