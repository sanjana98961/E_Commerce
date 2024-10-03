import axios from "axios";

const BASE_URL = " http://localhost:2000/api/";
const TOKEN =" ";

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    Headers: {token: ` Bearer ${TOKEN}`}
})