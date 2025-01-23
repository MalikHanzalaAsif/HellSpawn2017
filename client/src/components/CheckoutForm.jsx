import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';
import toastEmitter from './ui/toast';
import { Controller, useForm } from "react-hook-form";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
import { useUser } from '../context/userContext';
import { useCart } from "../context/cartContext";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import TotalPrice from '../utils/calcTotalCartPrice';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "32rem",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const CheckoutForm = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { user } = useUser();
    const { cart } = useCart();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        control,
        formState: { errors, isSubmitting },
    } = useForm()

    const onSubmit = async (data) => {
        if (!user) {
            toastEmitter({
                title: "please login to make a purchase",
                type: "warn",
            });
            navigate('/login');
            return;
        }
        if (!cart || cart.length === 0) {
            toastEmitter({
                title: "your cart is empty",
                type: "info",
            });
            navigate('/shop');
            return;
        }
        handleOpen();
        console.log(data);
    };
    const formState = watch();
    console.log(cart)
    const totalPrice = TotalPrice(cart, 0, 2, 4);
    return (
        <>
            <div class="font-[sans-serif] bg-white mt-8">
                <div class="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full justify-center">
                    <div class="max-w-4xl w-full h-max rounded-md px-4 py-8 sticky top-0">
                        <h2 class="text-2xl font-bold text-gray-800">Complete your order</h2>
                        <form class="mt-8" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <h3 class="text-sm lg:text-base text-gray-800 mb-4">Personal Details</h3>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                            required
                                            {...register("firstName", {
                                                required: {
                                                    value: true,
                                                    message: "First Name is required!"
                                                },
                                                minLength: {
                                                    value: 3,
                                                    message: "name must be at least 3 characters long!"
                                                }
                                            })}
                                        />
                                        {errors.firstName && <span className='text-red-600 mb-4'>{errors.firstName.message}</span>}
                                    </div>

                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                            {...register("lastName")}
                                        />
                                        {errors.lastName && <span className='text-red-600 mb-4'>{errors.lastName.message}</span>}
                                    </div>

                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                            required
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
                                    </div>

                                    <div>
                                        <Controller
                                            name="phone"
                                            control={control}
                                            defaultValue=""
                                            rules={{
                                                required: "Phone number is required!",
                                            }}
                                            render={({ field: { onChange, value } }) => (
                                                <PhoneInput
                                                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600 border-none outline-none"
                                                    country={"us"} // Default country
                                                    value={value}
                                                    onChange={onChange}
                                                    inputStyle={{
                                                        fontSize: "1rem",
                                                        backgroundColor: "transparent",
                                                        border: "none",
                                                        outline: "none",
                                                        height: "16px",
                                                    }}
                                                    placeholder="Phone No."
                                                    enableSearch
                                                />
                                            )}
                                        />
                                        {errors.phone && <span className='text-red-600 mb-4'>{errors.phone.message}</span>}
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8">
                                <h3 class="text-sm lg:text-base text-gray-800 mb-4">Shipping Address</h3>
                                <div class="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Address Line"
                                            class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                            required
                                            {...register("address", {
                                                required: {
                                                    value: true,
                                                    message: "address is required!"
                                                },
                                            })}
                                        />
                                        {errors.address && <span className='text-red-600 mb-4'>{errors.address.message}</span>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="City"
                                            class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                            required
                                            {...register("city", {
                                                required: {
                                                    value: true,
                                                    message: "city is required!"
                                                },
                                            })}
                                        />
                                        {errors.city && <span className='text-red-600 mb-4'>{errors.city.message}</span>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="State"
                                            class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                            required
                                            {...register("state", {
                                                required: {
                                                    value: true,
                                                    message: "state is required!"
                                                },
                                            })}
                                        />
                                        {errors.state && <span className='text-red-600 mb-4'>{errors.state.message}</span>}
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            placeholder="Zip Code"
                                            class="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                                            required
                                            {...register("zipCode", {
                                                required: {
                                                    value: true,
                                                    message: "zip code is required!"
                                                },
                                            })}
                                        />
                                        {errors.zipCode && <span className='text-red-600 mb-4'>{errors.zipCode.message}</span>}
                                    </div>
                                </div>

                                <div class="flex gap-4 max-md:flex-col mt-8">
                                    <button type="button" class="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-transparent hover:bg-gray-100 border border-gray-300 text-gray-800 max-md:order-1" onClick={() => {
                                        toastEmitter({
                                            title: "order has been interrupted!",
                                            type: "info",
                                        });
                                        navigate('/')
                                    }}>Cancel</button>
                                    <button type="submit" class="rounded-md px-4 py-2.5 w-full text-sm tracking-wide bg-blue-600 hover:bg-blue-700 text-white">Continue Purchase</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* PAYMENT MODAL */}
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"

                >
                    <Box sx={{
                        ...style,
                        overflowY: "auto",
                        maxHeight: "90vh",
                    }}>
                        <Typography id="modal-modal-title" variant="h4" component="h2">
                            Order Details
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className='font-semibold'>
                            <b>Name:</b> {formState.firstName} {formState.lastName}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className='font-semibold'>
                            <b>Email:</b> {formState.email}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className='font-semibold'>
                            <b>Phone No:</b> {formState.phone}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className='font-semibold'>
                            <b>Address:</b> {formState.address}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className='font-semibold'>
                            <b>City:</b> {formState.city}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }} className='font-semibold'>
                            <b>State:</b> {formState.state}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }} className='font-semibold'>
                            <b>Zip Code</b>: {formState.zipCode}
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }} className='font-semibold'>
                            <b>Total</b>: {totalPrice}
                        </Typography>
                        <div>
                            <Button variant="contained" color="error" style={{ marginRight: "2rem", marginBottom: "0.5rem" }} onClick={handleClose}>
                                change Details
                            </Button>
                            <PayPalScriptProvider
                                options={{
                                    "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
                                    currency: "USD",
                                }}
                            >
                                <div className="mt-6">
                                    <PayPalButtons
                                        createOrder={(data, actions) => {
                                            return actions.order.create({
                                                purchase_units: [
                                                    {
                                                        amount: {
                                                            value: totalPrice,
                                                        },
                                                        items: cart.map(item => ({
                                                            name: item.title,
                                                            quantity: item.quantity.toString(),
                                                            unit_amount: {
                                                                value: item.price.toString(),
                                                                currency_code: "USD",
                                                            },
                                                        }))
                                                    },
                                                ],
                                            });
                                        }}
                                        onApprove={async (data, actions) => {
                                            return actions.order.capture().then((details) => {
                                                alert(
                                                    `Transaction completed by ${details.payer.name.given_name}`
                                                );
                                                // Notify backend
                                            });
                                        }}
                                        onCancel={() => {
                                            alert("Payment was cancelled by user.");
                                        }}
                                        onError={(err) => {
                                            console.error("PayPal Button Error:", err);
                                            alert("An error occurred during the transaction. Please try again.");
                                        }}
                                    />
                                </div>
                            </PayPalScriptProvider>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default CheckoutForm