import { useState, useEffect } from "react";

export const useFetchPost = (url, message) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const postData = async (url, message) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
      };

      const response = await fetch(url, config);
      const data = await response.json();
      setData(data);
      setIsError(false);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    postData(url, message);
    setIsError(false);
    setIsLoading(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { data, isLoading, isError };
};
