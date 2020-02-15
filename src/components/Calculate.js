import React from "react";

const Calculate = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <div className="text-white">
      <p className="text-3xl">
        The result is: <span className="font-bold">{result.PRICE}</span>
      </p>
      <p className="text-lg">
        Highest price of the day:{" "}
        <span className="font-bold">{result.HIGHDAY}</span>
      </p>
      <p className="text-lg">
        Lowest price of the day :{" "}
        <span className="font-bold">{result.LOWDAY}</span>
      </p>
      <p className="text-lg">
        Variation last 24 hours :{" "}
        <span className="font-bold">{result.CHANGEPCT24HOUR}</span>
      </p>
      <p className="text-lg">
        Last update: <span className="font-bold">{result.LASTUPDATE}</span>
      </p>
    </div>
  );
};

export default Calculate;
