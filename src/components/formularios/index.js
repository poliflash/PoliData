import React, { useEffect, useReducer } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";

import LoadingSpinner from "../LoadingSpinner";
import { useFetchPost } from "../hooks/useFetchPost";
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

const Formularios = ({ data }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const url =
    "https://f2020.azurewebsites.net/api/FaroFormulariosPersona?code=nbjfp6Cn8Mx3/WPr3DCwMXV8EZbfw2CB8UIMOTyfW8TYtlBSsbXGqw==";

  const {
    data: dataPost,
    isLoading: isLoadingPost,
    isError: isErrorPost,
  } = useFetchPost(url, {
    id: {
      cedula: data.identificacion,
    },
  });

  useEffect(() => {
    !isLoadingPost && dataPost && dispatch(setJson(dataPost));
  }, [dataPost, isLoadingPost]);

  return (
    <Grid
      className={classes.styledFormsContainer}
      direction="row"
      justify="center"
      alignItems="center"
      container
      spacing={0}>
      {dataPost && !isLoadingPost ? (
        dataPost.length ? (
          dataPost.map((formulario, index) => (
            <Grid
              key={formulario.id}
              className={classes.styledFormContainer}
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}>
              <Formulario
                index={index}
                state={state}
                isError={isErrorPost}
                id={formulario.id}
                idformulario={formulario.idformulario}
                dispatch={dispatch}
                data={formulario.preguntas}
                dataPersona={dataPost}
                message={formulario.mensaje}
                title={formulario.idformulario}
              />
            </Grid>
          ))
        ) : (
          <Alert variant="outlined" severity="success">
            No tiene formularios para completar!
          </Alert>
        )
      ) : (
        <LoadingSpinner />
      )}
    </Grid>
  );
};
export default Formularios;
