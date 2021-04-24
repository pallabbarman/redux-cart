import React from 'react';

const Product = (props) => {
    const { product, addToCart } = props;
    const { name, id } = product;
    return (
        <div
            style={{
                border: '1px solid tomato',
                padding: '10px',
                margin: '20px 80px',
                textAlign: 'center',
                backgroundColor: 'darkturquoise',
            }}
        >
            <h5>{name}</h5>
            <button type="button" onClick={() => addToCart(id, name)}>
                Add to cart
            </button>
        </div>
    );
};

export default Product;
