import React,{useReducer} from "react";
import AlertaContext from './alertaContext'
import alertaReducer from "./alertaReducer";

const AlertaState=props=>{
    const initialState={
        msg:'',
        clase:''
    }

    const [state, dispatch]= useReducer(initialState, alertaReducer);

    return(
        <AlertaContext.Provider
        value={{
            msg:state.msg,
            clase:state.msg,
        }

        }>
            {children}
        </AlertaContext.Provider>
    )
}