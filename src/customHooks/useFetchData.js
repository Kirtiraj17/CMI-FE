import { useEffect, useState } from "react";

const TOKEN = "Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo";

const defaultOptions = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch(url, defaultOptions);
        const result = await response.json();

        // console.log(result, "data");

        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetchData;
