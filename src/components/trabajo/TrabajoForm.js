import React from 'react';
import{ Link} from 'react-router-dom'

const TrabajoForm = () => {
  return (
    <form>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <input type="text" />
        </div> 

        <div className="w-4/5 my-2">
            <input className="btn" type={"submit"} value="Aceptar" />
            <Link to={"/estudio"} className="btn-black text-center my-2">
            Atrás
            </Link>
    </div>


    </form>
  )
}

export default TrabajoForm;