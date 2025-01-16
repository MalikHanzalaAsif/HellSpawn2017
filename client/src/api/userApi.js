import axios from "axios";
import toastEmitter from "../components/ui/toast";

export const signupApi = async (data) => {
    try{
        const response = await axios.post('http://localhost:8081/signup', data, {
            withCredentials: true,
        });
        console.log(response)
        toastEmitter({
            title: response.data?.message,
            type: response.data?.type,
        });
    } catch (error) {
        console.log(error)
    };
};

export const loginApi = async (data) => { 
    try{
        const response = await axios.post('http://localhost:8081/login', data, {
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
    } catch (error) { 
        console.log(error)
    };
};

export const logoutApi = async () => {
    try{
        const response = await axios.post('http://localhost:8081/logout', {}, {
            withCredentials: true,
        });
        toastEmitter({
            title: response.data?.message,
            type: response.data?.type,
        }); 
    } catch (err) {
        console.log(err)
    };
};

export const getUserApi = async () => { 
    try { 
        const response = await axios.get("http://localhost:8081/user", {
            withCredentials: true,
        });
        return response.data;
     } catch (err) {
        console.log(err)
     };
};