import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function HouseDetails() {
  const { id: houseId } = useParams();
  const [house, setHouse] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/api/houses/${houseId}`
      );
      const houseResponse = await response.json();
      setHouse(houseResponse);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>TEST</h1>
      <h2>House Details</h2>
      <p>House ID: {houseId}</p>
      {house && (
        <div>
          <p>Test Response:</p>
          <pre>{JSON.stringify(house, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
