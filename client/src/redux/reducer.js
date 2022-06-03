import {
    GET_DEVICE_BY_ID,
    GET_DEVICE_BY_INSTITUTE,
    LOGIN,
    LOGOUT
} from "./actions"

const initialState={
    equipos: [],
    equipo: {},
    equipoDet: {},
    loggedUser: undefined,
    institute: undefined
}

export function rootReducer(state = initialState, {type, payload}){
    switch (type) {

        case GET_DEVICE_BY_ID:
            if(!payload.id_inei) {
                alert('No encontrado')
                return {...state}
            }
            return {...state, equipo: payload}

        case GET_DEVICE_BY_INSTITUTE:
            if(payload.length) {
                return {...state, equipos: payload, equipo: {}}
            }
            alert('No tiene equipos cargados')
            return {...state}

        case LOGIN:
            if(payload.email) {
                alert('Successfull login!')
                return {...state, loggedUser: payload.email, institute: payload.institute}
            }
            if(!payload) alert('No account linked to that mail')
            else if(payload.wrongPass) alert(payload.wrongPass)
            else alert('Something went wrong')
            return {...state}

        case LOGOUT:
            return {...state, loggedUser: null, institute: null}

        default: return state;
    }
}