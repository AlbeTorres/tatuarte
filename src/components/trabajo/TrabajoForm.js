import React,{useState} from 'react';
import{ Link} from 'react-router-dom';
import{FaDollarSign,FaPlus} from 'react-icons/fa'

const TrabajoForm = ({onClick}) => {

  const [img,setImg]=useState("img/test.jpg");

      const onImgSelect=e=>{
        let imgArray= e.target.files;
        let objectUrl = URL.createObjectURL(imgArray[0])
        setImg(objectUrl);
      

      }
    

  return (
        <form className='absolute  top-32 left-1/2 -ml-36  w-72 md:-ml-48  md:w-96   z-20 bg-white rounded-md shadow-lg'>
            <div className='mt-2 flex items-center justify-center flex-col w-4/5 mx-auto'>
                <label htmlFor="formTrabImg" className='w-full mx-auto h-60 block relative cursor-pointer'>
                    <img src={img} alt="" className='object-cover w-full h-full rounded-md ' />
                    <FaPlus className=" absolute bottom-1 right-2 text-white text-4xl bg-gray-600 rounded-full p-1 shadow-md"></FaPlus>
                </label>
                <input id="formTrabImg" type={"file"} alt={""} className="hidden h-full w-full" onChange={onImgSelect} accept="image/* "/>
            
        <div className=" my-2 flex items-center pl-1 w-full border-2 border-gray-500 rounded-md shadow-sm ">
          <FaDollarSign className="input-icon"></FaDollarSign>
          <input
            className="input-estudioForm"
            type={"text "}
            placeholder={"Nombre Estudio"}
          />
        </div>

            <div className="w-full my-2">
                <input className="btn" type={"submit"} value="Aceptar" />
                <button to={"/estudio"} className="btn-black text-center my-2" onClick={()=>onClick()}>
                Atrás
                </button>
        </div>
        </div>
        </form>
    
  )
}

export default TrabajoForm;