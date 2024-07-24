import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/toggle/Toggle";
import Counter from "./components/counter/Counter";
import Button from "./components/button/Button";
import Card from "./components/Card/Card";
import CardList from "./components/Card/CardList";
import { GlobalStyle } from "./GlobalStyle";
import Card2 from "./components/Card/Card2.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import PortfolioList from "./components/Portfolio/PortfolioList.jsx";

import { ThemeProvider } from "styled-components";
import CardTailwind from "./components/Card/CardTailwind.jsx";
import Photos from "./components/photo/Photos.jsx";
import Timer from "./components/Timer.jsx";
import Header from "./components/Header.jsx";
import HackerNews from "./components/news/HackerNews.jsx";
import HackerNewsWithReducer from "./components/news/HackerNewsWithReducer.jsx";
import StopWatch from "../StopWatch.jsx";
import Input from "./components/Input.jsx";

// import Game from "./components/tictactoe/Game";

// JSX: javascript XML => Là 1 định dạng cho viết HTML trong react, sẽ convert sang reactElement

// Khi sử dụng JSX trong react giúp ta viết code dễ dàng hơn

// Tại sao dùng JSX mà không dùng react element?
//ES6

// ES5 hỗ trợ trình duyệt cũ. Tới ES6 1 số thứ mới không còn được hỗ trợ như Arrow function,... thì làm sao trình duyệt cũ hiểu được => dùng BABEL

// Babel giúp compile code => giúp compile ra các version cũ hơn để các trình duyệt cũ hiểu được

/**
 * HTML trong react gọi là jsx
 * element = <div id ="root">Hello world</div>: JSX
 * element = React.createElement("div", {id: 'root'}, 'Hello Wolrd'): ReactElement
 *
 *
 * function createElement(elementType, props, ...children){
 * elementType: 'div', 'p', 'span'
 * props: className, id,src,alt
 * ...children:
 * }
 *
 * element2 = (<div>
 * <span>Hello</span> <span>World</span>
 * </div>)
 *
 * element2 = React.createElement('div', {
 *  children: [
 * React.createElement('span', null, 'Hello'),
 * ' ',
 * 'React.createElement('span', null, 'World')
 * ]
 * })
 * => Không viết theo kiểu này, kiểu này sẽ được babel build ra
 *
 */

// Dùng biến trong JSX dùng dấu curly braces {}

// Components cho phép chia nhỏ UI dưới dạng nhiều Thành phần khác nhau để có thể tái sử dụng

/* function Feature() {
  return (
    <div>
      <div className="feature">
        <img src="" alt="" className="feature-image" />
        <h3 className="feature-title">Title2</h3>
        <p className="feature-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          vitae tempora possimus aliquid expedita velit fuga magni suscipit
          facilis quidem?
        </p>
      </div>
    </div>
  );
} */

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
  /*   const countRef1 = useRef(0);
  const handler1 = () => {
    // truy xuất giá trị ref: current
    console.log(countRef.current);
    // update giá trị ref
    countRef.current = 10;
  };

  // const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handle = () => {
    const updateCount = countRef.current + 1;
    console.log(`Clicked ${updateCount} times`);
    countRef.current++;
  };
  console.log("Render"); */

  // Trong component return về JSX
  return (
    <div>
      {/* <StopWatch></StopWatch> */}
      <Input></Input>
      {/* <ThemeProvider theme={theme}> */}
      {/* <GlobalStyle></GlobalStyle> */}
      {/* <YoutubeList> */}
      {/* <h3>{name}</h3> */}
      {/* ở đây gọi là children: html, component,text, variable */}
      {/* </YoutubeList> */}
      {/*   <Toggle></Toggle>
      <Counter></Counter> */}
      {/* <Button>Primary</Button>
      <Button secondary>Secondary</Button> */}
      {/*    <CardList>
          <Card2 secondary={true}></Card2>
          <CardTailwind primary></CardTailwind>
        </CardList> */}
      {/* <PortfolioList>
        <Portfolio></Portfolio>
        <Portfolio></Portfolio>
        <Portfolio></Portfolio>
      </PortfolioList> */}
      {/* </ThemeProvider> */}
      {/* <Photos></Photos> */}
      {/* <Counter></Counter>
       */}
      {/* <Header></Header> */}
      {/* <HackerNewsWithReducer></HackerNewsWithReducer> */}
    </div>
  );
  // return (
  //   <div>
  //     <h1>Hello {name === "Lương Văn Linh" ? "lvlinh" : "lvl"}</h1>
  //     <h2>{fullName("Lương Văn", "Linh")}</h2>
  //   </div>
  // );
}

// props -> là viết tắt của property, là những thuộc tính bên trong components đó

// rendering list

export default App;
