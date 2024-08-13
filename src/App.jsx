import React, { useState } from "react";
import "./App.css";

// import Input from "./components/Input.jsx";
import Blog from "../Blog.jsx";
import HackerNews from "./components/news/HackerNews.jsx";
import HackerNewsWithHook from "./components/news/HackerNewsWithHook.jsx";
import Dropdown from "../Dropdown .jsx";
import Form from "./components/form/Form.jsx";
import MovieSearchApp from "./components/MovieSearchApp.jsx";
import SignUpForm from "./components/form/SignUpForm.jsx";

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
  const [show, setShow] = useState(false);
  return (
    <div>
      <SignUpForm></SignUpForm>
    </div>
  );
}

// props -> là viết tắt của property, là những thuộc tính bên trong components đó

// rendering list

export default App;
