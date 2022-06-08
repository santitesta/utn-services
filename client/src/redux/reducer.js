import {
    GET_DEVICE_BY_ID,
    GET_DEVICE_BY_INSTITUTE,
    LOGIN,
    LOGOUT
} from "./actions"

const initialState = {
    equipos: [],
    equipo: {},
    equipoDet: {},
    loggedUser: undefined,
    institute: undefined
}

export function rootReducer(state = initialState, { type, payload }) {
    switch (type) {

        case GET_DEVICE_BY_ID:
            if (!payload.id_inei) {
                alert('No encontrado')
                return { ...state }
            }
            return { ...state, equipo: payload }

        case GET_DEVICE_BY_INSTITUTE:
            if (payload.length) {
                return { ...state, equipos: payload, equipo: {} }
            }
            alert('No tiene equipos cargados')
            return { ...state }

        case LOGIN:
            if (Object.keys(payload).length) alert('Successfull login!')
            if (!Object.keys(payload).length) alert('Wrong password')
            localStorage.setItem("user", payload.mail)
            localStorage.setItem("institute", payload.institute)
            return { ...state, loggedUser: payload.mail, institute: payload.institute }

        case LOGOUT:
            localStorage.removeItem("user")
            localStorage.removeItem("institute")
            return { ...state, loggedUser: '', institute: null }

        default: return state;
    }
}