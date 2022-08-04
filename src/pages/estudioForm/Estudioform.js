import React, { useState } from "react";
import "./estudioForm.css";
import '../../index.css'
import {
  FaPlus,
  FaRegCompass,
  FaRegMap,
  FaPinterestSquare,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPaintBrush,
  FaCaretDown,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import DropMenu from "../../components/dropDownMenu/DropDownMenu";
import provinciaArray from "../../utils/provinciasCuba";
import { fileUpload } from "../../utils/subirImg";

const Estudioform = () => {
  
  
  const [estudioF, setEstudioF] = useState({
    nombre:'',
    img:'img/test.jpg',
    provincia: "provincia",
    municipio: "municipio",
    pinteres:'',
    twitter:'',
    instagram:'',
    facebook:'',
    whatsapp:'',
    load:false,
  });
  
  const [img,setImg]=useState("img/test.jpg");

   //obtener los municipios por provoncias-----------------------------------
   const axuArray= provinciaArray.filter(provincia=>provincia.nombre==estudioF.provincia);
   let municipioArray=[]

   if(axuArray[0]!=undefined){municipioArray=axuArray[0].municipios}else{ municipioArray=["none"]}
   //--------------------------------------------------------------------------   

  const onSelectProvincia =(itemSelect)=>{
    console.log(itemSelect)

        setEstudioF({
            ...estudioF,
            provincia:itemSelect

        })

    }

  const onSelectMunicipio =(itemSelect)=>{

        setEstudioF({
            ...estudioF,
            municipio:itemSelect
        })
    }

  const onImgSelect=async e=>{
        let imgArray= e.target.files;
        // let objectUrl = URL.createObjectURL(imgArray[0])
        setEstudioF({
          ...estudioF,
          load:true
        })
        let objectUrl= await fileUpload(imgArray[0]);
        setEstudioF({
          ...estudioF,
          load:false
        })
        
        setEstudioF({
          ...estudioF,
          img:objectUrl
        });
      

    }

  const onChangeF=e=>{
      setEstudioF({
        ...estudioF,
        [e.target.name]:e.target.value,
      })
  }

  const onSubmit = (e) => {
    e.preventDefault();
    

    console.log("onsubmit");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center justify-center  mt-4 md:w-1/2 md:mx-auto lg:w-1/3 "
    >
        { !estudioF.load ? <div className=" ">
        <label
          htmlFor="formImg"
          className="rounded-full w-20 h-20 relative block cursor-pointer"
        >
          <img
            src={estudioF.img}
            alt={""}
            className=" rounded-full w-full h-full object-cover"
          />
          <FaPlus className=" absolute bottom-1 right-2 text-white text-xl bg-gray-600 rounded-full p-1"></FaPlus>
        </label>
        <input
          id="formImg"
          type={"file"}
          alt={""}
          onChange={onImgSelect}
          className="hidden h-full w-full"
          accept="image/* "
        />
      </div>
       :
       <div className=" rounded-full w-20 h-20 relative block cursor-pointer bg-gray-300">
        <div className="lds-dual-ring"></div>

      </div>
    }
      

      <div
        className="border-2 border-gray-600 w-4/5 flex items-center justify-center flex-col my-2
     rounded-md shadow-lg"
      >
        <h1 className="text-2xl text-gray-600 text-center ">Estudio</h1>

        <div className=" input-estudioForm_div ">
          <FaPaintBrush className="input-icon"></FaPaintBrush>
          <input
            className="input-estudioForm"
            type={"text "}
            placeholder={"Nombre Estudio"}
            name={'nombre'}
            value={estudioF.nombre}
            onChange={onChangeF}
          />
        </div>

        <div className="relative w-full flex items-center justify-between p-4 ">
          <DropMenu
            icon={<FaCaretDown />}
            name={estudioF.provincia}
            arreglo={provinciaArray}
            funcion={onSelectProvincia}
          />
          <DropMenu
            icon={<FaCaretDown />}
            name={estudioF.municipio}
            arreglo={municipioArray}
            funcion={onSelectMunicipio}
          />
        </div>
      </div>

      <div className="border-2 border-gray-600 w-4/5 flex items-center justify-center flex-col my-2 rounded-md shadow-lg">
        <h1 className="text-2xl text-gray-600 text-center ">Contacto</h1>
        <div className=" input-estudioForm_div">
          <FaPinterestSquare className="input-icon"></FaPinterestSquare>
          <input
            className="input-estudioForm"
            type={"url"}
            placeholder={"Pinteres"}
            name={'pinteres'}
            value={estudioF.pinteres}
            onChange={onChangeF}

          />
        </div>
        <div className=" input-estudioForm_div">
          <FaTwitterSquare className="input-icon"></FaTwitterSquare>
          <input
            className="input-estudioForm"
            type={"url"}
            placeholder={"Twitter"}
            name={'twitter'}
            value={estudioF.twitter}
            onChange={onChangeF}
          />
        </div>
        <div className=" input-estudioForm_div">
          <FaInstagramSquare className="input-icon"></FaInstagramSquare>
          <input
            className="input-estudioForm"
            type={"url"}
            placeholder={"Instagram"}
            name={'instagram'}
            value={estudioF.instagram}
            onChange={onChangeF}
          />
        </div>
        <div className=" input-estudioForm_div">
          <FaFacebookSquare className="input-icon"></FaFacebookSquare>
          <input
            className="input-estudioForm"
            type={"url"}
            placeholder={"Facebook"}
            name={'facebook'}
            value={estudioF.facebook}
            onChange={onChangeF}
          />
        </div>
        <div className=" input-estudioForm_div">
          <FaWhatsappSquare className="input-icon"></FaWhatsappSquare>
          <input
            className="input-estudioForm"
            type={"url"}
            placeholder={"Whatsapp"}
            name={'whatsapp'}
            value={estudioF.whatsapp}
            onChange={onChangeF}
          />
        </div>
      </div>

      <div className="w-4/5 my-2">
        <input className="btn" type={"submit"} value="Aceptar" />
        <Link to={"/estudio"} className="btn-black text-center my-2">
          Cancelar
        </Link>
      </div>
    </form>
  );
};

export default Estudioform;
