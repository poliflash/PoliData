import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  styledAppBar: {
    backgroundColor: "#0070c0"
  },
  logo: {
    maxWidth: 60
  }
});

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.styledAppBar}>
      <Toolbar>
        <img src="logo.png" alt="logo" className={classes.logo} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
