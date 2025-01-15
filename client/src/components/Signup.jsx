import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useForm } from "react-hook-form";
import "../styles/Signup.css";
import { Link } from 'react-router-dom';
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
import { signupApi } from '../api/userApi';

const Signup = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting},
    } = useForm()

    const onSubmit = async (data) => {
        await signupApi(data);
    };
    return (
        <div id='signup' className='flex h-full justify-center items-center mt-6 mb-8'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center items-center w-96 '>
                <h1 className='text-5xl font-semibold mb-8 mt-8'>Signup</h1>
                <TextField
                    label="Full Name"
                    variant="outlined"
                    required
                    type="text"
                    style={{ margin: "0.5rem", width: "100%" }}
                    {...register("fullName", {
                        required: {
                            value: true,
                            message: "name is required!"
                        },
                        minLength: {
                            value: 3,
                            message: "name must be at least 3 characters long!"
                        }
                    })}
                />
                {errors.name && <span className='text-red-600 mb-4'>{errors.name.message}</span>}
                <TextField
                    label="Email Address"
                    variant="outlined"
                    required
                    type="email"
                    style={{ margin: "0.5rem", width: "100%" }}
                    {...register("email", {
                        required: {
                            value: true,
                            message: "email address is required!"
                        },
                        pattern: {
                            value: emailRegex,
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
                            message: "set a strong password!"
                        },
                        minLength: {
                            value: 5,
                            message: "Password must be atleast 5 characters long!"
                        }
                    })}
                />
                {errors.password && <span className='text-red-600 mb-4'>{errors.password.message}</span>}
                <Button variant="contained" size="large" type="submit" style={{ margin: "0.5rem", width: "100%" }} disabled={isSubmitting}>
                    {isSubmitting ? (<CircularProgress />) : "Signup" }
                </Button>
                <div>Already have an account?<Link to="/login" className='font-semibold text-blue-500 ml-2'>Login</Link></div>
            </form>
        </div>
    )
}

export default Signup;