import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "./components/Navbar";
import Dashboard from "./containers/Dashboard";
import { useFetch } from "./components/hooks/useFetch";
import { useAuth } from "./components/hooks/useAuth";
import LoadingSpinner from "./components/LoadingSpinner";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles({
  styledFormsContainer: {
    marginTop: "60px",
    height: "calc(100vh - 60px)",
  },
});

const App = () => {
  const classes = useStyles();

  const { data: authData, isLoggedIn } = useAuth();

  const url =
    isLoggedIn && authData.email
      ? `https://openfaroapi.azurewebsites.net/api/personagetv2?idorganizacion=0&identificacion=${authData.email}`
      : "";
      
  const { data, isLoading, isError } = useFetch(url);

  return (
    <>
      <CssBaseline />
      <Navbar data={data} isLoading={isLoading} isError={isError} />
      {isLoggedIn && data?.flag === "1" ? (
        <Dashboard data={data} authMail={authData.email} />
      ) : (
        <Grid
          className={classes.styledFormsContainer}
          direction="column"
          justify="center"
          alignItems="center"
          container
          spacing={0}>
          {data && !isLoading && Object.keys(data).length > 2 ? (
            <Alert variant="outlined" severity="warning">
              Disculpe, este correo no existe en Faro
            </Alert>
          ) : (
            <LoadingSpinner />
          )}
        </Grid>
      )}
    </>
  );
};

export default App;
