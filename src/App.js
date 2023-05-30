import OutsideFrame from "./Util/Frame";
import Todo from "./components/Input";
import React from "react";
import TodoList from "./components/Output";
import { useState } from "react";

function App() {

  const[enteredItem, setEnteredItem] = useState([]);

  const infoHandler = (iName) => {
    setEnteredItem((prevEnteredItem)=>{
      return[...prevEnteredItem,{Task:iName, id:Math.random.toString()}];
    });
  };

  return (
      <OutsideFrame>
        <Todo onAddInfo={infoHandler} />
        <TodoList items={enteredItem} />
      </OutsideFrame>
  );
}

export default App;
