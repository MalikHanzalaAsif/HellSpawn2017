export default function TotalPrice(cart, discount = 0, shipping = 0, tax = 0) {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return Number((subtotal - discount + shipping + tax).toFixed(2));
};
