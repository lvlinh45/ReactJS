import React, { useRef, useState } from "react";

const TextAreaAutoResize = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState("auto");
  const [textareaWrapperHeight, setTextareaWrapperHeight] = useState("auto");

  return (
    <div
      className="p-5"
      style={{
        height: textareaWrapperHeight,
      }}
    >
      <textarea
        className="w-full max-w-[400px] p-5 rounded-lg border border-gray-300 resize-none focus:border-blue-300"
        placeholder="Please enter yor content..."
        value={text}
        ref={textareaRef}
        style={{
          height: textareaHeight,
        }}
      ></textarea>
    </div>
  );
};

export default TextAreaAutoResize;
