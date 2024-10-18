import React from "react";
import WithLoading from "./withLoading";

const FetchingData = ({ data }) => {
  console.log("TCL: FetchingData -> data", data);
  return (
    <div>
      {/* {data.map((item) => (
        <div key={item}>{item}</div>
      ))} */}
    </div>
  );
};

export default WithLoading(
  FetchingData,
  "https://hn.algolia.com/api/v1/search?query=react"
);
