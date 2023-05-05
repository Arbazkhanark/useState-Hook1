import React, { useState } from "react";
import "./styles.css";

function App() {
  let [count, increse] = useState(0);

  // function inc() {
  //   counter++;
  //   increse(counter);
  //   console.log(counter);
  // }

  // function dec() {
  //   if (counter === 0) {
  //     counter = 0;
  //   } else {
  //     counter--;
  //     increse(counter);
  //   }
  //   console.log(counter);
  // }

  return (
    <>
      <span id="x"> {count} </span> <br />
      <button onClick={() => increse(count++)}>+</button>
      <button
        onClick={() => {
          increse(count === 0 ? (count = 0) : count - 1);
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
