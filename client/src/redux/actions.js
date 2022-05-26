import axios from "axios"

export const GET_EQUIPOS = "GET_EQUIPOS"

export const getEquipos = () => {
    return function(dispatch){
        return axios.get(`http://localhost:3001/equipos`)
            .then(resp => dispatch({type: GET_EQUIPOS, payload: resp.data}))
            .catch(error => alert('Error in getRecipes: ',error))
    }
}