import axios from 'axios'

const API = axios.create({baseURL : 'http://localhost:5000'})
export const logIn = (authData) => API.post('/auth/login', authData)
export const signUp = (authData) => API.post('/auth/register', authData)

