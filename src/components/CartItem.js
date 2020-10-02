import React, {useContext} from "react";
import {Context} from "../context";


function CartItem({item}) {
	
	const {deleteItem} = useContext(Context);

	return (
		<div className="cart-item">
            <i onClick={() => deleteItem(item)} className="ri-delete-bin-line"></i>
            <img src={item.url} width="130px" />
            <p>$5.99</p>
        </div>
	)
}

export default CartItem;