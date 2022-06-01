import {
    GET_EQUIPOS,
    GET_DEVICE_BY_ID,
    LOGIN,
    LOGOUT
} from "./actions"

const initialState={
    equipos: [],
    equipoDet: {},
    loggedUser: {}
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

        case LOGIN:
            if(Object.keys(payload).length) alert('Successfull login!')
            if(!Object.keys(payload).length) alert('Wrong password')
            return {...state, loggedUser: payload}

        case LOGOUT:
            return {...state, loggedUser: {}}

        default: return state;
    }
}