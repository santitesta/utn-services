import {
    GET_EQUIPOS,
} from "./actions"

const initialState={
    equipos: [],
    equipoDet: {}
}

export function rootReducer(state = initialState, {type, payload}){
    switch (type) {
        case GET_EQUIPOS:
            return {...state, equipos: payload}
        default: return state;
    }
}