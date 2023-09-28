import axios from "axios";

const API = 'http://localhost:4000/api/users'

export const registerRequest = (user:object) => axios.post(`${API}/register`, user); 

export const loginRequest = (user:object) => axios.post(`${API}/login`, user);