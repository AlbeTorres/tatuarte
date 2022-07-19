import React, { Fragment, useState } from 'react'
import Trabajo from '../../components/trabajo/Trabajo';
import {FaRegCompass,FaRegMap, FaPinterestSquare, FaTwitterSquare,
    FaWhatsappSquare, FaFacebookSquare,FaInstagramSquare} from 'react-icons/fa';
import './estudio.css'
import '../../index.css'
import { Link } from 'react-router-dom';
import Contacto from '../../components/estudio/Contacto';
import Opciones from '../../components/estudio/Opciones';

const Estudio = ()=>{

    const [visible, setVisible]=useState(false);
    const [visibleAddForm, setVisibleAddForm]=useState(false);

    const abrirAdd=()=>{
        setVisibleAddForm(!visibleAddForm);
    }

    const user= true;

    return (
        <Fragment>
            <div className="grid grid-cols-2 h-44 items-center estudio-grid-header contenedor estudio-header relative">
                <figure className='rounded-full w-20 h-20 m-auto md:w-28 md:h-28 lg:w-32 lg:h-32 '>
                    <img src="img/test.jpg" alt="" className='w-full h-full rounded-full object-cover' />
                </figure> 
                <div className=' grid grid-row-3 gap-1'>
                    <h1 className='text-base md:text-xl font-semibold'>Némesis Ink Tattoo Estudio</h1>
                    <div className="flex items-center text-xs md:text-base">
                    <FaRegCompass className=' mr-1'></FaRegCompass>
                        <p >La Habana</p>
                    </div>
                    <div className="flex items-center text-xs md:text-base">
                        <FaRegMap  className=' mr-1'></FaRegMap>
                        <p>Guanabacoa</p>
                    </div>

                </div> 
                
                <div className="col-span-2 md:hidden">
                        { user ? 
                        <button className='estudio-btn' onClick={()=>setVisible(!visible)}>
                            Opciones
                        </button>:
                        <button className='estudio-btn' onClick={()=>setVisible(!visible)}>
                            Contactar
                        </button> }
                </div>
 
                <div className='hidden md:block md:w-60 md:z-20 col-start-2 mb-4  '>
                  
                { !user  ?  <Contacto/>:<Opciones onClick={abrirAdd} />}   
                </div>

                

            
            </div>

          { visible && !user  ? 
            <div className='md:hidden'>
                <Contacto/> 
            </div> : null

          } 

          { visible && user  ?  
          <div className='md:hidden'>
         <Opciones onClick={abrirAdd}/>
         </div> : null
          } 

          { visibleAddForm && <div className='absolute w-screen h-screen bg-black z-50 '></div> }




        

            <div className='grid gap-4 items-center  auto-rows-min md:grid-cols-2 lg:grid-cols-3 md:gap-4  sectionHeigth  overflow-y-scroll p-1  w-11/12  md:w-4/5 mx-auto mb-2'>
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