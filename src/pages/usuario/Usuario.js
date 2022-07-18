import React,{useState} from 'react';
import{FaPlus, FaPaintBrush, FaCaretDown,FaRegCompass, FaRegMap} from 'react-icons/fa';
import DropMenu from '../../components/dropDownMenu/DropDownMenu';
import { Link } from 'react-router-dom';

const Usuario = () => {

    const provinciaArray = [
        { icon: <FaRegCompass />, text: { type: "provincia", name: "Artemisa" } },
        { icon: <FaRegCompass />, text: { type: "provincia", name: "Mayabeque" } },
        { icon: <FaRegCompass />, text: { type: "provincia", name: "P. del Río" } },
        { icon: <FaRegCompass />, text: { type: "provincia", name: "La Habana" } },
        { icon: <FaRegCompass />, text: { type: "provincia", name: "Matanzas" } },
      ];
      const municipioArray = [
        { icon: <FaRegMap />, text: { type: "municipio", name: "Artemisa" } },
        { icon: <FaRegMap />, text: { type: "municipio", name: "Candelaria" } },
        { icon: <FaRegMap />, text: { type: "municipio", name: "B. Honda" } },
        { icon: <FaRegMap />, text: { type: "municipio", name: "Guanaja" } },
        { icon: <FaRegMap />, text: { type: "municipio", name: "Alquizar" } },
      ];
    
      const [filtro, setFiltro] = useState({
        provincia: "provincia",
        municipio: "municipio",
      });
    
      const onSelect = (itemSelect) => {
        if (itemSelect.type !== "municipio") {
          setFiltro({
            ...filtro,
            provincia: itemSelect.name,
          });
        } else {
          setFiltro({
            ...filtro,
            municipio: itemSelect.name,
          });
        }
      };
    
      const onSubmit = (e) => {
        e.preventDefault();
    
        console.log("onsubmit");
      };

      const eliminarUsuario=()=>{

        console.log('eliminado')
      }


  return (
    <form className='flex flex-col items-center justify-center  mt-4 md:w-1/2 md:mx-auto lg:w-1/3' onSubmit={onSubmit} >
        <div className=" ">
            <label
            htmlFor="formImg"
            className="rounded-full w-20 h-20 relative block cursor-pointer"
            >
            <img
                src="img/test.jpg"
                alt={""}
                className=" rounded-full w-full h-full object-cover"
            />
            <FaPlus className=" absolute bottom-1 right-2 text-white text-xl bg-gray-600 rounded-full p-1"></FaPlus>
            </label>
            <input
            id="formImg"
            type={"file"}
            alt={""}
            className="hidden h-full w-full"
            accept="image/png, image/jpg "
            />
        </div>

        <div
        className="border-2 border-gray-600 w-4/5 flex items-center justify-center flex-col my-2
     rounded-md shadow-lg"
      >
        <h1 className="text-2xl text-gray-600 text-center ">Usuario</h1>

        <div className=" input-estudioForm_div ">
          <FaPaintBrush className="input-icon"></FaPaintBrush>
          <input
            className="input-estudioForm"
            type={"text "}
            placeholder={"Nombre usuario"}
          />
        </div>

        <div className="relative w-full flex items-center justify-between p-4 ">
          <DropMenu
            icon={<FaCaretDown />}
            name={filtro.provincia}
            arreglo={provinciaArray}
            funcion={onSelect}
          />
          <DropMenu
            icon={<FaCaretDown />}
            name={filtro.municipio}
            arreglo={municipioArray}
            funcion={onSelect}
          />
        </div>

        <div className=" input-estudioForm_div ">
          <FaPaintBrush className="input-icon"></FaPaintBrush>
          <input
            className="input-estudioForm"
            type={"text "}
            placeholder={"Correo"}
          />
        </div>
        <div className=" input-estudioForm_div ">
          <FaPaintBrush className="input-icon"></FaPaintBrush>
          <input
            className="input-estudioForm"
            type={"text "}
            placeholder={"Password"}
          />
        </div>
        <div className=" input-estudioForm_div ">
          <FaPaintBrush className="input-icon"></FaPaintBrush>
          <input
            className="input-estudioForm"
            type={"text "}
            placeholder={"Validar Password"}
          />
        </div>
        <div className=" input-estudioForm_div ">
          <FaPaintBrush className="input-icon"></FaPaintBrush>
          <input
            className="input-estudioForm"
            type={"text "}
            placeholder={"Teléfono"}
          />
        </div>
      </div>
      <div className="w-4/5 my-2">
        <input className="btn" type={"submit"} value="Aceptar" />
        <Link to={"/estudio"} className="btn-black text-center my-2">
          Atrás
        </Link>
      </div>
      <p className='text-center cursor-pointer text-red-500' onClick={eliminarUsuario}>Eliminar usuario</p>
  </form>
  )
}

export default Usuario;