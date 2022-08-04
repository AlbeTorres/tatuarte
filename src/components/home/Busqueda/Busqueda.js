import React,{useContext} from 'react';
import{FaSearch,FaFilter} from 'react-icons/fa';
import estudioContext from '../../../context/estudioContext/estudioContext';

const Busqueda = ({menuButton})=>{

    const onClick=()=>{
        menuButton()
    }


     //estraer trabajos del estado inicial
     const AuxEstudioContext= useContext(estudioContext);
     const {busqueda, insertarTermBusqueda}= AuxEstudioContext;
 
     const insertarBusqueda = e =>{
 
         insertarTermBusqueda(e.target.value)
 
     }

    return(
        <div className='flex items-center justify-center w-full'>
            <div className="mr-2 flex items-center pl-1 w-full border-2 border-gray-500 rounded-md shadow-sm">
                <FaSearch className='text-2xl p-1 text-gray-600'></FaSearch>
                <input type='search' placeholder='Buscar' className='py-1  w-full focus:outline-none ' value={busqueda} onChange={insertarBusqueda} />

            </div>
            <button className='rounded-md p-2 bg-gray-600 shadow-lg border-2 border-gray-600 hover:text-white hover:bg-gray-800 focus:outline-none
    active:bg-gray-900' onClick={onClick}><FaFilter className='text-white'/></button>
        </div>
    );

}

export default Busqueda;