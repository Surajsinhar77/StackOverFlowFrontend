// import * as api from '../api/index'
import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:5000'});

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
		axios.post('http://localhost:5000/auth/login',authData).then((response)=>{
			console.log(response);
			// dispatch({type: 'AUTH', response})
			// navigation('/')
		}).catch(err=>{
			console.error({err, message: err.message})
		})
		
	}catch(error){
		console.log(error.message)
		console.log(error)
	}
}