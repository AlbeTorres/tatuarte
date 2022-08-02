import React,{useReducer} from "react";
import estudioContext from './estudioContext';
import estudioReducer from './estudioReducer';
import { OBTENER_ESTUDIO_BY_CREATOR } from "../../types";
import clienteAxios from "../../config/axios";

const EstudioState=props=>{
   const initialState={
        estudios:[],
        estudio:null,


    }

    const[state, dispatch]= useReducer(estudioReducer,initialState);


    //Obtener estudio por id de usuario creador

    const obtenerEstudioByCreatorID=async(creatorId)=>{

        try {

            const response = await clienteAxios.get('api/estudios')
            console.log(response.data);
            console.log(creatorId);


            dispatch({
                type:OBTENER_ESTUDIO_BY_CREATOR,
                payload:response.data
            })
            
        } catch (error) {
            console.log(error)
            
        }

       
    }

    return(
        <estudioContext.Provider
        value={{
            estudio:state.estudio,
            obtenerEstudioByCreatorID,

        }}>
            {props.children}
        </estudioContext.Provider>
    )
}

export default EstudioState;