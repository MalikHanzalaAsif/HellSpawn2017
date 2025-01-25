import React, { useState } from 'react';
import "../styles/AddToCartBtn.css";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useUser } from '../context/userContext';
import { useNavigate } from 'react-router-dom';
import toastEmitter from './ui/toast';
import { addToCartApi } from '../api/cartApi';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: "50px"
};

const AddToCartBtn = ({ item }) => {
    const [isAddingItem, setIsAddingItem] = useState(false)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const navigate = useNavigate();
    const { user } = useUser();

    async function addToCartFunc(item) {
        if (!user) {
            toastEmitter({
                title: "you need to be logged in!",
                type: "warn",
            });
            navigate("/login");
        } else {
            try {
                setIsAddingItem(true);
                await addToCartApi(item, navigate);
                handleClose();

            } catch (err) {
                console.log(err);

            } finally {
                setIsAddingItem(false);
            }
        };
    };
    return (
        <>
            <button onClick={handleOpen}>
                <div class="default-btn">
                    <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="#ffffff"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="cart-icon"
                    >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path
                            d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                        ></path>
                    </svg>
                    <span>Add to Cart</span>
                </div>
                <div class="hover-btn">
                    <svg
                        viewBox="0 0 320 512"
                        width="12.5"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M160 0c17.7 0 32 14.3 32 32V67.7c1.6 .2 3.1 .4 4.7 .7c.4 .1 .7 .1 1.1 .2l48 8.8c17.4 3.2 28.9 19.9 25.7 37.2s-19.9 28.9-37.2 25.7l-47.5-8.7c-31.3-4.6-58.9-1.5-78.3 6.2s-27.2 18.3-29 28.1c-2 10.7-.5 16.7 1.2 20.4c1.8 3.9 5.5 8.3 12.8 13.2c16.3 10.7 41.3 17.7 73.7 26.3l2.9 .8c28.6 7.6 63.6 16.8 89.6 33.8c14.2 9.3 27.6 21.9 35.9 39.5c8.5 17.9 10.3 37.9 6.4 59.2c-6.9 38-33.1 63.4-65.6 76.7c-13.7 5.6-28.6 9.2-44.4 11V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V445.1c-.4-.1-.9-.1-1.3-.2l-.2 0 0 0c-24.4-3.8-64.5-14.3-91.5-26.3c-16.1-7.2-23.4-26.1-16.2-42.2s26.1-23.4 42.2-16.2c20.9 9.3 55.3 18.5 75.2 21.6c31.9 4.7 58.2 2 76-5.3c16.9-6.9 24.6-16.9 26.8-28.9c1.9-10.6 .4-16.7-1.3-20.4c-1.9-4-5.6-8.4-13-13.3c-16.4-10.7-41.5-17.7-74-26.3l-2.8-.7 0 0C119.4 279.3 84.4 270 58.4 253c-14.2-9.3-27.5-22-35.8-39.6c-8.4-17.9-10.1-37.9-6.1-59.2C23.7 116 52.3 91.2 84.8 78.3c13.3-5.3 27.9-8.9 43.2-11V32c0-17.7 14.3-32 32-32z"
                            fill="#ffffff"
                        ></path>
                    </svg>
                    <span>${item.price}</span>
                </div>
            </button>

            {/* ADD TO CART MODAL */}
            <div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} className="flex flex-col justify-center items-center">
                        <img src={item.image} alt={item.title} className='h-52 w-52' />
                        <h2 id="modal-modal-title" className='text-2xl'>
                            {item.title}
                        </h2>
                        <p id="modal-modal-description" className='font-semibold my-4 text-lg'>
                            ${item.price}
                        </p>
                        <div>
                            <Button variant="contained" color="error" startIcon={<CloseIcon />} style={{ marginRight: "2rem", marginBottom: "0.5rem" }} onClick={handleClose}>
                                close
                            </Button>
                            <Button variant="contained" color="success" startIcon={<ShoppingCartIcon />} onClick={() => addToCartFunc(item)} disabled={isAddingItem} style={{marginBottom: "0.5rem"}}>
                                {isAddingItem ? "Adding" : "Add to cart"}
                            </Button>
                        </div>
                    </Box>
                </Modal>
            </div>
        </>

    )
}

export default AddToCartBtn;