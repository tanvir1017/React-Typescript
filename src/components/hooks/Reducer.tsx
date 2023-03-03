import { ChangeEvent, useReducer, useRef } from "react";

const initState = { count: 0, inputText: "" };

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  INPUT__TEXT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducerFunc = (
  state: typeof initState,
  action: ReducerAction
): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT: {
      return { ...state, count: state.count + 1 };
    }
    case REDUCER_ACTION_TYPE.DECREMENT: {
      return { ...state, count: state.count - 1 };
    }
    case REDUCER_ACTION_TYPE.INPUT__TEXT: {
      return { ...state, inputText: action.payload ?? "" };
    }
    default:
      throw new Error();
  }
};

const Reducer = () => {
  const inputRef = useRef("");
  const [state, dispatch] = useReducer(reducerFunc, initState);

  const handleSeeData = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.INPUT__TEXT,
      payload: inputRef?.current,
    });
  };
  return (
    <>
      <h2>Counted Value: {state.count}</h2>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT })}>
        Decrement
      </button>
    </>
  );
};

export default Reducer;
