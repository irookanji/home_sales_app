import { useState, useEffect } from "react";

const useHouses = () => {
  const [allHouses, setAllhouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllhouses(houses);
    };
    fetchHouses();
  }, []);

  return allHouses;
};

export default useHouses;
