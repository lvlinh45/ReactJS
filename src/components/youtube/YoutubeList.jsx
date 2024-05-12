import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  console.log(props);
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 1) newClass = "abc";
        {
          /* const newClass = index === 1 ? "abc" : ""; */
        }
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            author={item.author}
            // Nếu item.avatar kh có thì nó sẽ lấy item.image
            avatar={item.avatar || item.image}
            className={newClass}
          ></YoutubeItem>
        );
      })}

      {/* <Feature></Feature>
  <Feature></Feature>
  <Feature></Feature> */}
      {/* <YoutubeItem
    image="https://images.unsplash.com/photo-1714891203404-b25f32706e0a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Hello Wolrd C#"
    author="Lương Văn Linh"
    avatar="https://images.unsplash.com/photo-1714997219940-6d9cd56c3609?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ></YoutubeItem> */}

      {/* Nếu không truyền vào props thì nó sẽ không hiển thị */}
      {/* <YoutubeItem
    image="https://plus.unsplash.com/premium_photo-1714675739730-65a1203d6bda?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Hello Wolrd JS"
    author="lvlinh"
    avatar="https://images.unsplash.com/photo-1714995348556-c5a6bb6e7102?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ></YoutubeItem>
  <YoutubeItem
    image="https://images.unsplash.com/photo-1715077856124-4405d115911d?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="SASS"
    author="Trần Nhật Quỳnh Nhi"
    avatar="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ></YoutubeItem>
  <YoutubeItem
    image="https://plus.unsplash.com/premium_photo-1714675222115-0a2c88f618a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Tailwind"
    author="CSS"
    avatar="https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF2YXRhciUyMGFuaW1lfGVufDB8fDB8fHww"
  ></YoutubeItem>
  <YoutubeItem
    image="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="LESS"
    author="Mark ZuckerBeg"
    avatar="https://images.unsplash.com/photo-1602416222941-a72a356dab04?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ></YoutubeItem> */}
    </div>
  );
};

export default YoutubeList;
