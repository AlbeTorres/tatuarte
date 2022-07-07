import React, { Fragment } from 'react'
import Trabajo from '../../components/trabajo/Trabajo';

const Estudio = ()=>{

    return (
        <Fragment>
            <div className="grid grid-cols-2 h-40 items-center   ">
            <figure className='rounded-full w-20 h-20 m-auto '>
                <img src="img/test.jpg" alt="" className='w-full h-full rounded-full object-cover' />
            </figure> 
            <div className=''>
                <h1>Estudio</h1>

            </div>  
                
            </div>


            <div className='w-full h-96 overflow-y-auto'>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>
                <Trabajo/>

                

            </div>

        </Fragment>

    );
}

export default Estudio;