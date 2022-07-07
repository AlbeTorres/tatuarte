import React, { Fragment } from 'react'
import Trabajo from '../../components/trabajo/Trabajo';
import {FaRegCompass,FaRegMap, FaPinterestSquare, FaTwitterSquare,
    FaWhatsappSquare, FaFacebookSquare,FaInstagramSquare} from 'react-icons/fa';
import './estudio.css'

const Estudio = ()=>{

    return (
        <Fragment>
            <div className="grid grid-cols-2 h-44 items-center estudio-grid-header  ">
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
                
                    <div className=" grid grid-row-2 contactar-estudio-header col-span-2  gap-1 ">
                        <p className='text-center '>Contactar:</p>
                        <div className=" grid grid-cols-5 justify-items-center text-4xl m-auto text-gray-600 gap-4">
                            <a href=""><FaPinterestSquare></FaPinterestSquare></a>
                            <a href=""><FaTwitterSquare></FaTwitterSquare></a>
                            <a href=""><FaWhatsappSquare></FaWhatsappSquare></a>
                            <a href=""><FaFacebookSquare></FaFacebookSquare></a>
                            <a href=""><FaInstagramSquare></FaInstagramSquare></a>

                        </div>
                    </div>
                
            </div>


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