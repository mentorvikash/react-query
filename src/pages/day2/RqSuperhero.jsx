import React, { Fragment } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

function RqSuperHero() {
  const { data, isLoading, isError, error } = useQuery(
    "fetch superheros data",
    fetchSuperHeros
  );

  if (isLoading) return <h2>Loading........</h2>;

  if (isError) return <h2 className="error">{error.message}</h2>;

  console.log("error: ", error);
  return (
    <div>
      <div>
        {data?.data?.length > 0 && (
          <div>
            {data.data.map((superhero, index) => (
              <Fragment key={index}>
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
              </Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default RqSuperHero;
