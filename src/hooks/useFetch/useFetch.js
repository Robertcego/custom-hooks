import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response not OK');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setIsError(false);
      })
      .catch((error) => {
        setIsPending(false);
        setIsError(error.message);
      });
  }, [url]);

  return {
    data,
    isPending,
    isError,
  };
};

export default useFetch;
