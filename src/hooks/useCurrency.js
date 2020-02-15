import React, { useState } from "react";

const useCurrency = (label, initialState, currencies) => {
  // State for custom hook
  const [state, setState] = useState(initialState);

  const SelectCurrency = () => (
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
        {currencies.map(currency => (
          <option key={currency.code} value={currency.code}>
            {currency.name}
          </option>
        ))}
      </select>
    </div>
  );

  // Return the state, interface and function that modifies the state
  return [state, SelectCurrency, setState];
};

export default useCurrency;
