import { NavLink, Outlet } from "react-router-dom";
import "./index.css";
function App() {
  return (
    <>
      <header>
        <nav>
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "red" : "inherit",
              };
            }}
            to="devgray"
          >
            DevGray
          </NavLink>
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "red" : "inherit",
              };
            }}
            to="anisul"
          >
            Anisul Islam
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
