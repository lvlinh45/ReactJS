import React, { useEffect, useState } from "react";

// Khi mounted thì useEffect sẽ chạy 1l đầu tiên
const Counter = () => {
  // stale(cũ) state:
  const [count, setCount] = useState(0);
  /*   const handleIncrement = () => {
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 1000);
  }; */

  const [info, setInfo] = useState({
    firstName: "Tran",
    lastName: "tuan",
  });

  // truyền vào đúng giá trị muốn thay đổi đối với object
  useEffect(() => {
    console.log("from input");
  }, [info.lastName]);
  /*   useEffect(() => {
    // setCount(count + 1);
    console.log(`count : ${count}`);
  }, [count]); */
  return (
    <div className="p-5 flex gap-x-4 items-center">
      <input
        type="text"
        name="firstName"
        value={info.firstName}
        onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
      />

      <span className="text-2lg font-bold">{count}</span>
      <button
        onClick={() => setCount(count + 1)}
        className="inline-block p-3 bg-green-400 text-white"
      >
        Increments
      </button>
    </div>
  );
};

export default Counter;
