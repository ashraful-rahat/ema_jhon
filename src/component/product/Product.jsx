import React from 'react';
import './Product.css';
const Product = (props) => {
    const {img, name, seller, quantity, price, ratings}=props.product;
    const handleAddToCart =props.handleAddToCart;
    return (
        <div className='product'>
          <img src={img} alt="" />  
          <h5 className='name'>{name}</h5>
         <div className='name2'>
         <p>Price:${price}</p>
          <p>Manufacturer :{seller}</p>
          <p>Rating:{ratings}</p>

         </div>
         <button onClick={() => handleAddToCart(props.product)}  className='button'>Add to Cart</button>
        </div>
    );
};

export default Product;