import { ReactElement } from "react";

// TODO : Defining types by type aliases for components
type HeadingProps = { title: string };

// ? : After this line we tell the props type by type aliases also we can explicitly tell the functional components return type what it will be returning from him.
// @ => We are telling the react components will only return ReactElement->(It's import from "react📖").
const Heading = ({ title }: HeadingProps): ReactElement => {
  return (
    <div>
      <h1>{title}</h1>
      <p>This is heading components</p>
    </div>
  );
};
export default Heading;
