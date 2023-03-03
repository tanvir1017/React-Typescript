import { ReactNode } from "react";
// TODO : defining type aliases
type SectionProps = {
  title?: string;
  children: ReactNode;
};

// EXPLAIN => So what's going on here actually❓We are telling the type of title is Must be string & it's a optional value type if title is not given by the props, then title will be "My default title". And the second one is -children- Which is will be ReactNode type(when you explicitly don't know about your react children type.In case you can use ReactNode).

// ! So ReactNode can be string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined

export default function Section({
  title = "My default title",
  children,
}: SectionProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  );
}
