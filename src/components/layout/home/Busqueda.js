import React from 'react';

const Busqueda = ()=>{

    return(
        <div className='flex'>

            <input type='search' placeholder='Buscar...' className='shadow-lg rounded-lg w-full mx-4 px-2 py-1' />
            <button className=' rounded-full w-1/6 lg:w-1/12 relative shadow-lg'><img src='logo192.png' alt=''></img></button>
        </div>
    );

}

export default Busqueda;