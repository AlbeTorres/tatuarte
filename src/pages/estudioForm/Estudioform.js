import React from 'react';
import './estudioForm.css';
import {FaPlus} from 'react-icons/fa';

const Estudioform = () => {


    const onSubmit=e=>{
            e.preventDefault();

            console.log('onsubmit')
    }


  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center ' >
        <label for='formImg' className=' rounded-full w-20 h-20 relative '>
            <img  src='img/test.jpg' alt={''} className=' rounded-full w-full h-full object-cover'/>
            <FaPlus className=' absolute bottom-1 right-2 text-white text-xl bg-gray-600 rounded-full p-1'></FaPlus>
        </label>
        <input id='formImg' type={'file'} alt={''} className='hidden h-full w-full'
            accept='image/png, image/jpg '  /> 
        <div>
            <input type={ 'text '} placeholder={'Nombre Estudio'} />
        </div>
        <div>
            <input type={ 'text'} placeholder={'Provincia'}/>
        </div>
        <div>
            <input type={ 'text'}  placeholder={'Municipio'} />
        </div>
        <div>
            <input type={'url'} placeholder={'Pinteres'}/>
        </div>
        <div>
            <input type={'url'} placeholder={'Twitter'}/>
        </div>
        <div>
            <input type={'url'} placeholder={'Instagram'}/>
        </div>
        <div>
            <input type={'url'} placeholder={'Facebook'}/>
        </div>
        <div>
            <input type={'url'} placeholder={'Whatsapp'}/>
        </div>
        <div>
            <input type={'submit'} value='Editar' />
        </div>


    </form>
  )
}

export default Estudioform;