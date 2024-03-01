import React from "react";
import { useState } from "react";
import Menu from "./Containers/Menu/Menu";
import Cart from "./Containers/Cart/Cart";
import menuItems from "./menuItems";

function App() {

  const [menu, setMenu] = useState(menuItems)
  
  return(
    <div className="wrapper menu">
      <Menu menu={menu} onMenu={setMenu} />
      <Cart menu={menu} onMenu={setMenu} />
    </div>
  )
}

export default App;