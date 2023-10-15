import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="">
        <ul className="flex gap-5 justify-center py-6 shadow-md bg-gray-300">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline animate-pulse text-green-700 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allbikes"
              className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "underline animate-pulse text-green-700 font-bold" : ""
            }
            >
              All Bike
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline animate-pulse text-green-700 font-bold" : ""
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline animate-pulse text-green-700 font-bold" : ""
              }
            >
              Contact us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signin"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline animate-pulse text-green-700 font-bold" : ""
              }
            >
              SignIn
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline animate-pulse text-green-700 font-bold" : ""
              }
            >
              SignUp
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline animate-pulse text-green-700 font-bold" : ""
              }
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
