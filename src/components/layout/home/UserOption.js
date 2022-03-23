import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../../../index.css'

const UserOption = ({logeado})=>{

    

    return(
        <div >
            <label htmlFor="menu" className="flex ">
                <img src='bx-menu.svg' alt="menu-icon"/>
            </label>
            <input type="checkbox" id="menu" className=" hidden nav-input"/>
                {
                    logeado?<ul className='nav-menu nav-transicion'>
                                <li className=''><Link to={"/"} className="">Acceder</Link></li>
                                <li className=''><Link to={"/nueva-cuenta"} className="">Regístrarse</Link></li>
                            </ul>
                            :<ul>
                                <li className=''>Perfil</li>
                                <li className=''>Cerrar sesión</li>
                            </ul>
                } 
        </div>
    );
}

export default UserOption;