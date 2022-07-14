import React, { Fragment, useState } from 'react'
import Trabajo from '../../components/trabajo/Trabajo';
import {FaRegCompass,FaRegMap, FaPinterestSquare, FaTwitterSquare,
    FaWhatsappSquare, FaFacebookSquare,FaInstagramSquare} from 'react-icons/fa';
import './estudio.css'
import '../../index.css'
import { Link } from 'react-router-dom';

const Estudio = ()=>{

    const [visible, setVisible]=useState(false);

    const user= true;

    return (
        <Fragment>
            <div className="grid grid-cols-2 h-44 items-center estudio-grid-header contenedor estudio-header">
                <figure className='rounded-full w-20 h-20 m-auto '>
                    <img src="img/test.jpg" alt="" className='w-full h-full rounded-full object-cover' />
                </figure> 
                <div className=' grid grid-row-3 gap-1'>
                    <h1 className='text-base font-semibold'>Némesis Ink Tattoo Estudio</h1>
                    <div className="flex items-center text-xs">
                    <FaRegCompass className=' mr-1'></FaRegCompass>
                        <p >La Habana</p>
                    </div>
                    <div className="flex items-center text-xs ">
                        <FaRegMap  className=' mr-1'></FaRegMap>
                        <p>Guanabacoa</p>
                    </div>

                </div> 
                
                    <div className="col-span-2">
                        { user ? 
                        <button className='estudio-btn' onClick={()=>setVisible(!visible)}>
                            Opciones
                        </button>:
                        <button className='estudio-btn' onClick={()=>setVisible(!visible)}>
                            Contactar
                        </button> }
                    </div>
                       
                
            </div>

          { visible && !user  ?  
          <div className="absolute grid grid-cols-5 justify-items-center items-center rounded-md text-4xl right-10 left-10 z-10 text-gray-600 gap-4 contacto-link h-20  shadow-md">
                            <a href=""><FaPinterestSquare></FaPinterestSquare></a>
                            <a href=""><FaTwitterSquare></FaTwitterSquare></a>
                            <a href=""><FaWhatsappSquare></FaWhatsappSquare></a>
                            <a href=""><FaFacebookSquare></FaFacebookSquare></a>
                            <a href=""><FaInstagramSquare></FaInstagramSquare></a>

                        </div>   : null

          } 

          { visible && user  ?  
          <div className="absolute grid grid-rows-2 justify-items-center items-center rounded-md text-4xl right-10 left-10 z-10 text-gray-600 contacto-link h-28 shadow-md">
                            
                            <Link to={'/home'} className='estudio-btn text-center'>Añadir</Link>
                            <Link to={'/home'} className='estudio-btn text-center'>Editar</Link>

                        </div>   : null
          } 





        

            <div className='w-full h-96 overflow-y-auto'>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
            </div>

        </Fragment>

    );
}

export default Estudio;