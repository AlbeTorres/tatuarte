import React,{useState} from 'react';
import DropItem from './DropDownItem';

const DropMenu = ({name, icon,arreglo, funcion , iconItem}) => {


    const [open,setOpen]= useState(false);

    const onSelected=(itemSelect)=>{

        funcion(itemSelect);
        setOpen(!open);
    }
    

  return (
    <div className=' bg-gray-600 rounded-md text-white w-32  cursor-pointer'>
        <div className='p-2 flex items-center justify-center ' onClick={ ()=>setOpen(!open) } >
            <p className='ml-1 overflow-ellipsis whitespace-nowrap overflow-hidden'>    
                {name}
            </p> 
            <div className='mt-1 ml-4'>
                {icon} 
            </div> 
        </div>
        
            { open && 
                <div className='absolute rounded-md bg-gray-600 flex items-center flex-col w-2/4 overflow-y-scroll   h-48   '>
                {arreglo.map(item=><DropItem icon={iconItem} itemSelect={item.nombre ? item.nombre: item} funcion={onSelected} />) }
                </div>
            }

        
    </div>
  )
}

export default DropMenu;