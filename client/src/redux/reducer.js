import {
    GET_EQUIPOS,
    GET_DEVICE_BY_ID
} from "./actions"

const initialState={
    equipos: [],
    equipoDet: {}
}

export function rootReducer(state = initialState, {type, payload}){
    switch (type) {
        case GET_EQUIPOS:
            return {...state, equipos: payload}
        case GET_DEVICE_BY_ID:
            if(!payload.length) {
                alert('No encontrado')
                return {...state}
            }
            return {...state, equipos: payload}
        default: return state;
    }
}