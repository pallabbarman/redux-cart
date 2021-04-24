/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Cart = (props) => {
    const { cart, removeFromCart } = props;
    return (
        <div
            style={{
                marginTop: '50px',
                padding: '10px',
                backgroundColor: 'darkcyan',
            }}
        >
            <h4>This is cart</h4>
            <ul>
                {cart.map((pd) => (
                    <li style={{ padding: '10px' }} key={pd.cartId}>
                        {pd.name}
                        {'  '}
                        <button type="button" onClick={() => removeFromCart(pd.cartId)}>
                            X
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cart: state.cart,
});

const mapDispatchToProps = {
    removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
