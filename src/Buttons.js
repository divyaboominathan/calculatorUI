import React from "react";

const Buttons = () => {
  return (
    <div className="numbers">
      <div className="grid-container">
        <button
          className="result"
          onClick={() => alert("button result clicked")}
        >
          Result
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 7")}>
          7
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 8")}>
          8
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 9")}>
          9
        </button>
        <button className="grid-item" onClick={() => alert("button clicked /")}>
          /
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 4")}>
          4
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 5")}>
          5
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 6")}>
          6
        </button>
        <button className="grid-item" onClick={() => alert("button clicked *")}>
          *
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 1")}>
          1
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 2")}>
          2
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 3")}>
          3
        </button>
        <button className="grid-item" onClick={() => alert("button clicked +")}>
          +
        </button>
        <button className="grid-item" onClick={() => alert("button clicked .")}>
          .
        </button>
        <button className="grid-item" onClick={() => alert("button clicked 0")}>
          0
        </button>
        <button className="grid-item" onClick={() => alert("button clicked =")}>
          =
        </button>
        <button className="grid-item" onClick={() => alert("button clicked -")}>
          -
        </button>
        <button className="clear" onClick={() => alert("button clicked clear")}>
          Clear
        </button>
      </div>
    </div>
  );
};
export default Buttons;
