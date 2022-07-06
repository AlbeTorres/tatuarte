import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./userOption.css";

const UserOption = () => {
  const logueado = true;
  return (
    <Fragment>
      {logueado ? (
        <nav>
          <div 
            className="navbg w-16 h-6 rounded-md relative">

            <label 
              htmlFor="menu" 
              className="cursor-pointer show ">

              <img 
                src="img/test.jpg" 
                alt="" 
                width="50px"   
                height='50px' 
                className="rounded-full w-10 h-10 object-cover absolute -right-1 -top-2 " 
              />

            </label>
          </div>
            <input 
              type="checkbox" 
              id="menu" 
              className="hidden nav-input" />

            <ul 
              className="nav-menu nav-transicion">
              <li 
                className="py-3 block w-full text-center
                ">
                  <Link to={"/home"}
                    className='block w-full'>
                    Perfil
                  </Link>
                </li>

              <li 
                className="py-3 block w-full text-center"><Link to={"/home"}
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
              className="w-8 md:w-10"
            />
          </label>
          <input type="checkbox" id="menu" className=" hidden nav-input" />
          <ul className="nav-menu nav-transicion">
            <li className="p-2 w-full text-center nav-hover efecto">
              <Link to={"/"} className="w-full block md:text-2xl enlace">
                Acceder
              </Link>
            </li>
            <div className="h-px w-11/12 bg-white desktop"></div>
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
