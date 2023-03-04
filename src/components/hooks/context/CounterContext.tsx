import {
  ChangeEvent,
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

type StateType = {
  count: number;
  inputText: string;
};

export const initState: StateType = { count: 0, inputText: "" };

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  INPUT__TEXT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducerFunc = (state: StateType, action: ReducerAction): StateType => {
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

const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducerFunc, initState);

  const increment = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT }),
    []
  );
  const decrement = useCallback(
    () => dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT }),
    []
  );

  const handleInputText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.INPUT__TEXT,
      payload: e.target.value,
    });
  }, []);

  return {
    state,
    increment,
    decrement,
    handleInputText,
  };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  handleInputText: (e: ChangeEvent<HTMLInputElement>) => {},
};

export const CounterContext =
  createContext<UseCounterContextType>(initContextState);

type childrenType = { children?: ReactElement };

export const CounterContextProvider = ({
  children,
  ...initState
}: childrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};

type UseCounterHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCounter = (): UseCounterHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return {
    count,
    increment,
    decrement,
  };
};

type UseInputTextHookType = {
  inputText: string;
  handleInputText: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useInputText = (): UseInputTextHookType => {
  const {
    state: { inputText },
    handleInputText,
  } = useContext(CounterContext);
  return { inputText, handleInputText };
};
