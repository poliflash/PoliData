import { useState, useEffect } from "react";

export const useFetchPost = (url, message) => {
  const [dataPost, setDataPost] = useState();
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [isErrorPost, setIsErrorPost] = useState(false);
  const postData = async (url, message) => {
    setIsErrorPost(false);
    setIsLoadingPost(true);
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
      setDataPost(data);
      setIsErrorPost(false);
      setIsLoadingPost(false);
    } catch (error) {
      setIsErrorPost(true);
      setIsLoadingPost(false);
    }
  };

  useEffect(() => {
    postData(url, message);
    setIsErrorPost(false);
    setIsLoadingPost(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { dataPost, isLoadingPost, isErrorPost };
};
