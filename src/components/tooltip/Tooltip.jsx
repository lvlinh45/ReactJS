import ReactDOM from "react-dom";
import useHover from "../../hooks/useHover";
import { useState } from "react";
const Tooltip = ({ children, text }) => {
  const { hovered, nodeRef } = useHover();
  const [coords, setCoord] = useState({});
  const handleHover = (e) => {
    setCoord(e.target.getBoundingClientRect());
  };

  return (
    <div>
      {hovered && <TooltipContent coords={coords}>{children}</TooltipContent>}
      <span
        className="font-semibold cursor-pointer"
        ref={nodeRef}
        onMouseOver={handleHover}
      >
        {text}
      </span>
    </div>
  );
};

function TooltipContent({ children, coords }) {
  console.log("TCL: TooltipContent -> coords", coords);
  return ReactDOM.createPortal(
    <p
      className="absolute inline-block p-3 text-white -translate-y-full bg-black rounded-xl max-w-[200px] -translate-x-2/4"
      style={{
        top: coords.top - coords.height / 2,
        left: coords.left + coords.width / 2 + window.scrollY,
      }}
    >
      {children}
    </p>,
    document.querySelector("body")
  );
}

export default Tooltip;
