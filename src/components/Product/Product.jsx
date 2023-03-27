import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    console.log(props);
    const { name, img, price, seller, rating } = props.product;
    const handleAddToCard = props.handleAddToCard;

    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price :${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Rating: {rating} stars</p>
            </div>
            <button onClick={() => handleAddToCard(props.product)} className='btn-card'>
                Add to Cart  <FontAwesomeIcon icon= {faShoppingCart} />
            </button>
        </div>
    );
};

export default Product;