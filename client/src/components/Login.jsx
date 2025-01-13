import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useForm } from "react-hook-form";
import "../styles/Login.css";
import { Link } from 'react-router-dom';

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting},
    } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <div id='login' className='flex h-full justify-center items-center mt-12 mb-8'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center w-96 '>
                <h1 className='text-5xl font-semibold mb-8 mt-8'>Login</h1>
                <TextField
                    label="Email Address"
                    variant="outlined"
                    required
                    type="email"
                    style={{ margin: "0.5rem", width: "100%" }}
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Please enter your email address!"
                        },
                        pattern: {
                            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                            message: "Please enter a valid email address!"
                        }
                    })}
                />
                {errors.email && <span className='text-red-600 mb-4'>{errors.email.message}</span>}
                <TextField
                    label="Password"
                    variant="outlined"
                    required
                    type="password"
                    style={{ margin: "0.5rem", width: "100%" }}
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Please enter your password!"
                        }
                    })}
                />
                {errors.password && <span className='text-red-600 mb-4'>{errors.password.message}</span>}
                <Button variant="contained" size="large" type="submit" style={{ margin: "0.5rem", width: "100%" }} disabled={isSubmitting}>
                    {isSubmitting ? (<CircularProgress />) : "Login" }
                </Button>
                <div>Don't have an account?<Link to="/signup" className='font-semibold text-blue-500 ml-2'>signup</Link></div>
            </form>
        </div>
    )
}

export default Login;