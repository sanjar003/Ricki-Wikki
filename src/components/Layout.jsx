import { NavLink, Outlet } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active-link" : "");
const Layout = () => {
  return (
    <div className="CONTAINER_CHILDREN">
      <div>
        <header className="HeaderClass">
          <div>

            <NavLink to="/posts" className={setActive}>
              POSTS
            </NavLink>
          </div>
          <div>
            <NavLink to="/coments" className={setActive}>
              COMENTS
            </NavLink>
          </div>
          <NavLink to="/about" className={setActive}>
            USERS
          </NavLink>
        </header>
      </div>

      <div>
        <main className="container">
          <Outlet />
        </main>
      </div>
    </div>
    // <footer className="container">2023</footer>
  );
};
export { Layout };
