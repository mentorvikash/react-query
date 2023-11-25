import axios from "axios";
import React, { useEffect, useState } from "react";

function Superhero() {
  const [superHerosData, setSuperHerosData] = useState([]);
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    setIsLoding(true);
    axios
      .get("http://localhost:4000/superheroes")
      .then((res) => {
        setSuperHerosData(res?.data);
        console.log("superhero data", res);
      })
      .catch((err) => {
        console.error("err: ", err.message);
      })
      .finally(() => {
        setIsLoding(false);
      });
  }, []);

  if (isLoding) return <h2>Loading.......</h2>;

  return (
    <div>
      {superHerosData.length > 0 && (
        <div>
          {superHerosData.map((superhero) => (
            <>
              <h1>
                <strong>Name: </strong>
                {superhero.name}
              </h1>
              <h2>
                <strong>Power: </strong> {superhero?.powers?.join(",")}
              </h2>
              <h3>
                <strong>Age: </strong>
                {superhero.age}
              </h3>
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default Superhero;
