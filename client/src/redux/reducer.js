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