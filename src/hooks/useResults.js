import { useState } from "react";

export const useResults = () => {
  const [results, setReults] = useState({});
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleResults = async (url) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      if (!response.ok) {
        throw new Error();
      }
      setReults(json);
      setIsError(false);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { handleResults, results, isError, isLoading };
};
