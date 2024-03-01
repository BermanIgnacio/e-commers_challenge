import React from "react"

function Check({ menu }) {
  let total = 0
    menu.forEach(ele => {
      if(ele.count > 0) 
        total += ele.price * ele.count
  });
  total = Math.round(total * 100) / 100
  let tax = Number((Math.trunc(total * 10)/100).toFixed(2))
  return(
    <div className="totals">
        <div className="line-item">
          <div className="label">Subtotal:</div>
          <div className="amount price subtotal">${total}</div>
        </div>
        <div className="line-item">
          <div className="label">Tax:</div>
          <div className="amount price tax">${tax}</div>
        </div>
        <div className="line-item total">
          <div className="label">Total:</div>
          <div className="amount price total">${Math.round((total + tax) * 100) / 100}</div>
        </div>
      </div>
  )
}

export default Check