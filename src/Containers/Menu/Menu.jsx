import React from "react";
import PlateMenu from "../../Components/PlateMenu/PlateMenu"

function Menu({menu, onMenu}) {
  return(
    <div className="panel">
      <h1>To Go Menu</h1>
      <ul className="menu">
        {menu.map((items,index) => <PlateMenu key={items.name} index={index} props={items} onMenu={onMenu}/>)}
      </ul>
    </div>
  )
}

export default Menu;