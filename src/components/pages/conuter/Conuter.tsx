import { ReactNode, useCallback, useMemo, useState } from "react";

// COMMENT : defining type aliases for props
type counterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
  children: ReactNode;
};

// COMMENT creating the function type
type fiboFunction = (n: number) => number;
type fiboNumber = number;

const largeFunction: fiboFunction = (n) => {
  if (n < 2) return n;
  return largeFunction(n - 1) + largeFunction(n - 2);
};

const Counter = ({ setCount, count, children }: counterProps) => {
  const [inputValue, showInputValue] = useState(0);

  const handleOnclick = useCallback(
    (typeOfAction: boolean) => {
      if (typeOfAction) setCount((prev) => prev + 1);
      else if (!typeOfAction) setCount((prev) => prev - 1);
    },
    [count]
  );

  // COMMENT check useCallback type by an input.
  // COMMENT when we passed like event to a function it can be like HTMLButtonElement (for button element) | also KeyboardElement available in here. For input element React.ChangeEvent<HTMLInputElement> are available
  const checkType = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      showInputValue(e.target.value);
    },
    []
  );

  const numberOfFibo: fiboNumber = 37;

  // COMMENT typescript in useMemo

  const result = useMemo<number>(
    () => largeFunction(inputValue),
    [largeFunction]
  );
  return (
    <>
      <h2>{children}</h2>
      <p>{inputValue}</p>
      <div>
        <h2>Fibonacchi value of 37 = {result}</h2>
      </div>
      <button onClick={() => handleOnclick(true)}>+</button>
      <button onClick={() => handleOnclick(false)}>-</button>
      <input
        type="text"
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => checkType(e)}
      ></input>
    </>
  );
};

export default Counter;
