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

// Components cho phép chia nhỏ UI dưới dạng nhiều Thành phần khác nhau để có thể tái sử dụng

function Feature() {
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
}

//  function App() => là functional components, components chữ cái đầu lúc nào cũng in hoa
// App là parent componet, Feature là children component
function App() {
  const name = "Lương Văn Linh";
  function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  // Trong component return về JSX
  return (
    <div>
      {/* <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature> */}
      <YoutubeItem
        image="https://images.unsplash.com/photo-1714891203404-b25f32706e0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Hello Wolrd C#"
        author="Lương Văn Linh"
        avatar="https://images.unsplash.com/photo-1714997219940-6d9cd56c3609?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></YoutubeItem>

      {/* Nếu không truyền vào props thì nó sẽ không hiển thị */}
      <YoutubeItem
        image="https://plus.unsplash.com/premium_photo-1714675739730-65a1203d6bda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Hello Wolrd JS"
        author="lvlinh"
        avatar="https://images.unsplash.com/photo-1714995348556-c5a6bb6e7102?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ></YoutubeItem>
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

function YoutubeItem(props) {
  console.log(props);
  return (
    <div className="youtube-item">
      <div className="youtube-image">
        <img src={props.image} alt="" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="youtube-avatar" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "This is example of titles"}
          </h3>
          <h4 className="youtube-author">
            {props.author || "This is example of author name"}
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
