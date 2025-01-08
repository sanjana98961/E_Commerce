import { publicRequest } from "../requestMethod";
import { loginfailure, loginStart, loginSuccess } from "./Useredux"


export const login = async ( dispatch, user)=>{
    dispatch(loginStart());
    try{            
        const res = await publicRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data));
    }catch{
        dispatch(loginfailure())
    }

}