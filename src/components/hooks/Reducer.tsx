import { useCounter, useInputText } from "./context/CounterContext";
const Reducer = () => {
  const { count, increment, decrement } = useCounter();
  const { inputText, handleInputText } = useInputText();
  return (
    <>
      <h2>Counted Value: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>you are typing: {inputText}</p>
      <input type="text" onChange={handleInputText} />
    </>
  );
};

export default Reducer;
