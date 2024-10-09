import { useState } from "react";
import Modal from "./components/modal/Modal";
import ModalBase from "./components/modal/ModalBase";
import Portal from "./components/Portal";
function App() {
  const [openModalBase, setOpenModalBase] = useState(false);
  return (
    // <div>
    //   <Modal open={true} handleClose={() => {}}></Modal>
    // </div>
    <div className="p-5">
      <button
        className="p-5 text-center text-white bg-blue-400 rounded-lg"
        onClick={() => {
          setOpenModalBase(true);
        }}
      >
        Open modal base
      </button>
      <ModalBase
        visible={openModalBase}
        onClose={() => {
          setOpenModalBase(false);
        }}
      >
        <div className="w-full p-10 bg-white rounded-lg max-w-[320px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
          voluptatem sint ipsum error cumque animi deserunt aperiam praesentium,
          ducimus assumenda, et illo distinctio quos soluta beatae dolores quod
          voluptatum architecto?
        </div>
      </ModalBase>
    </div>
  );
}

export default App;
