import React from 'react';
import {FaCompass, FaMap} from 'react-icons/fa';
import './estudioCard.css';

const EstudioCard = ({name})=>{

    return(
        <div className='grid card items-center shadow-lg bg-white rounded-md '>

            <div className='rounded-md w-full p-2 h-36  '>
                <img src='img/test.jpg ' alt='' className='h-full rounded-md object-cover'/>
            </div>
            
            <div className='p-4 w-full h-36   grid grid-rows-3'>
                
                <h1 className='font-bold  text-base leading-none  '>{name}</h1>
                <div className='truncate hover:text-clip text-left indent-0 text-xs '>
                    <div className="flex items-center  ">
                        <FaCompass className='text-gray-600'/>
                        <p className='ml-1'>Santiago de Cuba</p>
                    </div>
                    <div className="flex items-center ">
                        <FaMap className='text-gray-600'/>
                        <p className='ml-1'>Santiago de Cuba</p>
                    </div> 
                </div>
                <button className='btn-datos'>ver</button>

            </div>
        </div>
    );
}

export default EstudioCard;