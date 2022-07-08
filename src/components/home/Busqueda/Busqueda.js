import React from 'react';
import{FaFilter} from 'react-icons/fa';

const Busqueda = ({menuButton})=>{

    const onClick=()=>{
        menuButton()
    }

    return(
        <div className='flex'>

            <input type='search' placeholder='Buscar...' className='shadow-lg rounded-lg w-full mr-4 px-2 py-1 border-2 border-gray-600' />
            <button className='flex rounded-md p-2  bg-gray-600  shadow-lg items-center justify-center border-2 border-gray-600 ' onClick={onClick}><FaFilter className='text-white'/></button>
        </div>
    );

}

export default Busqueda;