import { useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (!response.ok) {
        throw new Error();
      }
      setData(json);
      setIsError(false);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, data, isError, isLoading };
};
