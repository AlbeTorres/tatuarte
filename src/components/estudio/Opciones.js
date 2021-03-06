import React from 'react';
import { Link } from 'react-router-dom';

const Opciones = ({onClick}) => {
  return (
    <div className="absolute grid grid-rows-2 justify-items-center items-center rounded-md text-4xl right-10 left-10 z-10 text-gray-600 bg-white h-28 shadow-md px-4 md:grid-cols-2 md:grid-rows-none md:gap-4 md:static md:h-16">
                            
    <button to={'/home'} className='estudio-btn text-center cursor-pointer ' onClick={()=>onClick() }>Añadir</button>
    <Link to={'/home'} className='estudio-btn text-center cursor-pointer'>Editar</Link>

</div>  
  )
}

export default Opciones;