async function fetchHouses() {
  const response = await fetch(`http://localhost:3000/api/houses`);
  console.log(response);
  const housesResponse = await response.json();
  return housesResponse;
}

async function fetchHouse(id) {
  const response = await fetch(`http://localhost:3000/api/houses/${id}`);
  const houseResponse = await response.json();
  return houseResponse;
}

export { fetchHouses, fetchHouse };
