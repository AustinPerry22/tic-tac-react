import React, { useState } from "react";
function Square() {
  const [emptyOrX, setDisplay] = useState(null);
  return <button className="square"
    onClick={handleClick}>
    {emptyOrX}
  </button>
  function handleClick() {
    setDisplay('X')
  }
}
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
