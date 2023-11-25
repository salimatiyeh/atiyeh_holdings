import React, { useEffect, useState } from "react";
import HouseCard from "./HouseCard";

export default function HouseDetails() {
  const [houses, setHouses] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/api/houses`);
      const housesResponse = await response.json();
      setHouses(housesResponse);
    }
    fetchData();
  }, []);

  async function onDelete(houseId) {
    const response = await fetch(
      `http://localhost:3000/api/houses/${houseId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const houseResponse = await response.json();
    return houseResponse;
  }

  return (
    houses &&
    houses.map(
      (house, index) =>
        house && <HouseCard key={index} house={house} onDelete={onDelete} />
    )
  );
}
