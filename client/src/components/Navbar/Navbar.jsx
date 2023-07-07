import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className={classes.navContainer}>
      <div className={classes.logo_container}>
        <Link onClick={() => setActiveNav("#")} to="/">
          BUYC Corp
        </Link>
      </div>
      <div className={classes.link_container}>
        <Link
          onClick={() => setActiveNav("/useranalytics")}
          className={activeNav === "/useranalytics" ? classes.link : null}
          to="/"
        >
          All Tasks
        </Link>
        <Link
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? classes.link : null}
          to="/createtask"
        >
          Create Tasks
        </Link>
      </div>
      <div className={classes.auth_link_container}>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
        <Link to="/signup">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};
