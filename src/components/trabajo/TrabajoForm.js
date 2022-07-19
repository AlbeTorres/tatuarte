import React from 'react';
import{ Link} from 'react-router-dom';

const TrabajoForm = ({onClick}) => {

    

  return (
        <form className='absolute top-10 left-1/2 -ml-36 w-72 h-72 z-20 bg-white rounded-md shadow-lg'>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                <input type="text" />
            </div> 

            <div className="w-4/5 my-2">
                <input className="btn" type={"submit"} value="Aceptar" />
                <button to={"/estudio"} className="btn-black text-center my-2" onClick={()=>onClick()}>
                Atrás
                </button>
        </div>
        </form>
    
  )
}

export default TrabajoForm;