import axios from "axios"

let url = 'http://localhost:3001'
if(process.env.STAGE !== "development") {
	url = 'http://10.10.200.125:3001'
}

export const GET_EQUIPOS = "GET_EQUIPOS"
export const GET_DEVICE_BY_ID = "GET_DEVICE_BY_ID"
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const getEquipos = () => {
	return function(dispatch){
		return axios.get(`${url}/equipos`)
			.then(resp => dispatch({type: GET_EQUIPOS, payload: resp.data}))
			.catch(error => alert('Error in getRecipes: ',error))
	}
}

export const getDeviceById = (id) => {
	return function(dispatch){
		return axios.get(`${url}/equipos/${id}`)
			.then(resp => dispatch({type: GET_DEVICE_BY_ID, payload: resp.data}))
			.catch(error => alert('Error in getRecipes: ',error))
	}
}

export function login(user) {
	return function(dispatch){
		return axios.post(`${url}/user/login`, user)
			.then(resp => dispatch({type: LOGIN, payload: resp.data}))
			.catch(error => console.log('El error en cuestion: ',error))
	};
  };
  
  export function logout() {
	return function(dispatch){
	  return dispatch({type: LOGOUT})
	}
  }
  
  export function signUp(user) {
	return function(){
		return axios.post(`${url}/user/signup`, user)
			.then(resp => {
			  console.log(resp)
			  if(typeof(resp.data) === 'string') alert(resp.data)
			  else alert('Welcome to our platform')
			})
			.catch(error => console.log('El error en cuestion: ',error))
	};
  };