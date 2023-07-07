import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";

import { Button } from "@chakra-ui/react";
export const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <div className={classes.logo_container}>
        <Link to="/">BUYC Corp</Link>
      </div>
      <div className={classes.link_container}>
        <Link to="/">Carfolio</Link>
        <Link to="/carlisting">CarListing</Link>
      </div>
      <div className={classes.auth_link_container}>
        <Link to="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link to="/signup">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};
