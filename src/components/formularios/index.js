import React, { useEffect, useState, useReducer } from "react";
import JsonForm from "./JsonForm";
import LoadingSpinner from "../LoadingSpinner";
import { useFetchPost } from "../hooks/useFetchPost";
import {
  setJson,
  setAnswer,
  // setComment,
  submitForm
  // setIsOpenDialog
} from "./actions";
import { initialState, reducer } from "./reducer";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControl from "@material-ui/core/FormControl";
import { makeStyles } from "@material-ui/core/styles";
// import isEmpty from "lodash/isEmpty";

const useStyles = makeStyles({
  styledFormsContainer: {
    marginTop: "60px",
    height: "calc(100vh - 60px)"
  },
  styledFormContainer: {
    textAlign: "center"
  }
});

const Formulario = ({ id, data, title, message, state, isError, dispatch }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const setFormAnswer = val => {
    dispatch(setAnswer(id, val));
  };

  // const setCommentAnswer = e => {
  //   dispatch(setComment(id, e.target.value));
  // };

  const onSubmit = () => {
    dispatch(submitForm(id));
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {title}
      </Button>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{message.encabezado}</DialogTitle>
        <DialogContent dividers>
          <FormControl fullWidth component="fieldset">
            <JsonForm
              error={isError}
              data={data && data}
              formError={state.error[id] && state.error[id]}
              setFormAnswer={setFormAnswer}
              // setCommentAnswer={setCommentAnswer}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={onSubmit} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const Formularios = ({ cedula }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const url =
    "https://f2020.azurewebsites.net/api/FaroFormulariosPersona?code=nbjfp6Cn8Mx3/WPr3DCwMXV8EZbfw2CB8UIMOTyfW8TYtlBSsbXGqw==";

  const {
    dataPost: data,
    isLoadingPost: isLoading,
    isErrorPost: isError
  } = useFetchPost(url, {
    id: {
      cedula: cedula
    }
  });

  useEffect(() => {
    !isLoading && data && dispatch(setJson(data));
  }, [data, isLoading]);

  return (
    <Grid
      className={classes.styledFormsContainer}
      direction="row"
      justify="center"
      alignItems="center"
      container
      spacing={0}>
      {data && !isLoading ? (
        data.map(formulario => (
          <Grid
            className={classes.styledFormContainer}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}>
            <Formulario
              key={formulario.id}
              state={state}
              isError={isError}
              id={formulario.id}
              dispatch={dispatch}
              data={formulario.preguntas}
              message={formulario.mensaje}
              title={formulario.idformulario}
            />
          </Grid>
        ))
      ) : (
        <LoadingSpinner />
      )}
    </Grid>
  );
};
export default Formularios;
