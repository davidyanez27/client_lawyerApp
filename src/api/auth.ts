import axios from "./axios";

// const API = 'http://localhost:4000/api/users';

export const registerRequest = (user:object) => axios.post(`/register`, user); 

export const loginRequest = (user:object) => axios.post(`/login`, user);

export const verifyTokenRequest = (token:object) => axios.get('/verify', token);

export const CreateDocument = (data:object) => axios.post('/documents', data);
