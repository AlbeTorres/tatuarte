import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./userOption.css";
import {FaCaretDown} from 'react-icons/fa';

const UserOption = () => {
  const logueado = true;
  return (
    <Fragment>
      {logueado ? (
        <nav>
          <div 
            className="navbg w-16 h-6 rounded-md relative md:w-20 md:h-8 md:rounded-lg ">

            <label 
              htmlFor="menu" 
              className="cursor-pointer  w-full block h-full  ">

              <img 
                src="img/test.jpg" 
                alt="" 
                width="50px"   
                height='50px' 
                className="rounded-full w-10 h-10 object-cover absolute -right-1 -top-2 md:w-14 md:h-14 md:-top-3 " 
              />
              <FaCaretDown className="text-white text-center absolute top-1 left-1.5 md:top-2 md:text-lg  "/>

            </label>
            
          </div>
            <input 
              type="checkbox" 
              id="menu" 
              className="hidden nav-input" />

            <ul 
              className="nav-menu nav-transicion rounded-md shadow-md   ">
              <li 
                className="py-3 block w-full text-center rounded-md hover:bg-gray-800 hover:text-gray-50
                ">
                  <Link to={"/home"}
                    className='block w-full'>
                    Perfil
                  </Link>
                </li>
                <div className="h-px w-11/12 bg-gray-50"></div>
              <li 
                className="py-3 block w-full text-center rounded-md hover:bg-gray-800 hover:text-gray-50"><Link to={"/home"}
                className='block w-full'>
                Cerrar Sesión
              </Link></li>
            </ul>

        </nav>
      ) : (
        <nav>
          <label htmlFor="menu" className="cursor-pointer show ">
            <img
              src="img/bx-menu.svg"
              alt="menu-icon"
              className="w-8 md:w-12  "
            />
          </label>
          <input type="checkbox" id="menu" className=" hidden nav-input" />
          <ul className="nav-menu nav-transicion nav-menu-false nav-transicion-false ">
            <li className="p-2 w-full text-center nav-hover efecto">
              <Link to={"/"} className="w-full block md:text-2xl enlace">
                Acceder
              </Link>
            </li>
            <div className="h-px w-11/12 bg-white desktop mx-1"></div>
            <li className="p-2 w-full text-center nav-hover efecto">
              <Link
                to={"/nueva-cuenta"}
                className="w-full block md:text-2xl enlace"
              >
                Regístrarse
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </Fragment>
  );
};

export default UserOption;
