import { useState, useMemo } from "react";

function NewCount() {
  const [count, setCount] = useState(5);
  const [data, setData] = useState(1);

  function incrementCount() {
    setCount((prev) => prev + 5);
  }

  function incrementData() {
    setData((prev) => prev + 1);
  }

  const result1 = useMemo(() => {
    console.log("result function called");
    return count * 10000;
  }, [count]);

  return (
    <>
      <button type="button" onClick={incrementData}>
        Increment Data
      </button>
      <button type="button" onClick={incrementCount}>
        Increment Count
      </button>

      <h1>Count : {count}</h1>
      <h1>Data is : {data}</h1>
      <h1>Calculated result is : {result1}</h1>
    </>
  );
}

export default NewCount;