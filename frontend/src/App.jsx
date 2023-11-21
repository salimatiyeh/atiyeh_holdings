import { useEffect, useState } from "react";

function App() {
  // const [testResponse, setTestResponse] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const reponse = await fetch("http://localhost:3000/api/test");
        const testResponse = await reponse.json();
        console.log(testResponse);
        // setTestResponse(await reponse.json());
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return <div>Hello World!!</div>;
}

export default App;
