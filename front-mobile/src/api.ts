import axios from "axios";

const API_URL = 'http://192.168.1.113:8080';

export function fetchUsers(){
    return axios(`${API_URL}/client/usuarios`)
}

/*
export function fetchUserByID(id: String){
    return axios(`${API_URL}/client/usuarios/${id}`)
}

export function fetchCards(){
    return axios(`${API_URL}/client/cards`)
}*/