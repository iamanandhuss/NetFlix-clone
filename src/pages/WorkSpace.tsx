
import {useState,createContext} from "react"

type fruits={
  apple:number,
  orange:number
}
const WorkSpace=()=>{
  const [fruit,setfruit]=useState({apple:0,orange:0})
  return(
    <>
    <h1>apple:{fruit.apple}</h1>
    <h1>orange:{fruit.orange}</h1>

    <button  onClick={()=>setfruit({...fruit,orange:fruit.orange+1})}>add</button>
    </>
  )
}

export default WorkSpace;