import { useState, useEffect } from "react";

export const useFetch = url => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Just pass the variables that changes in each new fetch requisition
  const fetchData = async url => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return { data, isLoading, isError };
};
