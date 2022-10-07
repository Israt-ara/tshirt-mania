import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item!!</p>
    }
    else if (cart.length === 1) {
        message = <div>
            <p>Buy one for me.</p>
            <h4> Buy another one for you</h4>
        </div>
    }
    else {
        message = <p>Thanks for buying</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h3>
            <h5 className={` bold ${cart.length === 2 ? 'green' : 'red'}`}>Order quantity: {cart.length}</h5>

            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name}
                    <button onClick={() => handleRemoveItem(tshirt)}>✘</button>
                </p>
                )
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>Gift for 3 people </p> : <p>Ok buy.No problem</p>
            }
            <p>And operator</p>
            {cart.length === 2 && <h2>Double items</h2>}

            <p>OR operator</p>
            {cart.length === 4 || <p> There is no 4 item</p>}
        </div>
    );
};

export default Cart;


/*
Conditional rendering:
1.use element in a variable and then use if-else to set value

ternery operator:
1.condition ? true:false

&& operator: (if condition is true ,,i want to display something)
|| (or) operator:
(if condition is false I want to display something)

*/


