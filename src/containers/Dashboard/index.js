import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Formularios from "../../components/formularios";
import LoadingSpinner from "../../components/LoadingSpinner";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import firebase from "firebase";

const useStyles = makeStyles({
  styledFormsContainer: {
    marginTop: "60px",
    height: "calc(100vh - 60px)",
  },
});

const firebaseConfig = {
  apiKey: "AIzaSyBBOORyU6QVYz2GTEpyp5uOSC8_vLJ-HVk",
  authDomain: "polidata-8fb75.firebaseapp.com",
  databaseURL: "https://polidata-8fb75.firebaseio.com",
  projectId: "polidata-8fb75",
  storageBucket: "polidata-8fb75.appspot.com",
  messagingSenderId: "140157736558",
  appId: "1:140157736558:web:1bb60b33ebccdc2ef5387f",
};

const Dashboard = ({ data, isLoading, isError, cedula }) => {
  const classes = useStyles();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  !firebase.apps.length && firebase.initializeApp(firebaseConfig).firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        if (!firebase.auth().currentUser)
          firebase
            .auth()
            .getRedirectResult()
            .then((result) => {
              if (!result.credential) {
                firebase.auth().signInWithRedirect(provider);
              }
            })
            .catch((error) => {
              console.log(error);
            });
      }
    });
  }, [provider]);

  if (isLoggedIn) {
    return (
      <>
        <Navbar data={data} isLoading={isLoading} isError={isError} />
        <Formularios dataPersona={data} cedula={cedula} />
      </>
    );
  }

  return (
    <Grid
      className={classes.styledFormsContainer}
      direction="column"
      justify="center"
      alignItems="center"
      container
      spacing={0}>
      <LoadingSpinner />
    </Grid>
  );
};

export default Dashboard;
