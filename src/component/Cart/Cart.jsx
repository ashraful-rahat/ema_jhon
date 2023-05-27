import React from 'react';
import './Cart.css';
const Cart = ({cart}) => {
    // const cart = props.cart;
    console.log(cart);
    let total =0
    for(const product of cart){
        total = total+ product.price;
    }
    let shipping = 0
    for(const product of cart){
        shipping = shipping+ product.shipping;

}
const tax = total*7/100;
const totalBill = total+shipping+tax;
    return (
        <div className='cart'>
          <h4>Order Summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price:${total}</p>
                <p>Shipping:${shipping}</p>
                <p>Tax:${tax}</p>
                <h2>Total bill:${totalBill}</h2>
        </div>
    );
};

export default Cart;