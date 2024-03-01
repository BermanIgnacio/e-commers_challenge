import React from "react";
import PlateCart from "../../Components/PlateCart/PlateCart"
import Check from "../../Components/Check/Check";

function Cart({ menu, onMenu }) {
  return(
    <div className="panel cart">
      <h1>Your Cart</h1>
      <ul className="cart-summary">
        {menu.map((item,index) => {
          if(item.count > 0)
            return <PlateCart key= {item.name} index= {index} props={item} onMenu={onMenu} />
        })
      }
      </ul>
      <Check menu={menu} />
    </div>
  )
}

export default Cart;