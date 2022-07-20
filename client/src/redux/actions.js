import axios from "axios"

let url = 'http://localhost:3001'
if (process.env.STAGE !== "development") {
	url = 'http://10.10.200.125:3001'
}

export const GET_USERS = "GET_USERS"
export const GET_DEVICE_BY_ID = "GET_DEVICE_BY_ID"
export const GET_DEVICE_BY_INSTITUTE = "GET_DEVICE_BY_INSTITUTE"
export const GET_DEVICE_BY_SERVICE = "GET_DEVICE_BY_SERVICE"
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const GET_ORDERS = "GET_ORDERS";

export const getDeviceById = (device) => {
	return function (dispatch) {
		return axios.post(`${url}/equipos/id`, device)
			.then(resp => dispatch({ type: GET_DEVICE_BY_ID, payload: resp.data }))
			.catch(error => alert('Action Error in getDeviceById: ', error))
	}
}

export const getDeviceByInstitute = (ins) => {
	return function (dispatch) {
		return axios.get(`${url}/equipos/ins/${ins}`)
			.then(resp => {
				if(resp.status === 204) {
					return alert('No tiene equipos cargados')
				}
				dispatch({ type: GET_DEVICE_BY_INSTITUTE, payload: resp.data })
			})
			.catch(error => alert('Action Error in getDeviceByInstitute: ', error))
	}
}

export const getDeviceByService = (serv) => {
	return function (dispatch) {
		return axios.get(`${url}/equipos/serv/${serv}`)
			.then(resp => {
				dispatch({ type: GET_DEVICE_BY_SERVICE, payload: resp.data })
			})
			.catch(error => alert('Action Error in getDeviceByService: ', error))
	}
}

export function getUsers() {
	return function (dispatch) {
		return axios.get(`${url}/user`)
			.then(resp => dispatch({ type: GET_USERS, payload: resp.data }))
			.catch(error => console.log('Action error in getUsers: ', error))
	}
}

export function signUp(user) {
	return function (dispatch) {
		return axios.post(`${url}/user/signup`, user)
			.then(resp => {
				if (typeof (resp.data) === 'string') alert(resp.data)
				else {
					alert('Cuenta creada exitosamente')
					dispatch({ type: LOGIN, payload: resp.data })
				}
			})
			.catch(error => console.log('Action Error in signup: ', error))
	};
};

export function login(user) {
	return function (dispatch) {
		return axios.post(`${url}/user/login`, user)
			.then(resp => dispatch({ type: LOGIN, payload: resp.data }))
			.catch(error => console.log('Action Error in login: ', error))
	};
};

export function logout() {
	return function (dispatch) {
		return dispatch({ type: LOGOUT })
	}
}

export function changeVerification(user) {
	return function () {
		return axios.put(`${url}/user/verification`, user)
			.then(console.log('User verification changed'))
			.catch(error => console.log('Action error in changeVerification: ', error))
	};
};

export function createOrder(order) {
	return function () {
		return axios.post(`${url}/orders`, order)
			.then(resp => {
				if (resp.data.denied) alert(resp.data.denied)
				else alert('Órden creada exitosamente')
			}
			)
			.catch(error => console.log('Action error in createOrder: ', error))
	};
};

export function getOrders() {
	return function (dispatch) {
		return axios.get(`${url}/orders`)
			.then(resp => dispatch({ type: GET_ORDERS, payload: resp.data }))
			.catch(error => console.log('Action error in getOrders: ', error))
	};
};

export function getOrdersByUser(email) {
	return function (dispatch) {
		return axios.get(`${url}/orders/${email}`)
			.then(resp => dispatch({ type: GET_ORDERS, payload: resp.data }))
			.catch(error => console.log('Action error in getOrdersByUser: ', error))
	};
};

export function getOrdersByPermission(user) {
	return function (dispatch) {
		return axios.get(`${url}/orders/${user.institute}/${user.department}/${user.service}`)
			.then(resp => dispatch({ type: GET_ORDERS, payload: resp.data }))
			.catch(error => console.log('Action error in getOrdersByUser: ', error))
	};
};

export function getOrdersByInstitute(ins) {
	return function (dispatch) {
		return axios.get(`${url}/orders/institute/${ins}`)
			.then(resp => dispatch({ type: GET_ORDERS, payload: resp.data }))
			.catch(error => console.log('Action error in getOrdersByInstitute: ', error))
	};
};

export function addCommentary(commentary) {
	return function () {
		return axios.put(`${url}/orders/commentary`, commentary)
			.then(alert('Comentario agregado exitosamente'))
			.catch(error => {
				if (error.response.status === 400) alert('No existe esa orden de trabajo')
				console.log('Action error in addCommentary: ', error)
			})
	};
};

export function changeState(state) {
	return function () {
		return axios.put(`${url}/orders/state`, state)
			.then(console.log('State updated!'))
			.catch(error => console.log('Action error in changeState: ', error))
	};
};

export function changeRefrigeration(refrigeration) {
	return function () {
		return axios.put(`${url}/orders/refrigeration`, refrigeration)
			.then(console.log('Refrigeration updated!'))
			.catch(error => console.log('Action error in changeRefrigeration: ', error))
	};
};

export function deleteUser(email) {
	return function () {
		return axios.delete(`${url}/user/${email}`)
			.then(resp => {
				if (resp.data.success) alert(resp.data.success)
				else alert('Action error in deleteUser')
			})
			.catch(error => console.log('Action error in deleteUser: ', error))
	};
};