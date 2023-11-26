import React, { Fragment, useEffect } from "react";
import { useQuery } from "react-query";

const fetchSuperHeros = async () => {
  const res = await fetch("http://localhost:4000/superheroes");
  return res.json();
};

function RqSuperHero() {
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery(
    "fetch superheros data",
    fetchSuperHeros,
    {
      // staleTime: 30000,
      // cacheTime: 100000,
      // refetchOnMount: true, // when mount refresh data, default ture
      // refetchOnWindowFocus: true, // when re-focus window it fetch fresh data from server
      // Polling -  for e-commerce site where data, changes every second, refetch data every 1 or 2 second by
      // refetchInterval: 2000, // false | time in seconds
      // refetchIntervalInBackground: true, // ture | false - allow fetch fetch fresh data even is user not on page
    }
  );

  // Allow user to refetch data on user intration
  const reftechDataOnUserIntration = () => {
    refetch();
  };

  if (isLoading || isFetching) return <h2>Loading........</h2>;

  if (isError) return <h2 className="error">{error.message}</h2>;

  console.log({ data });
  console.log({ isLoading, isFetching });
  return (
    <div>
      <div>
        <button
          className="blackButton"
          type="button"
          aria-label="button to refetch data"
          onClick={reftechDataOnUserIntration}
        >
          Refetch Data
        </button>
        {data?.length > 0 && (
          <div>
            {data.map((superhero, index) => (
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
