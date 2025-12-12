import { useEffect, useState } from "react";

const useGetOne = (id) => {
  const [wohnung, setWohnung] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setNotFound(false);
    setWohnung(null);

    fetch(`http://localhost:3003/api/wohnungen/${id}`)
      .then(async (res) => {
        if (res.status === 404) {
          setNotFound(true);
          return null;
        }
        if (!res.ok) {
          throw new Error(`HTTP ${res.status} error: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data) setWohnung(data);
      })
      .catch((err) => console.error("Fetch error:", err))
      .finally(() => setLoading(false));
  }, [id]);

  return { wohnung, loading, notFound };
};

export default useGetOne;