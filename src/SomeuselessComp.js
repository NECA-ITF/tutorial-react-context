import { useContext } from "react";
import GlobalContext from "./context/GlobalContext";



function SomeuselessComp(props) {
  const { count } = useContext(GlobalContext)

  return <span>{count}</span>
}


export default SomeuselessComp;