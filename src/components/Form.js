import React, { useState, useEffect } from "react";
import Error from "./Error";
import useCurrency from "../hooks/useCurrency";
import useCryptocurrency from "../hooks/useCryptocurrency";

const Form = ({ setCurrency, setCryptocurrency }) => {
  const [cryptoList, setCryptoList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
    )
      .then(resp => resp.json())
      .then(resp => setCryptoList(resp.Data));
  }, []);

  const CURRENCIES = [
    { code: "USD", name: "United States dollar" },
    { code: "MXN", name: "Mexican peso" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "British pound" }
  ];

  const [currency, SelectCurrency] = useCurrency(
    "Select a currency",
    "",
    CURRENCIES
  );

  const [cryptocurrency, SelectCryptourrency] = useCryptocurrency(
    "Select a cryptocurrency",
    "",
    cryptoList
  );

  const calculate = e => {
    e.preventDefault();

    // Check if both fields are full
    if (currency === "" || cryptocurrency === "") {
      setError(true);
      return;
    }

    // Send data to the main component
    setError(false);
    setCurrency(currency);
    setCryptocurrency(cryptocurrency);
  };

  return (
    <form onSubmit={calculate}>
      {error && <Error message="All fields are required" />}

      <SelectCurrency />

      <SelectCryptourrency />

      <button
        className="my-5 font-bold text-xl p-2 border-none w-full rounded-lg text-white cursor-pointer transition duration-300 ease bg-indigo-500 hover:bg-indigo-400"
        type="submit"
      >
        Calculate
      </button>
    </form>
  );
};

export default Form;
