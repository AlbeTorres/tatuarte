import React from 'react';
import './estudioForm.css';
import {FaPlus,FaRegCompass,FaRegMap, FaPinterestSquare, FaTwitterSquare,
    FaWhatsappSquare, FaFacebookSquare,FaInstagramSquare, FaPaintBrush,FaCaretDown} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DropMenu from '../../components/dropDownMenu/DropDownMenu';

const Estudioform = () => {


    const onSubmit=e=>{
            e.preventDefault();

            console.log('onsubmit')
    }


  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center justify-center  mt-4 ' >
        <div className=''>
            <label htmlFor='formImg' className='rounded-full w-20 h-20 relative block '>
                <img  src='img/test.jpg' alt={''} className=' rounded-full w-full h-full object-cover'/>
                <FaPlus className=' absolute bottom-1 right-2 text-white text-xl bg-gray-600 rounded-full p-1'></FaPlus>
            </label>
            <input id='formImg' type={'file'} alt={''} className='hidden h-full w-full'
                accept='image/png, image/jpg '  /> 
        </div>

    <div className="border-2 border-gray-600 w-4/5 flex items-center justify-center flex-col my-2
     rounded-md shadow-lg">

        <h1 className='text-2xl text-gray-600 text-center '>Estudio</h1>
       
        <div className=' input-estudioForm_div '>
            <FaPaintBrush className='input-icon' ></FaPaintBrush>
            <input className='input-estudioForm' type={ 'text '} placeholder={'Nombre Estudio'} /> 
        </div>

        <div className='relative w-full flex items-center justify-between p-4 '>
                <DropMenu icon={<FaCaretDown/>} name={'provincia'}  />
                <DropMenu icon={<FaCaretDown/>} name={'Municipio'}  />
        </div>
        
        
    </div>

    <div className="border-2 border-gray-600 w-4/5 flex items-center justify-center flex-col my-2 rounded-md shadow-lg">
        <h1 className='text-2xl text-gray-600 text-center '>Contácto</h1>
        <div className=' input-estudioForm_div'>
            <FaPinterestSquare className='input-icon'></FaPinterestSquare>
            <input className='input-estudioForm' type={'url'} placeholder={'Pinteres'}/>
        </div>
        <div className=' input-estudioForm_div'>
            <FaTwitterSquare className='input-icon'></FaTwitterSquare>
            <input className='input-estudioForm' type={'url'} placeholder={'Twitter'}/>
        </div>
        <div className=' input-estudioForm_div'>
            <FaInstagramSquare className='input-icon'></FaInstagramSquare>
            <input className='input-estudioForm' type={'url'} placeholder={'Instagram'}/>
        </div>
        <div className=' input-estudioForm_div'>
            <FaFacebookSquare className='input-icon'></FaFacebookSquare>
            <input className='input-estudioForm' type={'url'} placeholder={'Facebook'}/>
        </div>
        <div className=' input-estudioForm_div'>
                <FaWhatsappSquare className='input-icon'></FaWhatsappSquare>
                <input className='input-estudioForm' type={'url'} placeholder={'Whatsapp'}/>
        </div>
    </div>
        
    <div className='w-4/5 my-2'>
            <input className='btn' type={'submit'} value='Aceptar' />
            <Link to={'/estudio'} className='btn-black text-center my-2'>Cancelar</Link>
    </div>


    </form>
  )
}

export default Estudioform;