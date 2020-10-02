import React, {useContext, useState} from "react";
import {Context} from "../context";
import CartItem from "../components/CartItem"



function Cart() {
    const {cartItems,deleteItem, emptyCart} = useContext(Context);
    const [buttonValue, setButtonValue] = useState("Place Order")

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    function placeOrder() {
    	setButtonValue("Ordering...")
    	setTimeout(() => {
    		setButtonValue("Place Order");
    		console.log("order placed");
    		emptyCart();
    	}, 3000); 

    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            {(cartItems.length > 0) ? 
            	<div>
	            	<p className="total-cost">Total: {(cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})} </p>
	            <div className="order-button">
	                <button  onClick={placeOrder}>{buttonValue}</button>
	            </div>
	            </div>
	            : ""
            	}
        </main>
    )
}

export default Cart