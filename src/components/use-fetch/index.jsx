//use fetch hook - useful for data fetching and state handling (helps fetching data from an APIurl and handles loading success)

import { useEffect } from "react";
import { useState } from "react";

//
export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(url, { ...options });
      if (!response.ok) throw new Error(response.statusText);
      const result = await response.json();
      setData(result);
      setLoading(false);
    } catch (e) {
      setError("${e}. Some error occured");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading, error };
}
