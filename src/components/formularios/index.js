import React, { useCallback, useEffect, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import LoadingSpinner from "../LoadingSpinner";
import { useFetch } from "../hooks/useFetch";
import { setJson } from "./actions";
import { initialState, reducer } from "./reducer";
import Formulario from "./Formulario";

const useStyles = makeStyles({
  styledFormsContainer: {
    marginTop: "60px",
    height: "calc(100vh - 60px)",
  },
  styledFormContainer: {
    textAlign: "center",
  },
});

const Formularios = ({ data, authMail }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  const url = `https://farodesarrollo2010.azurewebsites.net/api/GetFormulariosByIdentificacion?code=3qBpF26X8yObh7BXNTdeYaxNQWnWcY7vrifuFHXKfZoOFR9yaaZTwA==&cedula=${data.identificacion}`;

  const { data: dataFetch, isLoading, isError } = useFetch(url);

  useEffect(() => {
    !isLoading && dataFetch && dispatch(setJson(dataFetch));
  }, [dataFetch, isLoading]);

  const generateForm = useCallback(
    (index, formulario) => {
      return formulario.preguntas?.preguntas?.length ? (
        <Grid
          key={formulario.id}
          className={classes.styledFormContainer}
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}>
          <Formulario
            authMail={authMail}
            index={index}
            state={state}
            isError={isError}
            id={formulario.id}
            idformulario={formulario.idformulario}
            dispatch={dispatch}
            data={formulario.preguntas}
            dataPersona={dataFetch}
            message={formulario.preguntas.mensaje}
            title={formulario.idformulario}
          />
        </Grid>
      ) : null;
    },
    [authMail, classes, dataFetch, isError, state]
  );

  return (
    <Grid
      className={classes.styledFormsContainer}
      direction="row"
      justify="center"
      alignItems="center"
      container
      spacing={0}>
      {dataFetch && !isLoading ? (
        dataFetch.length ? (
          dataFetch.map((formulario, index) => generateForm(index, formulario))
        ) : (
          <Alert variant="outlined" severity="success">
            No tienes formularios para completar!
          </Alert>
        )
      ) : (
        <LoadingSpinner />
      )}
    </Grid>
  );
};
export default Formularios;
