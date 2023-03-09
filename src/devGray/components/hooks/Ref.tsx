import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

type fiboFunction = (n: number) => number;

const fibonacchi: fiboFunction = (n) => {
  return n < 2 ? n : fibonacchi(n - 1) + fibonacchi(n - 2);
};
const myFiboNumber: number = 37;

// COMMENT => main function
const Ref = () => {
  const [counter, setCounter] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const fiboMemoized: number = useMemo<number>(
    () => fibonacchi(myFiboNumber),
    [fibonacchi]
  );

  const handleOnChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef?.current?.value;
    console.log([inputValue]);
  };

  useEffect(() => {
    console.log("mounting....");

    return () => console.log("unMounting the counter ref component");
  }, []);
  return (
    <>
      <Link to="/">
        <button>Back to home</button>
      </Link>
      <div>
        <h2>Counter with useRef & typescript. Counter is {counter}</h2>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          Increment
        </button>
        <button
          onClick={() => {
            counter === 0
              ? alert("Counter reset")
              : setCounter((prev) => prev - 1);
          }}
        >
          Decrement
        </button>
        <p>fibonacchi value of {fiboMemoized}</p>
        <form onSubmit={(e) => handleOnChange(e)}>
          <input type="text" ref={inputRef} />{" "}
          <button type="submit">click to see</button>
        </form>
        <p>You typed: {inputRef?.current?.value}</p>
      </div>
    </>
  );
};

export default Ref;
