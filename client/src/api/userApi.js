import axios from "axios";

export const signupApi = async (data) => {
    try{
        const response = await axios.post('http://localhost:8081/signup', data, {
            withCredentials: true,
        });
        console.log(response);
    } catch (error) {
        console.log(error)
    }
};

export const loginApi = async (data) => { 
    try{
        const response = await axios.post('http://localhost:8081/login', data, {
            withCredentials: true,
        });
        console.log(response);
    } catch (error) { 
        console.log(error)
    }
};