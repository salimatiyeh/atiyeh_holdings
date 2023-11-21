import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function HouseDetails() {
  const { id: houseId } = useParams();
  const [houses, setHouses] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:3000/api/houses`);
      const housesResponse = await response.json();
      setHouses(housesResponse);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>House Details</h2>
      <p>House ID: {houseId}</p>
      {houses && (
        <div>
          <p>Test Response:</p>
          {houses.map((house, index) => (
            <pre key={index}>{JSON.stringify(house, null, 2)}</pre>
          ))}
        </div>
      )}
    </div>
  );
}
