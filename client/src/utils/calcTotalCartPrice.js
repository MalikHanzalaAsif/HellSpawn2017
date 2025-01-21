export default function TotalPrice(cart, discount, shipping, tax) {
    return Number(cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)) + 6
}