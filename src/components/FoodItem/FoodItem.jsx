import React, { useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
  

  return (
    <div className="food-item">
      <div className="food-item-img-container">

        <img className="food-item-image" src={image} alt={name} />

        {cartItems[id] ? (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="remove"
              onClick={() => removeFromCart(id)}
            />

            <span>{cartItems[id]}</span>

            <img
              src={assets.add_icon_green}
              alt="add"
              onClick={() => addToCart(id)}
              
            />
          </div>
        ) : (
          <img
            className="add"
            src={assets.add_icon_white}
            alt="add"
            onClick={() => addToCart(id)}
          />
        )}

      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img className="stars" src={assets.rating_stars} alt="rating" />
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
