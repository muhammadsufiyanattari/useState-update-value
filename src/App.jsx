import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [num, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <h1 className="hd">Increment Dicriment</h1>
        <h1>{num<10?"0"+num:num}</h1>
        <button onClick={()=>{setCount(num+1)}}>Plus</button>
        <button onClick={()=>{setCount(num-1)}}>Minas</button>
      </div>
    </>
  );
}

export default App;
