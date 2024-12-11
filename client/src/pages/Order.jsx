import React, { useRef, useState } from 'react';
import "../styles/Order.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Collapse } from "@mui/material";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Order = () => {
    let fetchUrl = "http://localhost:8080";
    let [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: ""
    });
    let [isLoading, setIsLoading] = useState(false);
    let [alertMsg, setAlertMsg] = useState(null);
    const alertRef = useRef(null);

    function handleChange(e) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };
    const handlePhoneChange = (value) => {
        setFormData((prev) => ({ ...prev, number: value }));
    };

    async function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch(`${fetchUrl}/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (data.error) {
                setAlertMsg({ severity: "error", text: data.error });
                console.log(data.error);
            } else {
                setAlertMsg({ severity: "success", text: "Form submitted successfully! We'll reach you soon. have a great day :)" });
                setFormData({
                    name: "",
                    email: "",
                    number: "",
                    message: ""
                });
            }
            alertRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } catch (error) {
            console.error("Form submission error:", error);
            setAlertMsg({ severity: "error", text: "Something went wrong. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='pt-32 h-full mb-32' id='order'>
                <h1 className='orderNowHeading text-center text-7xl font-semibold mb-2'>Order Now</h1>
                <p className='text-center text-md font-mono mb-16'>Please ensure that the information you provided is correct.</p>
                <Collapse in={!!alertMsg} ref={alertRef}>
                    <Alert
                        variant='filled'
                        severity={alertMsg?.severity}
                        onClose={() => setAlertMsg(null)}
                        className="z-100 w-2/5 mx-auto mb-16"
                    >
                        {alertMsg?.text}
                    </Alert>
                </Collapse>

                <section className='w-full h-full lg:flex lg:justify-around items-center pb-8'>
                    <form action="" id="orderForm" className="flex lg:w-2/5 flex-col" onSubmit={handleSubmit}>
                        <TextField
                            label="Full Name"
                            variant="outlined"
                            required
                            name="name"
                            onChange={handleChange}
                            type="text"
                            value={formData.name} style={{margin: "0.5rem"}}
                        />
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            required
                            name="email"
                            onChange={handleChange}
                            type="email"
                            value={formData.email} style={{margin: "0.5rem"}}
                        />
                        <PhoneInput
                            className="ml-2 m-2"
                            value={formData.number}
                            onChange={handlePhoneChange} // Use custom handler for PhoneInput
                            inputStyle={{
                                width: '97%',
                                padding: '10px',
                                fontSize: '16px',
                                paddingLeft: "42px",
                                backgroundColor: "transparent",
                                outline: "1px solid gray",
                                height: "50px",
                            }}
                            placeholder="Enter your phone number"
                            enableSearch
                            name="number"
                        />
                        <TextField
                            label="Message"
                            multiline
                            maxRows={4}
                            required
                            onChange={handleChange}
                            name="message"
                            value={formData.message} style={{margin: "0.5rem"}}
                        />
                        <Button variant="contained" size="large" type="submit" style={{margin: "0.5rem"}}>
                            {isLoading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </form>
                    <div id="orderImage">
                        <img src="/img/superman-img.jpg" alt="contact image" className='max-h-80'/>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Order;
