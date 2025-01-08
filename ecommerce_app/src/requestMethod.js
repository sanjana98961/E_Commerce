import axios from "axios";

const BASE_URL = " https://e-commerce-backend-l06z.onrender.com/api/";
const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGJlYzlmNDljZmExYmUzODA3OThkZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyODMwNzY4MywiZXhwIjoxNzI5NjAzNjgzfQ.w8h6AxnGfW3Yvl7iUltEvz6_HBjJRZ-baxTir_10hwE";
const SECRET ="sk_test_51PdbCoCGwBLAxRXYhLcIHkWhaKffVpJpGnbXwkmINYXCsDambQzHk91niL0pTuiUp8jJb5BwDHFs8V2A0ilfNlY800nTCD0TxK"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {Authorization: `Bearer ${SECRET}`}
})