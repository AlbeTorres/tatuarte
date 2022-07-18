import React from "react";
import {FaPinterestSquare, FaTwitterSquare,
    FaWhatsappSquare, FaFacebookSquare,FaInstagramSquare} from 'react-icons/fa';

const Contacto = () => {
  return (
    <div className="absolute grid grid-cols-5 justify-items-center items-center rounded-md text-4xl right-10 left-10 z-10 text-gray-600 gap-4 contacto-link h-20 px-4 shadow-md md:h-14  md:static md:p-2  ">
      <a href="">
        <FaPinterestSquare className="text-red-600 "></FaPinterestSquare>
      </a>
      <a href="">
        <FaTwitterSquare className="text-blue-400  "></FaTwitterSquare>
      </a>
      <a href="">
        <FaWhatsappSquare className="text-green-400  "  ></FaWhatsappSquare>
      </a>
      <a href="">
        <FaFacebookSquare className="text-blue-600  "></FaFacebookSquare>
      </a>
      <a href="">
        <FaInstagramSquare className="text-pink-500   "></FaInstagramSquare>
      </a>
    </div>
  );
};

export default Contacto;
