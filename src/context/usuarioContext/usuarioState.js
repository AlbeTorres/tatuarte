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

        token: localStorage.getItem('token'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true,

    }

    const [state, dispatch]= useReducer(usuarioReducer,initialState);

    //funciones
    const registrarUsuario=async datos=>{
            
        try {

            const response = await clienteAxios.post('api/usuarios/', datos);

            // localStorage.setItem('token', response.data.token)

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: response.data,
            })

            
            usuarioAutenticado();
            
        } catch (error) {

            const alerta ={
                msg: error.response.data.msg,
                categoria: 'error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
            
        }


    }

    //Retorna el usuario autenticado

    const usuarioAutenticado = async()=>{
        const token = localStorage.getItem('token');

        if(token){
            tokenAuth(token);
        }

        
         try {

            const respuesta = await clienteAxios.get('api/auth');
            

            dispatch({
                type: OBTENER_USUARIO,
                 payload: respuesta.data.usuario
             })
            
         } catch (error) {
             console.log(error);
             dispatch({
                 type: LOGIN_ERROR,
             })
            
         }

    }


    //Cuando el usuario inicia sesion
    const iniciarSesion = async datos=>{

        try {

            const response = await clienteAxios.post('/api/auth', datos);
            

            localStorage.setItem('token', response.data.token);

            dispatch({
                type: LOGIN_EXITOSO,

            });

            usuarioAutenticado();
            
        } catch (error) {
            

            const alerta={
                msg: error.response.data.msg,
                categoria: 'error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    //Cerrar Sesion
    const cerrarSesion=()=>{
        dispatch({
            type: CERRAR_SESION
        })
    }



    return(
        <UsuarioContext.Provider
        value={
            {
                autenticado:state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,

            }
        }>
            {props.children}
        </UsuarioContext.Provider>
    )
}