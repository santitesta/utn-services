import {
    GET_DEVICE_BY_ID,
    GET_DEVICE_BY_INSTITUTE,
    GET_USERS,
    LOGIN,
    LOGOUT,
    GET_ORDERS
} from "./actions"

const initialState = {
    equipos: [],
    equipo: {},
    equipoDet: {},
    loggedUser: undefined,
    institute: undefined,
    verified: undefined,
    users: {},
    orders: undefined
}

export function rootReducer(state = initialState, { type, payload }) {
    switch (type) {

        case GET_DEVICE_BY_ID:
            if (payload.denied) {
                alert(payload.denied)
                return { ...state }
            }
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

        case GET_USERS:
            return { ...state, users: payload }

        case LOGIN:
            if (!Object.keys(payload).length) return alert('No account linked to that mail')
            else if (payload.wrongPass) return alert('Wrong password')
            else if (payload.email) {
                alert(`Bienvenido ${payload.email.split('@')[0]}`)
                localStorage.setItem("user", payload.email)
                localStorage.setItem("institute", payload.institute)
                localStorage.setItem("verified", payload.verified)
                return { ...state, loggedUser: payload.mail, institute: payload.institute, verified: payload.verified }
            } else return { ...state, loggedUser: '', institute: '' }

        case LOGOUT:
            localStorage.removeItem("user")
            localStorage.removeItem("institute")
            localStorage.removeItem("verified")
            return { ...state, loggedUser: '', institute: null, verified: null, equipos: [], equipo: {} }

        case GET_ORDERS:
            return {...state, orders: payload}

        default: return state;
    }
}