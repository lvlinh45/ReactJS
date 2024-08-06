import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import useHackerNewsAPI from "../../hooks/useHackerNewsAPI";
// thư viện để debounce
// import lodash, { values } from "lodash";
// https://hn.algolia.com/api/v1/search?query=react

const HackerNewsWithHook = () => {
  const [query, setQuery] = useState("");

  const { loading, errorMessage, setUrl, data } = useHackerNewsAPI(
    `https://hn.algolia.com/api/v1/search?query=''`,
    { hits: [] }
  );

  console.log(data);
  return (
    <div className="bg-white mx-auto my-5 p-5 rounded-lg shadow-md w-2/4">
      <div className="flex mb-5 gap-x-5">
        <input
          type="text"
          className="border border-gray-20 block w-full rounded-md p-5 focus:border-blue-400 transition-all"
          placeholder="Typing your keyword..."
          defaultValue={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={() =>
            setUrl(`https://hn.algolia.com/api/v1/search?query=${query}`)
          }
          className="bg-blue-500 text-white font-semibold p-5 rounded-md"
        >
          Fetching
        </button>
      </div>
      {loading && (
        <div className="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
      )}
      {!loading && errorMessage && (
        <p className="text-red-400 my-5">{errorMessage}</p>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          data.hits.length > 0 &&
          data.hits.map((item, index) => {
            if (!item.title || item.title.length <= 0) return null;
            return (
              <h3
                key={item.title}
                className="p-3 bg-gray-100 rounded-sm flex-shrink-0"
              >
                {item.title}
              </h3>
            );
          })}
      </div>
    </div>
  );
};

export default HackerNewsWithHook;
