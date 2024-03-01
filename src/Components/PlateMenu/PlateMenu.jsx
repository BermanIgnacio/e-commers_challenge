import React, { useState } from "react";
import check from "../../assets/check.svg"

function PlateMenu({ index, props, onMenu }) {
  const [checked, setChecked] = useState(false);

  const addToCart = () => {
    setChecked(true)
    onMenu(oldArray => {
      oldArray[index].count += 1
      return [...oldArray]})
  }

  const removeFromCart = () => {
    setChecked(false)
    onMenu(oldArray => {
      oldArray[index].count = 0
      return [...oldArray]})
  }
  
  return(
    <li>
      <div className="plate">
        <img src={require(`../../assets/${props.image}`)} alt={props.alt} className="plate" />
      </div> 
      <div className="content">
        <p className="menu-item">{props.name}</p>
        <p className="price">${props.price}</p>
        {!checked ? <button onClick={addToCart} className="add">Add to Cart</button>
                  : <button onClick={removeFromCart} className="in-cart">
                    <img src={check} alt="Check" />
                    In Cart
                  </button>}
      </div>
    </li>
  )
}

export default PlateMenu;