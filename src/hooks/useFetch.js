import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async (url) => {
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

    getData(url);
  }, [url]);

  return { data, isError, isLoading };
};
