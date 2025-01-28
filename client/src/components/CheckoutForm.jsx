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
import { PayPalButtons } from "@paypal/react-paypal-js";
import { verifyPaymentApi } from '../api/orderApi';

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
    };
    const formState = watch();

    const calculatedItemTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
    const totalDiscount = "0.00";
    const totalShipping = "2.00";
    const taxAmount = "4.00";

    // Final total calculation
    const calculatedTotal = (
        parseFloat(calculatedItemTotal) +
        parseFloat(totalShipping) -
        parseFloat(totalDiscount) +
        parseFloat(taxAmount)
    ).toFixed(2); // Ensure 2 decimal place
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
                        <h1 id="modal-modal-title" variant="h4" component="h2" className='text-center text-4xl mb-4'>
                            Order Details
                        </h1>
                        <p className='text-center text-sm'>Please ensure that all details are correct before proceeding with payment.</p>
                        <p id="modal-modal-description" className='mt-2'>
                            <b className='font-semibold'>NAME:</b> &nbsp; {formState.firstName} {formState.lastName}
                        </p>
                        <p id="modal-modal-description" className='mt-2'>
                            <b className='font-semibold'>EMAIL:</b> &nbsp; {formState.email}
                        </p>
                        <p id="modal-modal-description" className='mt-2'>
                            <b className='font-semibold'>PHONE NO:</b> &nbsp; {formState.phone}
                        </p>
                        <p id="modal-modal-description" className='mt-2'>
                            <b className='font-semibold'>ADDRESS:</b> &nbsp; {formState.address}
                        </p>
                        <p id="modal-modal-description" className='mt-2'>
                            <b className='font-semibold'>CITY:</b> &nbsp; {formState.city}
                        </p>
                        <p id="modal-modal-description" className='mt-2'>
                            <b className='font-semibold'>STATE:</b> &nbsp; {formState.state}
                        </p>
                        <p id="modal-modal-description" className='mt-2'>
                            <b className='font-semibold'>ZIP CODE:</b> &nbsp; {formState.zipCode}
                        </p>
                        <p id="modal-modal-description" className='mt-2 mb-4'>
                            <b className='font-semibold'>TOTAL AMOUNT:</b> &nbsp; ${calculatedTotal} (including additional charges)
                        </p>
                        <div>
                            <Button variant="contained" color="primary" style={{ marginRight: "2rem", marginBottom: "0.5rem", borderRadius: "50px" }} onClick={handleClose}>
                                change Details
                            </Button>

                            <div className="mt-6">
                                <PayPalButtons
                                    style={{
                                        color: "silver", // Options: 'gold', 'blue', 'silver', 'white', 'black'
                                        shape: "pill", // Options: 'rect', 'pill'
                                        label: "checkout",  // Options: 'pay', 'checkout', 'buynow', 'paypal', 'installment'
                                        layout: "vertical", // Options: 'horizontal', 'vertical'
                                        tagline: false, // Options: true, false (to show/hide tagline)
                                        height: 40, // Set button height (optional)
                                    }}
                                    createOrder={(data, actions) => {
                                        const purchase_units = [
                                            {
                                                amount: {
                                                    value: calculatedTotal, // Must equal the sum of all breakdown values
                                                    currency_code: "USD",
                                                    breakdown: {
                                                        item_total: {
                                                            value: calculatedItemTotal, // Total of all items
                                                            currency_code: "USD",
                                                        },
                                                        shipping: {
                                                            value: totalShipping, // Shipping charges
                                                            currency_code: "USD",
                                                        },
                                                        discount: {
                                                            value: `-${totalDiscount}`, // Discount negative
                                                            currency_code: "USD",
                                                        },
                                                        tax_total: {
                                                            value: taxAmount, // Tax
                                                            currency_code: "USD",
                                                        },
                                                    },
                                                },
                                                items: cart.map(item => ({
                                                    name: item.title,
                                                    quantity: item.quantity.toString(), // Quantity as string
                                                    unit_amount: {
                                                        value: item.price.toFixed(2), // Price per item, rounded to 2 decimals
                                                        currency_code: "USD",
                                                    },
                                                    description: `${item.size || "Not specified"}`, // Description (optional)
                                                })),
                                            },
                                        ];
                                        return actions.order.create({
                                            purchase_units,
                                        });
                                    }}
                                    onApprove={async (data, actions) => {
                                        return actions.order.capture().then(async (details) => {
                                            const payerName =
                                                details?.payer?.name?.given_name || "the buyer";
                                            alert(`Transaction completed by ${payerName}!`);
                                            await verifyPaymentApi(details.id, formState);
                                            navigate("/thank-you");
                                        });
                                    }}
                                    onCancel={() => {
                                        alert("Payment was cancelled by user.");
                                    }}
                                    onError={(err) => {
                                        console.error("PayPal Error:", err);
                                        alert("An error occurred during the transaction. Please try again.");
                                    }}
                                />
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>
    )
}

export default CheckoutForm;