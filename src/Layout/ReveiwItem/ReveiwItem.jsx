import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './ReviewItem.css';

const ReviweItem = ({ product }) => {
    console.log(product)
    const { id, img, price, name, quantity } = product;
    
    return (
        <div className="review-item">
            <img src={img} alt="" />
            <div className="review-info">
                <p>{name} </p>
                <p>Price: ${price} </p>
                <p>Quantity: {quantity} </p>
            </div>
            <button className="delete-btn">

                <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
            </button>
        </div>
    )
}

export default ReviweItem;