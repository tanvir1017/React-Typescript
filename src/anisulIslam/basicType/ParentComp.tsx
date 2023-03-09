import { userInfoData, users } from "../util/randomDB";
import ArrayObject from "./ArrayObject";
import BasicType from "./BasicType";

const ParentComp = () => {
  return (
    <>
      <h2>
        This is a parent compo. Where we are passing props to the child by obey
        the rule of type of data
      </h2>

      <BasicType userInfo={userInfoData}></BasicType>
      <ArrayObject users={users} />
    </>
  );
};

export default ParentComp;
