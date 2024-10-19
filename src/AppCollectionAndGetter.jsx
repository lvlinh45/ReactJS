import { useState } from "react";
import Switch from "./components/switch/Swith";

// HOC = High order component pattern: chia sẻ logic từ 1 component mà không cần phải viết lại
// render props: gioongs formik
// props getter

function useToggle() {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  function getToggleProps({ onClick, ...rest } = {}) {
    return {
      onClick: () => {
        onClick && onClick();
        toggle();
      },
      ...rest,
    };
  }
  // toggleProps

  return {
    on,
    toggle,
    getToggleProps,
    /* toggleProps: {
      onClick: toggle,
    }, */
  };
}

// props collection
const App = () => {
  const { on, toggleProps, getToggleProps } = useToggle();
  return (
    <div>
      <Switch {...getToggleProps({ on })}></Switch>
      <hr />
      <button
        {...getToggleProps({
          onClick: () => {
            console.log("button clicked");
          },
        })}
        className="custom-button"
      >
        {on ? "on" : "off"}
      </button>
    </div>
  );
};

export default App;
