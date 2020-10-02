import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Context} from "../context";

function Header() {
	const {cartItems} = useContext(Context);

	function cartIcon() {
		if(cartItems.length > 0) {
			return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
		} else {
			return  <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
		}
	};

	return (
		<header>
            <h2><Link to="/">Link Some</Link></h2>
            <h2><Link to="/cart">{cartIcon()}</Link></h2>

            
        </header>
	)
}

export default Header;