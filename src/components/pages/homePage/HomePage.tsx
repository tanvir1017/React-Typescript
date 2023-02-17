import { useState } from "react";
import "../../../index.css";
import Counter from "../conuter/Conuter";
import Generics from "../generics/Generics";
import Heading from "../heading/Heading";
import Section from "../section/Section";
export default function HomePage() {
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Heading title="It's Heading title by type aliases" />
      <Section title="Explicit title">
        <article>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quidem
            deserunt, commodi eaque porro natus molestias consequuntur nihil,
            provident beatae perspiciatis, eveniet impedit architecto alias
            repellat aut placeat a dolorum! Iusto quaerat dolor sunt tempore,
            praesentium cum laborum, officiis doloribus asperiores in a voluptas
            eos porro optio saepe error amet.
          </p>
        </article>
      </Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <Generics
        items={["🍵 Tea", "🧑‍💻 Code", "💤 Sleep"]}
        render={(item: string) => <span className="bold">{item}</span>}
      />
    </>
  );
}
