import { ReactElement, ReactNode } from "react";

interface ListItems<CT> {
  items: CT[];
  render: (item: CT) => ReactNode;
}

// EXPLAIN => Two type of possibility to apply in GENERICS one is by using coma second one is extends and then if you know what type is you can explicitly tell typescript or can have a empty object
// const Generics = <CT,>({ items, render }: ListItems<CT>) => {
const Generics = <CT extends {}>({
  items,
  render,
}: ListItems<CT>): ReactElement => {
  return (
    <>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{render(item)}</li>
        ))}
      </ul>
    </>
  );
};

export default Generics;
