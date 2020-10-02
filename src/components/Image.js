import React, {useState, useContext} from "react"
import {Context} from "../context"
import PropTypes from "prop-types"

function Image({className, img}) {
    const [hovered, setHovered] = useState(false);
    const {toggleFavorite, cartItems, setCartItems} = useContext(Context);
    const {addCart} = useContext(Context);
      
    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(hovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
    	const alreadyInCart = cartItems.some(item=> item.id === img.id)
    	const removedItem = cartItems.filter(item=> item.id !== img.id)
    	if(alreadyInCart) {
    		return <i onClick={() => setCartItems(removedItem) } className="ri-shopping-cart-fill cart"></i>
    	} else if(hovered) {
    		return <i onClick={() => addCart(img)} className="ri-add-circle-line cart"></i>
    	}
    } 
    
    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid" alt="ciao"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool
	})
}

export default Image
