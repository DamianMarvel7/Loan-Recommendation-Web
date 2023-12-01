import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { Button } from "@chakra-ui/react";

const Navigation = () => {
  const { logout } = useLogout();
  const location = useLocation();

  const handleNavIconClick = (selectedNav) => {
    setSelectedNav(selectedNav);
  };

  const handleClick = () => {
    logout();
  };

  // Check if the current location is either "login" or "signup"
  const isLoginOrSignup =
    location.pathname.includes("login") || location.pathname.includes("signup");

  if (isLoginOrSignup) {
    return null; // Return null to hide the navigation
  }

  return (
    <header className="flex">
      <nav>
        <ul className="primary-nav">
          <li>
            <NavLink to="/" exact="true" activeclassname="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/loanrec" activeclassname="active">
              Loan Form
            </NavLink>
          </li>
          <li>
            <NavLink to="/diet" activeclassname="active">
              Diet
            </NavLink>
          </li>
          <li>
            <NavLink to="/gym" activeclassname="active">
              Gym
            </NavLink>
          </li>
          <li>
            <Button colorScheme="blue" onClick={handleClick}>
              Logout
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
