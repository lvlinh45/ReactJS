import React, { useState } from "react";
import "./ToggleStyle.css";
// - Stateless fuctional Component: Là function component nhưng không sử dụng state

/* // Ví dụ Stateless
function Toggle() {
  return <div className="toggle"></div>;
}
// Ví dụ Statefull
// - Statefull fuctional Component:Là function component co sử dụng state
function Toggle2() {
  // const [count, setCount] = useState();
  return <div className="toggle"></div>;
}
 */

function Toggle() {
  // 1. Enabling state: useState(initialize value) => initialize value có thể truyền boolean, number, string, undefined, null, {title: "FE DEv"}
  // 2. initialize state: Giá trị khởi tạo => useState (false)
  // 3. reading state
  // 4. updating state
  const array = useState(false);
  //   console.log(array); // [false, ƒunction] => function để updateState

  /*   console.log(array[0]);
  console.log(array[1]);
  const [a, b] = [1, 2]; */

  const [on, setOn] = useState(false);
  // const [title, setTitle]
  // const [isActive, setIsActive]
  //   console.log(on);

  const handleToggle = () => {
    // Khi thay đổi state mà state phụ thuộc vào giá trị trước đó thì sẽ truyền vào 1 cái callback
    // setOn(callback) -> setOn(prevState => !prevState)

    setOn((on) => {
      console.log(on);
      return !on;
    });
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`} onClick={handleToggle}>
        <div className={`spinner ${on ? "active" : ""}`}></div>
      </div>

      {/* <div className="toggle-control">
        <div
          className="toggle-on"
          onClick={() => {
            setOn(true);
          }}
        >
          On
        </div>
        <div
          className="toggle-off"
          onClick={() => {
            setOn(false);
          }}
        >
          Off
        </div>
      </div> */}
    </div>
  );
}

export default Toggle;
