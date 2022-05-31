import axios from "axios"

export const GET_EQUIPOS = "GET_EQUIPOS"
export const GET_DEVICE_BY_ID = "GET_DEVICE_BY_ID"

export const getEquipos = () => {
	return function(dispatch){
		return axios.get(`http://localhost:3001/equipos`)
			.then(resp => dispatch({type: GET_EQUIPOS, payload: resp.data}))
			.catch(error => alert('Error in getRecipes: ',error))
	}
}

export const getDeviceById = (id) => {
	return function(dispatch){
		return axios.get(`http://localhost:3001/equipos/${id}`)
			.then(resp => dispatch({type: GET_DEVICE_BY_ID, payload: resp.data}))
			.catch(error => alert('Error in getRecipes: ',error))
	}
}