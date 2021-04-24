/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';
import Product from '../Product/Product';

const Shop = (props) => {
    const { products, addToCart } = props;
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Shop</h2>
            {products.map((pd) => (
                <Product key={pd.id} addToCart={addToCart} product={pd} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    products: state.products,
});

const mapDispatchToProps = {
    addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
