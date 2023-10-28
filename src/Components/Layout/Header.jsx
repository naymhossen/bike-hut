import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthBox/Authprovider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <nav className="">
        <ul className="flex gap-5 items-center justify-center py-6 shadow-md bg-gray-300">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline animate-pulse text-green-700 font-bold"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "underline animate-pulse text-green-700 font-bold"
                  : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <div>
            {user ? (
              <div className="flex items-center gap-4">
              <li>
                <NavLink to="/bookings">My Bookings</NavLink>
              </li>
                <li
                className="btn"
                  onClick={handleLogout}
                >
                  Sign Out
                </li>
              </div>
            ) : (
              <li className=" font-bold">
                <NavLink
                  to="/signin"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "font-bold btn text-green-500" : ""
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
