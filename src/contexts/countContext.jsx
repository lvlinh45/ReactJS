import { createContext, useContext, useState } from "react";

const CountContext = createContext();

// context phải nằm trong provider mới chạy được
function CountProvider(props) {
  const [count, setCount] = useState(0);
  const value = [count, setCount];
  return (
    <CountContext.Provider value={value} {...props}></CountContext.Provider>
  );
}

function useCount() {
  const context = useContext(CountContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used with CountProvider");

  return context;
}
export { CountProvider, useCount };
