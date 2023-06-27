import * as api from '../api/index'

export const signup = (authData, navigation)  => async (dispatch)=> {
	console.log("This is function is working");
	try{
		const {data} = await api.signUp(authData)
		console.log(data)
		dispatch({type: 'AUTH', data})
        navigation('/')
	}catch(error){
		console.log(error)
	}
}

export const login = (authData, navigation)  => async (dispatch)=> {
	try{
		const {data} = await api.logIn(authData)
		console.log(data)
		dispatch({type: 'AUTH', data})
        navigation('/')
	}catch(error){
		console.log(error.message)
		console.log(error)
	}
}