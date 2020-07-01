import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../../assets/logo.png";

const useStyles = makeStyles({
  styledAppBar: {
    backgroundColor: "#0070c0",
  },
  styledLogo: {
    maxWidth: 64,
  },
  styledSpanName: {
    marginLeft: "10px",
    fontSize: ".9rem",
    fontWeight: "bold",
  },
  styledRol: {
    marginLeft: "15px",
  },
  styledCod: {
    marginLeft: "5px",
  },
});

const Navbar = ({ data, isLoading, isError }) => {
  const classes = useStyles();

  return (
    <AppBar className={classes.styledAppBar}>
      <Toolbar>
        <img src={logo} alt="logo" className={classes.styledLogo} />
        {!isError && !isLoading && data && (
          <>
            <span className={classes.styledSpanName}>
              {data.apellido1
                ? `${data.nombre1} ${data.apellido1}`
                : data.nombre1}
            </span>
            {data?.roles?.length ? (
              <>
                <span className={classes.styledRol}>
                  {data.roles[0].descripcion}
                </span>
                <span className={classes.styledCod}>{data.roles[0].codcne}</span>
              </>
            ) : null}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
