import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./userOption.css";

const UserOption = () => {
  const logueado = true;
  return (
    <Fragment>
      {logueado ? (
        <nav className="navbg px-2 py-1 rounded-md">

          <label htmlFor="menu" className="cursor-pointer show ">
            <img src="img/test.jpg" alt="" width="50px" height='50px' className="rounded-full w-10 h-10 object-cover " />
          </label>
          <input type="checkbox" id="menu" className=" hidden nav-input" />

          <ul className="nav-menu nav-transicion">
            <li className="">Perfil</li>

            <li className="">Cerrar sesión</li>
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
