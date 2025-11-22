import { useEffect, useState } from "react";

const useGetOne = (id) => {
  const [wohnung, setWohnung] = useState(null);

  useEffect(() => {

    fetch(`/api/wohnungen/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched one flat:", data);
        setWohnung(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, [id]);

  return { wohnung };
};

export default useGetOne;