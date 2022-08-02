import React,{useReducer} from "react";
import usuarioReducer from './usuarioReducer';
import UsuarioContext from './usuarioContext';
import { REGISTRO_EXITOSO,
     REGISTRO_ERROR,
     OBTENER_USUARIO, 
     LOGIN_EXITOSO, 
     LOGIN_ERROR, 
     CERRAR_SESION } from "../../types";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

const UsuarioState=props=>{

    const initialState={

       

    }

    const [state, dispatch]= useReducer(usuarioReducer,initialState);

   

    return(
        <UsuarioContext.Provider
        value={
            {
                

            }
        }>
            {props.children}
        </UsuarioContext.Provider>
    )
}