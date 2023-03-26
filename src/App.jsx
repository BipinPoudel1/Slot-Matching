import React from "react";
import SlotM from "./SlotMachine";

const App = () => {
  return (
    <>
      <h1 className="heading_style">
        🎰 Slot <span style={{ color: "#39480d" }}> Machine </span> 🎰
      </h1>

      <div className="slotMachine">
        <SlotM x="🙉" y="😄" z="😁"/>
        <SlotM x="🍉" y="🍉" z="🍉"/>
        <SlotM x="⚽" y="😍" z="⚽"/>

        
      </div>
     
    </>
  );
};

export default App;
