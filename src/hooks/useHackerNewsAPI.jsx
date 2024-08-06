import axios from "axios";
import { useRef } from "react";
import { useEffect, useState } from "react";

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(initialUrl);

  const isMounted = useRef(true);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      // unmounted component
      isMounted.current = false;
    };
  }, []);

  handleFetchData.current = async () => {
    setLoading(true);

    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setData(response.data || []);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error happend ${error}`);
    }
    // Nếu response.data có thì lấy response.data.hits

    // console.log(response.data?.hits);
  };
  /*   const handleUpdateQuery = lodash.debounce((e) => {
          setQuery(e.target.value);
        }, 500); */
  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    setUrl,
    loading,
    errorMessage,
    data,
  };
}
