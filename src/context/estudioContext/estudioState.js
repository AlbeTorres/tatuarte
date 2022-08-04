import React,{useReducer} from "react";
import estudioContext from './estudioContext';
import estudioReducer from './estudioReducer';
import { OBTENER_ESTUDIO_BY_CREATOR,
OBTENER_BUSQUEDA,
REGISTRAR_ESTUDIO,
OBTENER_ESTUDIOS } from "../../types";
import clienteAxios from "../../config/axios";

const EstudioState=props=>{
   const initialState={
        estudios:[''],
        estudio:null,
        busqueda:'',


    }

    const[state, dispatch]= useReducer(estudioReducer,initialState);

    //Registrar estudio
    const registrarEstudio=(datos)=>{
        try {
            
        } catch (error) {
            
        }
    }


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

    //Insertar termino de busqueda
    const insertarTermBusqueda=(term)=>{
        dispatch({
            type: OBTENER_BUSQUEDA,
            payload:term

        })
    }

    return(
        <estudioContext.Provider
        value={{
            estudios:state.estudios,
            estudio:state.estudio,
            busqueda:state.busqueda,
            obtenerEstudioByCreatorID,
            insertarTermBusqueda,

        }}>
            {props.children}
        </estudioContext.Provider>
    )
}

export default EstudioState;