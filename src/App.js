import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Calculate from "./components/Calculate";

function App() {
  const [currency, setCurrency] = useState("");
  const [cryptocurrency, setCryptocurrency] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    const calculateCryptocurrencie = () => {
      // Check if it is the first execution
      if (currency === "") return;

      // Get the quote from the api
      fetch(
        `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`
      )
        .then(resp => resp.json())
        .then(resp => setResult(resp.DISPLAY[cryptocurrency][currency]));
    };

    calculateCryptocurrencie();
  }, [currency, cryptocurrency]);

  return (
    <div className="flex flex-wrap gap-8 overflow-hidden p-8">
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-auto my-20"
          src="/cryptocurrencies.png"
          alt="Cryptocurrencies"
        />
      </div>
      <div className="w-full sm:w-1/2 p-3">
        <header className="text-white font-bold text-5xl mt-20 mb-12">
          Quote cryptocurrencies instantly
        </header>

        <Form setCurrency={setCurrency} setCryptocurrency={setCryptocurrency} />

        <Calculate result={result} />
      </div>
    </div>
  );
}

export default App;
