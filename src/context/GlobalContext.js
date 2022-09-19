import React from "react";



const GlobalContext = React.createContext({
  count: 0,
  increaseCount: () => {},
  decreaseCount: () => {}
});


export default GlobalContext;