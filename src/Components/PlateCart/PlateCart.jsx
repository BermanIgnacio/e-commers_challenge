import React, { useState } from "react";
import chevron from "../../assets/chevron.svg"

function PlateCart({ index, props, onMenu }) {

  const [quantity, setQuantity] = useState(1)

  const increseQuantity = ()=> {
    setQuantity(prev => prev + 1)
    onMenu(oldArray => {
      oldArray[index].count += 1
      return [...oldArray]})
  }

  const decreseQuantity = ()=> {
    if (quantity !== 1)
    {
      setQuantity(prev => prev - 1)
      onMenu(oldArray => {
        if (oldArray[index].count !== 0)
          oldArray[index].count -= 1
        return [...oldArray]})
    }
  }

  return (
    <li>
      <div className="plate">
        <img src={require(`../../assets/${props.image}`)} alt={props.alt} className="plate" />
        <div className="quantity">{quantity}</div>
      </div>
      <div className="content">
        <p className="menu-item">{props.name}</p>
        <p className="price">${props.price}</p>
      </div>
      <div className="quantity__wrapper">
        <button onClick={decreseQuantity} className="decrease">
          <img src={chevron} alt="decrese plate amount"/>
        </button>
        <div className="quantity">{quantity}</div>
        <button onClick={increseQuantity} className="increase">
          <img src={chevron} alt="increase plate amount"/>
        </button>
      </div>
      <div className="subtotal">
        ${Math.round((quantity * props.price)*100)/100}
      </div>
    </li>
  )
}

export default PlateCart;