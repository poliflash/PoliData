import React, { useEffect, useState, useReducer } from "react";
import JsonForm from "./JsonForm";
import LoadingSpinner from "../LoadingSpinner";
import { useFetchPost } from "../hooks/useFetchPost";
import {
  setJson,
  setAnswer
  // setComment,
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

const useStyles = makeStyles({
  styledFormsContainer: {
    marginTop: "60px",
    height: "calc(100vh - 60px)"
  },
  styledFormContainer: {
    textAlign: "center"
  }
});

const Formulario = ({
  id,
  index,
  data,
  title,
  message,
  state,
  isError,
  dispatch
}) => {
  const [open, setOpen] = useState(false);
  const [formError, setFormError] = useState([]);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [isErrorPost, setIsErrorPost] = useState(false);

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

  const validateForm = () => {
    let errors = [];
    data.forEach(pregunta => {
      if (Number(pregunta.idrespuesta) === 0) {
        errors.push(pregunta.idpregunta);
        setFormError([...errors]);
      }
    });

    if (!errors.length) {
      setFormError([]);
      submitForm();
    }
  };

  const submitForm = async () => {
    const postUrl =
      "https://f2020.azurewebsites.net/api/FaroFormularioPersonaPost?code=rkmGB0kHPzpU/Nxb7L8NT1PAw6jmOxslIH2eXiyjh9vmFIjFRFblAw==";

    setIsErrorPost(false);
    setIsLoadingPost(true);
    try {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(state.formularios[index])
      };

      await fetch(postUrl, config);
      setIsErrorPost(false);
      setIsLoadingPost(false);
      setOpen(false);
    } catch (error) {
      setIsErrorPost(true);
      setIsLoadingPost(false);
    }
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
              formError={formError}
              setFormAnswer={setFormAnswer}
              // setCommentAnswer={setCommentAnswer}
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={validateForm} color="primary">
            {isLoadingPost ? "Enviando..." : "Enviar"}
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
        data.map((formulario, index) => (
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
