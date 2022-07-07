import React, {useState} from "react";
import './style/App.css';
import {MyForm} from "./components/MyForm";
import {GamePage} from "./components/GamePage";

export function App() {
  const [isGame, setIsGame] = useState(false)
    const setIsGameFunc = (boolVal)=>{
      setIsGame(boolVal)
    }
  const showPage = () =>{
      if(!isGame){
          return <MyForm setIsGame={setIsGameFunc}/>
      }else if(isGame){
          return <GamePage/>
      }
  }

  return (
    <div className="App">
        {showPage()}
    </div>
  );
}

