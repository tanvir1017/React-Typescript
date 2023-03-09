import React from "react";

type StatusProps = {
  status: "SUCCESSES" | "ERROR";
  BTNStyle: React.CSSProperties;
};
const DataFetch = ({ status, BTNStyle }: StatusProps) => {
  let content = null;
  if (status === "SUCCESSES") content = <h2>Data fetch successfully</h2>;
  else if (status === "ERROR") content = <h2>Failed to fetch</h2>;
  return (
    <>
      <h1>Data status</h1>
      {content}
      <button style={BTNStyle}>Done </button>
    </>
  );
};

export default DataFetch;
