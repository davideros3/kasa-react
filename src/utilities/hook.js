import { useEffect, useState } from "react";

const Hook = () => {
  const [wohnungen, setWohnungen] = useState([]);

  useEffect(() => {
    fetch("/api/wohnungen")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched list of flats:", data);
        setWohnungen(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  
  return { wohnungen };
};

export default Hook;