import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart)
    const total = cart.reduce((total, pd) => total + pd.price, 0);

    let shipping = 0;
    if (shipping > 35) {
        shipping = 0;
    }
    else if (shipping > 15) {
        shipping = 4.99
    }
    else if (shipping > 0) {
        shipping = 12.99
    }
    const tax = (total / 10).toFixed(2);

    const grandTotal = total + shipping + Number(tax);

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered:{cart.length} </p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>shipping Cost:{shipping}</small></p>
            <p><small>Tax+Vat: {tax}</small></p>
            <p>total price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;