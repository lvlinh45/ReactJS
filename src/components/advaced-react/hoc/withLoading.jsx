import React, { useEffect, useState } from "react";

/* eslint-disable react/display-name */
function WithLoading(Component, url) {
  return (props) => {
    const [news, setNews] = useState();
    React.useEffect(() => {
      async function fetchData() {
        const response = await fetch(url);
        const data = await response.json();
        console.log("TCL: fetchData -> data", data);

        setNews(data.hits);
      }
      fetchData();
    }, []);
    if (!news || news.length == 0) return <div> Loading</div>;

    return <Component data={news} {...props}></Component>;
  };
}
export default WithLoading;

// Hight order function: map, filter,some, every, reuduce: 1 function trả về 1 function khác
