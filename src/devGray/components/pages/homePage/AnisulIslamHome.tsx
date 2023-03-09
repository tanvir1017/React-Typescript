import { Link } from "react-router-dom";
import ParentComp from "../../../../anisulIslam/basicType/ParentComp";
const AnisulIslamHome = () => {
  return (
    <>
      <ParentComp />
      <Link to="/fetch">Data Fetch</Link>
    </>
  );
};

export default AnisulIslamHome;
