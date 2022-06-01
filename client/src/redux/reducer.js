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
            if(payload.noUser) alert(payload.noUser)
            else if(payload.wrongPass) alert(payload.wrongPass)
            else alert('Something went wrong bro')
            return {...state}

        case LOGOUT:
            return {...state, loggedUser: {}}

        default: return state;
    }
}