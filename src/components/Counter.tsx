import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  const handleDecreament = () => {
    // alert("decreament");
    // count -= 1;
    setCount(count - 1);
  };
  const handleIncreament = () => {
    // alert("decreament");
    // count += 1;

    setCount(count + 1);
  };

  const handleResetCounter = () => {
    setCount(0);
  };

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <button onClick={handleDecreament}>Kurang</button>
      <p style={{ fontSize: "40px" }}>{count}</p>
      <button onClick={handleIncreament}>Tambah</button>
      <button onClick={handleResetCounter}>RESET</button>
    </div>
  );
};

export default Counter;
