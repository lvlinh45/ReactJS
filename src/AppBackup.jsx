import React, { Fragment, useState } from "react";
import "./App.css";

// import Input from "./components/Input.jsx";
import SignUpFormHook from "./components/form/SignUpFormHook.jsx";
import Modal from "./components/modal/Modal.jsx";
import DropdownPortal from "../DropdownPortal.jsx";
import Tooltip from "./components/tooltip/Tooltip.jsx";

import { ErrorBoundary } from "react-error-boundary";
import GameWithReducer from "./components/tictactoe/GameWithReducer.jsx";

function Fallback({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert" className="p-5 bg-red-100">
      <p className="text-red-600">Không thể lấy data do component đang lỗi:</p>
    </div>
  );
}

//  function App() => là functional components, components chữ cái đầu lúc nào cũng in hoa
// App là parent componet, Feature là children component

// useReducer
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch

// Ref
// const inputRef, abcRef = useRef = React,useRef(initialValue);

function AppBackup() {
  const [showModal, setShowModal] = useState(false);
  return (
    /*  <Fragment>
      <div>
        <Modal open={showModal} handleClose={() => setShowModal(false)}></Modal>
      </div>
      <button
        className="p-4 text-white bg-blue-500 rounded-md"
        onClick={() => {
          setShowModal(true);
        }}
      >
        Show modal
      </button>
      <div className="relative z-30">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint unde
        laboriosam pariatur nesciunt, quis, tenetur deserunt repellat quas
        optio, asperiores nulla commodi rem accusantium repudiandae! Quisquam
        architecto cum officia minima.
      </div>
      <div className="p-5 overflow-hidden">
        <DropdownPortal></DropdownPortal>
      </div>
    </Fragment> */

    /* <div className="p-16 mt-16 ml-16">
      <Tooltip text="Hover me">This is a tooltip content</Tooltip>
    </div> */

    <>
      <ErrorBoundary FallbackComponent={Fallback}>
        <GameWithReducer></GameWithReducer>
      </ErrorBoundary>
      <SignUpFormHook></SignUpFormHook>
    </>
  );
}

// props -> là viết tắt của property, là những thuộc tính bên trong components đó

// rendering list

export default AppBackup;
