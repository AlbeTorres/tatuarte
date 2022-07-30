import React,{useReducer} from "react";
import TrabajoContext from "./trabajoContext";
import trabajoReducer from "./trabajoReducer";
import { OBTENER_TRABAJOS } from "../../types";

const TrabajoState=props=>{
    const initialState={
        nombre:'',
        img:''
    }

    const [state, dispatch]= useReducer(trabajoReducer,initialState);

    


    return(

       <TrabajoContext.Provider
        value={{
            nombre:state.nombre,
            img:state.img

        }
        }
       >
       {props.children}
       
       </TrabajoContext.Provider>
    )

    


}

export default TrabajoState;