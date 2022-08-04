import { act } from "react-dom/test-utils";
import { OBTENER_ESTUDIO_BY_CREATOR,
    OBTENER_BUSQUEDA } from "../../types";

export default (state,action)=>{
    switch (action.type) {
        case OBTENER_BUSQUEDA:
            return{
                ...state,
                busqueda:action.payload
            }

        default:
            return state;
    }
}