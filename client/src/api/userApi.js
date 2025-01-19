import axios from "axios";
import toastEmitter from "../components/ui/toast";

export const signupApi = async (data) => {
    try{
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, data, {
            withCredentials: true,
        });
        toastEmitter({
            title: response.data?.message,
            type: response.data?.type,
        });
        return response.data;
    } catch (error) {
        console.log(error)
        toastEmitter({
            title: error?.message,
            type: "error",
        });
    };
};

export const loginApi = async (data) => { 
    try{
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/login`, data, {
            withCredentials: true,
        });
        if(response.data.type == "success"){
            toastEmitter({
                title: `Welcome back! ${response.data.user.name}.`,
                type: response.data?.type,
            });
        } else{
            toastEmitter({
                title: response.data.message,
                type: response.data?.type,
            });
        }
        return response.data;
    } catch (error) { 
        console.log(error)
        toastEmitter({
            title: error?.message,
            type: "error",
        });
    };
};

export const logoutApi = async () => {
    try{
        const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/logout`, {}, {
            withCredentials: true,
        });
        toastEmitter({
            title: response.data?.message,
            type: response.data?.type,
        }); 
    } catch (err) {
        console.log(err)
        toastEmitter({
            title: err?.message,
            type: "error",
        });
    };
};

export const getUserApi = async () => { 
    try { 
        const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user`, {
            withCredentials: true,
        });
        return response.data;
     } catch (err) {
        return;
     };
};
