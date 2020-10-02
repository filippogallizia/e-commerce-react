import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllPhotos(data))
    }, [])
    
    function toggleFavorite(id) {
        const updatedArr = allPhotos.map(photo => {
            if(photo.id === id) {
            	return {...photo, isFavorite: !photo.isFavorite}
            }
            return photo
        })
        
        setAllPhotos(updatedArr)
    }

    function addCart(obj) {
    	setCartItems(item=> [...item, obj]);
    }

    function emptyCart() {
    	setCartItems([]);
    }
    
    function deleteItem(obj) {
    	const newCartItems = cartItems.filter(item=> item !== obj);
    	setCartItems(prev => prev = newCartItems)
    }

    return (
        <Context.Provider value={{allPhotos, toggleFavorite, addCart, cartItems, setCartItems, deleteItem, emptyCart}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}