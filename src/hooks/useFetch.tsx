import { useEffect, useState } from 'react';

const useFetch = (url: string, options: RequestInit) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(null);
        setLoading(true);

        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, options]);

  return {
    response,
    loading,
    error
  };
};

export default useFetch;
