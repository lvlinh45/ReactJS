// RSC
import React from "react";

const YoutubeItem = (props) => {
  return (
    <div className={`youtube-item ${props.className}`}>
      {/* STYLE INLINE: 2 dấu ngoặc nhọn, dấu đầu tiên yêu <!--  -->ầu trong JSX, dấu thứ 2 là object để sử dụng style inline */}
      <div
        className="youtube-image"
        // style={{
        //   height: "250px",
        // }}
      >
        <img
          src={props.image}
          // style={{
          //   display: "block",
          //   maxWidth: "100%",
          //   width: "100%",
          //   height: "100%",
          //   objectFit: "cover",
          // }}
          alt=""
        />
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
};

export default YoutubeItem;
