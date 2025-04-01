import { useEffect, useState } from "react";

export const useApiRequest = (apiFunction, ...args) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(null);

  useEffect(() => {
    setError(null);
    setLoading(true);
    apiFunction(...args)
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError({ status: 404, msg: "Failed to load book" });
      })
      .finally(() => {
        setLoading(false);
      });
  }, [...args]);
  return { data, isLoading, isError };
};
