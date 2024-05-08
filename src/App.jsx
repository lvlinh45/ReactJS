import React from "react";

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
function App() {
  const name = "Lương Văn Linh";
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  return (
    <div className="feature">
      <img src="" alt="" className="feature-image" />
      <h3 className="feature-title">Title</h3>
      <p className="feature-description">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi vitae
        tempora possimus aliquid expedita velit fuga magni suscipit facilis
        quidem?
      </p>
    </div>
  );
  // return (
  //   <div>
  //     <h1>Hello {name === "Lương Văn Linh" ? "lvlinh" : "lvl"}</h1>
  //     <h2>{fullName("Lương Văn", "Linh")}</h2>
  //   </div>
  // );
}

export default App;
