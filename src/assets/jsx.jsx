import React from "react";

const jsx = () => {
  const element = <div id="root">Hello world</div>;
  const elementR = React.createElement("div", { id: "root" }, "Hello Wolrd");
  const element2 = (
    <div>
      <span>Hello</span> <span>World</span>
    </div>
  );
  // eslint-disable-next-line react/no-children-prop
  const element2R = React.createElement("div", {
    children: [
      React.createElement("span", null, "Hello"),
      " ",
      React.createElement("span", null, "World"),
    ],
  });

  // Lưu ý đầu tiên khi viết JSX là phải có phần tử cha bọc hết tất cả lại, nếu không sẽ có lỗi.

  return (
    <div className="">
      <div className="heading" id="heading">
        This is heading
      </div>
      <div className="heading2"></div>
    </div>
  );
};

export default jsx;
