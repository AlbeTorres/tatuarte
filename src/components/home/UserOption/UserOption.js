import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './userOption.css'

const UserOption = ()=>{

    const logueado=true
    return(
        <nav >
            <label htmlFor="menu" className="cursor-pointer show ">
                <img src='img/bx-menu.svg' alt="menu-icon" className='w-8 md:w-10'/>
            </label>
            <input type="checkbox" id="menu" className=" hidden nav-input"/>
                {
                    logueado?<ul className='nav-menu nav-transicion'>
                                <li className='p-2 w-full text-center nav-hover efecto'><Link to={"/"} className="w-full block md:text-2xl enlace">Acceder</Link></li>
                                <div className='h-px w-11/12 bg-white desktop'></div>
                                <li className='p-2 w-full text-center nav-hover efecto'><Link to={"/nueva-cuenta"} className="w-full block md:text-2xl enlace">Regístrarse</Link></li>
                            </ul>
                            :<ul className='nav-menu nav-transicion'>
                                <li className='p-2 w-full text-center nav-hover efecto md:text-2xl'>Perfil</li>
                                <div className='h-px w-11/12 bg-white'></div>
                                <li className='p-2 w-full text-center nav-hover efecto md:text-2xl'>Cerrar sesión</li>
                            </ul>
                } 
        </nav>
    );
}

export default UserOption;