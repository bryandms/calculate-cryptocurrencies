import React, { useState } from "react";

const useCryptocurrency = (label, initialState, cryptocurrencies) => {
  // State for custom hook
  const [state, setState] = useState(initialState);

  const SelectCryptocurrency = () => (
    <div>
      <label className="text-white uppercase font-bold text-4xl mt-8 block">
        {label}
      </label>
      <select
        className="w-full block p-4 appearance-none rounded-lg border-none text-lg"
        onChange={e => setState(e.target.value)}
        value={state}
      >
        <option value="">-- {label} --</option>
        {cryptocurrencies.map(cryptocurrency => (
          <option
            key={cryptocurrency.CoinInfo.Id}
            value={cryptocurrency.CoinInfo.Name}
          >
            {cryptocurrency.CoinInfo.FullName}
          </option>
        ))}
      </select>
    </div>
  );

  // Return the state, interface and function that modifies the state
  return [state, SelectCryptocurrency, setState];
};

export default useCryptocurrency;
