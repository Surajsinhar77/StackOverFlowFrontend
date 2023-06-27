import * as api from '../api/index'

export const signup = (authData, navigation)  => async (dispatch)=> {
	try{
		const {data} = await api.signUp(authData)
		dispatch({type: 'AUTH', data})
        navigation('/')
	}catch(error){
		console.log(error)
	}
}
export const login = (authData, navigation)  => async (dispatch)=> {
	try{
		const {data} = await api.logIn(authData)
		dispatch({type: 'AUTH', data})
        navigation('/')
	}catch(error){
		console.log(error)
	}
}
