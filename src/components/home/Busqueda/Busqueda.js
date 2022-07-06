import React from 'react';
import{FaFilter} from 'react-icons/fa';

const Busqueda = ()=>{

    return(
        <div className='flex'>

            <input type='search' placeholder='Buscar...' className='shadow-lg rounded-lg w-full mr-4 px-2 py-1 border-2' />
            <button className='flex rounded-full p-3 bg-gray-600  shadow-lg items-center justify-center border-2'><FaFilter className='text-white'/></button>
        </div>
    );

}

export default Busqueda;