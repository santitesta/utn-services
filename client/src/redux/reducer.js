import {
    GET_EQUIPOS,
    GET_DEVICE_BY_ID,
    LOGIN,
    LOGOUT
} from "./actions"

const initialState={
    equipos: [],
    equipo: {},
    equipoDet: {},
    loggedUser: undefined
}

export function rootReducer(state = initialState, {type, payload}){
    switch (type) {

        case GET_EQUIPOS:
            return {...state, equipos: payload, equipo: {}}

        case GET_DEVICE_BY_ID:
            if(!payload.id_inei) {
                alert('No encontrado')
                return {...state}
            }
            return {...state, equipo: payload}

        case LOGIN:
            console.log('Payload: ',payload)
            if(payload.email) {
                alert('Successfull login!')
                return {...state, loggedUser: payload.email}
            }
            if(!payload) alert('No account linked to that mail')
            else if(payload.wrongPass) alert(payload.wrongPass)
            else alert('Ian was here bitches <3')
            return {...state}

        case LOGOUT:
            return {...state, loggedUser: null}

        default: return state;
    }
}