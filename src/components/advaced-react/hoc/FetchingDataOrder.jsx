import React from "react";
import WithLoading from "./withLoading";

const FetchingDataOrder = ({ data }) => {
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
  FetchingDataOrder,
  "https://hn.algolia.com/api/v1/search?query=css"
);
