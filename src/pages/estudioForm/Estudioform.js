import React from 'react';
import './estudioForm.css';

const Estudioform = () => {


    const onSubmit=e=>{
            e.preventDefault();

            console.log('onsubmit')
    }


  return (
    <form onSubmit={onSubmit} className='flex flex-col items-center ' >
        <figure className=' rounded-full w-20 h-20 relative '>
            <img src='img/test.jpg' alt={''} className=' rounded-full w-full h-full object-cover' />
            <input type={'image'} alt={''} className=' h-full w-full absolute z-10 top-0' /> 
        </figure>
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