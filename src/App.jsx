import React from "react";
import "./App.css";

// import Input from "./components/Input.jsx";
import SignUpFormHook from "./components/form/SignUpFormHook.jsx";

//  function App() => là functional components, components chữ cái đầu lúc nào cũng in hoa
// App là parent componet, Feature là children component

// useReducer
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch

// Ref
// const inputRef, abcRef = useRef = React,useRef(initialValue);

function App() {
  return (
    <div>
      <SignUpFormHook></SignUpFormHook>
    </div>
  );
}

// props -> là viết tắt của property, là những thuộc tính bên trong components đó

// rendering list

export default App;
