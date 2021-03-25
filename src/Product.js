import React from 'react';
const Product = ({label, name, price, image }) => {
    return (
        <article>
            <span>{label}</span>
            <img src={image} alt={name}/>
            <p>{name}</p>
            <h4>€{price},-</h4>
        </article>
    )
};
export default Product