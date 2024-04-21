// // import React from "react";
// import { useState } from "react";

// function Counter() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div className="flex">
//       {/* <button
//         className="btnPlus"
//         onClick={() => setCounter((prev) => prev + 1)}
//       >
//         +
//       </button>
//       <span>{counter}</span>
//       <button
//         className="btnMinus"
//         onClick={() => setCounter((prev) => prev - 1)}
//       >
//         -
//       </button> */}
//     </div>
//   );
// }

// export default Counter;

// // RFCE = Return Function Component Export //


import React from 'react'

function square() {
  return (
    <div></div>
  )
}

export default square